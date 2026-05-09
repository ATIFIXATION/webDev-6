
// ============================================================================
// 1. EVENT DELEGATION - Listen to parent, act on children
// ============================================================================
const parent = document.getElementById('parent');
const log1 = document.getElementById('log1');

parent.addEventListener('click', (event) => {
  // event.target = the actual clicked element
  if (event.target.classList.contains('box')) {
    log1.innerHTML += `<p>✓ Clicked: ${event.target.textContent} (Color: ${event.target.classList[1]})</p>`;
  }
});

console.log("✓ EVENT DELEGATION: Single listener handles multiple elements");

// ============================================================================
// 2. BUBBLING vs CAPTURING
// ============================================================================
const parentBtn = document.getElementById('parentBtn');
const childBtn = document.getElementById('childBtn');
const log2 = document.getElementById('log2');

// BUBBLING PHASE (default: useCapture = false)
// Events go: child → parent → document
parentBtn.addEventListener('click', (e) => {
  log2.innerHTML += `<p style="color: blue;">Parent clicked (BUBBLING)</p>`;
}, false);

childBtn.addEventListener('click', (e) => {
  log2.innerHTML += `<p style="color: green;">Child clicked (BUBBLING)</p>`;
  // e.stopPropagation(); // Uncomment to stop event from reaching parent
}, false);

// CAPTURING PHASE (useCapture = true)
// Events go: document → parent → child (opposite order!)
// Uncomment to test capturing:
/*
parentBtn.addEventListener('click', (e) => {
  log2.innerHTML += `<p style="color: purple;">Parent clicked (CAPTURING)</p>`;
}, true);

childBtn.addEventListener('click', (e) => {
  log2.innerHTML += `<p style="color: orange;">Child clicked (CAPTURING)</p>`;
}, true);
*/

console.log("✓ EVENT BUBBLING/CAPTURING: Understand event flow through DOM");

// ============================================================================
// 3. EVENT OBJECT PROPERTIES
// ============================================================================
const textInput = document.getElementById('textInput');
const log3 = document.getElementById('log3');

textInput.addEventListener('input', (event) => {
  const info = `
    <strong>Event Properties:</strong><br>
    • event.type: ${event.type}<br>
    • event.target.value: ${event.target.value}<br>
    • event.timeStamp: ${event.timeStamp}ms<br>
    • event.isTrusted: ${event.isTrusted} (User action?)<br>
    • event.bubbles: ${event.bubbles}<br>
  `;
  log3.innerHTML = info;
});

console.log("✓ EVENT OBJECT: Contains rich info about what happened");

// ============================================================================
// 4. COMBINING MULTIPLE EVENTS (Ctrl + Click)
// ============================================================================
const multiEventBtn = document.getElementById('multiEventBtn');
const log4 = document.getElementById('log4');

multiEventBtn.addEventListener('click', (event) => {
  // Check if Ctrl key is pressed during click
  if (event.ctrlKey) {
    log4.innerHTML = `<p style="color: green; font-weight: bold;">✓ Ctrl + Click detected!</p>`;
  } else {
    log4.innerHTML = `<p style="color: red;">Try holding Ctrl while clicking</p>`;
  }
});

multiEventBtn.addEventListener('mouseenter', () => {
  multiEventBtn.style.backgroundColor = '#ffffcc';
});

multiEventBtn.addEventListener('mouseleave', () => {
  multiEventBtn.style.backgroundColor = '';
});

console.log("✓ COMBINED EVENTS: Check event properties for conditionals");

// ============================================================================
// 5. CUSTOM EVENTS - Create and dispatch your own!
// ============================================================================
const triggerBtn = document.getElementById('triggerBtn');
const customBox = document.getElementById('customEventBox');
const log5 = document.getElementById('log5');

// Create a custom event
const myCustomEvent = new CustomEvent('boxActivated', {
  detail: { message: 'Box was activated!', timestamp: new Date() },
  bubbles: true, // Should it bubble up?
  cancelable: true // Can it be cancelled?
});

// Listen for the custom event
customBox.addEventListener('boxActivated', (event) => {
  log5.innerHTML = `
    <p style="color: purple;"><strong>Custom Event Triggered!</strong></p>
    <p>Message: ${event.detail.message}</p>
    <p>Time: ${event.detail.timestamp}</p>
  `;
  customBox.style.backgroundColor = '#ff00ff';
  customBox.style.transform = 'scale(1.2)';
  setTimeout(() => {
    customBox.style.backgroundColor = 'yellow';
    customBox.style.transform = 'scale(1)';
  }, 500);
});

triggerBtn.addEventListener('click', () => {
  // Dispatch the custom event
  customBox.dispatchEvent(myCustomEvent);
});

console.log("✓ CUSTOM EVENTS: Create application-specific events");

// ============================================================================
// 6. THROTTLING - Limit how often a function runs
// ============================================================================
const scrollBox = document.getElementById('scrollBox');
const log6 = document.getElementById('log6');
let scrollCount = 0;
let throttleCount = 0;

// Simple throttle function
function throttle(func, delay) {
  let lastCall = 0;
  return function(...args) {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      func(...args);
    }
  };
}

// Without throttling (fires on EVERY scroll event - too many!)
scrollBox.addEventListener('scroll', () => {
  scrollCount++;
});

// With throttling (fires max once per 500ms)
const throttledScroll = throttle(() => {
  throttleCount++;
  log6.innerHTML = `
    <p>Total scroll events: <strong>${scrollCount}</strong></p>
    <p>Throttled calls (every 500ms): <strong>${throttleCount}</strong></p>
    <p>Reduction: ${Math.round(((scrollCount - throttleCount) / scrollCount) * 100)}%</p>
  `;
}, 500);

scrollBox.addEventListener('scroll', throttledScroll);

console.log("✓ THROTTLING: Improve performance by limiting event calls");

// ============================================================================
// 7. EVENT DELEGATION WITH EVENT FILTERING
// ============================================================================
console.log("\n=== ADVANCED TECHNIQUES LOADED ===");
console.log("Try the demos above to see:");
console.log("1. How event delegation reduces listener count");
console.log("2. Event bubbling order (child → parent)");
console.log("3. Rich event object properties");
console.log("4. Combining event properties for complex interactions");
console.log("5. Dispatching custom events");
console.log("6. Throttling to improve performance");
