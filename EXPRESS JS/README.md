# Express.js Web Framework (Day 88 - Day 93)

Learn Express.js - the most popular Node.js web application framework for building robust APIs and web applications.

## 📚 Overview

This folder contains 6 days of Express.js fundamentals, covering routing, middleware, static file serving, templating engines, and file handling.

## 📁 Folder Structure

| Day | Topic | Files & Features |
|-----|-------|------------------|
| **DAY 88** | Express.js Basics & Static Files | main.js, package.json, public/Sahil.txt |
| **DAY 89** | Routing & Multiple Routes | main.js, package.json, routes/blog.js, routes/shop.js, templates/index.html, public/mypage.html |
| **DAY 90** | Middleware & Logging | main.js, package.json, logs.txt, routes/blog.js, public/Sahil.txt |
| **DAY 91** | File Upload & Handling | index.js, package.json, directories for different file types (docx/, jpg/, pdf/, png/, rmskin/) |
| **DAY 92** | Templating with EJS | main.js, package.json, Views/index.ejs, Views/navbar.ejs |
| **DAY 93** | Advanced Express Concepts | index.js, package.json |

## 🎯 Learning Path

### Day 88: Express.js Foundation
**Topics Covered:**
- Setting up Express.js application
- Creating basic routes
- Serving static files
- Understanding Express middleware

**Key Concepts:**
- `express()` initialization
- `app.get()` for routes
- `express.static()` for static files
- Basic request/response handling

### Day 89: Routing & Modular Routes
**Topics Covered:**
- Creating multiple routes
- Route separation and organization
- Using Express Router
- Serving different file types

**Key Concepts:**
- Modular routing with `express.Router()`
- Route files (blog.js, shop.js)
- Serving HTML templates
- Route parameters

### Day 90: Middleware & Request Processing
**Topics Covered:**
- Understanding Express middleware
- Creating custom middleware
- Logging requests
- Middleware chaining

**Key Concepts:**
- `app.use()` middleware
- Request logging to files
- Next() function
- Middleware execution order

### Day 91: File Upload & Management
**Topics Covered:**
- Handling file uploads
- Organizing uploaded files by type
- File type detection
- Saving files to different directories

**Key Concepts:**
- Multer or similar file upload middleware
- File system organization
- File type validation
- Multiple file type support (docx, jpg, pdf, png, rmskin)

### Day 92: EJS Templating Engine
**Topics Covered:**
- Setting up EJS as view engine
- Creating dynamic templates
- Passing data to views
- Template partials (navbar)

**Key Concepts:**
- `app.set('view engine', 'ejs')`
- `res.render()` method
- EJS syntax (<%= %>, <% %>)
- Template partials/includes

### Day 93: Advanced Express Features
**Topics Covered:**
- Advanced routing techniques
- Error handling
- Environment variables
- Best practices

## 🚀 Getting Started

### Prerequisites
- Node.js installed
- npm (Node Package Manager)
- Completed Node.js fundamentals (Days 85-87)
- Basic understanding of HTTP

### Installation & Running

1. **Navigate to a day folder:**
   ```bash
   cd "DAY 88"
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the server:**
   ```bash
   node main.js
   # or
   node index.js
   ```

4. **Access the application:**
   - Open browser: `http://localhost:3000` (or specified port)
   - Test different routes

## 📖 How to Use This Folder

- **Sequential Learning**: Complete days in order (88 → 93)
- **Hands-on Practice**: Run each server and test endpoints
- **Experiment**: Modify routes and middleware
- **Build Projects**: Apply concepts to create your own APIs

## 🛠️ Tools & Technologies

- **Express.js** - Web application framework
- **Node.js** - Runtime environment
- **EJS** - Templating engine
- **Middleware**: Body-parser, Morgan, Multer (file uploads)
- **npm** - Package management

## 💡 Key Topics Covered

✅ Express.js Setup & Configuration  
✅ Routing & Route Handlers  
✅ Static File Serving  
✅ Middleware Functions  
✅ Request/Response Cycle  
✅ Modular Route Organization  
✅ Logging & Request Processing  
✅ File Upload & Management  
✅ Templating with EJS  
✅ Dynamic Content Rendering  
✅ Error Handling  
✅ RESTful API Basics  

## 📝 Common Express Patterns

### Basic Server Setup
```javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Express!');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
```

### Using Middleware
```javascript
// Custom middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Built-in middleware
app.use(express.json());
app.use(express.static('public'));
```

### Modular Routing
```javascript
// routes/blog.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Blog Home');
});

module.exports = router;

// main.js
const blogRouter = require('./routes/blog');
app.use('/blog', blogRouter);
```

### EJS Templating
```javascript
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', { title: 'Home Page' });
});
```

## 🔍 Project Structure Examples

### Day 89 Structure
```
DAY 89/
├── main.js              # Main Express app
├── package.json         # Dependencies
├── routes/
│   ├── blog.js         # Blog routes
│   └── shop.js         # Shop routes
├── templates/
│   └── index.html      # HTML template
└── public/
    └── mypage.html     # Static page
```

### Day 92 Structure (EJS)
```
DAY 92/
├── main.js              # Express app with EJS
├── package.json
└── Views/
    ├── index.ejs       # Main template
    └── navbar.ejs      # Reusable partial
```

## 🎓 Learning Outcomes

By completing this folder, you will:
- Build Express.js web applications from scratch
- Create RESTful APIs with proper routing
- Implement middleware for various purposes
- Handle file uploads and static files
- Use templating engines (EJS) for dynamic content
- Organize code with modular routing
- Understand the request/response lifecycle
- Apply Express.js best practices

## 🔗 Next Steps

After mastering Express.js, continue to:
- **MongoDB** (Days 94-99) - Database integration
- **Tailwind CSS** (Days 98-102) - Frontend styling
- **React.js** (Days 105-120) - Frontend framework
- **Full MERN Stack** - Build complete applications

## 📚 Additional Resources

- [Express.js Official Documentation](https://expressjs.com/)
- [Express.js Guide](https://expressjs.com/en/guide/routing.html)
- [EJS Documentation](https://ejs.co/)
- [npm Express Package](https://www.npmjs.com/package/express)

---

**Happy Coding! 🚀**

Master Express.js and build powerful, scalable web applications and APIs!
