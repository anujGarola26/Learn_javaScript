# Module 06: Strings, Regex & Manipulations — Curated Tutorial Links (Medium Tier)

Welcome to the curated video and documentation vault for **Module 06: Strings, Regex & Manipulations (Medium Tier)**. This guide gathers high-yield video lectures and authoritative documentation exploring advanced regular expressions, sliding window algorithms, lookarounds, matchAll iterators, and ReDoS prevention.

---

## 📺 Recommended Video Tutorials (Hindi / Hinglish)

### 1. Akshay Saini — Namaste JavaScript
* **Video**: *How String Manipulation & Memory Works in V8*
  * **Link**: [Watch on YouTube](https://www.youtube.com/watch?v=2WJL19wDH68)
  * **Key Takeaways**: ConsString vs SlicedString, memory garbage collection, and optimizing string loops.

### 2. Striver (take U forward)
* **Video**: *Sliding Window Technique for Substring Problems*
  * **Link**: [Watch on YouTube](https://www.youtube.com/watch?v=qtVh-XEpsCo)
  * **Key Takeaways**: Longest Substring Without Repeating Characters, two-pointer window shrinkage, and frequency map optimization.
* **Video**: *Group Anagrams & String Hashing in Detail*
  * **Link**: [Watch on YouTube](https://www.youtube.com/watch?v=zX9k1XvdaSU)
  * **Key Takeaways**: Character frequency signatures vs sorting keys, space complexity trade-offs.

### 3. Hitesh Choudhary — Chai aur Code
* **Video**: *Advanced Regular Expressions: Lookaheads, Lookbehinds & Groups*
  * **Link**: [Watch on YouTube](https://www.youtube.com/watch?v=7DG3P9U5z00)
  * **Key Takeaways**: Positive/negative lookahead, lookbehind assertions, named capturing groups, and matchAll().

### 4. Sheryians Coding School
* **Video**: *Mastering String Coding Rounds: Palindromes, ATOI & Anagrams in Hindi*
  * **Link**: [Watch on YouTube](https://www.youtube.com/watch?v=kGI_IekSrhY)
  * **Key Takeaways**: Step-by-step logic for string to integer (atoi), expanding around center for palindromes.

---

## 📖 Official Documentation & Engine Internals

1. **MDN Web Docs — Advanced Regular Expressions**
   * [MDN: Lookahead and Lookbehind Assertions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Cheatsheet#assertions)
   * The complete reference for zero-width assertions.
   * [MDN: String.prototype.matchAll()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll)
   * Spec-compliant iteration over capturing groups.
   * [MDN: String.prototype.normalize()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize)
   * Unicode canonical and compatibility decomposition forms (NFC, NFD).

2. **OWASP Security Foundation**
   * [OWASP: Regular Expression Denial of Service (ReDoS)](https://owasp.org/www-community/attacks/Regular_expression_Denial_of_Service_-_ReDoS)
   * Detailed breakdown of catastrophic backtracking and safe regex design.

---

## 🎯 Targeted Drills & Practical Exercises

- [ ] **Drill 1**: Solve 'Longest Substring Without Repeating Characters' using a Sliding Window with a character index map.
- [ ] **Drill 2**: Implement 'groupAnagrams' using an optimal O(N * K) character frequency tuple string key.
- [ ] **Drill 3**: Implement 'myAtoi(str)' with 32-bit signed integer overflow clamping.
- [ ] **Drill 4**: Find the 'Longest Palindromic Substring' using the Expand Around Center approach in O(1) space.
- [ ] **Drill 5**: Build an industrial 'parseQueryParams(url)' utility handling decoding, booleans, numbers, and duplicate array keys.
