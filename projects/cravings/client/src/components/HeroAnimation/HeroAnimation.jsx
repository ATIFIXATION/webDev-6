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

    // ============================================================
    // SET CANVAS SIZE WITH DEVICE PIXEL RATIO FOR SHARPNESS
    // ============================================================
    const setCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1;
      
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      
      ctx.scale(dpr, dpr);
    };
    
    setCanvasSize();

    // ============================================================
    // LOAD IMAGES
    // ============================================================
    const frameModules = import.meta.glob("../../assets/frames/foodie3/*.jpg", {
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

    // ============================================================
    // DRAW FUNCTION - FULL SCREEN IMAGE (NO BLACK BARS)
    // ============================================================
    function drawFrame(index) {
      const img = images[index];
      if (!img || !img.complete) {
        return;
      }
      
      // Clear canvas
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      
      // Get display dimensions
      const displayWidth = window.innerWidth;
      const displayHeight = window.innerHeight;
      
      // Get image original dimensions
      const imgWidth = img.naturalWidth;
      const imgHeight = img.naturalHeight;
      
      // Calculate to FILL screen completely (no black bars) - "cover" mode
      const imgAspect = imgWidth / imgHeight;
      const screenAspect = displayWidth / displayHeight;
      
      let drawWidth, drawHeight, offsetX, offsetY;
      
      // Fill entire screen - crop excess (like object-fit: cover)
      if (imgAspect > screenAspect) {
        // Image is wider - match height, crop sides
        drawHeight = displayHeight;
        drawWidth = displayHeight * imgAspect;
        offsetX = (displayWidth - drawWidth) / 2;
        offsetY = 0;
      } else {
        // Image is taller - match width, crop top/bottom
        drawWidth = displayWidth;
        drawHeight = displayWidth / imgAspect;
        offsetX = 0;
        offsetY = (displayHeight - drawHeight) / 2;
      }
      
      // Draw image filling the entire screen
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);

      // ============================================================
      // TEXT OVERLAY - CENTERED HERO CONTENT ONLY
      // ============================================================
      
      // Calculate scroll progress (0 to 1)
      const scrollProgress = totalFrames > 1 ? index / (totalFrames - 1) : 0;
      
      // Text always visible with subtle animation
      const baseOpacity = 0.95;
      const subtlePulse = 1 + Math.sin(scrollProgress * Math.PI * 2) * 0.02;
      const floatOffset = Math.sin(scrollProgress * Math.PI * 1.5) * 10;

      ctx.save();

      // ---- DARK OVERLAY FOR READABILITY ----
      const overlayGradient = ctx.createRadialGradient(
        displayWidth / 2, displayHeight / 2, 0,
        displayWidth / 2, displayHeight / 2, displayWidth * 0.7
      );
      overlayGradient.addColorStop(0, 'rgba(0, 0, 0, 0.15)');
      overlayGradient.addColorStop(0.5, 'rgba(0, 0, 0, 0.3)');
      overlayGradient.addColorStop(1, 'rgba(0, 0, 0, 0.5)');
      ctx.fillStyle = overlayGradient;
      ctx.fillRect(0, 0, displayWidth, displayHeight);

      // ---- MAIN HEADLINE (Center) ----
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      
      // Big shadow for depth
      ctx.shadowColor = 'rgba(0, 0, 0, 0.6)';
      ctx.shadowBlur = 40;
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 15;

      // First line: "Your Favorite Food,"
      const fontSize1 = Math.min(displayWidth * 0.07, 72);
      ctx.font = `900 ${fontSize1 * subtlePulse}px "Arial Black", "Helvetica", sans-serif`;
      
      const textGradient1 = ctx.createLinearGradient(
        displayWidth * 0.2, 0,
        displayWidth * 0.8, 0
      );
      textGradient1.addColorStop(0, `rgba(255, 255, 255, ${baseOpacity})`);
      textGradient1.addColorStop(0.3, `rgba(255, 220, 180, ${baseOpacity})`);
      textGradient1.addColorStop(0.7, `rgba(255, 220, 180, ${baseOpacity})`);
      textGradient1.addColorStop(1, `rgba(255, 255, 255, ${baseOpacity})`);
      ctx.fillStyle = textGradient1;
      
      const y1 = displayHeight / 2 - fontSize1 * 0.5 + floatOffset * 0.3;
      ctx.fillText("Your Favorite Food,", displayWidth / 2, y1);

      // Second line: "Delivered Fast" with orange emphasis
      ctx.shadowBlur = 35;
      ctx.shadowOffsetY = 12;
      
      const fontSize2 = Math.min(displayWidth * 0.055, 56);
      ctx.font = `800 ${fontSize2 * subtlePulse}px "Helvetica", "Arial", sans-serif`;
      
      // Orange gradient for emphasis
      const textGradient2 = ctx.createLinearGradient(
        displayWidth * 0.3, 0,
        displayWidth * 0.7, 0
      );
      textGradient2.addColorStop(0, '#FF8C2F');
      textGradient2.addColorStop(0.3, '#FFB347');
      textGradient2.addColorStop(0.7, '#FFB347');
      textGradient2.addColorStop(1, '#FF8C2F');
      ctx.fillStyle = textGradient2;
      
      const y2 = displayHeight / 2 + fontSize1 * 0.35 + floatOffset * 0.2;
      ctx.fillText("Delivered Fast", displayWidth / 2, y2);

      // ---- SUBTITLE ----
      ctx.shadowBlur = 20;
      ctx.shadowOffsetY = 8;
      
      const subtitleSize = Math.min(displayWidth * 0.025, 24);
      ctx.font = `400 ${subtitleSize}px "Helvetica", "Arial", sans-serif`;
      ctx.fillStyle = `rgba(255, 255, 255, ${baseOpacity * 0.8})`;
      
      const y3 = displayHeight / 2 + fontSize1 * 0.55 + fontSize2 * 0.3 + 15 + floatOffset * 0.15;
      ctx.fillText("Order from thousands of restaurants", displayWidth / 2, y3);

      // ---- DECORATIVE LINES ----
      ctx.shadowBlur = 15;
      ctx.shadowOffsetY = 0;
      
      const lineOpacity = baseOpacity * 0.4;
      ctx.strokeStyle = `rgba(255, 140, 47, ${lineOpacity})`;
      ctx.lineWidth = 2;
      
      const lineY = displayHeight / 2 + fontSize1 * 0.05;
      const lineWidth = Math.min(displayWidth * 0.12, 120);
      
      // Left line with glow
      ctx.shadowColor = 'rgba(255, 140, 47, 0.3)';
      ctx.beginPath();
      ctx.moveTo(displayWidth / 2 - lineWidth - 30, lineY);
      ctx.lineTo(displayWidth / 2 - 30, lineY);
      ctx.stroke();
      
      // Right line
      ctx.beginPath();
      ctx.moveTo(displayWidth / 2 + 30, lineY);
      ctx.lineTo(displayWidth / 2 + lineWidth + 30, lineY);
      ctx.stroke();
      
      // Center dot
      ctx.shadowBlur = 20;
      ctx.fillStyle = `rgba(255, 140, 47, ${lineOpacity * 1.5})`;
      ctx.beginPath();
      ctx.arc(displayWidth / 2, lineY, 4, 0, Math.PI * 2);
      ctx.fill();

      // ---- CTA BUTTONS ----
      ctx.shadowBlur = 25;
      ctx.shadowOffsetY = 12;
      
      const buttonY = displayHeight / 2 + fontSize1 * 0.7 + fontSize2 * 0.4 + 60 + floatOffset * 0.1;
      const buttonWidth = Math.min(displayWidth * 0.16, 160);
      const buttonHeight = Math.min(displayWidth * 0.055, 50);
      const buttonGap = Math.min(displayWidth * 0.03, 20);
      
      // "Sign Up" Button (Primary)
      const signUpX = displayWidth / 2 - buttonWidth - buttonGap / 2;
      
      ctx.shadowColor = 'rgba(255, 140, 47, 0.4)';
      const btnGradient1 = ctx.createLinearGradient(
        signUpX, buttonY,
        signUpX, buttonY + buttonHeight
      );
      btnGradient1.addColorStop(0, '#FF8C2F');
      btnGradient1.addColorStop(1, '#E67A22');
      ctx.fillStyle = btnGradient1;
      
      // Rounded rect
      const radius = 12;
      ctx.beginPath();
      ctx.moveTo(signUpX + radius, buttonY);
      ctx.lineTo(signUpX + buttonWidth - radius, buttonY);
      ctx.quadraticCurveTo(signUpX + buttonWidth, buttonY, signUpX + buttonWidth, buttonY + radius);
      ctx.lineTo(signUpX + buttonWidth, buttonY + buttonHeight - radius);
      ctx.quadraticCurveTo(signUpX + buttonWidth, buttonY + buttonHeight, signUpX + buttonWidth - radius, buttonY + buttonHeight);
      ctx.lineTo(signUpX + radius, buttonY + buttonHeight);
      ctx.quadraticCurveTo(signUpX, buttonY + buttonHeight, signUpX, buttonY + buttonHeight - radius);
      ctx.lineTo(signUpX, buttonY + radius);
      ctx.quadraticCurveTo(signUpX, buttonY, signUpX + radius, buttonY);
      ctx.closePath();
      ctx.fill();
      
      // Sign Up text
      ctx.shadowBlur = 15;
      ctx.shadowOffsetY = 5;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = `rgba(255, 255, 255, ${baseOpacity})`;
      const btnFontSize = Math.min(displayWidth * 0.022, 20);
      ctx.font = `700 ${btnFontSize}px "Helvetica", "Arial", sans-serif`;
      ctx.fillText("Sign Up", signUpX + buttonWidth / 2, buttonY + buttonHeight / 2);

      // "Order Now" Button (Secondary)
      const orderX = displayWidth / 2 + buttonGap / 2;
      
      ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
      ctx.shadowBlur = 20;
      ctx.shadowOffsetY = 10;
      
      // White button with subtle border
      ctx.fillStyle = `rgba(255, 255, 255, ${baseOpacity * 0.95})`;
      
      ctx.beginPath();
      ctx.moveTo(orderX + radius, buttonY);
      ctx.lineTo(orderX + buttonWidth - radius, buttonY);
      ctx.quadraticCurveTo(orderX + buttonWidth, buttonY, orderX + buttonWidth, buttonY + radius);
      ctx.lineTo(orderX + buttonWidth, buttonY + buttonHeight - radius);
      ctx.quadraticCurveTo(orderX + buttonWidth, buttonY + buttonHeight, orderX + buttonWidth - radius, buttonY + buttonHeight);
      ctx.lineTo(orderX + radius, buttonY + buttonHeight);
      ctx.quadraticCurveTo(orderX, buttonY + buttonHeight, orderX, buttonY + buttonHeight - radius);
      ctx.lineTo(orderX, buttonY + radius);
      ctx.quadraticCurveTo(orderX, buttonY, orderX + radius, buttonY);
      ctx.closePath();
      ctx.fill();
      
      // Order Now text
      ctx.shadowBlur = 10;
      ctx.shadowOffsetY = 3;
      ctx.fillStyle = '#333';
      ctx.font = `700 ${btnFontSize}px "Helvetica", "Arial", sans-serif`;
      ctx.fillText("Order Now", orderX + buttonWidth / 2, buttonY + buttonHeight / 2);

      // ---- BOTTOM SCROLL INDICATOR ----
      ctx.shadowBlur = 5;
      ctx.shadowOffsetY = 2;
      
      const taglineSize = Math.min(displayWidth * 0.015, 14);
      ctx.font = `300 ${taglineSize}px "Helvetica", "Arial", sans-serif`;
      ctx.fillStyle = `rgba(255, 255, 255, ${baseOpacity * 0.5})`;
      
      const y4 = displayHeight - 50;
      ctx.textAlign = "center";
      ctx.textBaseline = "bottom";
      ctx.fillText("Scroll to explore", displayWidth / 2, y4);
      
      // Animated arrow
      const arrowY = y4 + 20 + Math.sin(scrollProgress * Math.PI * 3) * 8;
      ctx.font = `${taglineSize * 1.5}px "Arial", sans-serif`;
      ctx.fillStyle = `rgba(255, 140, 47, ${baseOpacity * 0.6})`;
      ctx.fillText("↓", displayWidth / 2, arrowY);

      ctx.restore();
      
      frameIndexRef.current = index;
    }

    // ============================================================
    // LOAD ALL IMAGES
    // ============================================================
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

    // ============================================================
    // START ANIMATION
    // ============================================================
    Promise.all(loadPromises).then(() => {
      setProgress(100);
      isLoadedRef.current = true;

      drawFrame(0);

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

    // ============================================================
    // RESIZE HANDLER
    // ============================================================
    const handleResize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
      
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
    <section ref={sectionRef} className="hero-animation" style={{ height: '200vh', position: 'relative' }}>
      {progress < 100 && (
        <div style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'rgba(0,0,0,0.7)',
          zIndex: 10,
          color: 'white',
          flexDirection: 'column'
        }}>
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
              background: 'linear-gradient(90deg, #FF8C2F, #FFB347)',
              transition: 'width 0.3s'
            }}></div>
          </div>
          <p style={{ marginTop: 16, fontSize: 14, opacity: 0.7 }}>Loading {Math.round(progress)}%</p>
        </div>
      )}
      <canvas ref={canvasRef} style={{ display: 'block', width: '100vw', height: '100vh' }}></canvas>
    </section>
  );
};

export default HeroAnimation;