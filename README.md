# 📝 Todo App (React)

A well-structured **Todo List application** built using **React**.  
This project focuses on learning **advanced React state management** using **Context API + useReducer**, along with forms, refs, and clean component architecture.

---

## 🚀 Features

- ➕ Add todo items with a due date
- 🗑️ Delete existing todo items
- ✏️ Update todo name and due date
- 📭 Shows a message when the todo list is empty
- 🌍 Global state management (no prop drilling)
- 📱 Responsive UI using Bootstrap
- 🧩 Clean, modular component structure

---

## 🛠️ Tech Stack

- React
- JavaScript (ES6+)
- React Hooks
  - `useReducer`
  - `useState`
  - `useContext`
  - `useRef`
- Context API
- CSS Modules
- Bootstrap

---

## 📂 Project Structure

src/
│
├── Components/
│ ├── Container.jsx
│ ├── Input.jsx
│ ├── Display.jsx
│ └── Empty.jsx
│
├── Store/
│ └── TodoContext.jsx
│
├── App.jsx
└── main.jsx


---

## 🧠 React Concepts Used

### 1️⃣ Context API
Used for **global state sharing** across components.

Instead of passing props deeply, the todo state and actions are provided via a context provider.

**Context provides:**
- `todoitems`
- `additem`
- `deleteitem`
- `updateitem`
- `updatecompid`
- `updateid`

---

### 2️⃣ useReducer (Core Logic)

`useReducer` is used instead of `useState` to manage complex state updates.

It centralizes all todo operations into a **single reducer function**, making the logic:
- Predictable
- Scalable
- Easier to debug

#### Reducer Actions:
- `ADD_item`
- `Delete_item`
- `Update_item`

```js
const [todoitems, dispatch] = useReducer(TodoitemReducer, initialTodos);


---

If you want next, I can:
- Convert this to **Redux Toolkit**
- Add **LocalStorage persistence**
- Refactor into a **custom hook (`useTodo`)**
- Review this project like a **senior code reviewer**

Just tell me 👍
