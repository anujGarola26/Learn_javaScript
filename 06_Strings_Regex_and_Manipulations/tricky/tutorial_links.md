# 📌 Curated Learning Resources — Module 06: Strings, Regex & Manipulations (Tricky Tier)

Welcome to the **Tricky / Expert Level** resource companion for Strings and Regular Expressions in JavaScript.
This compilation brings together top-tier Hindi/Hinglish educator masterclasses, authoritative engine documentation, and rigorous architectural drills covering RegExp state mutation, ReDoS catastrophic backtracking, Unicode surrogate pairs, grapheme clusters, and V8 SlicedString memory models.

---

## 🎥 Elite Video Tutorials (Hindi / Hinglish)

### 1. Akshay Saini — Namaste JavaScript
* **Video**: *Regular Expressions in JavaScript — The Weird Parts & lastIndex Mutation*
  * **Link**: [Watch on YouTube](https://www.youtube.com/watch?v=9T4z983Lh-Q)
  * **Key Takeaways**: How RegExp global and sticky flags mutate 'lastIndex', leading to alternating true/false bugs in HTTP validators.
* **Video**: *Memory Leaks & V8 Garbage Collection Mechanics*
  * **Link**: [Watch on YouTube](https://www.youtube.com/watch?v=nqsPmuicbZ8)
  * **Key Takeaways**: How SlicedString and ConsString internal representations retain massive parent buffers in Node.js heaps.

### 2. Hitesh Choudhary — Chai aur Code
* **Video**: *Regular Expressions in JavaScript Full Course (Hindi)*
  * **Link**: [Watch on YouTube](https://www.youtube.com/watch?v=sXQxhojSdZM)
  * **Key Takeaways**: Lookahead assertions, lookbehinds, non-capturing groups, and dynamic RegExp construction security.
* **Video**: *Unicode, Emojis, and String Length Quirks in JavaScript*
  * **Link**: [Watch on YouTube](https://www.youtube.com/watch?v=vLnPwxZdW4Y)
  * **Key Takeaways**: Why '🚀'.length is 2, surrogate pairs calculation, and Intl.Segmenter grapheme clustering.

### 3. Sheryians Coding School
* **Video**: *The Weird & Dark Parts of JavaScript Strings in Hindi*
  * **Link**: [Watch on YouTube](https://www.youtube.com/watch?v=kGI_IekSrhY)
  * **Key Takeaways**: String auto-boxing discard, why string primitives cannot hold custom properties, and replace() dollar pattern injection.

### 4. CodeWithHarry
* **Video**: *JavaScript Regular Expressions, Metacharacters & Shunting-Yard Parser in Hindi*
  * **Link**: [Watch on YouTube](https://www.youtube.com/watch?v=y322Z_u662Y)
  * **Key Takeaways**: Building math expression evaluators, operator precedence with sticky regex, and ReDoS defense.

---

## 📖 Official Documentation & Engine Internals

1. **MDN Web Docs — Advanced String & RegExp Internals**
   * [MDN: RegExp.prototype.test() and lastIndex](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test)
   * The exact specification mechanics governing stateful regex mutation.
   * [MDN: String.prototype.matchAll()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll)
   * Detailed iterator semantics and non-global RegExp error requirements.
   * [MDN: Intl.Segmenter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter)
   * Standard Unicode Annex #29 grapheme cluster boundary specification.
   * [MDN: RegExp Unicode Sets (v Flag)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets)
   * ECMAScript 2024 set operations (-- and &&) in character classes.

2. **ECMAScript® 2026 Language Specification**
   * [Section 22.2: RegExp (Regular Expression) Objects](https://tc39.es/ecma262/#sec-regexp-regular-expression-objects)
   * Canonical NFA execution steps and GetSubstitution dollar sequence expansion.

3. **V8 Engine Blog**
   * [V8: Understanding String Representations in the V8 Heap](https://v8.dev/blog/string-representation)
   * Detailed breakdown of SeqOneByteString, ConsString, and SlicedString memory retention.

---

## 🎯 Targeted Drills & Practical Exercises

- [ ] **Drill 1**: Explain why 'const r = /foo/g; r.test("foo"); r.test("foo");' alternates between true and false.
- [ ] **Drill 2**: Implement an 'escapeRegExp(str)' function that safely neutralizes all 14 JavaScript metacharacters.
- [ ] **Drill 3**: Explain why '[..."👨‍👩‍👧‍👦"].length' returns 7 instead of 1, and fix it using 'Intl.Segmenter'.
- [ ] **Drill 4**: Demonstrate how extracting a 10-character substring from a 50MB string causes an out-of-memory leak in Node.js, and implement a zero-leak detacher.
- [ ] **Drill 5**: Build a safe SQL tagged template literal 'sql`SELECT * FROM users WHERE id = ${id}`' that prevents SQL injection.
