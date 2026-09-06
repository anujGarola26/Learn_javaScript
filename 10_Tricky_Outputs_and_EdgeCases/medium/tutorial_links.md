# Module 10: Tricky Outputs & Edge Cases — Curated Learning Resources (Medium Tier)

Welcome to the intermediate engineering tier of **Tricky Outputs & Edge Cases**. Below is a curated collection of premier Hindi/Hinglish video lectures by leading engineering educators alongside authoritative ECMAScript documentation detailing complex object and scope edge cases.

---

## 🎥 Top Recommended Video Tutorials (Hindi / Hinglish)

### 1. Akshay Saini — *Namaste JavaScript*
- **Scope, Closures & Execution Context**:
  - [Namaste JavaScript: Episode 7 - Scope Chain, `scope` & Lexical Environment](https://www.youtube.com/watch?v=uH-tVP8MUs8)
  - [Namaste JavaScript: Episode 8 - `let` & `const` in JS, Temporal Dead Zone (TDZ)](https://www.youtube.com/watch?v=BNC6slYCj50)
  - [Namaste JavaScript: Episode 10 - Closures in JavaScript](https://www.youtube.com/watch?v=qikxEIxsXco)
  - *Key Concepts Covered*: Lexical scope chains, closure variables, and block-scoping mechanisms.

### 2. Hitesh Choudhary — *Chai aur Code*
- **`this` Keyword & Object Iteration**:
  - [Chai aur JavaScript: `this` and Arrow Function in JavaScript](https://www.youtube.com/watch?v=9ksqp4fu1xE)
  - [Chai aur JavaScript: Prototype and Inheritance in JavaScript](https://www.youtube.com/watch?v=uMI5426ZeyU)
  - [Chai aur JavaScript: High Order Array Loops (`for...in` vs `for...of`)](https://www.youtube.com/watch?v=M0YImBHQsWU)
  - *Key Concepts Covered*: Implicit this binding, prototype enumeration guards, and property descriptor rules.

### 3. Sheryians Coding School — *Harsh Sharma*
- **Tricky JavaScript Outputs & Scenarios**:
  - [Sheryians: Tricky JavaScript Output Questions for Interviews](https://www.youtube.com/watch?v=5fb2aPlpsys)
  - *Key Concepts Covered*: `map(parseInt)`, `finally` overrides, and `null >= 0` comparison quirks.

### 4. CodeWithHarry — *Sigma Web Development Course*
- **Error Handling & Array Sorting**:
  - [Sigma Web Dev #63: JavaScript Arrays & Array Methods](https://www.youtube.com/watch?v=1bs6S3i8Jz8)
  - [Sigma Web Dev #79: JavaScript `try...catch` & Error Handling](https://www.youtube.com/watch?v=o1IcvzYq64k)
  - *Key Concepts Covered*: Default sort string behavior, try-catch-finally completion rules.

---

## 📚 Authoritative Specifications & Reference Documentation

1. **ECMAScript (ECMA-262) Official Standard**:
   - [ECMA-262 Section 10.1.13: `[[OwnPropertyKeys]]` Key Traversal Specification](https://tc39.es/ecma262/#sec-ordinaryownpropertykeys)
   - [ECMA-262 Section 23.1.3.28: `Array.prototype.sort` Specification](https://tc39.es/ecma262/#sec-array.prototype.sort)
   - [ECMA-262 Section 14.15: The `try...catch...finally` Statement](https://tc39.es/ecma262/#sec-try-statement)
   - [ECMA-262 Section 7.2.13: Relational Comparison Algorithms (`<`, `>=`)](https://tc39.es/ecma262/#sec-relational-operators)

2. **MDN Web Docs — Advanced Edge Cases**:
   - [MDN: Reflect.ownKeys() and Property Iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/ownKeys)
   - [MDN: Control Flow: try...catch and finally](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)
   - [MDN: Symbol Primitives & Non-Enumerable Metadata](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol)

---

## 💡 Quick Self-Check Questions Before Advancing

1. Why does `['1', '7', '11'].map(parseInt)` produce `[1, NaN, 3]`, and how do unary wrappers fix it?
2. Explain the exact 3-phase property key ordering rule specified by ECMAScript for `Reflect.ownKeys`.
3. Why does placing a `return` statement in a `finally` block completely swallow errors thrown in the `try` block?
4. What is the mathematical and grammatical reason why `null >= 0` is `true`, yet `null == 0` is `false`?
