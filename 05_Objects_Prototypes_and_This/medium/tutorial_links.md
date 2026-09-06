# Module 05: Objects, Prototypes & 'this' — Curated Tutorial Links (Medium Tier)

Welcome to the curated video and documentation vault for **Module 05: Objects, Prototypes & 'this' (Medium Tier)**. This guide gathers high-yield Hindi/Hinglish video lectures and authoritative MDN documentation covering property descriptors, custom binding polyfills, prototypal inheritance patterns, and secure object manipulation.

---

## 📺 Recommended Video Tutorials (Hindi / Hinglish)

### 1. Akshay Saini — Namaste JavaScript
* **Video**: *Call, Apply and Bind Method in JavaScript & Polyfill of Bind*
  * **Link**: [Watch on YouTube](https://www.youtube.com/watch?v=ke_y6z0xRpk)
  * **Key Takeaways**: Implementing a custom bind polyfill, currying with bind, and handling argument concatenation.
* **Video**: *Currying in JavaScript (Using Closures & Bind)*
  * **Link**: [Watch on YouTube](https://www.youtube.com/watch?v=vQcCNpuaJO8)
  * **Key Takeaways**: Method borrowing, partial application, and function composition patterns.

### 2. Hitesh Choudhary — Chai aur Code
* **Video**: *Object.defineProperty & Math.PI in Depth in JavaScript*
  * **Link**: [Watch on YouTube](https://www.youtube.com/watch?v=jssO8-5qmag)
  * **Key Takeaways**: Why Math.PI cannot be overwritten, property descriptors (writable, enumerable, configurable), and creating read-only object properties.
* **Video**: *Classes, Constructors & 'super' in JavaScript*
  * **Link**: [Watch on YouTube](https://www.youtube.com/watch?v=u6kd_L7i598)
  * **Key Takeaways**: ES6 class sugar under the hood, constructor calls, and class inheritance mechanics.

### 3. Sheryians Coding School
* **Video**: *Advanced Objects, Prototypal Inheritance & Call/Apply/Bind in Hindi*
  * **Link**: [Watch on YouTube](https://www.youtube.com/watch?v=kGI_IekSrhY)
  * **Key Takeaways**: Practical interview scenarios with lost 'this' contexts and method borrowing on array-like objects.

### 4. CodeWithHarry
* **Video**: *JavaScript Getters, Setters & Static Methods Explained in Hindi*
  * **Link**: [Watch on YouTube](https://www.youtube.com/watch?v=kYI_U7uQ4Qc)
  * **Key Takeaways**: Implementing accessor properties, static class utilities, and private class members.

---

## 📖 Official Documentation & Engine Internals

1. **MDN Web Docs — Advanced Object Guides**
   * [MDN: Object.defineProperty()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)
   * The definitive guide to property attributes and accessor descriptors.
   * [MDN: Object.freeze() vs Object.seal()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze)
   * Comparative analysis of JavaScript immutability primitives.
   * [MDN: Function.prototype.bind()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)
   * Detailed specification behavior regarding exotic bound functions and 'new' instantiation.

2. **ECMAScript® 2026 Language Specification**
   * [Section 10.4.1: Bound Function Exotic Objects](https://tc39.es/ecma262/#sec-bound-function-exotic-objects)
   * Formal internal [[Construct]] and [[Call]] mechanics of bound functions.

---

## 🎯 Targeted Drills & Practical Exercises

- [ ] **Drill 1**: Implement a custom 'deepEqual(a, b)' utility that evaluates structural equality across nested objects and arrays.
- [ ] **Drill 2**: Write a 'deepClone' function that handles circular references using a 'WeakMap'.
- [ ] **Drill 3**: Build an 'EventEmitter' class supporting 'on(event, fn, ctx)' where listeners execute with the provided context.
- [ ] **Drill 4**: Explain what happens when a property is defined with 'writable: false' on a prototype and a child object attempts to assign to it.
- [ ] **Drill 5**: Implement a secure 'deepMerge' function that resists Prototype Pollution attacks by rejecting '__proto__' and 'constructor'.
