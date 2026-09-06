# 📌 Curated Learning Resources — Module 07: Asynchronous JS & Event Loop (Tricky Tier)

Welcome to the **Tricky / Expert Level** resource companion for Asynchronous JavaScript and Engine Internals.
This guide curates deep architectural masterclasses, engine specifications, and tricky interview walkthroughs covering the Zalgo anti-pattern, microtask output puzzles, DAG task graph resolution, token bucket rate limiting, Deadlock detection, and SingleFlight thundering herd shields.

---

## 🎥 Elite Video Tutorials (Hindi / Hinglish)

### 1. Akshay Saini — Namaste JavaScript
* **Video**: *The Tricky Output Questions in JavaScript Event Loop (Season 1)*
  * **Link**: [Watch on YouTube](https://www.youtube.com/watch?v=8zKuNo4ay8E)
  * **Key Takeaways**: Interleaving Promises, setTimeout, queueMicrotask, and Call Stack execution puzzles.
* **Video**: *What is Zalgo and Why It Kills Asynchronous Consistency in Node.js*
  * **Link**: [Watch on YouTube](https://www.youtube.com/watch?v=ap-6PPAuK1Y)
  * **Key Takeaways**: The danger of mixing sync and async callbacks, and how to write deterministic APIs.

### 2. Hitesh Choudhary — Chai aur Code
* **Video**: *Advanced JavaScript Async Output Questions & Interview Traps (Hindi)*
  * **Link**: [Watch on YouTube](https://www.youtube.com/watch?v=zgt5mF9NF10)
  * **Key Takeaways**: return vs return await in try/catch, async forEach bugs, and unhandled rejections.
* **Video**: *Building a Rate Limiter with Token Bucket Algorithm in JavaScript*
  * **Link**: [Watch on YouTube](https://www.youtube.com/watch?v=1X_yUhyP62Y)
  * **Key Takeaways**: Rate limiting, queuing bursts, and asynchronous token refilling.

### 3. Sheryians Coding School
* **Video**: *The Darkest Parts of Asynchronous JavaScript in Hindi*
  * **Link**: [Watch on YouTube](https://www.youtube.com/watch?v=kGI_IekSrhY)
  * **Key Takeaways**: Promise.race([]) permanent pending trap, microtask starvation, and deadlock prevention.

### 4. CodeWithHarry
* **Video**: *Node.js Advanced Concurrency: Async Mutex & Single-Flight Pattern in Hindi*
  * **Link**: [Watch on YouTube](https://www.youtube.com/watch?v=y322Z_u662Y)
  * **Key Takeaways**: Deduplicating in-flight requests, avoiding cache stampedes, and Mutex locking.

---

## 📖 Official Documentation & Engine Internals

1. **ECMAScript® 2026 Language Specification**
   * [Section 27.2.5: Properties of the Promise Prototype Object](https://tc39.es/ecma262/#sec-properties-of-the-promise-prototype-object)
   * The formal specification of Promise Reaction records and async execution steps.
   * [Section 27.2.4.6: Promise.try Proposal](https://tc39.es/proposal-promise-try/)
   * Standardized synchronization of synchronous and asynchronous errors.

2. **V8 Engine Blog**
   * [V8: Understanding the Cost of Await and Microtask Ticks](https://v8.dev/blog/fast-async)
   * How V8 reduced await ticks from 3 down to 1.

3. **Node.js Official Diagnostics & Best Practices**
   * [Node.js: Don't Starve the Event Loop](https://nodejs.org/en/docs/guides/dont-block-the-event-loop/)
   * Official guidance on partitioned execution, worker threads, and avoiding synchronous blocks.

---

## 🎯 Targeted Drills & Practical Exercises

- [ ] **Drill 1**: Predict the output of a 10-statement interleaved code snippet containing 'setTimeout', 'queueMicrotask', 'Promise.then', and 'async/await'.
- [ ] **Drill 2**: Implement an anti-Zalgo wrapper 'makeAsync(fn)' that forces synchronous callbacks to execute on the next microtask tick.
- [ ] **Drill 3**: Implement a 'SingleFlightDeduplicator' that collapses 50 concurrent requests for the same key into a single in-flight Promise.
- [ ] **Drill 4**: Build an asynchronous DAG dependency graph resolver using topological sorting that runs independent tasks concurrently.
- [ ] **Drill 5**: Explain why 'return promise' inside a 'try...catch' block fails to catch errors locally, and fix it using 'return await'.
