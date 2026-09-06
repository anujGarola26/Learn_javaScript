# Module 06: Strings, Regex & Manipulations — Curated Tutorial Links (Hard Tier)

Welcome to the curated video and documentation vault for **Module 06: Strings, Regex & Manipulations (Hard Tier)**. This guide gathers high-yield video lectures and authoritative documentation exploring V8 Irregexp engine internals, KMP and Rabin-Karp algorithms, Trie data structures, and compiler tokenization.

---

## 📺 Recommended Video Tutorials (Hindi / Hinglish & Engine Internals)

### 1. Striver (take U forward)
* **Video**: *KMP Algorithm for Pattern Searching (LPS Table Explained)*
  * **Link**: [Watch on YouTube](https://www.youtube.com/watch?v=V5-7GzOfADQ)
  * **Key Takeaways**: LPS (π) array construction, jumping pattern pointers without backtracking, and O(N + M) complexity proof.
* **Video**: *Trie Data Structure Complete Implementation in Detail*
  * **Link**: [Watch on YouTube](https://www.youtube.com/watch?v=dBGUmUQhjaM)
  * **Key Takeaways**: TrieNode memory structure, prefix search, and implementing autocomplete.

### 2. Abdul Bari
* **Video**: *Knuth-Morris-Pratt (KMP) Algorithm Step-by-Step*
  * **Link**: [Watch on YouTube](https://www.youtube.com/watch?v=V5-7GzOfADQ)
  * **Key Takeaways**: Mathematical intuition of proper prefixes and suffixes, state machine transitions.
* **Video**: *Rabin-Karp String Matching Algorithm (Rolling Hash)*
  * **Link**: [Watch on YouTube](https://www.youtube.com/watch?v=qQ8vS2btsxI)
  * **Key Takeaways**: Polynomial rolling hash, O(1) window sliding, and handling modulo collisions.

### 3. Hitesh Choudhary — Chai aur Code
* **Video**: *V8 Engine: How Strings & Regex are Compiled into Machine Code*
  * **Link**: [Watch on YouTube](https://www.youtube.com/watch?v=2WJL19wDH68)
  * **Key Takeaways**: Irregexp JIT compilation, ConsString trees, and memory allocation in Node.js.

### 4. Tech Dummies Narendra L
* **Video**: *System Design & Algorithms: Building an Autocomplete System using Tries*
  * **Link**: [Watch on YouTube](https://www.youtube.com/watch?v=us0qySiUsGU)
  * **Key Takeaways**: Scaling Tries in distributed microservices, ranking by frequency, and prefix caching.

---

## 📖 Official Documentation & Engine Internals

1. **V8 Engine Developer Blog**
   * [Irregexp: The V8 Regular Expression Engine](https://v8.dev/blog/irregexp-memory)
   * Detailed breakdown of Irregexp bytecode, native code generation, and backtracking memory limits.
   * [String Flatness in V8](https://v8.dev/blog/string-flatness)
   * Deep technical analysis of ConsString, SlicedString, and ThinString memory models.

2. **TC39 Specification Proposals**
   * [RegExp 'v' Flag (Unicode Sets Mode)](https://github.com/tc39/proposal-regexp-v-flag)
   * Official ECMAScript 2024 specification for Set operations and string properties.

---

## 🎯 Targeted Drills & Practical Exercises

- [ ] **Drill 1**: Implement the KMP Substring Search algorithm with full LPS table construction from scratch.
- [ ] **Drill 2**: Build an optimal O(M + N) Minimum Window Substring solver using the Sliding Window technique.
- [ ] **Drill 3**: Implement a complete Trie class supporting word frequency tracking, autocomplete, and wildcard '.' search.
- [ ] **Drill 4**: Build a Regular Expression matching engine supporting '.' and '*' using 2D Dynamic Programming.
- [ ] **Drill 5**: Create a Sticky Regex ('y' flag) Lexer that tokenizes source code with accurate line/column numbers.
