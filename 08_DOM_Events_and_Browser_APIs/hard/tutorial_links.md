# Module 08: DOM, Events, & Browser APIs — Curated Learning Resources (Hard Tier)

Welcome to the advanced systems engineering tier of **DOM, Events, and Browser APIs**. Below is a curated collection of premier Hindi/Hinglish masterclasses by leading educators alongside authoritative standards specifications.

---

## 🎥 Top Recommended Video Tutorials (Hindi / Hinglish)

### 1. Akshay Saini — *Namaste JavaScript*
- **Web APIs & Performance Architecture**:
  - [Namaste JavaScript: Episode 15 - Trust Issues with setTimeout() & Web APIs](https://www.youtube.com/watch?v=nQSz5vHN0JU)
  - *Key Concepts Covered*: V8 Call Stack, Libuv thread pool interaction, timer drift, event loop starvation.

### 2. Hitesh Choudhary — *Chai aur Code*
- **Web Workers & Offline Storage**:
  - [Chai aur JavaScript: Web Workers and Concurrency](https://www.youtube.com/watch?v=bL3pQ9mYt14)
  - [Chai aur JavaScript: Progressive Web Apps & Service Workers](https://www.youtube.com/watch?v=6b8n7i63mJ8)
  - *Key Concepts Covered*: Dedicated Workers, `postMessage`, Transferable Objects (`ArrayBuffer`), CacheStorage lifecycle.

### 3. Sheryians Coding School — *Harsh Sharma*
- **Advanced Browser Engineering & Real-Time APIs**:
  - [Sheryians: Real-Time WebSockets & BroadcastChannel in Practice](https://www.youtube.com/watch?v=5fb2aPlpsys)
  - *Key Concepts Covered*: Cross-tab sync, WebSockets vs SSE, audio synthesis via Web Audio API.

### 4. CodeWithHarry — *Sigma Web Development Course*
- **Web Performance & Security**:
  - [Sigma Web Dev #85: Web Workers & Multi-threading in JavaScript](https://www.youtube.com/watch?v=bL3pQ9mYt14)
  - [Sigma Web Dev #90: Cross-Site Scripting (XSS) & Content Security Policy (CSP)](https://www.youtube.com/watch?v=Zbc8qLzD56U)
  - *Key Concepts Covered*: CSP headers, nonces, Trusted Types, memory leak prevention in SPA architectures.

---

## 📚 Authoritative Documentation & Specifications

1. **MDN Web Docs — Advanced Web Platforms**:
   - [Web Workers API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API)
   - [Service Worker API](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)
   - [Broadcast Channel API](https://developer.mozilla.org/en-US/docs/Web/API/Broadcast_Channel_API)
   - [Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API)
   - [PerformanceObserver API](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceObserver)
   - [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)

2. **W3C & WHATWG Standards**:
   - [W3C Web Workers Living Standard](https://html.spec.whatwg.org/multipage/workers.html)
   - [W3C Service Workers 1](https://www.w3.org/TR/service-workers-1/)
   - [W3C Web Audio API Specification](https://www.w3.org/TR/webaudio/)
   - [W3C Web Animations Specification](https://www.w3.org/TR/web-animations-1/)

3. **Google Web.dev — Core Web Vitals & Performance**:
   - [Optimize Largest Contentful Paint (LCP)](https://web.dev/articles/optimize-lcp)
   - [Optimize Cumulative Layout Shift (CLS)](https://web.dev/articles/optimize-cls)
   - [Optimize Interaction to Next Paint (INP)](https://web.dev/articles/optimize-inp)

---

## 💡 Quick Self-Check Questions Before Advancing

1. Why does passing an `ArrayBuffer` in the `transferList` parameter of `postMessage` eliminate copying overhead entirely?
2. What is the fundamental difference between Cache-First and Stale-While-Revalidate caching strategies in Service Workers?
3. How does focus trapping guarantee WCAG accessibility for keyboard users navigating nested modal dialogs?
4. How do you measure Core Web Vitals using `PerformanceObserver` with `buffered: true`?
