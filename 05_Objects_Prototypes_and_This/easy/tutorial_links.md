# Module 05: Objects, Prototypes & 'this' — Curated Tutorial Links (Easy Tier)

Welcome to the curated video and documentation vault for **Module 05: Objects, Prototypes & 'this' (Easy Tier)**. This guide gathers high-yield Hindi/Hinglish video lectures and authoritative MDN documentation to take you from ground zero to intuitive mastery over JavaScript objects, prototype chains, and 'this' binding.

---

## 📺 Recommended Video Tutorials (Hindi / Hinglish)

### 1. Akshay Saini — Namaste JavaScript
* **Video**: *How 'this' Keyword Works in JavaScript (In Depth)*
  * **Link**: [Watch on YouTube](https://www.youtube.com/watch?v=9T4z983Lh-Q)
  * **Key Takeaways**: 'this' in global space, inside methods, call/apply/bind, and arrow function lexical this.
* **Video**: *Prototypes and Prototypal Inheritance in JavaScript*
  * **Link**: [Watch on YouTube](https://www.youtube.com/watch?v=wstwjQ1yqWQ)
  * **Key Takeaways**: How '__proto__' links objects, prototype chain lookup, and prototype shadowing.

### 2. Hitesh Choudhary — Chai aur Code
* **Video**: *JavaScript Objects in Depth: Literals, Symbols & Prototypes*
  * **Link**: [Watch on YouTube](https://www.youtube.com/watch?v=vLnPwxZdW4Y)
  * **Key Takeaways**: Object literal vs constructor, Object.freeze, Object.create(null), and dot vs bracket notation.
* **Video**: *The 'new' Keyword & Prototype Magic in JavaScript*
  * **Link**: [Watch on YouTube](https://www.youtube.com/watch?v=uMI542p7uvg)
  * **Key Takeaways**: The 4 steps of 'new', function prototype property, and building custom constructor functions.

### 3. Sheryians Coding School
* **Video**: *Mastering 'this', Call, Apply, Bind & Prototypes in Hindi*
  * **Link**: [Watch on YouTube](https://www.youtube.com/watch?v=kGI_IekSrhY)
  * **Key Takeaways**: Practical mental models for call site resolution and fixing lost callback contexts.

### 4. CodeWithHarry
* **Video**: *Object-Oriented JavaScript & Prototypes Explained in Hindi*
  * **Link**: [Watch on YouTube](https://www.youtube.com/watch?v=y322Z_u662Y)
  * **Key Takeaways**: Basic OOP concepts, ES6 class syntax sugar, and prototypal inheritance.

---

## 📖 Official Documentation & Engine Internals

1. **MDN Web Docs — Object & Prototype Reference**
   * [MDN: JavaScript Object Basics](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics)
   * Core guide on object properties, methods, and literal notation.
   * [MDN: Inheritance and the Prototype Chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
   * The definitive specification explanation of prototype delegation.
   * [MDN: The 'this' Keyword](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
   * Rules governing implicit, explicit, and default binding.

2. **ECMAScript® 2026 Language Specification**
   * [Section 10.1: Ordinary Object Internal Methods and Slots](https://tc39.es/ecma262/#sec-ordinary-object-internal-methods-and-internal-slots)
   * Deep technical mechanics of '[[Get]]', '[[Set]]', and '[[Prototype]]'.

---

## 🎯 Targeted Drills & Practical Exercises

- [ ] **Drill 1**: Explain the difference between 'Constructor.prototype' and 'instance.__proto__'.
- [ ] **Drill 2**: Implement a custom 'myNew' function that replicates the 4-step behavior of the 'new' operator.
- [ ] **Drill 3**: Predict the output of 'obj.method()' when the method is extracted to a standalone variable and invoked.
- [ ] **Drill 4**: Explain why 'Object.create(null)' creates an object that is immune to prototype pollution.
- [ ] **Drill 5**: Build a manual 'myInstanceOf' polyfill that walks the prototype chain using 'Object.getPrototypeOf()'.
