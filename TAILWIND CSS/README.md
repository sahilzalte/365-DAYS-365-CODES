# Tailwind CSS Framework (Day 98 - Day 102)

Learn Tailwind CSS - a utility-first CSS framework for rapidly building custom user interfaces.

## 📚 Overview

This folder contains 5 days of Tailwind CSS fundamentals, covering setup, utility classes, responsive design, and building real-world layouts.

## 📁 Folder Structure

| Day | Topic | Files |
|-----|-------|-------|
| **DAY 98** | Tailwind CSS Setup & Basics | index.html, package.json, tailwind.config.js, src/input.css, src/output.css |
| **DAY 101** | Utility Classes & Components | index.html, package.json, tailwind.config.js, CSS/input.css, CSS/output.css, img/ |
| **DAY 102** | Responsive Design & Customization | index.html, package.json, tailwind.config.js, src/input.css, src/output.css |
| **DAY 100** | Advanced Tailwind Features | index.html, package.json, tailwind.config.js, src/input.css, src/output.css |

## 🎯 Learning Path

### Day 98: Tailwind CSS Introduction & Setup
**Topics Covered:**
- Installing Tailwind CSS via npm
- Configuring Tailwind
- Setting up build process
- Understanding utility-first approach

**Key Concepts:**
- `tailwind.config.js` configuration
- Input/Output CSS workflow
- PostCSS integration
- Basic utility classes

### Day 100: Core Utility Classes
**Topics Covered:**
- Layout utilities (flexbox, grid)
- Spacing (margin, padding)
- Typography utilities
- Color system
- Borders and shadows

**Key Concepts:**
- Margin/Padding (`m-4`, `p-6`, `mx-auto`)
- Flexbox (`flex`, `justify-center`, `items-center`)
- Typography (`text-lg`, `font-bold`, `text-center`)
- Colors (`bg-blue-500`, `text-white`)

### Day 101: Building Components & Images
**Topics Covered:**
- Creating reusable components
- Working with images
- Card layouts
- Navigation bars
- Buttons and forms

**Key Concepts:**
- Component composition
- Image optimization
- Responsive images
- Hover states and transitions
- Custom components

### Day 102: Responsive Design & Customization
**Topics Covered:**
- Mobile-first responsive design
- Breakpoint modifiers
- Custom configuration
- Theme customization
- Dark mode (if covered)

**Key Concepts:**
- Responsive prefixes (`sm:`, `md:`, `lg:`, `xl:`, `2xl:`)
- Custom colors and fonts
- Extending default theme
- Pseudo-class variants (`hover:`, `focus:`)

## 🚀 Getting Started

### Prerequisites
- Node.js and npm installed
- Basic HTML & CSS knowledge
- Text editor or IDE

### Installation Steps

1. **Navigate to a day folder:**
   ```bash
   cd "DAY 98"
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Build CSS (watch mode):**
   ```bash
   npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
   ```

4. **Open HTML file:**
   - Open `index.html` in your browser
   - Make changes and see them update automatically

## 📖 How to Use This Folder

- **Sequential Learning**: Start from Day 98 for proper setup
- **Experiment**: Modify utility classes to see changes
- **Reference**: Use Tailwind documentation alongside examples
- **Build**: Create your own components using learned patterns

## 🛠️ Tools & Technologies

- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS transformation tool
- **Node.js & npm** - Package management
- **HTML5** - Structure

## 💡 Key Topics Covered

✅ Tailwind CSS Installation & Configuration  
✅ Utility-First CSS Approach  
✅ Layout Utilities (Flexbox, Grid)  
✅ Spacing System (Margin, Padding)  
✅ Typography & Font Utilities  
✅ Color System & Backgrounds  
✅ Borders, Shadows & Effects  
✅ Responsive Design (Mobile-First)  
✅ Breakpoint Modifiers  
✅ Custom Configuration  
✅ Component Building  
✅ Image Handling  
✅ Hover & Focus States  
✅ Theme Customization  

## 📝 Common Tailwind Patterns

### Basic Layout
```html
<div class="container mx-auto px-4">
  <div class="flex justify-between items-center">
    <h1 class="text-3xl font-bold">Title</h1>
    <button class="bg-blue-500 text-white px-4 py-2 rounded">
      Click Me
    </button>
  </div>
</div>
```

### Responsive Grid
```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <div class="bg-white p-6 rounded shadow">Card 1</div>
  <div class="bg-white p-6 rounded shadow">Card 2</div>
  <div class="bg-white p-6 rounded shadow">Card 3</div>
</div>
```

### Card Component
```html
<div class="max-w-sm rounded overflow-hidden shadow-lg">
  <img class="w-full" src="image.jpg" alt="Image">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Card Title</div>
    <p class="text-gray-700 text-base">Card description</p>
  </div>
</div>
```

### Responsive Navigation
```html
<nav class="bg-gray-800 text-white p-4">
  <div class="container mx-auto flex justify-between items-center">
    <div class="text-xl font-bold">Logo</div>
    <div class="hidden md:flex space-x-4">
      <a href="#" class="hover:text-gray-300">Home</a>
      <a href="#" class="hover:text-gray-300">About</a>
      <a href="#" class="hover:text-gray-300">Contact</a>
    </div>
  </div>
</nav>
```

## 🔍 Tailwind Configuration

### tailwind.config.js Example
```javascript
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#1e40af',
      },
      fontFamily: {
        'custom': ['CustomFont', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
```

### Build Commands
```bash
# Development build with watch mode
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch

# Production build (minified)
npx tailwindcss -i ./src/input.css -o ./src/output.css --minify

# Using npm scripts (if configured in package.json)
npm run dev
npm run build
```

## 🎨 Utility Class Categories

| Category | Examples |
|----------|----------|
| **Layout** | `container`, `flex`, `grid`, `block`, `inline` |
| **Spacing** | `m-4`, `p-6`, `mx-auto`, `py-2`, `space-x-4` |
| **Typography** | `text-xl`, `font-bold`, `text-center`, `leading-tight` |
| **Colors** | `bg-blue-500`, `text-white`, `border-gray-300` |
| **Borders** | `border`, `rounded`, `shadow`, `ring` |
| **Effects** | `opacity-50`, `hover:bg-blue-600`, `transition` |
| **Responsive** | `md:flex`, `lg:grid-cols-3`, `xl:text-2xl` |

## 🎓 Learning Outcomes

By completing this folder, you will:
- Set up and configure Tailwind CSS in projects
- Use utility classes to build responsive layouts
- Create reusable components without writing custom CSS
- Implement mobile-first responsive design
- Customize Tailwind theme and configuration
- Build production-ready user interfaces quickly
- Understand the utility-first CSS methodology

## 🔗 Next Steps

After mastering Tailwind CSS, continue to:
- **Hosting** (Days 103-104) - Deploy your projects
- **React.js** (Days 105-120) - Combine with React components
- **MERN Projects** - Build full-stack applications with Tailwind UI

## 📚 Additional Resources

- [Tailwind CSS Official Documentation](https://tailwindcss.com/docs)
- [Tailwind CSS Playground](https://play.tailwindcss.com/)
- [Tailwind UI Components](https://tailwindui.com/)
- [Headless UI](https://headlessui.com/) - Unstyled components for Tailwind

---

**Happy Styling! 🎨**

Master Tailwind CSS and build beautiful, responsive interfaces in record time!
