<div align="center">

# 🌳 DOM Selectors, NodeList & HTMLCollection

### Complete revision notes — *Chai aur Code* JavaScript series (Video 32)

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
- [NodeList vs HTMLCollection](#-nodelist-vs-htmlcollection--the-live-vs-static-concept)
- [Not real arrays](#-nodelist-and-htmlcollection-are-not-real-arrays)
- [Converting to a real array](#-converting-to-a-real-array)
- [Why this matters before React](#️-why-this-lecture-matters-before-react)
- [Cheat sheet](#-quick-cheat-sheet)
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

> 💡 `querySelector` / `querySelectorAll` are the modern favorites — you can use any CSS selector syntax (`.class`, `#id`, `div > p`, `input[type="text"]`, etc). The older `getElementsBy...` methods only let you select by one criterion at a time.

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

## ⚡ NodeList vs HTMLCollection — the live vs static concept

> **The most important, most-tested concept in this whole lecture.**

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

## ⚛️ Why this lecture matters before React

Frameworks like React/Vue/Angular hide all of this manual DOM-selecting behind the scenes — but interviewers love asking about live vs static collections precisely *because* it's invisible once you're in React-land.

> Knowing it cold is what separates "I can build apps" from "I actually understand what's happening underneath."

---

## 📋 Quick cheat sheet

| Task | Code |
|---|---|
| One element by unique ID | `document.getElementById('id')` |
| First match of a CSS selector | `document.querySelector('.sel')` |
| All matches (static, frozen) | `document.querySelectorAll('.sel')` → NodeList |
| All matches by class (live, auto-updating) | `document.getElementsByClassName('cls')` → HTMLCollection |
| Search only inside one element | `el.querySelector(...)` / `el.querySelectorAll(...)` |
| Visible text only | `element.innerText` |
| Raw text incl. hidden | `element.textContent` |
| HTML markup as string | `element.innerHTML` |
| Change a style | `element.style.propertyName = "value"` |
| Convert collection → array | `Array.from(collection)` or `[...collection]` |
| Loop safely over any collection | `Array.from(collection).forEach(fn)` |

---

## 🧩 One-line mental model

```
textContent  →  everything, ignoring CSS
innerText    →  only what's visible, respecting CSS
innerHTML    →  the actual tags, as a string

querySelector       →  first match
querySelectorAll    →  all matches, frozen (NodeList)
getElementsBy...    →  all matches, live (HTMLCollection)

NodeList / HTMLCollection  →  look like arrays, act a little like arrays,
                               but aren't real arrays.
                               Array.from() them before using real array methods.
```

<div align="center">

---

*Made for revision · Chai aur Code — JS series · Video 32*

</div>
