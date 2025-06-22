# Tailwind CSS Installation Guide  


---

## Step-by-Step Setup 🛠️

### 1. Initialize Project  
Create a `package.json` file:

```bash
npm init -y
```

---

### 2. Create CSS Files  
Make two files in your root directory:
- `input.css` – for Tailwind directives  
- `style.css` – compiled output file

---

### 3. Add Tailwind to Input  
In `input.css`, write:

```css
@import "tailwindcss";
```

---

### 4. Link Output in HTML  
In your `index.html` `<head>`, link the `style.css`:

```html
<link rel="stylesheet" href="style.css">
```

---

### 5. Test Tailwind  
Use a basic Tailwind class in your HTML:

```html
<h1 class="text-2xl font-bold text-blue-600">Hello Tailwind</h1>
```

---

### 6. Compile with CLI ⚙️  
Run Tailwind in watch mode:

```bash
npx @tailwindcss/cli -i input.css -o style.css --watch
```

---

### 7. Add Script (Optional)  
To simplify, edit your `package.json`:

```json
"scripts": {
  "dev": "npx @tailwindcss/cli -i input.css -o style.css --watch"
}
```

Then run:

```bash
npm run dev
```

---

## Notes 📝

- Keep the terminal running while working — it watches for changes.
- Stop it anytime after you're done (`CTRL + C`).

---

Now you're all set to build with Tailwind CSS! Let me know if you want a setup with PostCSS or custom config.

Thank you 
Sahil