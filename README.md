# 📝 Todo App (React)

A simple and well-structured **Todo List application** built using **React**.  
This project focuses on practicing core React concepts such as **Context API, Hooks, Forms, and useRef** while maintaining clean and readable code.

---

## 🚀 Features

- Add todo items with a due date
- Delete existing todo items
- Update todo name and due date
- Shows a message when the todo list is empty
- Responsive layout using Bootstrap
- Component-based clean architecture

---

## 🛠️ Tech Stack

- React
- JavaScript (ES6+)
- React Hooks (`useState`, `useContext`, `useRef`)
- Context API
- CSS Modules
- Bootstrap

---

## 📚 React Concepts Used

### 1. Context API
The Context API is used for **global state management**.  
It helps avoid prop drilling by providing shared data and functions to all components.

**Context provides:**
- Todo list data
- Add todo function
- Delete todo function
- Update todo function
- Update mode tracking

---

### 2. useState Hook
Used for managing component state such as:
- Todo list items
- Currently selected todo for updating

```js
const [todoitems, setTodoitems] = useState([]);
const [updateid, setUpdateId] = useState(null);


