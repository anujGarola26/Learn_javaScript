# 📌 Curated Learning Resources — Module 07: Asynchronous JS & Event Loop (Medium Tier)

Welcome to the **Intermediate Level** resource companion for Asynchronous JavaScript and Event Loop Internals.
This guide brings together authoritative masterclasses, engine documentation, and architectural problem walkthroughs covering Microtasks vs Macrotasks, Promise combinators (all, allSettled, race, any), AbortController, Generator co-routines, and Node.js libuv loop phases.

---

## 🎥 Elite Video Tutorials (Hindi / Hinglish)

### 1. Akshay Saini — Namaste JavaScript
* **Video**: *Trust Issues with setTimeout() & Microtask Queue Deep Dive*
  * **Link**: [Watch on YouTube](https://www.youtube.com/watch?v=nqsPmuicbZ8)
  * **Key Takeaways**: Why setTimeout timers drift, microtask priority, and event loop blocking.
* **Video**: *Promise APIs — Promise.all, allSettled, race, any in Depth*
  * **Link**: [Watch on YouTube](https://www.youtube.com/watch?v=H7pmw01_J5E)
  * **Key Takeaways**: Complete breakdown of fail-fast semantics, AggregateError, and short-circuit rules.
* **Video**: *Async/Await Internals & Execution Context Suspension*
  * **Link**: [Watch on YouTube](https://www.youtube.com/watch?v=6nv3qy3oNkc)
  * **Key Takeaways**: How async functions suspend execution contexts on the Call Stack.

### 2. Hitesh Choudhary — Chai aur Code
* **Video**: *Event Loop in Node.js vs Browser (Hindi)*
  * **Link**: [Watch on YouTube](https://www.youtube.com/watch?v=ol5ZzM8lVw0)
  * **Key Takeaways**: libuv 6 phases, process.nextTick vs setImmediate, and timer resolution.
* **Video**: *How to Cancel API Requests in JavaScript using AbortController*
  * **Link**: [Watch on YouTube](https://www.youtube.com/watch?v=1X_yUhyP62Y)
  * **Key Takeaways**: AbortSignal, cleaning up TCP sockets, and timeout cancellations.

### 3. Sheryians Coding School
* **Video**: *Advanced Asynchronous JavaScript & Node.js Event Loop in Hindi*
  * **Link**: [Watch on YouTube](https://www.youtube.com/watch?v=vLnPwxZdW4Y)
  * **Key Takeaways**: Starvation traps, microtask checkpoints, and writing custom concurrency pools.

### 4. CodeWithHarry
* **Video**: *Node.js Event Loop, process.nextTick & setImmediate in Hindi*
  * **Link**: [Watch on YouTube](https://www.youtube.com/watch?v=BLla428b-bY)
  * **Key Takeaways**: Non-deterministic execution in main module vs guaranteed ordering in I/O callbacks.

---

## 📖 Official Documentation & Engine Internals

1. **MDN Web Docs — Intermediate Asynchronous Mechanisms**
   * [MDN: queueMicrotask()](https://developer.mozilla.org/en-US/docs/Web/API/queueMicrotask)
   * Standard specification for direct microtask queue scheduling.
   * [MDN: AbortController](https://developer.mozilla.org/en-US/docs/Web/API/AbortController)
   * The Web API for aborting asynchronous DOM and network requests.
   * [MDN: Promise.allSettled()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled)
   * Specification for non-short-circuiting promise orchestration.

2. **Node.js Official Documentation**
   * [Node.js: The Node.js Event Loop, Timers, and process.nextTick()](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/)
   * Authoritative breakdown of the 6 libuv phases (Timers, Pending, Idle/Prepare, Poll, Check, Close).

3. **ECMAScript® 2026 Language Specification**
   * [Section 27.2.4: Promise.any and AggregateError](https://tc39.es/ecma262/#sec-promise.any)
   * Official algorithm for short-circuiting on fulfillment and collecting rejection errors.

---

## 🎯 Targeted Drills & Practical Exercises

- [ ] **Drill 1**: Polyfill 'Promise.all()' from scratch handling empty iterables, non-promise values, and order preservation.
- [ ] **Drill 2**: Polyfill 'Promise.allSettled()' returning '{ status, value }' and '{ status, reason }' reports.
- [ ] **Drill 3**: Implement an 'asyncPool(concurrency, tasks)' concurrency limiter that never exceeds N active promises.
- [ ] **Drill 4**: Build a 'retryWithExponentialBackoff()' function that calculates dynamic delays with randomized jitter.
- [ ] **Drill 5**: Build an abortable 'fetchWithTimeout()' function that aborts the underlying network socket using 'AbortController'.
