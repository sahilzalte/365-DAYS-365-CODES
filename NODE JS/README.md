# Node.js Fundamentals (Day 85 - Day 87)

Introduction to server-side JavaScript using Node.js, covering core modules, file system operations, and asynchronous programming.

## 📚 Overview

This folder contains 3 days of Node.js fundamentals, introducing server-side JavaScript development, core Node.js modules, and async patterns.

## 📁 Folder Structure

| Day | Topic | Files |
|-----|-------|-------|
| **DAY 85** | Node.js Basics & HTTP Server | server.js, myserver.js, package.json |
| **DAY 86** | Modules & Module System | main.js, mymodule.js, mymodule2.js, index.html, package.json |
| **DAY 87** | File System & Path Module | main.js, mainpromise.js, aboutpath.js, Sahil.txt, Sahil2.txt, package.json |

## 🎯 Learning Path

### Day 85: Node.js & HTTP Server
**Topics Covered:**
- Introduction to Node.js runtime
- Creating basic HTTP servers
- Handling HTTP requests and responses
- Understanding Node.js event loop

**Key Concepts:**
- `http` module
- Server creation and listening
- Request/response objects
- Port binding

### Day 86: Module System
**Topics Covered:**
- CommonJS module system
- Creating custom modules
- Exporting and importing modules
- Module caching
- Serving static HTML files

**Key Concepts:**
- `module.exports` and `require()`
- Creating reusable modules
- Organizing code into separate files
- Module patterns

### Day 87: File System & Path Operations
**Topics Covered:**
- File system operations (read, write, append, delete)
- Synchronous vs asynchronous file operations
- Path module for file path manipulation
- Promise-based file operations

**Key Concepts:**
- `fs` module (callbacks)
- `fs.promises` API
- `path` module
- Working with text files
- Async/await with file operations

## 🚀 Getting Started

### Prerequisites
- Node.js installed (v14+ recommended)
- Basic JavaScript knowledge
- Terminal/Command prompt familiarity

### Running the Examples

1. **Navigate to a day folder:**
   ```bash
   cd "DAY 85"
   ```

2. **Install dependencies (if package.json exists):**
   ```bash
   npm install
   ```

3. **Run the JavaScript file:**
   ```bash
   node server.js
   # or
   node main.js
   ```

4. **For HTTP servers:**
   - Run the server script
   - Open browser and navigate to `http://localhost:3000` (or specified port)

## 📖 How to Use This Folder

- **Sequential Learning**: Start from Day 85 and progress through each day
- **Hands-on Practice**: Run each file and observe the output
- **Experiment**: Modify the code and see how it affects behavior
- **Build Foundation**: These concepts are essential for Express.js and backend development

## 🛠️ Tools & Technologies

- **Node.js** - JavaScript runtime
- **npm** - Node Package Manager
- **Core Modules**: http, fs, path
- Terminal/Command Line

## 💡 Key Topics Covered

✅ Node.js Runtime Environment  
✅ HTTP Server Creation  
✅ CommonJS Module System  
✅ File System Operations (Read/Write/Append/Delete)  
✅ Asynchronous Programming (Callbacks, Promises, Async/Await)  
✅ Path Module & File Path Manipulation  
✅ Request/Response Handling  
✅ Serving Static Files  

## 📝 Common Commands

```bash
# Run a Node.js file
node filename.js

# Initialize a new Node.js project
npm init -y

# Install a package
npm install package-name

# Check Node.js version
node --version

# Check npm version
npm --version
```

## 🔍 Code Examples

### Day 85: Creating a Basic Server
```javascript
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
});

server.listen(3000);
```

### Day 86: Creating a Module
```javascript
// mymodule.js
function greet(name) {
  return `Hello, ${name}!`;
}

module.exports = { greet };

// main.js
const myModule = require('./mymodule');
console.log(myModule.greet('World'));
```

### Day 87: Reading Files with Promises
```javascript
const fs = require('fs').promises;

async function readFile() {
  const data = await fs.readFile('Sahil.txt', 'utf-8');
  console.log(data);
}
```

## 🎓 Learning Outcomes

By completing this folder, you will:
- Understand the Node.js runtime and event loop
- Create basic HTTP servers
- Work with the CommonJS module system
- Perform file system operations
- Handle asynchronous operations using callbacks, promises, and async/await
- Manipulate file paths using the path module
- Build a foundation for Express.js and backend development

## 🔗 Next Steps

After completing Node.js fundamentals, continue to:
- **Express.js** (Days 88-93) - Web application framework
- **MongoDB** (Days 94-99) - Database integration
- **Full-Stack Development** - Combine frontend and backend

## 📚 Additional Resources

- [Node.js Official Documentation](https://nodejs.org/docs/)
- [Node.js Guides](https://nodejs.org/en/docs/guides/)
- [npm Documentation](https://docs.npmjs.com/)

---

**Happy Learning! 🚀**

Master the fundamentals of Node.js - the foundation of modern backend development!
