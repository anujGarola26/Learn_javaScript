# Module 08: DOM, Events, & Browser APIs — Curated Learning Resources (Medium Tier)

Welcome to the intermediate engineering tier of **DOM, Events, and Browser APIs**. Below is a curated collection of premier Hindi/Hinglish video masterclasses by top engineering educators alongside authoritative browser specifications.

---

## 🎥 Top Recommended Video Tutorials (Hindi / Hinglish)

### 1. Akshay Saini — *Namaste JavaScript*
- **Event Delegation, Bubbling, & Capturing**:
  - [Namaste JavaScript: Episode 14 - Event Bubbling, Capturing & Delegation](https://www.youtube.com/watch?v=aVSf033ZaWA)
  - *Key Concepts Covered*: 3 phases of event flow, performance gains of delegation, `e.stopPropagation()`, `e.target` vs `e.currentTarget`.

### 2. Hitesh Choudhary — *Chai aur Code*
- **Advanced DOM & Browser APIs**:
  - [Chai aur JavaScript: Events in JavaScript](https://www.youtube.com/watch?v=_TjtAyMkiTI)
  - [Chai aur JavaScript: API Request & V8 Engine Basics](https://www.youtube.com/watch?v=R9I85RhI7Cg)
  - *Key Concepts Covered*: `addEventListener` deep dive, event object properties, `preventDefault`, async data integration.

### 3. Sheryians Coding School — *Harsh Sharma*
- **Event Handling & Advanced DOM**:
  - [Sheryians: Advanced JavaScript - Event Delegation & Custom Events](https://www.youtube.com/watch?v=5fb2aPlpsys)
  - *Key Concepts Covered*: `closest()`, event delegation on dynamic nodes, CustomEvent dispatching.

### 4. CodeWithHarry — *Sigma Web Development Course*
- **Browser APIs & Storage**:
  - [Sigma Web Dev #78: Browser Storage: LocalStorage, SessionStorage & Cookies](https://www.youtube.com/watch?v=bL3pQ9mYt14)
  - [Sigma Web Dev #81: Fetch API & Async UI Integration](https://www.youtube.com/watch?v=6b8n7i63mJ8)
  - *Key Concepts Covered*: Client storage quotas, synchronous I/O risks, IntersectionObserver intro.

---

## 📚 Authoritative Documentation & Specifications

1. **MDN Web Docs — Advanced Browser APIs**:
   - [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
   - [Resize Observer API](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver)
   - [MutationObserver API](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver)
   - [Web Components: Shadow DOM](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM)
   - [Page Visibility API](https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API)
   - [Async Clipboard API](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API)

2. **Google Chrome DevRel & Web.dev**:
   - [Avoid Large, Complex Layouts and Layout Thrashing](https://web.dev/articles/avoid-large-complex-layouts-and-layout-thrashing)
   - [Improving Scroll Performance with Passive Listeners](https://developer.chrome.com/docs/lighthouse/best-practices/uses-passive-event-listeners/)
   - [Rendering Performance: Inside Look at Modern Web Browsers](https://developer.chrome.com/blog/inside-browser-part3/)

3. **W3C / WHATWG Specifications**:
   - [WHATWG DOM Standard: Mutation Observers](https://dom.spec.whatwg.org/#mutation-observers)
   - [W3C Intersection Observer Specification](https://www.w3.org/TR/intersection-observer/)

---

## 💡 Quick Self-Check Questions Before Advancing

1. Why does `event.target.matches(selector)` fail on buttons with nested icons, and how does `closest()` solve it?
2. What is Layout Thrashing, and why does reading `offsetHeight` immediately after mutating `style.width` kill 60 FPS performance?
3. How do passive event listeners (`{ passive: true }`) allow the GPU Compositor thread to achieve butter-smooth 120 FPS scrolling?
4. What is the fundamental lifecycle difference between `requestAnimationFrame` and `requestIdleCallback`?
