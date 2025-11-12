# alx-project-0x01-setup

## ALX Project 0x01: React Architect – Mastering Advanced Structures in Next.js

---

### 📌 Project Overview

This project demonstrates advanced Next.js concepts and structures while building a dynamic, multi-page React application. Users can browse posts and users, and interact with the application by adding new posts and users via modal forms.

**The application leverages:**

- **Next.js** – for server-side rendering and static generation

- **React** – for building reusable components

- **Tailwind CSS** – for modern, responsive styling

- **TypeScript** – for type-safe development

- **Next.js Fetching Methods** (getStaticProps) – for fetching data at build time

---

### 🏗 Project Structure

```pgsql
alx-project-0x01/
├─ components/
│  ├─ common/
│  │  ├─ Button.tsx
│  │  ├─ PostCard.tsx
│  │  ├─ PostModal.tsx
│  │  ├─ UserCard.tsx
│  │  └─ UserModal.tsx
│  └─ layout/
│     ├─ Footer.tsx
│     └─ Header.tsx
├─ interfaces/
│  └─ index.ts
├─ pages/
│  ├─ index.tsx
│  ├─ posts/
│  │  └─ index.tsx
│  └─ users/
│     └─ index.tsx
├─ public/
│  └─ assets/
│     └─ images/
├─ styles/
│  └─ global.css
└─ package.json
```
---

### 🖥 Features

**✅ Pages**

- **Home** – Welcome page with navigation to Posts and Users

- **Posts** – Display a list of posts fetched from a public API

- **Users** – Display a list of users fetched from a public API


**✅ Components**

- **Header & Footer** – Consistent navigation and layout

- **PostCard / UserCard** – Reusable card components for rendering post and user details

- **PostModal / UserModal** – Interactive forms allowing users to add new posts or users dynamically

- **Button** – Custom reusable button component


**✅ Functionality**

- **Dynamic Rendering** – Components display data from API dynamically

- **Modal Forms** – Toggle modals to add new posts or users

- **Type Safety** – Interfaces (PostProps, UserProps, PostData, UserData, etc.) ensure robust coding

- **Tailwind Styling** – Fully responsive UI with modern styling

---

### ⚡ Technologies Used

- [Next.js](https://nextjs.org/)

- [React](https://reactjs.org/)

- [TypeScript](https://www.typescriptlang.org/)

- [Tailwind CSS](https://tailwindcss.com/)

- [JSONPlaceholder API](https://jsonplaceholder.typicode.com/)

---

### 🚀 Getting Started

**1. Clone the repository**

```bash
git clone https://github.com/DAMILOLA8909/alx-project-0x01-setup.git
cd alx-project-0x01
```

**2. Install dependencies**

```bash
npm install
```

**3. Run the development server**

```bash
npm run dev -- -p 3000
```

**4. Open the application in your browser**

```arduino
http://localhost:3000
```

---

### 📂 Key Learnings

- Setting up a **Next.js project** with TypeScript and Tailwind

- Creating **reusable components** and **layout structures**

- Fetching data using **getStaticProps**

- Using **modals** for dynamic user interaction

- Managing state in functional components using React hooks

- Implementing **type-safe props** with TypeScript

---

### 📌 Usage

- Navigate between ***Home, Posts,*** and **Users** pages using the Header

- Click “**Add Post**” or “**Add User**” to open modal forms

- Fill in the form and submit to dynamically add new posts or users (UI update only; not persisted to the API)

---

### 📈 Future Enhancements

- Persist added posts and users to a backend or database

- Add **edit/delete functionality** for posts and users

- Implement **search and filter** for posts and users

- Add **authentication** for user-specific actions

---

### 👤 Author

**Ojo Damilola**

GitHub: [DAMILOLA8909](https://github.com/DAMILOLA8909)

LinkedIn: [damilola-ojo1](https://www.linkedin.com/in/damilola-ojo1)

---

### 📄 License

This project is open source and available under the **MIT License**.