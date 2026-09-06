# 🌐 Module 10: Tricky Outputs & Edge Cases — Tricky Tier Reference Hub

A curated repository of high-signal video tutorials (Hindi/Hinglish) and authoritative ECMAScript (ECMA-262) specifications designed to anchor the edge cases and exotic behaviors explored in this tier.

---

## 📺 Recommended Video Masterclasses (Hindi / Hinglish)

### 1. Akshay Saini — *Namaste JavaScript*
- **Deep Lexical Scope & Edge Cases**:
  - [Namaste JS #6: Undefined vs Not Defined in JS](https://www.youtube.com/watch?v=B7iF6G3EyIk)
  - [Namaste JS #7: The Scope Chain & Lexical Environment](https://www.youtube.com/watch?v=uH-tVP8MUs8)
  - [Namaste JS #10: Closures in JavaScript](https://www.youtube.com/watch?v=qikxEIxsXco)
  - *Key Concepts Covered*: Scope chain, lexical environments, intermediate default parameter environments, and TDZ mechanics.

### 2. Hitesh Choudhary — *Chai aur Code*
- **JavaScript Behind the Scenes & Coercion Weird Parts**:
  - [Chai aur JavaScript #10: Comparison of Datatypes in JS](https://www.youtube.com/watch?v=gSTNtSyoqvw)
  - [Chai aur JavaScript #11: Strings & UTF-16 in JavaScript](https://www.youtube.com/watch?v=fozwNnFunlo)
  - [Chai aur JavaScript #42: Object Prototype and [[Prototype]] Traps](https://www.youtube.com/watch?v=uMI5cNeFTOc)
  - *Key Concepts Covered*: Abstract equality `==` coercion algorithms, surrogate pairs, object-to-primitive conversion, and prototype pollution.

### 3. Sheryians Coding School
- **Advanced JavaScript & Tricky Interview Series**:
  - [Sheryians: Advanced JavaScript Masterclass (Weird Quirks & Output Questions)](https://www.youtube.com/watch?v=kjtA2b4tLqg)
  - [Sheryians: JavaScript Interview Questions You Will Definitely Fail](https://www.youtube.com/watch?v=cM_QnC4Cms8)
  - *Key Concepts Covered*: `document.all`, `NaN === NaN`, signed zero `-0`, array boundary `2^32 - 1` crashes, and JSFuck principles.

### 4. CodeWithHarry — *Sigma Web Development Course*
- **Number System, Bitwise Invariants & Advanced Edge Cases**:
  - [Sigma Web Dev #84: Advanced JavaScript Interview Questions & Edge Cases](https://www.youtube.com/watch?v=bL3pQ9mYt14)
  - [Sigma Web Dev #85: Bitwise Operators, Two's Complement & 32-Bit Truncation](https://www.youtube.com/watch?v=6b8n7i63mJ8)
  - *Key Concepts Covered*: `ToInt32` / `ToUint32` wrapping, bitwise shift truncation, JSON reviver traversal, and array cycle breaking.

---

## 📚 Authoritative Specifications & Reference Documentation

1. **ECMAScript (ECMA-262) Official Standard**:
   - [ECMA-262 Section B.3.7: [[IsHTMLDDA]] Internal Slot (document.all)](https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot)
   - [ECMA-262 Section 7.1: Type Conversion & Abstract Operations](https://tc39.es/ecma262/#sec-type-conversion)
   - [ECMA-262 Section 6.1.6: The Number Type & Signed Zero Invariants](https://tc39.es/ecma262/#sec-ecmascript-language-types-number-type)
   - [ECMA-262 Section 24.5.1.1: InternalizeJSONProperty (Reviver DFS)](https://tc39.es/ecma262/#sec-internalizejsonproperty)
   - [ECMA-262 Section 9.2.12: FunctionDeclarationInstantiation (Default Parameter Scope)](https://tc39.es/ecma262/#sec-functiondeclarationinstantiation)
   - [ECMA-262 Section 23.1.4.1: ArrayCreate & 32-Bit Length Boundary](https://tc39.es/ecma262/#sec-arraycreate)

2. **MDN Web Docs — Low-Level Quirks & Internals**:
   - [MDN: JavaScript data types and data structures — Signed Zero](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)
   - [MDN: UTF-16 Code Units vs Unicode Code Points](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt)
   - [MDN: JSON.parse() Reviver Function Details](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#the_reviver_parameter)
   - [MDN: Bitwise Operators & 32-Bit Integer Truncation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_AND)

---

## 💡 Quick Self-Check Questions Before Advancing

1. Why does `typeof document.all` return `"undefined"` and `Boolean(document.all)` return `false`, yet `document.all("header")` executes successfully?
2. How does IEEE-754 signed zero (`-0`) affect mathematical division (`1 / -0` vs `1 / +0`), and why does `Object.is(-0, +0)` return `false` while `-0 === +0` returns `true`?
3. What is the intermediate lexical environment created when a function uses default parameters, and why does a parameter closure ignore body `var` re-declarations?
4. Explain how `JSON.parse(text, reviver)` traverses an object tree, and what happens to a property when the reviver returns `undefined`.
5. Why does `4294967296 | 0` evaluate to `0`, and what internal ECMAScript abstract operation causes this truncation?
