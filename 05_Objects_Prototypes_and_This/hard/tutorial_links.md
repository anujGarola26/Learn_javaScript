# Module 05: Objects, Prototypes & 'this' — Curated Tutorial Links (Hard Tier)

Welcome to the curated video and documentation vault for **Module 05: Objects, Prototypes & 'this' (Hard Tier)**. This guide gathers high-yield video lectures and authoritative V8 engine design documentation exploring Hidden Classes (Shapes), Inline Caching (IC), Proxy metaprogramming, and Chrome DevTools Heap allocation profiling.

---

## 📺 Recommended Video Tutorials (Hindi / Hinglish & Engine Internals)

### 1. Akshay Saini — Namaste JavaScript
* **Video**: *JavaScript V8 Engine Architecture & How Code Executes*
  * **Link**: [Watch on YouTube](https://www.youtube.com/watch?v=2WJL19wDH68)
  * **Key Takeaways**: JIT compilation (Ignition & TurboFan), memory heaps, and Call Stack execution contexts.

### 2. Franziska Hinkelmann / Mathias Bynens — V8 Team (Google I/O)
* **Video**: *JavaScript Engines: The Good Parts™ (Shapes & Inline Caches)*
  * **Link**: [Watch on YouTube](https://www.youtube.com/watch?v=5nmpokoRa6k)
  * **Key Takeaways**: In-depth explanation of Shapes, transition trees, and how monomorphic ICs optimize property reads.
* **Video**: *V8 Internals: How JavaScript Objects are Stored in Memory*
  * **Link**: [Watch on YouTube](https://www.youtube.com/watch?v=m9cTaYI95Zc)
  * **Key Takeaways**: In-object vs out-of-object properties, elements vs properties backing store, and dictionary mode.

### 3. Hitesh Choudhary — Chai aur Code
* **Video**: *Proxy and Reflect in JavaScript Explained in Depth*
  * **Link**: [Watch on YouTube](https://www.youtube.com/watch?v=l_H3l6pM8fI)
  * **Key Takeaways**: Proxy handler traps, Reflect API parity, and building reactive object observers.

### 4. Sheryians Coding School
* **Video**: *Advanced JavaScript: Memory Leaks, Garbage Collection & Profiling in Hindi*
  * **Link**: [Watch on YouTube](https://www.youtube.com/watch?v=kGI_IekSrhY)
  * **Key Takeaways**: Chrome DevTools Memory tab, heap snapshots, detecting detached DOM trees, and retaining paths.

---

## 📖 Official Documentation & Engine Internals

1. **V8 Engine Developer Blog**
   * [Fast Properties in V8](https://v8.dev/blog/fast-properties)
   * The definitive guide to hidden classes, in-object property allocation, and descriptor arrays.
   * [JavaScript Engine Fundamentals: Shapes and Inline Caches](https://mathiasbynens.be/notes/shapes-ics)
   * Visual walkthrough of transition chains and feedback vectors.

2. **MDN Web Docs — Metaprogramming**
   * [MDN: Proxy Reference & Invariants](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy)
   * Formal specification constraints governing proxy traps.
   * [MDN: WeakRef & FinalizationRegistry](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakRef)
   * Memory-safe object referencing primitives.

---

## 🎯 Targeted Drills & Practical Exercises

- [ ] **Drill 1**: Build a reactive store using Proxy and Reflect with automated dependency tracking.
- [ ] **Drill 2**: Explain why passing objects with different property insertion orders degrades Inline Cache performance.
- [ ] **Drill 3**: Implement a minimal version of Immer's 'produce()' supporting structural sharing on nested objects.
- [ ] **Drill 4**: Create a Memory-Leak Proof Event Bus utilizing 'WeakRef' and 'FinalizationRegistry'.
- [ ] **Drill 5**: Demonstrate how a Proxy trap violation can trigger an invariant TypeError at runtime.
