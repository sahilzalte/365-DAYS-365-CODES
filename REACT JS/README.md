# React.js Frontend Library (Day 105 - Day 120)

Master React.js - a powerful JavaScript library for building dynamic, component-based user interfaces.

## 📚 Overview

This folder contains 16 days of React.js learning, covering fundamental concepts, hooks, state management, API integration, and building complete applications including a Todo List App.

## 📁 Folder Structure

### Fundamentals & Setup (Days 105-108)

| Day | Topic | Key Features |
|-----|-------|-------------|
| **DAY 105** | React Introduction & Setup | Create React App, JSX basics, WithoutReact.html comparison |
| **DAY 106** | Components & Props | Vite setup, functional components, props |
| **DAY 107** | State Management (useState) | State introduction, state updates |
| **DAY 108** | Component Composition | Multiple components, component organization |

### Intermediate Concepts (Days 109-114)

| Day | Topic | Key Features |
|-----|-------|-------------|
| **DAY 109** | Event Handling | onClick, onChange, form events |
| **DAY 110** | Conditional Rendering | if/else, ternary operators, && operator |
| **DAY 111** | Lists & Keys | map(), rendering lists, key prop |
| **DAY 112** | Forms & Controlled Components | Input handling, form submission |
| **DAY 113** | Component Lifecycle & Effects | useEffect hook, side effects, cleanup |
| **DAY 114** | **Todo List App Project** | Complete CRUD application |

### Advanced Topics (Days 115-120)

| Day | Topic | Key Features |
|-----|-------|-------------|
| **DAY 115** | Context API | Global state, useContext hook |
| **DAY 116** | Custom Hooks | Creating reusable hooks |
| **DAY 117** | React Router | Navigation, routes, links |
| **DAY 118** | API Integration | Fetch API, async/await |
| **DAY 119** | Full-Stack Integration | Frontend + Backend connection |
| **DAY 120** | Performance Optimization | useMemo, useCallback, React.memo |

## 🎯 Learning Path

### Phase 1: React Foundations (Days 105-108)
**Core Concepts:**
- Understanding React and Virtual DOM
- JSX syntax and rules
- Component creation (functional components)
- Props and data flow
- State management with useState
- Component composition and hierarchy

### Phase 2: Interactivity & Data (Days 109-114)
**Core Concepts:**
- Event handling patterns
- Conditional rendering techniques
- Rendering lists and keys
- Form handling and controlled inputs
- Side effects with useEffect
- Building a complete Todo application

### Phase 3: Advanced Patterns (Days 115-120)
**Core Concepts:**
- Context API for state management
- Creating custom hooks
- Client-side routing with React Router
- API calls and data fetching
- Backend integration
- Performance optimization techniques

## 🚀 Getting Started

### Prerequisites
- HTML, CSS, JavaScript fundamentals
- ES6+ features (arrow functions, destructuring, modules)
- Node.js and npm installed
- VS Code or similar IDE

### Running Projects

1. **Navigate to a day folder:**
   ```bash
   cd "DAY 105"
   # or navigate to specific project
   cd "DAY 105/sahil"
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   # or
   npm start
   ```

4. **Open in browser:**
   - Vite projects: Usually `http://localhost:5173`
   - CRA projects: Usually `http://localhost:3000`

## 📖 How to Use This Folder

- **Sequential Learning**: Progress through days in order (105 → 120)
- **Hands-on Practice**: Run each project and experiment
- **Build Projects**: Day 114 Todo App is a milestone project
- **Reference**: Return to specific concepts as needed

## 🛠️ Tools & Technologies

- **React.js** - UI library
- **Vite** - Build tool and dev server (most projects)
- **Create React App** - React setup tool (Day 105)
- **npm** - Package management
- **ESLint** - Code linting
- **React DevTools** - Browser extension for debugging

## 💡 Key Topics Covered

### React Core
✅ JSX Syntax & Rules  
✅ Components (Functional)  
✅ Props & Data Flow  
✅ State Management (useState)  
✅ Event Handling  
✅ Conditional Rendering  
✅ Lists & Keys  
✅ Forms & Controlled Components  

### React Hooks
✅ useState - State management  
✅ useEffect - Side effects  
✅ useContext - Global state  
✅ useCallback - Memoized callbacks  
✅ useMemo - Memoized values  
✅ Custom Hooks - Reusable logic  

### Advanced Concepts
✅ Context API  
✅ React Router  
✅ API Integration  
✅ Full-Stack Connection  
✅ Performance Optimization  
✅ Component Lifecycle  

## 📝 Common React Patterns

### Functional Component with State
```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
```

### useEffect Hook
```jsx
import { useEffect, useState } from 'react';

function DataFetcher() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(res => res.json())
      .then(setData);
  }, []); // Empty array = run once
  
  return <div>{/* render data */}</div>;
}
```

### Conditional Rendering
```jsx
function Greeting({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? (
        <h1>Welcome back!</h1>
      ) : (
        <h1>Please sign in</h1>
      )}
    </div>
  );
}
```

### List Rendering
```jsx
function TodoList({ todos }) {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}
```

### Form Handling
```jsx
function Form() {
  const [value, setValue] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', value);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input 
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
```

## 🔍 Project Highlights

### Day 114: Todo List App
**Features:**
- Add new todos
- Mark todos as complete
- Delete todos
- Filter todos (all/active/completed)
- Local storage persistence
- Clean, responsive UI

**Technologies:**
- React.js with Vite
- useState for state management
- useEffect for side effects
- Component composition

## 📦 Project Structure (Typical Vite React App)

```
project-folder/
├── public/              # Static assets
├── src/
│   ├── assets/         # Images, fonts, etc.
│   ├── components/     # React components
│   ├── App.jsx         # Main app component
│   ├── App.css         # App styles
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── index.html          # HTML template
├── package.json        # Dependencies
├── vite.config.js      # Vite configuration
└── eslint.config.js    # ESLint configuration
```

## 🎓 Learning Outcomes

By completing this folder, you will:
- Build component-based user interfaces
- Manage state effectively with hooks
- Handle user events and forms
- Work with React lifecycle and side effects
- Create reusable custom hooks
- Implement client-side routing
- Integrate with backend APIs
- Build complete, production-ready applications
- Optimize React application performance
- Follow React best practices and patterns

## 🔗 Next Steps

After mastering React.js, continue to:
- **Next.js** (Days 121-138) - Server-side rendering, file-based routing
- **MERN Projects** - Build full-stack applications
- **Advanced State Management** - Redux, Zustand, Recoil
- **TypeScript with React** - Type-safe React development

## 📚 Additional Resources

### Official Documentation
- [React Documentation](https://react.dev/)
- [React Hooks Reference](https://react.dev/reference/react)
- [Vite Documentation](https://vitejs.dev/)

### Learning Resources
- [React Official Tutorial](https://react.dev/learn)
- [React DevTools](https://react.dev/learn/react-developer-tools)
- [React Patterns](https://reactpatterns.com/)

### Component Libraries
- [Material-UI](https://mui.com/)
- [Chakra UI](https://chakra-ui.com/)
- [shadcn/ui](https://ui.shadcn.com/)

---

**Happy Coding! ⚛️**

Master React.js and build modern, interactive user interfaces!
