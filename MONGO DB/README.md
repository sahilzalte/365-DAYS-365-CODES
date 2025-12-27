# MongoDB Database (Day 94 - Day 99)

Learn MongoDB - a powerful NoSQL database for modern web applications, and integrate it with Node.js using Mongoose.

## 📚 Overview

This folder contains 5 days of MongoDB fundamentals, covering database operations, Mongoose ODM, schema design, and building full-stack applications with MongoDB integration.

## 📁 Folder Structure

| Day | Topic | Files | Key Features |
|-----|-------|-------|--------------|
| **DAY 94** | MongoDB Basics & Playground | playground-1.mongodb.js | Basic queries, MongoDB Playground |
| **DAY 95** | CRUD Operations | criud.mongodb.js | Create, Read, Update, Delete |
| **DAY 96** | Mongoose Integration | main.js, package.json, models/Todo.js | Mongoose schemas, Todo model |
| **DAY 97** | Advanced Mongoose | main.js, package.json | Model operations, queries |
| **DAY 99** | Full-Stack Integration | main.js, package.json, Models/Employee.js, views/index.ejs | EJS views, Employee management |

## 🎯 Learning Path

### Day 94: MongoDB Fundamentals
**Topics Covered:**
- Introduction to NoSQL databases
- MongoDB document structure
- Collections and documents
- Basic queries in MongoDB Playground
- MongoDB Shell commands

**Key Concepts:**
- JSON/BSON data format
- Document-oriented storage
- MongoDB Compass/Playground
- Basic CRUD syntax
- Query operators

### Day 95: CRUD Operations
**Topics Covered:**
- Creating documents (insertOne, insertMany)
- Reading documents (find, findOne)
- Updating documents (updateOne, updateMany)
- Deleting documents (deleteOne, deleteMany)
- Query filters and operators

**Key Concepts:**
- `db.collection.insertOne()`
- `db.collection.find()`
- `db.collection.updateOne()`
- `db.collection.deleteOne()`
- Query operators ($eq, $gt, $lt, $in, $and, $or)

### Day 96: Mongoose ODM (Object Data Modeling)
**Topics Covered:**
- Installing and configuring Mongoose
- Creating schemas and models
- Schema validation
- Mongoose CRUD operations
- Connection to MongoDB

**Key Concepts:**
- Schema definition
- Model creation
- Data validation
- Mongoose methods
- Database connection

### Day 97: Advanced Mongoose Operations
**Topics Covered:**
- Advanced queries
- Mongoose middleware
- Virtual properties
- Query building
- Error handling

**Key Concepts:**
- Query chaining
- Pre/post hooks
- Custom methods
- Query helpers
- Mongoose plugins

### Day 99: Full-Stack Application
**Topics Covered:**
- Integrating MongoDB with Express
- Rendering data with EJS
- Employee management system
- RESTful API with database
- Complete CRUD application

**Key Concepts:**
- Express + Mongoose integration
- MVC pattern
- View rendering
- Form handling
- Database operations in routes

## 🚀 Getting Started

### Prerequisites
- Node.js and npm installed
- MongoDB installed locally OR MongoDB Atlas account
- MongoDB Compass (optional, for GUI)
- Completed Node.js and Express.js fundamentals

### MongoDB Installation Options

**Option 1: MongoDB Atlas (Cloud - Recommended for Beginners)**
1. Create account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free cluster
3. Get connection string
4. No local installation needed

