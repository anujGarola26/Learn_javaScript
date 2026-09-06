# Module 08: DOM, Events, & Browser APIs — Curated Learning Resources (Tricky Tier)

Welcome to the pinnacle tier of **DOM, Events, and Browser APIs**. Below is a curated collection of master-level Hindi/Hinglish video deep-dives alongside authoritative browser specifications.

---

## 🎥 Top Recommended Video Tutorials (Hindi / Hinglish)

### 1. Akshay Saini — *Namaste JavaScript*
- **Event Loop, Microtask Interleaving & DOM Gotchas**:
  - [Namaste JavaScript: Episode 13 - Event Listeners & Memory Closures](https://www.youtube.com/watch?v=btj35KRe7_U)
  - [Namaste JavaScript: Episode 14 - Event Bubbling, Capturing & Delegation](https://www.youtube.com/watch?v=aVSf033ZaWA)
  - [Namaste JavaScript: Episode 15 - Trust Issues with Asynchronous Web APIs](https://www.youtube.com/watch?v=nQSz5vHN0JU)
  - *Key Concepts Covered*: Microtask draining between event listeners, detached DOM node leaks, event phase traps.

### 2. Hitesh Choudhary — *Chai aur Code*
- **Tricky DOM Edge Cases & Modern Browser Engines**:
  - [Chai aur JavaScript: Events In-Depth (Target vs CurrentTarget)](https://www.youtube.com/watch?v=_TjtAyMkiTI)
  - [Chai aur JavaScript: Web Components & Custom Elements](https://www.youtube.com/watch?v=abtsb5QkwtE)
  - *Key Concepts Covered*: Shadow DOM event retargeting, form control name collisions, SVG namespace requirements.

### 3. Sheryians Coding School — *Harsh Sharma*
- **Advanced Animations & Interaction Corner Cases**:
  - [Sheryians: Complex DOM Animations & CSS Transform Stacking](https://www.youtube.com/watch?v=5fb2aPlpsys)
  - *Key Concepts Covered*: CSS transform breaking `position: fixed`, mobile touch ghost clicks, focus trapping.

### 4. CodeWithHarry — *Sigma Web Development Course*
- **DOM Traps & Browser Internals**:
  - [Sigma Web Dev #74: Events, Event Bubbling & Capture Phase](https://www.youtube.com/watch?v=13gLTrz8n70)
  - [Sigma Web Dev #75: Callbacks, Microtasks & Event Interleaving](https://www.youtube.com/watch?v=9JaDBYPmpJk)
  - *Key Concepts Covered*: Live collection mutation traps, `document.write()` post-load wipeout.

---

## 📚 Authoritative Documentation & Specifications

1. **W3C & WHATWG Standards**:
   - [WHATWG DOM Living Standard: Event Dispatch Algorithm](https://dom.spec.whatwg.org/#dispatching-events)
   - [CSS Transforms Level 1: Containing Block Formation](https://www.w3.org/TR/css-transforms-1/#containing-block-percentage)
   - [W3C SVG 2: Element Creation and Namespaces](https://www.w3.org/TR/SVG2/struct.html)
   - [W3C UI Events: Default Actions and Cancellation](https://www.w3.org/TR/uievents/#event-flow)

2. **Google Chrome DevRel & Web.dev**:
   - [Tasks, Microtasks, Queues and Schedules (Jake Archibald)](https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/)
   - [Avoiding Forced Synchronous Layouts & Layout Thrashing](https://web.dev/articles/avoid-large-complex-layouts-and-layout-thrashing)
   - [Shadow DOM v1: Self-Contained Web Components](https://web.dev/articles/shadowdom-v1)

3. **MDN Web Docs**:
   - [Event.composedPath()](https://developer.mozilla.org/en-US/docs/Web/API/Event/composedPath)
   - [Document.createElementNS()](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElementNS)
   - [Node.cloneNode()](https://developer.mozilla.org/en-US/docs/Web/API/Node/cloneNode)
   - [WeakRef and FinalizationRegistry](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakRef)

---

## 💡 Quick Self-Check Questions Before Mastery

1. Why does clicking a button programmatically via `button.click()` run microtasks AFTER all listeners, whereas a real user click runs microtasks BETWEEN listeners?
2. Why does calling `document.createElement('svg')` create an invalid `HTMLUnknownElement` rather than an `SVGSVGElement`?
3. How does applying CSS `transform` to an ancestor break `position: fixed` on all of its descendants?
4. What is the Form Control Name Shadowing Trap, and how does `HTMLFormElement.prototype.submit.call(form)` protect against it?
