# Module 03: Functions, Scope & Closures — Curated Tutorial Links (Tricky Tier)

Welcome to the curated video and documentation vault for **Module 03: Functions, Scope & Closures (Tricky Tier)**. This guide gathers high-yield Hindi/Hinglish video deep dives and authoritative specification documents covering edge cases, AST parsing rules, and complex closure patterns.

---

## 📺 Recommended Video Tutorials (Hindi / Hinglish)

### 1. Akshay Saini — Namaste JavaScript
* **Video**: *Tricky JavaScript Interview Questions & Output Quirks*
  * **Link**: [Watch on YouTube](https://www.youtube.com/playlist?list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP)
  * **Key Takeaways**: Output prediction challenges, TDZ parameter scopes, method tear-off subtleties, and closure traps.
* **Video**: *Function Currying & Infinite Currying Interview Questions*
  * **Link**: [Watch on YouTube](https://www.youtube.com/watch?v=vQcCNpuaJO8)
  * **Key Takeaways**: How `add(1)(2)(3)...` works, valueOf / Symbol.toPrimitive coercion hooks, and production currying.

### 2. Hitesh Choudhary — Chai aur Code
* **Video**: *JavaScript Deep Dive: Advanced Functions, 'this' & Call/Apply/Bind Edge Cases*
  * **Link**: [Watch on YouTube](https://www.youtube.com/playlist?list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37)
  * **Key Takeaways**: Why chained .bind().bind() does not override 'this', arrow function internals, and strict mode differences.

### 3. Sheryians Coding School
* **Video**: *Advanced JavaScript Masterclass: Mind-Bending Output Questions*
  * **Link**: [Watch on YouTube](https://www.youtube.com/watch?v=kGI_IekSrhY)
  * **Key Takeaways**: Annex B function hoisting in if-blocks, parameter shadowing, and destructuring null traps.

---

## 📖 Official Specifications & Engine Internals

1. **ECMAScript® 2026 Language Specification**
   * [Section 10.2: Ordinary and Exotic Objects Behaviours (Function Objects)](https://tc39.es/ecma262/#sec-ordinary-and-exotic-objects-behaviours)
   * Detailed breakdown of `[[Call]]` and `[[Construct]]` internal slots.
   * [Annex B.3.3: FunctionDeclarations in IfStatement](https://tc39.es/ecma262/#sec-functiondeclarations-in-ifstatement)
   * The formal specification of block-level function hoisting in sloppy mode.

2. **V8 Developer Blog & Engine Architecture**
   * [V8 Behind the Scenes: Turbofan Optimization & Stack Inlining](https://v8.dev/blog)
   * Understanding how `arguments.callee` and unoptimized scope lookups prevent function inlining.

3. **MDN Web Docs**
   * [MDN: Automatic Semicolon Insertion (ASI)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion)
   * [MDN: Function.prototype.bind()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)

---

## 🎯 Targeted Drills & Output Prediction Checklist

- [ ] **Drill 1**: Predict the output of `function foo(a = b, b = 2) {}` vs `function bar(b = 2, a = b) {}`.
- [ ] **Drill 2**: Explain why `(0, obj.method)()` evaluates with global/undefined context instead of `obj`.
- [ ] **Drill 3**: Implement an infinite curried adder `add(1)(2)(3)` that supports primitive coercion via `valueOf`.
- [ ] **Drill 4**: Build a `Function.prototype.bind` polyfill that correctly handles constructor invocation via `new`.
- [ ] **Drill 5**: Demonstrate how parameter destructuring defaults fail when passed `null` instead of `undefined`.
