# Web Hosting & Deployment (Day 103 - Day 104)

Learn how to deploy and host web applications on the internet, making them accessible to users worldwide.

## 📚 Overview

This folder covers 2 days of web hosting fundamentals, teaching you how to deploy Node.js applications, configure servers, and make your projects live on the web.

## 📁 Folder Structure

| Day | Topic | Files |
|-----|-------|-------|
| **DAY 103** | Hosting Fundamentals & Platforms | Hosting.md |
| **DAY 104** | Deploying Node.js Applications | index.js, package.json, Readme.md |

## 🎯 Learning Path

### Day 103: Hosting Fundamentals
**Topics Covered:**
- Understanding web hosting concepts
- Types of hosting (Shared, VPS, Cloud, Serverless)
- Popular hosting platforms
- Domain names and DNS
- SSL/TLS certificates

**Key Platforms:**
- Vercel
- Netlify
- Heroku
- Railway
- Render
- AWS (EC2, Amplify)
- DigitalOcean
- GitHub Pages

### Day 104: Deploying Node.js Apps
**Topics Covered:**
- Preparing Node.js apps for deployment
- Environment variables
- Production build configuration
- Deployment to hosting platforms
- Continuous deployment

**Key Concepts:**
- Production dependencies
- PORT configuration
- Environment-specific settings
- Build scripts
- Process managers (PM2)

## 🚀 Getting Started

### Prerequisites
- Completed Node.js and Express.js fundamentals
- A working web application
- Git and GitHub account
- Basic command line knowledge

### Deployment Checklist

**Before Deployment:**
- [ ] Remove hardcoded sensitive data
- [ ] Set up environment variables
- [ ] Configure PORT for dynamic assignment
- [ ] Test application locally
- [ ] Create production build
- [ ] Set up .gitignore properly
- [ ] Push code to GitHub/GitLab

**During Deployment:**
- [ ] Choose hosting platform
- [ ] Create account and project
- [ ] Connect repository
- [ ] Configure environment variables
- [ ] Set build commands
- [ ] Deploy application

**After Deployment:**
- [ ] Test live application
- [ ] Set up custom domain (optional)
- [ ] Configure SSL certificate
- [ ] Monitor application logs
- [ ] Set up error tracking

## 📖 How to Use This Folder

- **Study Resources**: Read through the Hosting.md guide in Day 103
- **Practice Deployment**: Use Day 104's sample app to practice deployment
- **Follow Documentation**: Each platform has specific deployment steps
- **Troubleshoot**: Check logs and error messages for issues

## 🛠️ Popular Hosting Platforms

### 1. **Vercel** (Recommended for Next.js, React)
- **Best For**: Frontend frameworks, Next.js, React, Vue
- **Free Tier**: Yes (generous)
- **Features**: Automatic deployments, serverless functions, CDN
- **Deployment**: Git integration, automatic builds

### 2. **Netlify** (Recommended for Static Sites, JAMstack)
- **Best For**: Static sites, React, Vue, Angular
- **Free Tier**: Yes
- **Features**: Continuous deployment, forms, serverless functions
- **Deployment**: Git-based workflow

### 3. **Render** (Recommended for Full-Stack Apps)
- **Best For**: Node.js, Python, Go, Docker
- **Free Tier**: Yes (with limitations)
- **Features**: Automatic SSL, databases, static sites
- **Deployment**: Git integration

### 4. **Railway** (Recommended for Node.js + Database)
- **Best For**: Full-stack applications with databases
- **Free Tier**: Yes (credit-based)
- **Features**: PostgreSQL, MongoDB, Redis support
- **Deployment**: Simple Git deployment

### 5. **Heroku**
- **Best For**: Full-stack applications, any language
- **Free Tier**: Limited (paid plans recommended)
- **Features**: Add-ons, databases, process management
- **Deployment**: Git push or GitHub integration

## 💡 Key Topics Covered

✅ Web Hosting Fundamentals  
✅ Hosting Platform Comparison  
✅ Environment Variables & Configuration  
✅ Production Build Setup  
✅ Git-Based Deployment  
✅ Custom Domain Configuration  
✅ SSL/TLS Certificate Setup  
✅ Continuous Deployment (CI/CD)  
✅ Monitoring & Logging  
✅ Error Handling in Production  
✅ Database Hosting  
✅ Static vs. Dynamic Hosting  

## 📝 Deployment Examples

### Vercel Deployment (Next.js/React)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from project directory
vercel

# Deploy to production
vercel --prod
```

### Render Deployment
```yaml
# render.yaml
services:
  - type: web
    name: my-app
    env: node
    buildCommand: npm install
    startCommand: node index.js
    envVars:
      - key: NODE_ENV
        value: production
```

### Basic Express.js Production Setup
```javascript
const express = require('express');
const app = express();

// Use environment variable for PORT
const PORT = process.env.PORT || 3000;

// Production middleware
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('public'));
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

### Environment Variables (.env)
```bash
# .env file (never commit to Git!)
PORT=3000
DATABASE_URL=mongodb://localhost:27017/myapp
API_KEY=your_secret_api_key
NODE_ENV=production
```

### package.json Scripts
```json
{
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js",
    "build": "npm install --production"
  },
  "engines": {
    "node": "18.x"
  }
}
```

## 🔍 Common Deployment Issues & Solutions

| Issue | Solution |
|-------|----------|
| Port already in use | Use `process.env.PORT` instead of hardcoded port |
| Module not found | Ensure all dependencies are in `package.json` |
| Build fails | Check Node.js version compatibility |
| Environment variables not working | Configure them in hosting platform dashboard |
| Database connection fails | Update connection string for production DB |
| Static files not loading | Configure static file serving correctly |

## 🎓 Learning Outcomes

By completing this folder, you will:
- Understand different types of web hosting
- Deploy Node.js applications to cloud platforms
- Configure environment variables for production
- Set up custom domains and SSL certificates
- Implement continuous deployment workflows
- Monitor and troubleshoot production applications
- Choose the right hosting platform for your needs

## 🔗 Next Steps

After mastering hosting, continue to:
- **React.js** (Days 105-120) - Build complex frontend applications
- **Next.js** (Days 121-138) - Server-side rendering and static generation
- **MERN Projects** - Deploy full-stack applications
- **DevOps** - Learn CI/CD pipelines, Docker, Kubernetes

## 📚 Additional Resources

### Platform Documentation
- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com/)
- [Render Documentation](https://render.com/docs)
- [Railway Documentation](https://docs.railway.app/)

### Learning Resources
- [12 Factor App](https://12factor.net/) - Best practices for web apps
- [Environment Variables Guide](https://www.twilio.com/blog/environment-variables-node-js)
- [PM2 Process Manager](https://pm2.keymetrics.io/)

### Domain & DNS
- [Namecheap](https://www.namecheap.com/) - Domain registration
- [Cloudflare](https://www.cloudflare.com/) - DNS and CDN
- [Let's Encrypt](https://letsencrypt.org/) - Free SSL certificates

---

**Happy Deploying! 🚀**

Make your applications accessible to the world - deploy with confidence!
