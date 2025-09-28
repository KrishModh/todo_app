# 📝 Todo List App

A simple yet powerful **Todo List Application** built with **React, Vite, and Tailwind CSS**.  
This app helps you **manage your daily tasks** — add, edit, and delete with ease.  
Fully **responsive**, clean, and smooth to use.

---

## 🚀 Features
- ➕ Add new tasks  
- ✏️ Edit existing tasks  
- ❌ Delete tasks  
- 📱 Fully responsive design  
- ⚡ Powered by **React + Tailwind + Vite**  
- 💾 LocalStorage support (saves your tasks even after refresh)  

---

## 📸 Screenshot
<img width="2560" height="1440" alt="Screenshot (274)" src="https://github.com/user-attachments/assets/4b261b1f-7b78-46c6-a3cd-9d85960d7df8" />
<img width="2560" height="1440" alt="Screenshot (275)" src="https://github.com/user-attachments/assets/9238bf8f-4528-4697-b140-636146d06058" />
<img width="2560" height="1440" alt="Screenshot (276)" src="https://github.com/user-attachments/assets/02b0fe03-5640-4b9b-8b95-2b19b178fd73" />


---

## 📂 Clone Repository

Clone this repo and run it locally:

```bash
# Clone the repository
git clone https://github.com/KrishModh/todo_app.git

# Move into project folder
cd todo_app

# Install dependencies
npm install

# Run the app
npm run dev
```

---

## ⚙️ Installation (Manual Setup)

If you want to create from scratch instead of cloning:

```bash
# Create a new Vite project
npm create vite@latest my-project
cd my-project

# Install Tailwind with Vite plugin
npm install tailwindcss @tailwindcss/vite
```

### vite.config.js
```javascript
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})
```

### index.css
```css
@import "tailwindcss";
```

### Run the project
```bash
npm run dev
```

---

## 🛠️ Tech Stack
- **HTML, CSS, JavaScript**
- **React + Vite**
- **Tailwind CSS**
- **LocalStorage (for data persistence)**

---

✨ Crafted with love to make your daily task management easier!
