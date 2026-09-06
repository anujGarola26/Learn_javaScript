# Module 04: Arrays, Methods & Polyfills — Curated Tutorial Links (Medium Tier)

Welcome to the curated video and documentation vault for **Module 04: Arrays, Methods & Polyfills (Medium Tier)**. This guide gathers top-tier Hindi/Hinglish video lectures and technical specification docs covering intermediate array mechanics, algorithmic two-pointer strategies, and polyfill implementations.

---

## 📺 Recommended Video Tutorials (Hindi / Hinglish)

### 1. Akshay Saini — Namaste JavaScript
* **Video**: *Map, Filter & Reduce: Polyfills from Scratch*
  * **Link**: [Watch on YouTube](https://www.youtube.com/watch?v=zdp0zrpKzIE)
  * **Key Takeaways**: Implementing production-grade polyfills, handling `thisArg`, and avoiding prototype pollution.

### 2. Hitesh Choudhary — Chai aur Code
* **Video**: *JavaScript Arrays & Objects Masterclass: ES2023 & Memory Models*
  * **Link**: [Watch on YouTube](https://www.youtube.com/playlist?list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37)
  * **Key Takeaways**: ES2023 non-mutating methods (`toSorted`, `with`), shallow copy vs `structuredClone`, and Array.from tricks.

### 3. Striver — take U forward
* **Video**: *Two Sum & Three Sum: Optimal Two-Pointer & Hash Map Techniques*
  * **Link**: [Watch on YouTube](https://www.youtube.com/watch?v=UXDSeD9mN-k)
  * **Key Takeaways**: Transitioning from O(N^3) to O(N^2) using sorting and two pointers, duplicate triplet avoidance.
* **Video**: *Kadane's Algorithm: Maximum Subarray Sum with Subarray Retrieval*
  * **Link**: [Watch on YouTube](https://www.youtube.com/watch?v=AHZpyQDE7RI)
  * **Key Takeaways**: Intuition behind resetting negative running sums and tracking index boundaries.

### 4. Sheryians Coding School
* **Video**: *JavaScript Advanced Array Challenges & Interview Questions*
  * **Link**: [Watch on YouTube](https://www.youtube.com/watch?v=kGI_IekSrhY)
  * **Key Takeaways**: Sparse arrays vs dense arrays, array-like conversions, and practical interview edge cases.

---

## 📖 Official Specifications & Engine Internals

1. **ECMAScript® 2026 Language Specification**
   * [Section 23.1: Array Objects](https://tc39.es/ecma262/#sec-array-objects)
   * Formal definition of Array Exotic Objects, length properties, and indexing algorithms.
   * [Section 23.1.3.34: Array.prototype.with()](https://tc39.es/ecma262/#sec-array.prototype.with)
   * Detailed specification of non-mutating single index updates.

2. **V8 Developer Blog**
   * [Fast Properties & Elements Kinds in V8](https://v8.dev/blog/elements-kinds)
   * Understanding how HOLEY elements permanently downgrade optimization tiers.

3. **MDN Web Docs**
   * [MDN: structuredClone()](https://developer.mozilla.org/en-US/docs/Web/API/structuredClone)
   * The official deep copy algorithm for structured JavaScript values.

---

## 🎯 Targeted Drills & Practical Exercises

- [ ] **Drill 1**: Implement `Array.prototype.myFlat(depth)` with both recursion and an iterative stack.
- [ ] **Drill 2**: Solve Two Sum in O(N) time using a single-pass Hash Map.
- [ ] **Drill 3**: Implement Three Sum with zero-sum duplicate avoidance using two pointers.
- [ ] **Drill 4**: Explain why `[10, 5, 20].sort()` sorts lexicographically and provide a numeric comparator.
- [ ] **Drill 5**: Build an Amortized O(1) Queue using two stacks to avoid the O(N) performance cost of `Array.shift()`.
