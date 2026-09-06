# Module 10: Tricky Outputs & Edge Cases — Curated Learning Resources (Hard Tier)

Welcome to the advanced systems engineering tier of **Tricky Outputs & Edge Cases**. Below is a curated collection of premier Hindi/Hinglish video lectures by leading engineering educators alongside authoritative ECMAScript documentation detailing Proxy invariants, class internals, and async microtask ticks.

---

## 🎥 Top Recommended Video Tutorials (Hindi / Hinglish)

### 1. Akshay Saini — *Namaste JavaScript*
- **Async/Await, Promises & Event Loop Deep Dive**:
  - [Namaste JavaScript: Season 2, Ep 1 - Callback Hell & Inversion of Control](https://www.youtube.com/watch?v=yEKtEGZE3l0)
  - [Namaste JavaScript: Season 2, Ep 2 - Promises & Promise Chaining](https://www.youtube.com/watch?v=ap-6PPAuK1Y)
  - [Namaste JavaScript: Season 2, Ep 4 - async await in JavaScript](https://www.youtube.com/watch?v=6nv3qy3oNkc)
  - *Key Concepts Covered*: Microtask queues, Promise resolution, async/await suspension, and error handling.

### 2. Hitesh Choudhary — *Chai aur Code*
- **Classes, Metaprogramming & Advanced Object Mechanics**:
  - [Chai aur JavaScript: Classes in JavaScript (Constructor & Inheritance)](https://www.youtube.com/watch?v=uMI5426ZeyU)
  - [Chai aur JavaScript: Advance Object Descriptors & Property Flags](https://www.youtube.com/watch?v=_TjtAyMkiTI)
  - [Chai aur JavaScript: Promises & Fetch In-Depth](https://www.youtube.com/watch?v=R9I85RhI7Cg)
  - *Key Concepts Covered*: `super()` constructor ordering, descriptor writable flags, and microtask timing.

### 3. Sheryians Coding School — *Harsh Sharma*
- **Advanced JavaScript Hard Edge Cases**:
  - [Sheryians: Advanced JavaScript - Async Await & Generators Under the Hood](https://www.youtube.com/watch?v=5fb2aPlpsys)
  - *Key Concepts Covered*: Generator delegation, Symbol metaprogramming, and microtask ticks.

### 4. CodeWithHarry — *Sigma Web Development Course*
- **Classes, Modules & Async Error Handling**:
  - [Sigma Web Dev #82: Object Oriented Programming & Classes in JavaScript](https://www.youtube.com/watch?v=6b8n7i63mJ8)
  - [Sigma Web Dev #84: Advanced JavaScript Interview Questions & Edge Cases](https://www.youtube.com/watch?v=bL3pQ9mYt14)
  - *Key Concepts Covered*: Class private fields, static blocks, and unhandled promise rejections.

---

## 📚 Authoritative Specifications & Reference Documentation

1. **ECMAScript (ECMA-262) Official Standard**:
   - [ECMA-262 Section 10.5: Proxy Object Internal Invariants](https://tc39.es/ecma262/#sec-proxy-object-internal-methods-and-internal-slots)
   - [ECMA-262 Section 7.1.1: Symbol.toPrimitive Specification](https://tc39.es/ecma262/#sec-toprimitive)
   - [ECMA-262 Section 27.2: Promise Resolution Procedure](https://tc39.es/ecma262/#sec-promise-resolve-functions)
   - [ECMA-262 Section 15.7: Class Definitions and Private Brand Checks](https://tc39.es/ecma262/#sec-class-definitions)

2. **MDN Web Docs — Advanced Architecture**:
   - [MDN: Proxy.revocable() and Revocation Invariants](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/revocable)
   - [MDN: Classes: Private properties and Brand Checks](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_properties)
   - [MDN: structuredClone() Algorithm and Transferable Objects](https://developer.mozilla.org/en-US/docs/Web/API/structuredClone)

---

## 💡 Quick Self-Check Questions Before Advancing

1. What happens if a Proxy trap returns a different value for a target property that is `configurable: false` and `writable: false`?
2. Why does accessing `this` before `super()` in a derived class constructor trigger an engine-level `ReferenceError`?
3. How do private class fields (`#field`) enforce hard privacy that cannot be bypassed even with `Reflect.ownKeys`?
4. Explain why synchronous errors inside a `new Promise` executor are caught by `.catch()`, while asynchronous errors inside `setTimeout` crash the process.
