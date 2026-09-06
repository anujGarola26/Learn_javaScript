# Module 08: DOM, Events, & Browser APIs — Curated Learning Resources (Easy Tier)

Welcome to the foundational tier of **DOM, Events, and Browser APIs**. Below is a curated collection of premier Hindi/Hinglish video tutorials by renowned educators alongside authoritative specification references.

---

## 🎥 Top Recommended Video Tutorials (Hindi / Hinglish)

### 1. Akshay Saini — *Namaste JavaScript*
- **DOM & Event Listeners**:
  - [Namaste JavaScript: Episode 13 - Event Listeners & Closures](https://www.youtube.com/watch?v=btj35KRe7_U)
  - *Key Concepts Covered*: `addEventListener`, garbage collection of detached listeners, scope closures in event handlers.

### 2. Hitesh Choudhary — *Chai aur Code*
- **Complete DOM Manipulation Playlist**:
  - [Chai aur JavaScript: All DOM Selectors NodeList and HTMLCollection](https://www.youtube.com/watch?v=abtsb5QkwtE)
  - [Chai aur JavaScript: How to Create a New Element in DOM](https://www.youtube.com/watch?v=F18S84ZWG_Y)
  - [Chai aur JavaScript: Edit and Remove Elements in DOM](https://www.youtube.com/watch?v=F18S84ZWG_Y)
  - *Key Concepts Covered*: `getElementById`, `querySelector`, `querySelectorAll`, live `HTMLCollection` vs static `NodeList`, `createElement`, `appendChild`, `remove`.

### 3. Sheryians Coding School — *Harsh Sharma*
- **DOM Manipulation in 1 Shot**:
  - [Sheryians: Complete DOM Manipulation Crash Course](https://www.youtube.com/watch?v=5fb2aPlpsys)
  - *Key Concepts Covered*: Selecting elements, styling via JS, `classList`, dynamic element creation, event binding.

### 4. CodeWithHarry — *Sigma Web Development Course*
- **JavaScript DOM & Events Playlist**:
  - [Sigma Web Dev #66: Document Object Model in JavaScript](https://www.youtube.com/watch?v=7zgq8zG9g6Y)
  - [Sigma Web Dev #67: Children, Parent & Sibling Nodes in DOM](https://www.youtube.com/watch?v=Zbc8qLzD56U)
  - [Sigma Web Dev #70: Inserting & Removing Elements using JS](https://www.youtube.com/watch?v=f9xX3qK1DVE)
  - [Sigma Web Dev #74: Events, Event Bubbling & `addEventListener`](https://www.youtube.com/watch?v=13gLTrz8n70)
  - *Key Concepts Covered*: Element vs Node, childNodes vs children, DOM tree navigation, bubbling vs capturing.

---

## 📚 Authoritative Documentation & Specifications

1. **MDN Web Docs — DOM & Web APIs**:
   - [Introduction to the DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
   - [Document: querySelector() and querySelectorAll()](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
   - [Node vs Element Hierarchy](https://developer.mozilla.org/en-US/docs/Web/API/Node)
   - [EventTarget.addEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
   - [Event.preventDefault() vs Event.stopPropagation()](https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation)

2. **W3C / WHATWG DOM Living Standard**:
   - [WHATWG DOM Living Standard: Event Dispatch and Propagation](https://dom.spec.whatwg.org/#dispatching-events)
   - [WHATWG HTML Living Standard: The Document Object](https://html.spec.whatwg.org/multipage/dom.html#the-document-object)

3. **Google Chrome DevRel / Web.dev**:
   - [Critical Rendering Path: Constructing the Object Model](https://web.dev/articles/critical-rendering-path-constructing-the-object-model)
   - [Overview of the Event Model](https://web.dev/learn/html/event-overview)

---

## 💡 Quick Self-Check Questions Before Advancing

1. Can you explain why `parentNode.firstChild` is almost always a TextNode (`#text`) rather than an HTML tag?
2. Why is passing an anonymous inline arrow function to `addEventListener` problematic when you later try to invoke `removeEventListener`?
3. What is the precise mechanical difference between `e.target` and `e.currentTarget` in an event listener callback?
4. When should you use `DOMContentLoaded` instead of `window.onload`?
