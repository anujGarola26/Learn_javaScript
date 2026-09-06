# Module 09: V8 Internals & Advanced Concepts — Curated Learning Resources (Easy Tier)

Welcome to the foundational tier of **V8 Internals & Advanced Concepts**. Below is a curated collection of premier Hindi/Hinglish video lectures by leading engineering educators alongside authoritative V8 research papers and documentation.

---

## 🎥 Top Recommended Video Tutorials (Hindi / Hinglish)

### 1. Akshay Saini — *Namaste JavaScript*
- **V8 Engine Internals & Execution Context**:
  - [Namaste JavaScript: Episode 1 - Execution Context & Call Stack](https://www.youtube.com/watch?v=ZvbzSrg0afE)
  - [Namaste JavaScript: Episode 16 - JS Engine Architecture & V8 Pipeline](https://www.youtube.com/watch?v=2WJL19wDH68)
  - *Key Concepts Covered*: Call stack execution, memory allocation, JIT compilation basics, AST parser.

### 2. Hitesh Choudhary — *Chai aur Code*
- **V8 Engine & Memory Spaces**:
  - [Chai aur JavaScript: How JavaScript Works Behind the Scenes](https://www.youtube.com/watch?v=ByhtOfLGdaU)
  - [Chai aur JavaScript: Memory Allocation in JavaScript (Stack vs Heap)](https://www.youtube.com/watch?v=7gwc-1czh30)
  - *Key Concepts Covered*: Stack vs Heap memory, primitive vs reference value storage, garbage collection basics.

### 3. Sheryians Coding School — *Harsh Sharma*
- **JavaScript Behind the Scenes**:
  - [Sheryians: Behind the Scenes of JavaScript - Execution Context & V8](https://www.youtube.com/watch?v=5fb2aPlpsys)
  - *Key Concepts Covered*: Global Execution Context, Global Proxy, variable environment creation.

### 4. CodeWithHarry — *Sigma Web Development Course*
- **V8 Compilation & Node.js Engine**:
  - [Sigma Web Dev #80: How V8 Executes JavaScript Code](https://www.youtube.com/watch?v=bL3pQ9mYt14)
  - [Sigma Web Dev #82: V8 Memory Leaks & Garbage Collection](https://www.youtube.com/watch?v=6b8n7i63mJ8)
  - *Key Concepts Covered*: Ignition interpreter, TurboFan optimizer, Cheney's Scavenger algorithm.

---

## 📚 Authoritative Documentation & Specifications

1. **Official V8 Engine Documentation (v8.dev)**:
   - [V8: Launching Ignition and TurboFan](https://v8.dev/blog/launching-ignition-and-turbofan)
   - [Fast Properties in V8 (Hidden Classes & In-Object Properties)](https://v8.dev/blog/fast-properties)
   - [Trash talk: the Orinoco garbage collector](https://v8.dev/blog/trash-talk)
   - [Elements kinds in V8](https://v8.dev/blog/elements-kinds)

2. **Google Chrome DevRel & Chromium Source**:
   - [Inside Look at Modern Web Browser (Part 3: Inner Workings of V8)](https://developer.chrome.com/blog/inside-browser-part3/)
   - [V8 Source: Heap Architecture and Object Memory Model](https://chromium.googlesource.com/v8/v8/+/main/src/heap/)

3. **ECMA International**:
   - [ECMA-262 ECMAScript Specification: Execution Contexts & Memory Model](https://tc39.es/ecma262/#sec-execution-contexts)

---

## 💡 Quick Self-Check Questions Before Advancing

1. Why does an integer fitting within 31 bits consume zero bytes on the V8 heap (SMI pointer tagging)?
2. What is the fundamental difference between the roles of Ignition (Interpreter) and TurboFan (Compiler)?
3. How do Hidden Classes (Shapes) enable V8 to access dynamic JavaScript object properties using static C++ memory offsets?
4. What is the Generational Hypothesis, and why does V8 split memory into New Space and Old Space?