**Option 2: Local MongoDB Installation**
1. Download from [MongoDB Downloads](https://www.mongodb.com/try/download/community)
2. Install MongoDB Community Server
3. Start MongoDB service
4. Default connection: `mongodb://localhost:27017`

### Running the Projects

**Day 94-95 (MongoDB Playground):**
```bash
# Use MongoDB Compass Playground or MongoDB Shell
mongosh
# Paste and run the .mongodb.js files
```

**Days 96-99 (Node.js + Mongoose):**
```bash
# Navigate to day folder
cd "DAY 96"

# Install dependencies
npm install

# Update connection string in main.js if needed
# Run the application
node main.js
```

## 📖 How to Use This Folder

- **Sequential Learning**: Start from Day 94 and progress in order
- **Hands-on Practice**: Run queries and see results in real-time
- **Experiment**: Modify queries and schemas to understand behavior
- **Build Projects**: Day 99 demonstrates complete integration

## 🛠️ Tools & Technologies

- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM for Node.js
- **MongoDB Compass** - GUI for MongoDB
- **MongoDB Playground** - Query testing environment
- **Express.js** - Web framework (Day 99)
- **EJS** - Templating engine (Day 99)

## 💡 Key Topics Covered

### MongoDB Fundamentals
✅ NoSQL Database Concepts  
✅ Collections & Documents  
✅ BSON Data Format  
✅ MongoDB Shell Commands  
✅ Query Operators  
✅ Indexing Basics  

### CRUD Operations
✅ Insert Operations (insertOne, insertMany)  
✅ Read Operations (find, findOne)  
✅ Update Operations (updateOne, updateMany, findOneAndUpdate)  
✅ Delete Operations (deleteOne, deleteMany)  
✅ Query Filters & Operators  
✅ Projection & Sorting  

### Mongoose ODM
✅ Schema Definition  
✅ Model Creation  
✅ Data Validation  
✅ Schema Types  
✅ Custom Validators  
✅ Middleware (Pre/Post Hooks)  
✅ Virtual Properties  
✅ Instance Methods  
✅ Static Methods  
✅ Query Helpers  

### Full-Stack Integration
✅ Express + Mongoose  
✅ RESTful API with Database  
✅ MVC Architecture  
✅ Error Handling  
✅ Environment Variables  

## 📝 Code Examples

### MongoDB CRUD Operations (Day 94-95)
```javascript
// Insert
db.users.insertOne({ name: "John", age: 30 });

// Find
db.users.find({ age: { $gt: 25 } });

// Update
db.users.updateOne(
  { name: "John" },
  { $set: { age: 31 } }
);

// Delete
db.users.deleteOne({ name: "John" });
```

### Mongoose Schema & Model (Day 96)
```javascript
const mongoose = require('mongoose');

// Define Schema
const TodoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: String,
  completed: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Create Model
const Todo = mongoose.model('Todo', TodoSchema);

module.exports = Todo;
```

### Mongoose CRUD Operations
```javascript
const Todo = require('./models/Todo');

// Create
const newTodo = new Todo({
  title: 'Learn MongoDB',
  description: 'Complete MongoDB tutorial'
});
await newTodo.save();

// Read
const todos = await Todo.find();
const todo = await Todo.findById(id);

// Update
await Todo.findByIdAndUpdate(id, {
  completed: true
});

// Delete
await Todo.findByIdAndDelete(id);
```

### Database Connection
```javascript
const mongoose = require('mongoose');

// Connection string
const mongoURI = 'mongodb://localhost:27017/myapp';
// Or MongoDB Atlas
// const mongoURI = 'mongodb+srv://user:pass@cluster.mongodb.net/myapp';

// Connect
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.error('Connection Error:', err));
```

### Express + Mongoose Integration (Day 99)
```javascript
const express = require('express');
const mongoose = require('mongoose');
const Employee = require('./Models/Employee');

const app = express();

// Middleware
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', async (req, res) => {
  const employees = await Employee.find();
  res.render('index', { employees });
});

app.post('/employees', async (req, res) => {
  const employee = new Employee(req.body);
  await employee.save();
  res.redirect('/');
});

app.listen(3000);
```

## 🔍 Common MongoDB Operators

### Comparison Operators
| Operator | Description | Example |
|----------|-------------|---------|
| `$eq` | Equal to | `{ age: { $eq: 25 } }` |
| `$ne` | Not equal | `{ age: { $ne: 25 } }` |
| `$gt` | Greater than | `{ age: { $gt: 25 } }` |
| `$gte` | Greater than or equal | `{ age: { $gte: 25 } }` |
| `$lt` | Less than | `{ age: { $lt: 25 } }` |
| `$lte` | Less than or equal | `{ age: { $lte: 25 } }` |
| `$in` | In array | `{ status: { $in: ['active', 'pending'] } }` |

### Logical Operators
| Operator | Description | Example |
|----------|-------------|---------|
| `$and` | Logical AND | `{ $and: [{ age: 25 }, { name: "John" }] }` |
| `$or` | Logical OR | `{ $or: [{ age: 25 }, { age: 30 }] }` |
| `$not` | Logical NOT | `{ age: { $not: { $eq: 25 } } }` |

### Update Operators
| Operator | Description | Example |
|----------|-------------|---------|
| `$set` | Set field value | `{ $set: { age: 26 } }` |
| `$inc` | Increment value | `{ $inc: { age: 1 } }` |
| `$push` | Add to array | `{ $push: { tags: "new" } }` |
| `$pull` | Remove from array | `{ $pull: { tags: "old" } }` |

## 📦 Typical Project Structure (Day 99)

```
DAY 99/
├── main.js              # Express app with routes
├── package.json         # Dependencies
├── Models/
│   └── Employee.js      # Mongoose model
└── views/
    └── index.ejs        # EJS template
```

## 🎓 Learning Outcomes

By completing this folder, you will:
- Understand NoSQL database concepts
- Perform CRUD operations in MongoDB
- Design database schemas with Mongoose
- Validate data using schema validation
- Integrate MongoDB with Express.js applications
- Build RESTful APIs with database persistence
- Implement MVC architecture with MongoDB
- Handle database connections and errors
- Use MongoDB operators for complex queries
- Deploy applications with MongoDB Atlas

## 🔗 Connection Strings

### Local MongoDB
```
mongodb://localhost:27017/database_name
```

### MongoDB Atlas (Cloud)
```
mongodb+srv://<username>:<password>@cluster.mongodb.net/<database>?retryWrites=true&w=majority
```

### Environment Variables (.env)
```env
MONGO_URI=mongodb://localhost:27017/myapp
# or
MONGO_URI=mongodb+srv://user:pass@cluster.mongodb.net/myapp
```

## 🐛 Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| Connection timeout | Check MongoDB is running, verify connection string |
| Authentication failed | Verify username/password in Atlas |
| Schema validation error | Check required fields and data types |
| Duplicate key error | Ensure unique fields don't have duplicates |
| DeprecationWarning | Update connection options in mongoose.connect() |

## 📚 Additional Resources

### Official Documentation
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Mongoose Documentation](https://mongoosejs.com/docs/)
- [MongoDB University](https://university.mongodb.com/) - Free courses

### Tools
- [MongoDB Compass](https://www.mongodb.com/products/compass) - GUI
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) - Cloud database
- [Studio 3T](https://studio3t.com/) - MongoDB IDE

### Learning Resources
- [MongoDB Manual](https://docs.mongodb.com/manual/)
- [Mongoose Guide](https://mongoosejs.com/docs/guide.html)
- [MongoDB Query Operators](https://docs.mongodb.com/manual/reference/operator/query/)

## 🔗 Next Steps

After mastering MongoDB, continue to:
- **Tailwind CSS** (Days 98-102) - Frontend styling
- **Hosting** (Days 103-104) - Deploy with MongoDB Atlas
- **React.js** (Days 105-120) - Frontend framework
- **MERN Stack Projects** - Build complete applications
- **Advanced MongoDB** - Aggregation, indexing, replication

---

**Happy Learning! 🍃**

Master MongoDB and build powerful, scalable database-driven applications!
