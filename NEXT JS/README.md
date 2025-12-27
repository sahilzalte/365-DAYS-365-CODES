# Next.js React Framework (Day 121 - Day 138)

Master Next.js - the React framework for production with server-side rendering, static generation, and file-based routing.

## 📚 Overview

This folder contains 18 days of Next.js learning, covering fundamental concepts, routing, data fetching, API routes, deployment, and building real-world applications.

## 📁 Folder Structure

### Fundamentals (Days 121-126)

| Day | Topic | Key Features |
|-----|-------|-------------|
| **DAY 121** | Next.js Setup & Basics | App router, file-based routing, components |
| **DAY 122** | Pages & Navigation | Link component, routing, data.json |
| **DAY 123** | Layouts & Components | Shared layouts, component organization |
| **DAY 124** | API Routes | Creating backend endpoints, REST APIs |
| **DAY 125** | Server Actions | Server-side data mutations, file handling |
| **DAY 126** | Middleware | Request interception, authentication flow |

### Advanced Concepts (Days 127-134)

| Day | Topic | Key Features |
|-----|-------|-------------|
| **DAY 127** | Advanced Routing Techniques | - |
| **DAY 128** | Dynamic Routes | [slug] routes, params, dynamic pages |
| **DAY 129** | Layouts & Route Groups | Root layouts, nested layouts |
| **DAY 130** | Full-Stack App (PassOp) | Password manager with MongoDB |
| **DAY 131** | Database Integration | User actions, DB operations |
| **DAY 132** | Configuration & Optimization | next.config.mjs settings |
| **DAY 133** | SSR, SSG, ISR | Rendering strategies |
| **DAY 134** | Environment Variables | .env management, secrets |

### Projects & Deployment (Days 135-138)

| Day | Topic | Key Features |
|-----|-------|-------------|
| **DAY 135** | Advanced Config | next.config.mjs deep dive |
| **DAY 136** | URL Shortener (Bitlinks) | Complete URL shortening app |
| **DAY 137** | Linktree Clone | Bio link aggregator |
| **DAY 138** | Vercel Deployment | Production deployment guide |

## 🎯 Learning Path

### Phase 1: Next.js Foundations (Days 121-126)
**Core Concepts:**
- Next.js App Router architecture
- File-based routing system
- Server and Client Components
- Navigation with Link component
- API Routes for backend logic
- Server Actions for data mutations
- Middleware for request handling

### Phase 2: Advanced Features (Days 127-134)
**Core Concepts:**
- Dynamic routing with parameters
- Layout system and route groups
- Data fetching strategies (SSR, SSG, ISR)
- Database integration (MongoDB)
- Environment variable management
- Configuration and optimization

### Phase 3: Real-World Projects (Days 135-138)
**Projects:**
- **PassOp**: Password manager (MERN stack)
- **Bitlinks**: URL shortener with analytics
- **Linktree Clone**: Bio link aggregator
- Vercel deployment for production

## 🚀 Getting Started

### Prerequisites
- React.js fundamentals (Days 105-120)
- JavaScript ES6+ knowledge
- Node.js and npm installed
- Understanding of client/server architecture

### Running Next.js Projects

1. **Navigate to project folder:**
   ```bash
   cd "Day 121/sahil-first-app"
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   - Default: `http://localhost:3000`

5. **Build for production:**
   ```bash
   npm run build
   npm start
   ```

## 📖 How to Use This Folder

- **Sequential Learning**: Follow days in order (121 → 138)
- **Hands-on Practice**: Run and modify each project
- **Build Projects**: Days 130, 136, 137 are complete applications
- **Deploy**: Practice deployment with Day 138

## 🛠️ Tools & Technologies

- **Next.js 14+** - React framework
- **React 18+** - UI library
- **App Router** - File-based routing
- **Tailwind CSS** - Styling (in some projects)
- **MongoDB** - Database (PassOp project)
- **Vercel** - Deployment platform
- **TypeScript** - Type safety (optional)

## 💡 Key Topics Covered

### Next.js Core
✅ App Router Architecture  
✅ File-Based Routing  
✅ Server Components  
✅ Client Components  
✅ Layouts & Templates  
✅ Navigation (Link, useRouter)  
✅ Metadata & SEO  

### Data Fetching
✅ Server-Side Rendering (SSR)  
✅ Static Site Generation (SSG)  
✅ Incremental Static Regeneration (ISR)  
✅ Client-Side Fetching  
✅ Server Actions  
✅ API Routes  

### Advanced Features
✅ Dynamic Routes [slug]  
✅ Route Groups (folder)  
✅ Middleware  
✅ Environment Variables  
✅ Image Optimization  
✅ Font Optimization  
✅ Configuration (next.config)  

