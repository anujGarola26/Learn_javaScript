# 📌 Curated Learning Resources — Module 07: Asynchronous JS & Event Loop (Easy Tier)

Welcome to the **Foundational Easy Level** resource companion for Asynchronous JavaScript and the Event Loop.
This guide brings together the most acclaimed Hindi/Hinglish educator masterclasses, authoritative MDN/ECMAScript documentation, and targeted coding exercises covering Call Stack mechanics, Web APIs, Callback Queues, Promises, and 'async/await'.

---

## 🎥 Elite Video Tutorials (Hindi / Hinglish)

### 1. Akshay Saini — Namaste JavaScript
* **Video**: *How JavaScript Works & The Call Stack (Episode 1)*
  * **Link**: [Watch on YouTube](https://www.youtube.com/watch?v=ZvbzSrg0afE)
  * **Key Takeaways**: How execution contexts are created, pushed to the Call Stack, and single-threaded execution.
* **Video**: *Asynchronous JavaScript & The Event Loop from Scratch (Episode 15)*
  * **Link**: [Watch on YouTube](https://www.youtube.com/watch?v=8zKuNo4ay8E)
  * **Key Takeaways**: Web APIs, Callback Queue, Microtask Queue vs Macrotask Queue, and Event Loop internals.
* **Video**: *Promises & Inversion of Control in JavaScript (Episode 2)*
  * **Link**: [Watch on YouTube](https://www.youtube.com/watch?v=ap-6PPAuK1Y)
  * **Key Takeaways**: Why Callback Hell creates Inversion of Control, and how Promises restore trust and sequential pipelines.

### 2. Hitesh Choudhary — Chai aur Code
* **Video**: *Async JavaScript and Event Loop Explained in Hindi*
  * **Link**: [Watch on YouTube](https://www.youtube.com/watch?v=zgt5mF9NF10)
  * **Key Takeaways**: Single thread execution, setTimeout, setInterval, and how browsers interact with V8.
* **Video**: *Promises in JavaScript — Complete Beginner to Hero (Hindi)*
  * **Link**: [Watch on YouTube](https://www.youtube.com/watch?v=EDsmWBmS8tY)
  * **Key Takeaways**: Creating promises, then/catch/finally, async/await, and real-world fetch API requests.

### 3. Sheryians Coding School
* **Video**: *Asynchronous JavaScript in Hindi — Complete Masterclass*
  * **Link**: [Watch on YouTube](https://www.youtube.com/watch?v=6nv3qy3oNkc)
  * **Key Takeaways**: Sync vs Async code, callbacks, promises, async-await, and practical coding exercises.

### 4. CodeWithHarry
* **Video**: *JavaScript Callbacks, Promises & Async/Await in Hindi*
  * **Link**: [Watch on YouTube](https://www.youtube.com/watch?v=bL-a289VoNs)
  * **Key Takeaways**: Pyramid of Doom, promise chaining, and error handling with try-catch.

---

## 📖 Official Documentation & Engine Internals

1. **MDN Web Docs — Asynchronous JavaScript Foundations**
   * [MDN: Introducing Asynchronous JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing)
   * The fundamental concepts of asynchronous programming and non-blocking I/O.
   * [MDN: Using Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
   * Detailed guide on promise chaining, rejection propagation, and timing.
   * [MDN: async and await](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises#async_and_await)
   * Clear guide to writing synchronous-style asynchronous code.
   * [MDN: Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
   * Official documentation for making HTTP requests and handling response bodies.

2. **ECMAScript® 2026 Language Specification**
   * [Section 27.2: Promise Objects](https://tc39.es/ecma262/#sec-promise-objects)
   * Official ECMAScript specification for Promise state transitions and [[PromiseReaction]] records.

---

## 🎯 Targeted Drills & Practical Exercises

- [ ] **Drill 1**: Predict the exact console output order of a script containing 'console.log', 'setTimeout(..., 0)', and synchronous loops.
- [ ] **Drill 2**: Implement a 'sleep(ms)' helper function and use it inside an async function.
- [ ] **Drill 3**: Convert a legacy callback function 'fs.readFile' into a Promise using 'new Promise()'.
- [ ] **Drill 4**: Build a function that fetches data from an API with a fallback object if the network fails or returns 404.
- [ ] **Drill 5**: Run an array of 3 asynchronous tasks sequentially in series using a 'for...of' loop.
