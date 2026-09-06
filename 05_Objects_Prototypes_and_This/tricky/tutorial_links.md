# Module 05: Objects, Prototypes & 'this' — Curated Tutorial Links (Tricky Tier)

Welcome to the curated video and documentation vault for **Module 05: Objects, Prototypes & 'this' (Tricky Tier)**. This guide gathers high-yield video lectures and authoritative MDN documentation exploring edge-case 'this' bindings, prototype shadowing anomalies, comma operator context stripping, and IEEE-754 precision comparisons.

---

## 📺 Recommended Video Tutorials (Hindi / Hinglish)

### 1. Akshay Saini — Namaste JavaScript
* **Video**: *The 'this' Keyword in Depth — All Edge Cases & Traps*
  * **Link**: [Watch on YouTube](https://www.youtube.com/watch?v=9T4z983Lh-Q)
  * **Key Takeaways**: 'this' inside nested arrow functions, event listeners, and strict mode behavior.
* **Video**: *Trust Issues with setTimeout & Execution Scope*
  * **Link**: [Watch on YouTube](https://www.youtube.com/watch?v=nqsPmuicbZ8)
  * **Key Takeaways**: How asynchronous queuing decouples method invocation from its owning object.

### 2. Hitesh Choudhary — Chai aur Code
* **Video**: *Prototype Pollution & Security Traps in JavaScript*
  * **Link**: [Watch on YouTube](https://www.youtube.com/watch?v=vLnPwxZdW4Y)
  * **Key Takeaways**: How __proto__ poisoning attacks work, Object.create(null) defenses, and frozen prototypes.
* **Video**: *JavaScript Getter & Setter Quirks (Math.PI Deep Dive)*
  * **Link**: [Watch on YouTube](https://www.youtube.com/watch?v=jssO8-5qmag)
  * **Key Takeaways**: Property descriptors, non-writable shadowing traps, and prototype hijacking.

### 3. Sheryians Coding School
* **Video**: *The Weird Parts of JavaScript: Objects & 'this' in Hindi*
  * **Link**: [Watch on YouTube](https://www.youtube.com/watch?v=kGI_IekSrhY)
  * **Key Takeaways**: Comma operator method invocation, method borrowing quirks, and arguments synchronization.

### 4. CodeWithHarry
* **Video**: *JavaScript OOPs, Classes & Hidden Quirks in Hindi*
  * **Link**: [Watch on YouTube](https://www.youtube.com/watch?v=y322Z_u662Y)
  * **Key Takeaways**: Subclassing return overrides, constructor return rules, and static inheritance traps.

---

## 📖 Official Documentation & Engine Internals

1. **MDN Web Docs — Tricky Object Operations**
   * [MDN: Object.hasOwn()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn)
   * Why hasOwnProperty should never be called directly on an instance.
   * [MDN: Object.is()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is)
   * The ECMAScript SameValue specification mechanics.
   * [MDN: Comma Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comma_operator)
   * Detailed explanation of GetValue evaluation and reference record stripping.

2. **ECMAScript® 2026 Language Specification**
   * [Section 10.1.12: Ordinary Object [[OwnPropertyKeys]]](https://tc39.es/ecma262/#sec-ordinaryownpropertykeys)
   * The canonical 3-tier key traversal order algorithm.

---

## 🎯 Targeted Drills & Practical Exercises

- [ ] **Drill 1**: Explain why '(0, obj.method)()' strips 'this' while '(obj.method)()' does not.
- [ ] **Drill 2**: Implement an 'autoBind(instance)' function that binds all prototype methods to the instance.
- [ ] **Drill 3**: Predict the output of returning a primitive vs returning an object from a constructor function called with 'new'.
- [ ] **Drill 4**: Build a custom 'myObjectIs' polyfill that distinguishes '+0' from '-0' and evaluates 'NaN === NaN' as true.
- [ ] **Drill 5**: Demonstrate what happens when attempting to assign a property to a primitive string.
