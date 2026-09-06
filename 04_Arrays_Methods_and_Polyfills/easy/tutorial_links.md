# Module 04: Arrays, Methods & Polyfills — Curated Tutorial Links (Easy Tier)

Welcome to the curated video and documentation vault for **Module 04: Arrays, Methods & Polyfills (Easy Tier)**. This guide gathers high-yield Hindi/Hinglish video lectures and authoritative MDN/V8 documentation to take you from ground zero to intuitive array mastery.

---

## 📺 Recommended Video Tutorials (Hindi / Hinglish)

### 1. Akshay Saini — Namaste JavaScript
* **Video**: *Higher Order Functions: map, filter & reduce in Depth*
  * **Link**: [Watch on YouTube](https://www.youtube.com/watch?v=zdp0zrpKzIE)
  * **Key Takeaways**: How map, filter, and reduce work from the ground up, writing your own custom polyfills, and functional chaining.

### 2. Hitesh Choudhary — Chai aur Code
* **Video**: *JavaScript Arrays in Depth: Methods, Loops & Memory*
  * **Link**: [Watch on YouTube](https://www.youtube.com/watch?v=cstf3_FjOzg)
  * **Key Takeaways**: Array literal vs constructor, slice vs splice differences, push/pop vs shift/unshift performance, and spread operators.

### 3. Sheryians Coding School
* **Video**: *JavaScript Array Mastery: Zero to Hero for Beginners*
  * **Link**: [Watch on YouTube](https://www.youtube.com/watch?v=d3jXofmQm44)
  * **Key Takeaways**: Core array operations, loops (for, forEach, for...of), and solving basic coding interview problems.

### 4. CodeWithHarry
* **Video**: *JavaScript Arrays & Array Methods Tutorial in Hindi*
  * **Link**: [Watch on YouTube](https://www.youtube.com/watch?v=qZXt1Aom3Ph)
  * **Key Takeaways**: Hands-on syntax guide for join, concat, reverse, indexOf, and manipulating array elements.

---

## 📖 Official Documentation & Engine Internals

1. **MDN Web Docs — Array Reference**
   * [MDN: JavaScript Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
   * Detailed specifications of all built-in methods, indexing rules, and prototypes.
   * [MDN: Array.prototype.at()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at)
   * Relative indexing with negative offsets.

2. **V8 Developer Blog**
   * [Elements Kinds in V8](https://v8.dev/blog/elements-kinds)
   * Essential reading on how V8 switches between PACKED_SMI, PACKED_DOUBLE, and HOLEY elements.

---

## 🎯 Targeted Drills & Practical Exercises

- [ ] **Drill 1**: Explain the difference between `new Array(5)` and `Array.of(5)`.
- [ ] **Drill 2**: Predict the output of `const a = [1, 2, 3]; a.length = 1; console.log(a);` and explain memory deallocation.
- [ ] **Drill 3**: Implement `reverseInPlace` using two pointers without creating a new array.
- [ ] **Drill 4**: Write a custom polyfill for `Array.prototype.filter` from scratch.
- [ ] **Drill 5**: Explain why `[].reduce((a, b) => a + b)` throws an unhandled TypeError.
