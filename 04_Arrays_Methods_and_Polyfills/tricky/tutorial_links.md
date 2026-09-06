# Module 04: Arrays, Methods & Polyfills — Curated Tutorial Links (Tricky Tier)

Welcome to the curated video and documentation vault for **Module 04: Arrays, Methods & Polyfills (Tricky Tier)**. This guide gathers high-yield Hindi/Hinglish video deep dives and authoritative specification documents covering array type coercions, the parseInt trap, cyclic proxy arrays, and cycle detection.

---

## 📺 Recommended Video Tutorials (Hindi / Hinglish)

### 1. Akshay Saini — Namaste JavaScript
* **Video**: *Tricky JavaScript Output Questions & Array Puzzles*
  * **Link**: [Watch on YouTube](https://www.youtube.com/playlist?list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP)
  * **Key Takeaways**: Why `['1', '2', '10'].map(parseInt)` evaluates to `[1, NaN, 2]`, sparse array hole traps, and coercion quirks.

### 2. Hitesh Choudhary — Chai aur Code
* **Video**: *JavaScript Deep Dive: Truthy, Falsy & Bizarre Coercion (`[] == ![]`)*
  * **Link**: [Watch on YouTube](https://www.youtube.com/playlist?list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37)
  * **Key Takeaways**: Understanding ToPrimitive, boolean inversion rules, and why objects compare differently across types.

### 3. Sheryians Coding School
* **Video**: *Advanced JavaScript Masterclass: Mind-Bending Output Questions*
  * **Link**: [Watch on YouTube](https://www.youtube.com/watch?v=kGI_IekSrhY)
  * **Key Takeaways**: Modifying arrays during forEach, trailing comma illusions, and call stack overflow with the spread operator.

### 4. Striver — take U forward
* **Video**: *Find the Duplicate Number (Floyd's Tortoise & Hare Cycle Detection on Arrays)*
  * **Link**: [Watch on YouTube](https://www.youtube.com/watch?v=32Ll35mhWg0)
  * **Key Takeaways**: Why treating arrays as linked lists solves duplicate detection in O(N) time and O(1) space without mutations.

---

## 📖 Official Specifications & Engine Internals

1. **ECMAScript® 2026 Language Specification**
   * [Section 7.2.14: Abstract Equality Comparison](https://tc39.es/ecma262/#sec-abstract-equality-comparison)
   * The exact specification algorithm for `[] == ![]` and `[] == 0`.
   * [Section 23.1.3.30: Array.prototype.sort()](https://tc39.es/ecma262/#sec-array.prototype.sort)
   * Formal proof that `undefined` elements bypass the user's comparator and sort to the end.

2. **V8 Developer Blog**
   * [V8 Behind the Scenes: Turbofan Optimization & Inline Caches](https://v8.dev/blog)
   * Why monkey-patching `Array.prototype` invalidates fast C++ element lookups.

3. **MDN Web Docs**
   * [MDN: JavaScript Proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy)
   * Creating custom cyclic arrays and negative indexing proxies.

---

## 🎯 Targeted Drills & Output Prediction Checklist

- [ ] **Drill 1**: Explain step-by-step why `['1', '2', '10'].map(parseInt)` evaluates to `[1, NaN, 2]`.
- [ ] **Drill 2**: Walk through the ECMAScript coercion algorithm explaining why `[] == ![]` is `true`.
- [ ] **Drill 3**: Implement an in-place Fisher-Yates shuffle and explain why `arr.sort(() => Math.random() - 0.5)` is biased.
- [ ] **Drill 4**: Build a cyclic array using ES6 Proxy that wraps both positive and negative offsets seamlessly.
- [ ] **Drill 5**: Solve LeetCode 287 (Find Duplicate Number) using Floyd's Tortoise and Hare in O(1) space.
