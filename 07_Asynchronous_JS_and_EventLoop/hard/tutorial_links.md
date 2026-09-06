# 📌 Curated Learning Resources — Module 07: Asynchronous JS & Event Loop (Hard Tier)

Welcome to the **Hard / Advanced Level** resource companion for Asynchronous JavaScript and System Architecture.
This guide curates deep-dive Hindi/Hinglish masterclasses, V8 engine blog specifications, and rigorous enterprise architecture walkthroughs covering Promises/A+ internals, libuv thread pool sizing, AsyncLocalStorage, cooperative task slicing, backpressure, and SharedArrayBuffer lock-free concurrency.

---

## 🎥 Elite Video Tutorials (Hindi / Hinglish)

### 1. Akshay Saini — Namaste JavaScript
* **Video**: *Creating a Promise, Chaining & Error Handling (Namaste JS Season 2)*
  * **Link**: [Watch on YouTube](https://www.youtube.com/watch?v=ap-6PPAuK1Y)
  * **Key Takeaways**: How Promises work under the hood, thenable unwrapping, and microtask reaction records.
* **Video**: *Async/Await vs Promise Chaining Deep Architectural Breakdown*
  * **Link**: [Watch on YouTube](https://www.youtube.com/watch?v=6nv3qy3oNkc)
  * **Key Takeaways**: Execution suspension, V8 generator co-runners, and async call stack stitching.

### 2. Hitesh Choudhary — Chai aur Code
* **Video**: *Node.js Internals, libuv & Thread Pool Architecture in Hindi*
  * **Link**: [Watch on YouTube](https://www.youtube.com/watch?v=ol5ZzM8lVw0)
  * **Key Takeaways**: UV_THREADPOOL_SIZE, thread contention, and synchronous crypto operations.
* **Video**: *AsyncLocalStorage & Distributed Tracing in Node.js*
  * **Link**: [Watch on YouTube](https://www.youtube.com/watch?v=1X_yUhyP62Y)
  * **Key Takeaways**: Context propagation, multi-tenant isolation, and OpenTelemetry request IDs.

### 3. Sheryians Coding School
* **Video**: *Concurrency, Web Workers & Shared Memory in JavaScript (Hindi)*
  * **Link**: [Watch on YouTube](https://www.youtube.com/watch?v=kGI_IekSrhY)
  * **Key Takeaways**: Dedicated workers, Atomics, SharedArrayBuffer, and lock-free synchronization.

### 4. CodeWithHarry
* **Video**: *Building High-Performance Node.js Microservices: Rate Limiting & Mutex in Hindi*
  * **Link**: [Watch on YouTube](https://www.youtube.com/watch?v=y322Z_u662Y)
  * **Key Takeaways**: Token Bucket algorithm, async Mutexes, and preventing race conditions in distributed systems.

---

## 📖 Official Documentation & Engine Internals

1. **Promises/A+ Specification**
   * [Promises/A+ Standard (Section 2: Specification)](https://promisesaplus.com/)
   * The definitive standard governing Promise state transitions, '.then()' chaining, and the recursive '[[Resolve]](promise, x)' algorithm.

2. **V8 Engine Blog**
   * [V8: Fast Async / Await and Zero-Cost Async Stack Traces](https://v8.dev/blog/fast-async)
   * Detailed breakdown of how V8 optimizes promise resolution jobs and reconstructs call stacks.

3. **Node.js Official Documentation**
   * [Node.js: AsyncLocalStorage & async_hooks](https://nodejs.org/api/async_context.html)
   * API guide for asynchronous context tracking and resource lifecycle hooks.

4. **ECMAScript® 2026 Language Specification**
   * [Section 25.4: Atomics and SharedArrayBuffer Memory Model](https://tc39.es/ecma262/#sec-atomics-object)
   * Formal specification of sequentially consistent memory barriers and lock-free primitives.

---

## 🎯 Targeted Drills & Practical Exercises

- [ ] **Drill 1**: Implement a custom 'MyPromise' class adhering strictly to the Promises/A+ specification with cycle detection.
- [ ] **Drill 2**: Build an asynchronous Token Bucket rate limiter that caps requests at 10 req/sec and queues burst traffic.
- [ ] **Drill 3**: Implement an 'AsyncMutex' supporting exclusive resource locking via 'runExclusive(fn)' with guaranteed release on errors.
- [ ] **Drill 4**: Build a cooperative task slicer 'cooperativeLoop()' that processes 100,000 items while yielding every 12ms to the Macrotask queue via 'MessageChannel'.
- [ ] **Drill 5**: Implement an out-of-order 'RaceShield' wrapper that discards stale search autocomplete responses.
