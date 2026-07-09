import React, { useRef, useEffect, useState } from "react";
import "./HeroAnimation.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroAnimation = () => {
  const canvasRef = useRef(null);
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const frameIndexRef = useRef(0);
  const imagesRef = useRef([]);
  const isLoadedRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Load images - UPDATED PATH to foodie1
    const frameModules = import.meta.glob("../../assets/frames/foodie1/*.jpg", {
      eager: true,
      import: "default",
    });

    const framePaths = Object.keys(frameModules).sort((a, b) => {
      const numA = parseInt(a.match(/\d+/)?.[0] || "0");
      const numB = parseInt(b.match(/\d+/)?.[0] || "0");
      return numA - numB;
    });

    const totalFrames = framePaths.length;
    
    const images = framePaths.map((path) => {
      const img = new Image();
      img.src = frameModules[path];
      return img;
    });

    imagesRef.current = images;

    // Draw function with cover effect
    function drawFrame(index) {
      const img = images[index];
      if (!img || !img.complete) {
        return;
      }
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Calculate aspect ratios for cover effect
      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;
      const canvasAspect = canvasWidth / canvasHeight;
      const imgAspect = img.naturalWidth / img.naturalHeight;

      let drawWidth, drawHeight, offsetX, offsetY;

      if (imgAspect > canvasAspect) {
        drawHeight = canvasHeight;
        drawWidth = canvasHeight * imgAspect;
        offsetX = (canvasWidth - drawWidth) / 2;
        offsetY = 0;
      } else {
        drawWidth = canvasWidth;
        drawHeight = canvasWidth / imgAspect;
        offsetX = 0;
        offsetY = (canvasHeight - drawHeight) / 2;
      }

      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      frameIndexRef.current = index;
    }

    // Load all images
    let loadedCount = 0;
    const loadPromises = images.map((img) => {
      return new Promise((resolve) => {
        if (img.complete && img.naturalWidth !== 0) {
          loadedCount++;
          setProgress((loadedCount / totalFrames) * 100);
          resolve(img);
          return;
        }
        
        img.onload = () => {
          loadedCount++;
          setProgress((loadedCount / totalFrames) * 100);
          resolve(img);
        };
        
        img.onerror = () => {
          loadedCount++;
          setProgress((loadedCount / totalFrames) * 100);
          resolve(img);
        };
      });
    });

    // When all loaded, setup animation
    Promise.all(loadPromises).then(() => {
      setProgress(100);
      isLoadedRef.current = true;

      // Draw first frame
      drawFrame(0);

      // Setup GSAP
      const state = { frame: 0 };
      
      gsap.to(state, {
        frame: totalFrames - 1,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          invalidateOnRefresh: true,
        },
        onUpdate: () => {
          const frame = Math.round(state.frame);
          if (frame !== frameIndexRef.current) {
            drawFrame(frame);
          }
        }
      });
    });

    // Resize handler
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      if (isLoadedRef.current) {
        drawFrame(frameIndexRef.current);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      ScrollTrigger.getAll().forEach(t => {
        if (t.animation) t.animation.kill();
        t.kill();
      });
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section ref={sectionRef} className="hero-animation" style={{ height: '200vh' }}>
      {progress < 100 && (
        <div style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'rgba(0,0,0,0.5)',
          zIndex: 10,
          color: 'white'
        }}>
          <div>
            <div style={{ 
              width: 300, 
              height: 6, 
              background: 'rgba(255,255,255,0.2)',
              borderRadius: 3,
              overflow: 'hidden'
            }}>
              <div style={{ 
                width: `${progress}%`, 
                height: '100%', 
                background: 'orange',
                transition: 'width 0.3s'
              }}></div>
            </div>
            <p style={{ marginTop: 16 }}>Loading {Math.round(progress)}%</p>
          </div>
        </div>
      )}
      <canvas ref={canvasRef} style={{ display: 'block', width: '100vw', height: '100vh' }}></canvas>
    </section>
  );
};

export default HeroAnimation;