### Full-Stack Development
✅ MongoDB Integration  
✅ Authentication  
✅ Form Handling  
✅ File Uploads  
✅ Database Operations  

## 📝 Common Next.js Patterns

### File-Based Routing
```
app/
├── page.js              # / route
├── about/
│   └── page.js         # /about route
├── blog/
│   ├── page.js         # /blog route
│   └── [slug]/
│       └── page.js     # /blog/:slug route
└── api/
    └── hello/
        └── route.js    # /api/hello endpoint
```

### Server Component (Default)
```jsx
// app/page.js
export default async function Home() {
  // Fetch data directly in component
  const data = await fetch('https://api.example.com/data');
  const posts = await data.json();
  
  return (
    <div>
      {posts.map(post => (
        <h2 key={post.id}>{post.title}</h2>
      ))}
    </div>
  );
}
```

### Client Component
```jsx
'use client'

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
```

### Layout Component
```jsx
// app/layout.js
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav>{/* Navigation */}</nav>
        <main>{children}</main>
        <footer>{/* Footer */}</footer>
      </body>
    </html>
  );
}
```

### API Route
```javascript
// app/api/hello/route.js
export async function GET(request) {
  return Response.json({ message: 'Hello World' });
}

export async function POST(request) {
  const data = await request.json();
  return Response.json({ success: true, data });
}
```

### Server Action
```jsx
// app/actions/useractions.js
'use server'

export async function createUser(formData) {
  const name = formData.get('name');
  // Database operation
  return { success: true };
}
```

### Dynamic Route
```jsx
// app/blog/[slug]/page.js
export default function BlogPost({ params }) {
  const { slug } = params;
  
  return <h1>Post: {slug}</h1>;
}
```

### Metadata for SEO
```jsx
export const metadata = {
  title: 'My Page Title',
  description: 'Page description for SEO',
};

export default function Page() {
  return <div>Content</div>;
}
```

## 🔍 Project Highlights

### Day 130: PassOp (Password Manager)
**Features:**
- User authentication
- Encrypted password storage
- MongoDB database integration
- CRUD operations for passwords
- Responsive UI with Tailwind

### Day 136: Bitlinks (URL Shortener)
**Features:**
- Shorten long URLs
- Custom short codes
- Analytics and tracking
- QR code generation
- Database persistence

### Day 137: Linktree Clone
**Features:**
- Bio link aggregator
- Customizable profiles
- Link management
- Social media integration
- Responsive design

## 📦 Typical Next.js Project Structure

```
next-app/
├── app/
│   ├── layout.js       # Root layout
│   ├── page.js         # Home page
│   ├── globals.css     # Global styles
│   ├── api/            # API routes
│   ├── [username]/     # Dynamic routes
│   └── components/     # Components
├── public/             # Static assets
├── components/         # Shared components (alternative)
├── actions/            # Server actions
├── db/                 # Database config
├── models/             # Database models
├── .env.local          # Environment variables
├── next.config.mjs     # Next.js config
├── package.json        # Dependencies
└── tailwind.config.js  # Tailwind config (if used)
```

## 🎓 Learning Outcomes

By completing this folder, you will:
- Build full-stack applications with Next.js
- Implement server-side rendering and static generation
- Create dynamic routes and layouts
- Build and consume API routes
- Integrate databases (MongoDB)
- Handle authentication and user sessions
- Optimize performance with Next.js features
- Deploy production applications to Vercel
- Understand server vs client components
- Implement SEO best practices

## 🌐 Deployment Options

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Manual Deployment
```bash
# Build for production
npm run build

# Start production server
npm start
```

## 🔗 Next Steps

After mastering Next.js, continue to:
- **MERN Projects** - Build complex full-stack applications
- **Advanced Authentication** - NextAuth.js, Clerk, Auth0
- **Advanced Databases** - Prisma ORM, PostgreSQL
- **Real-time Features** - WebSockets, Socket.io
- **Advanced Deployment** - Docker, Kubernetes, AWS

## 📚 Additional Resources

### Official Documentation
- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js Learn Course](https://nextjs.org/learn)
- [App Router Guide](https://nextjs.org/docs/app)

### Deployment
- [Vercel Platform](https://vercel.com/)
- [Vercel CLI Documentation](https://vercel.com/docs/cli)

### Tools & Libraries
- [NextAuth.js](https://next-auth.js.org/) - Authentication
- [Prisma](https://www.prisma.io/) - Database ORM
- [SWR](https://swr.vercel.app/) - Data fetching
- [React Query](https://tanstack.com/query) - Server state management

### Learning Resources
- [Next.js Examples](https://github.com/vercel/next.js/tree/canary/examples)
- [Next.js Blog](https://nextjs.org/blog)

---

**Happy Building! 🚀**

Master Next.js and build production-ready, full-stack React applications!
