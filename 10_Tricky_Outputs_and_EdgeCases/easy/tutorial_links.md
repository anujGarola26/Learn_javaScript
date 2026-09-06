# Module 10: Tricky Outputs & Edge Cases — Curated Learning Resources (Easy Tier)

Welcome to the foundational tier of **Tricky Outputs & Edge Cases**. Below is a curated collection of premier Hindi/Hinglish video lectures by leading engineering educators alongside authoritative ECMAScript documentation explaining JavaScript's most infamous quirks.

---

## 🎥 Top Recommended Video Tutorials (Hindi / Hinglish)

### 1. Akshay Saini — *Namaste JavaScript*
- **Hoisting, Scope & Execution Context Quirks**:
  - [Namaste JavaScript: Episode 3 - Hoisting in JavaScript (Variables & Functions)](https://www.youtube.com/watch?v=Fnlnw8uY6jo)
  - [Namaste JavaScript: Episode 8 - `let` & `const` in JS, Temporal Dead Zone (TDZ)](https://www.youtube.com/watch?v=BNC6slYCj50)
  - [Namaste JavaScript: Episode 6 - `undefined` vs `not defined`](https://www.youtube.com/watch?v=B7iF6G3EyIk)
  - *Key Concepts Covered*: TDZ ReferenceError, lexical scoping, hoisting creation phase, and variable shadowing.

### 2. Hitesh Choudhary — *Chai aur Code*
- **Type Coercion & Tricky Conversions**:
  - [Chai aur JavaScript: Datatype Conversion and Confusion](https://www.youtube.com/watch?v=XqlSErTshs4)
  - [Chai aur JavaScript: Comparison of Datatypes in JavaScript](https://www.youtube.com/watch?v=yY0moxfAblA)
  - [Chai aur JavaScript: Truthy and Falsy Values in JavaScript](https://www.youtube.com/watch?v=GkG_v8b4Lh8)
  - *Key Concepts Covered*: Abstract equality `==` vs `===`, `null` vs `0`, `NaN`, and `ToPrimitive` conversions.

### 3. Sheryians Coding School — *Harsh Sharma*
- **JavaScript Quirks & Oddities**:
  - [Sheryians: JavaScript Quirks & Weird Output Questions Explained](https://www.youtube.com/watch?v=5fb2aPlpsys)
  - *Key Concepts Covered*: `typeof null`, `[] + []`, `[] + {}`, and Automatic Semicolon Insertion (ASI).

### 4. CodeWithHarry — *Sigma Web Development Course*
- **JavaScript Operators & Expressions**:
  - [Sigma Web Dev #56: JavaScript Conditionals, Operators & Truthy/Falsy](https://www.youtube.com/watch?v=qwt_q_t8e4M)
  - *Key Concepts Covered*: Logical operators, unary plus, and conditional evaluation.

---

## 📚 Authoritative Specifications & Reference Documentation

1. **ECMAScript (ECMA-262) Official Standard**:
   - [ECMA-262 Section 7.2.14: Abstract Equality Comparison (`==`)](https://tc39.es/ecma262/#sec-abstract-equality-comparison)
   - [ECMA-262 Section 7.1.1: ToPrimitive Abstract Operation](https://tc39.es/ecma262/#sec-toprimitive)
   - [ECMA-262 Section 12.9: Automatic Semicolon Insertion (ASI)](https://tc39.es/ecma262/#sec-automatic-semicolon-insertion)
   - [ECMA-262 Section 7.2.13: Strict Equality Comparison (`===`)](https://tc39.es/ecma262/#sec-strict-equality-comparison)

2. **MDN Web Docs — Language Quirks**:
   - [MDN: Equality Comparisons and Sameness](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness)
   - [MDN: Lexical Grammar & Automatic Semicolon Insertion](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion)
   - [MDN: Number.EPSILON and Floating-Point Precision](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/EPSILON)

---

## 💡 Quick Self-Check Questions Before Advancing

1. Why does `typeof null` evaluate to `"object"`, and what historical C data structure flaw from 1995 caused it?
2. What makes `0.1 + 0.2 === 0.3` evaluate to `false`, and how does `Number.EPSILON` solve floating-point comparisons?
3. Walk through the 5 exact coercion steps that explain why `[] == ![]` evaluates to `true`.
4. Why does placing an object literal on a new line after `return` cause the function to return `undefined`?
