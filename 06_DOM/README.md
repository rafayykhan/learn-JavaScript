<div align="center">

# 🌳 DOM Selectors, Relationships & Manipulation

### Complete revision notes — *Chai aur Code* JavaScript series

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![DOM](https://img.shields.io/badge/DOM-Manipulation-blue?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Revision%20Ready-success?style=for-the-badge)

</div>

---

## 📑 Table of contents

- [What is the DOM](#-what-is-the-dom-quickly)
- [Selector methods](#-the-selector-methods)
- [textContent vs innerText vs innerHTML](#-textcontent-vs-innertext-vs-innerhtml)
- [Changing styles and content](#️-changing-styles-and-content-directly)
- [Scoped selection](#-scoped-selection--searching-inside-one-element)
- [DOM relationships: parent, child, sibling](#-dom-relationships-parent-child-sibling)
- [NodeList vs HTMLCollection](#-nodelist-vs-htmlcollection--the-live-vs-static-concept)
- [Not real arrays](#-nodelist-and-htmlcollection-are-not-real-arrays)
- [Converting to a real array](#-converting-to-a-real-array)
- [Creating brand-new elements](#-creating-brand-new-elements-from-scratch)
- [Editing & replacing existing elements](#️-editing--replacing-existing-elements)
- [Removing elements](#️-removing-elements)
- [CSS pseudo-selectors used in selection](#-css-pseudo-selectors-used-in-selection)
- [🔧 Generic cheat sheet — Create / Read / Update / Delete](#-generic-cheat-sheet--create-read-update-delete-any-element)
- [Why this matters before React](#️-why-this-matters-before-react)
- [Mental model](#-one-line-mental-model)

---

## 🌐 What is the DOM, quickly

Your HTML page becomes a tree of objects in the browser's memory called the **DOM (Document Object Model)**.

> `document` is the root object you talk to in JavaScript to read or change anything on the page — text, styles, attributes, structure.

---

## 🎯 The selector methods

How you "grab" an element from the page:

| Method | Returns | Selects by |
|---|---|---|
| `document.getElementById('id')` | Single `Element` (or `null`) | unique ID |
| `document.getElementsByClassName('cls')` | 🔵 `HTMLCollection` | class name |
| `document.getElementsByTagName('tag')` | 🔵 `HTMLCollection` | tag name (`div`, `p`, etc.) |
| `document.getElementsByName('name')` | 🟢 `NodeList` | the `name` attribute (mostly form inputs) |
| `document.querySelector('css-selector')` | Single `Element` (first match, or `null`) | any CSS selector |
| `document.querySelectorAll('css-selector')` | 🟢 `NodeList` | any CSS selector, **all** matches |

> 💡 `querySelector` / `querySelectorAll` are the modern favorites — you can use any CSS selector syntax (`.class`, `#id`, `div > p`, `input[type="text"]`, etc). The older `getElementsBy...` methods only let you select by one criterion at a time, and you can also select by class using `.` with `querySelectorAll` — e.g. `document.querySelectorAll('.parent')`.

```js
document.getElementById('main-title')       // one element
document.querySelector('.card')             // first .card on the page
document.querySelectorAll('.card')          // all .card elements (NodeList)
document.getElementsByClassName('card')     // all .card elements (HTMLCollection)
```

**Empty result behavior** — no match ≠ error, you just get an empty collection:

```js
document.getElementsByClassName('heading')
// HTMLCollection []   → empty, length: 0, but no crash
```

---

## 📝 textContent vs innerText vs innerHTML

**Setup:** an `<h1 id="title" class="DOM">` containing "HELLO WORLD" and a hidden `<span style="display:none">helloooo brother</span>` inside it.

```js
title.textContent
// '\n  HELLO WORLD\n  helloooo brother\n'

title.innerText
// 'HELLO WORLD'

title.innerHTML
// '\n  HELLO WORLD\n  <span style="display:none">\n    helloooo brother\n  </span>\n'
```

| Property | What it returns | Includes hidden text? | Includes HTML tags? |
|---|:---:|:---:|:---:|
| `textContent` | Raw text, including whitespace | ✅ | ❌ |
| `innerText` | Only text **actually visible** on screen | ❌ | ❌ |
| `innerHTML` | The actual HTML markup, as a string | ✅ | ✅ |

> ⚠️ They look similar 90% of the time — but the moment something is hidden with CSS, or you need the actual HTML structure back, the difference matters a lot.

---

## 🖌️ Changing styles and content directly

```js
title.style.backgroundColor = "Red"
// element.style.propertyName = "value"
// propertyName is camelCase (backgroundColor, not background-color)
// because JS object properties can't have hyphens

title.style.color = 'white'
title.innerText = 'Updated heading'        // change visible text
title.innerHTML = '<i>Updated</i>'         // change with HTML inside
title.setAttribute('id', 'main-heading')   // add/change an attribute
title.classList.add('highlight')           // add a CSS class
```

---

## 🔎 Scoped selection — searching *inside* one element

`querySelector` / `querySelectorAll` don't have to start from `document`. Call them on any element you already selected, and it searches **only inside that element's children**.

```js
const myList = document.querySelector('ul')

myList.querySelector('li')        // first <li> inside THIS ul only
myList.querySelectorAll('li')     // NodeList(3) — all <li> inside this ul only

const turnred = myList.querySelector('li')
turnred.style.backgroundColor = "Red"
```

> Useful when a page has many `<ul>`s but you only want to touch items inside one specific list — scoping prevents accidentally grabbing `<li>`s from a different list.

---

## 👨‍👩‍👧 DOM relationships: parent, child, sibling

Once you've selected one element, you can **walk the tree** from it — up to its parent, down to its children, or sideways to its siblings — without writing a brand-new selector each time.

**Example markup:**

```html
<div class="parent">
    <div class="day">Monday</div>
    <div class="day">Thuesday</div>
    <div class="day">Wednesday</div>
    <div class="day">thursday</div>
</div>
```

### Going down — parent → children

```js
const parent = document.querySelector('.parent')

parent.children            // HTMLCollection of direct children (element nodes only)
parent.children[0].innerHTML   // "Monday"   → array-like access works
parent.children[1].innerHTML   // "Thuesday"

parent.firstElementChild   // the very first child element
parent.lastElementChild    // the very last child element
```

> 🧠 `.children` only counts **element** children — it skips whitespace/text nodes automatically. (`.childNodes` would include those too — see the NodeList section below.)

**Looping through children directly (HTMLCollection, index-based loop):**

```js
for (let i = 0; i < parent.children.length; i++) {
    console.log(parent.children[i].innerHTML);
    parent.children[i].style.color = "cyan";
}
```

**Looping the "array" way (convert first, avoids any parent/child styling conflicts):**

```js
const convertingIntoAnArray = Array.from(parent.children)

convertingIntoAnArray.forEach((day) => (
    day.style.color = "red" // it's a real array now, so you can style
                             // each child directly without conflict
));
```

### Going up — child → parent

```js
const dayOne = document.querySelector('.day')
dayOne.parentElement   // → goes straight from a child back up to its parent
```

### Quick relationship reference

| Relationship | Property |
|---|---|
| All children (elements only) | `el.children` |
| All children (incl. text/comment nodes) | `el.childNodes` |
| First child element | `el.firstElementChild` |
| Last child element | `el.lastElementChild` |
| Parent element | `el.parentElement` |
| Next sibling element | `el.nextElementSibling` |
| Previous sibling element | `el.previousElementSibling` |

---

## ⚡ NodeList vs HTMLCollection — the live vs static concept

> **The most important, most-tested concept in this whole topic.**

```js
document.querySelector('h2')
// <h2>one</h2>   → first match only

document.querySelectorAll('h2')
// NodeList(5) [h2, h2, h2, h2, h2]   → every matching <h2>, frozen at this moment

document.getElementsByClassName('class-item')
// HTMLCollection(3) [...]   → every matching element, but "live"
```

<table>
<tr><th>🔵 HTMLCollection</th><th>🟢 NodeList</th></tr>
<tr>
<td><b>Live</b> — not a saved list, it's a live window into the DOM. Every time you check <code>.length</code> or loop over it, it re-checks the actual page. Add a matching element later → it updates automatically.</td>
<td><b>Static</b> — a frozen snapshot taken the exact moment you called the method. Add an element after that → it has no idea, still shows the old contents.</td>
</tr>
</table>

> 🧠 Exception to remember: `childNodes` returns a *live* NodeList. So "NodeList = always static" isn't 100% universal — but `querySelectorAll` specifically gives a static one, which is what you'll use most of the time.

This matters because if you cache a collection early and elements get added/removed later (think: a to-do list app), an HTMLCollection silently reflects the change while a NodeList won't — classic source of confusing bugs.

---

## 🚫 NodeList and HTMLCollection are NOT real arrays

```js
const liList = document.querySelectorAll('li')
liList[0].style
// you CAN index into it like an array: liList[0], liList[1] ...
liList[0].style.backgroundColor = 'Blue'
```

You can use `[index]` and `.length` — but you **cannot** use real array methods like `.map()`, `.filter()`, `.reduce()` directly. `.forEach()` *does* work directly on a `NodeList` in modern browsers, but **not** on an `HTMLCollection`.

```js
// ✅ Works on NodeList:
document.querySelectorAll('.item').forEach(function (item) {
  item.style.color = 'orange';
});

// ❌ Does NOT work on HTMLCollection:
document.getElementsByClassName('item').forEach(...)   // error
```

---

## 🔄 Converting to a real array

```js
const classList = document.getElementsByClassName('class-item')
// HTMLCollection(3) [li.class-item, li.class-item, li.class-item]

Array.from(classList)
// (3) [li.class-item, li.class-item, li.class-item]   → now a REAL array

// spread syntax works too:
const arr2 = [...classList]
```

<details>
<summary>💭 Side note: <code>Array.from('class-item')</code> on a string</summary>
<br>

Passing a plain string instead of a collection splits it into individual characters:

```js
Array.from('class-item')
// ['c','l','a','s','s','-','i','t','e','m']
```

That's `Array.from` doing what it does for any iterable — strings are iterable too, so it spreads into characters. It only becomes "the array of li elements" once you pass it the actual collection, not a string.

</details>

Once converted, all normal array methods are available:

```js
const arryOfcalssList = Array.from(classList)

arryOfcalssList.forEach((li) => (
    li.style.color = 'red'
))
// every li with class "class-item" turns red text
```

> ✅ **Universal fix:** whenever you get a NodeList/HTMLCollection and want `.map()`, `.filter()`, `.forEach()`, etc. — convert with `Array.from()` first, then use it like any normal array.

---

## ✨ Creating brand-new elements from scratch

Up until now we were only *selecting* elements that already existed in the HTML. Now: building elements that don't exist yet, purely from JavaScript.

```js
// Step 1: create the element IN MEMORY
// At this point it is NOT visible on the webpage yet
const div = document.createElement("div");
console.log(div);   // <div></div>  → exists, but nowhere on the page

// Step 2: configure it like any normal element
div.className = "main";                 // add a class → class="main"

div.id = Math.round(Math.random() * 10 + 1);
// Math.random() → 0 to 1
// * 10           → 0 to 10
// + 1            → 1 to 11
// Math.round()   → nearest whole number → random id between 1 and 11

div.setAttribute("title", "the title has been generated");
// adds a plain HTML attribute → shows as a tooltip on hover

div.style.backgroundColor = "Cyan";
div.style.color = "Black";

// Step 3: give it text content using a text node
const addtext = document.createTextNode("Hey its me Rafay khan");
div.appendChild(addtext);
// div is now: <div class="main" ...>Hey its me Rafay khan</div>

// Step 4: THIS is the moment it actually appears on the page
document.body.appendChild(div);
```

> 🧠 **Key idea:** `createElement()` only builds the element in memory. Nothing shows up visually until you `appendChild()` (or similar) it into a parent that is *already* part of the live page — usually `document.body` or some container inside it.

### A cleaner, reusable pattern (function + appendChild)

```js
function addlanguage(langName) {
    const li = document.createElement('li');
    li.textContent = `${langName}`;
    document.querySelector('.language').appendChild(li);
}

addlanguage('python');
addlanguage('goLang');
addlanguage('C++');
```

This is the real-world pattern: wrap "create → set content → append" inside a function, then call it as many times as you need (e.g. rendering a list from an array of data).

---

## ✏️ Editing & replacing existing elements

Two different ways to swap out an element that already exists on the page:

**Method 1 — `replaceWith()`:** build a brand-new element, then swap the old one for it.

```js
const secondlang = document.querySelector("li:nth-child(2)")
const newLi = document.createElement('li')
newLi.textContent = 'mojo'
secondlang.replaceWith(newLi)
// the 2nd <li> is now completely replaced by the new one
```

**Method 2 — `outerHTML`:** directly overwrite the element's own tag with new HTML as a string.

```js
const lang = document.querySelector("li:last-child")
lang.outerHTML = '<li>TypeScript</li>'
```

> 🧠 **`innerHTML` vs `outerHTML`:** `innerHTML` replaces what's *inside* the tag, keeping the tag itself. `outerHTML` replaces the *entire element*, tag and all — like it never existed and a new one took its exact place in the tree.

---

## 🗑️ Removing elements

```js
const removeLang = document.querySelector("li:nth-child(2)")
removeLang.remove()
```

The modern, simplest way: just call `.remove()` directly on the element you want gone. (The older-school way was `parentElement.removeChild(childElement)` — `.remove()` does the same job with less code.)

---

## 🧷 CSS pseudo-selectors used in selection

These work inside `querySelector` / `querySelectorAll` exactly like they would in a CSS file:

| Selector | Meaning |
|---|---|
| `li:nth-child(2)` | the 2nd child (1-indexed) among its siblings |
| `li:first-child` | the first child among its siblings |
| `li:last-child` | the last child among its siblings |
| `li:nth-child(odd)` / `:nth-child(even)` | every odd/even positioned child |

---

## 🔧 Generic cheat sheet — Create / Read / Update / Delete any element

A reference you can use for *any* DOM task, not just the examples above.

### ➕ Create

| Goal | Code |
|---|---|
| Create a new element | `const el = document.createElement('tagName')` |
| Create a plain text node | `const t = document.createTextNode('text')` |
| Insert at the end of a parent | `parent.appendChild(el)` |
| Insert at the start of a parent | `parent.prepend(el)` |
| Insert before a specific element | `parent.insertBefore(newEl, referenceEl)` |
| Insert right before a reference element | `referenceEl.before(newEl)` |
| Insert right after a reference element | `referenceEl.after(newEl)` |
| Duplicate an existing element | `const copy = el.cloneNode(true)` *(true = include children too)* |

### 👀 Read

| Goal | Code |
|---|---|
| Get visible text | `el.innerText` |
| Get raw text (incl. hidden) | `el.textContent` |
| Get inner HTML as string | `el.innerHTML` |
| Get an attribute's value | `el.getAttribute('attr')` |
| Check if it has a class | `el.classList.contains('cls')` |

### 🔁 Update

| Goal | Code |
|---|---|
| Change visible text | `el.innerText = 'new text'` |
| Change inner HTML | `el.innerHTML = '<span>new</span>'` |
| Add a class | `el.classList.add('cls')` |
| Remove a class | `el.classList.remove('cls')` |
| Toggle a class on/off | `el.classList.toggle('cls')` |
| Set/change an attribute | `el.setAttribute('attr', 'value')` |
| Remove an attribute | `el.removeAttribute('attr')` |
| Change a style property | `el.style.property = 'value'` |
| Replace the whole element | `el.replaceWith(newEl)` |
| Replace via raw HTML | `el.outerHTML = '<tag>...</tag>'` |

### ➖ Delete

| Goal | Code |
|---|---|
| Remove one element | `el.remove()` |
| Remove all children of a parent | `parent.innerHTML = ''` |
| Older-style remove (still works) | `parent.removeChild(child)` |

---

## ⚛️ Why this matters before React

Frameworks like React/Vue/Angular hide all of this manual DOM-selecting and manipulating behind the scenes — but interviewers love asking about live vs static collections, and "how would you do X with vanilla JS," precisely *because* it's invisible once you're in React-land.

> Knowing it cold is what separates "I can build apps" from "I actually understand what's happening underneath."

---

## 🧩 One-line mental model

```
textContent  →  everything, ignoring CSS
innerText    →  only what's visible, respecting CSS
innerHTML    →  the actual tags, as a string

querySelector       →  first match
querySelectorAll    →  all matches, frozen (NodeList)
getElementsBy...    →  all matches, live (HTMLCollection)

.children            →  down, element children only
.firstElementChild    →  down, just the first one
.lastElementChild     →  down, just the last one
.parentElement        →  up, one level

createElement()  →  build in memory
appendChild()     →  make it visible by attaching to the live tree
replaceWith() / outerHTML  →  swap an element entirely
remove()          →  delete it

NodeList / HTMLCollection  →  look like arrays, act a little like arrays,
                               but aren't real arrays.
                               Array.from() them before using real array methods.
```

<div align="center">

---

*Made for revision · Chai aur Code — JS series*

</div>
