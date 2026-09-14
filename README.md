# My Dev Stack

My Dev Stack is a responsive web application that helps developers explore different technologies and build their ideal development stack. Users can browse technology options, view their details, and add or remove technologies from their personal stack.

## 🚀 Technologies Used

- React.js
- TypeScript
- Tailwind CSS
- DaisyUI
- React-Toastify
- JSON
- Vite

## ✨ Features

### 1. Explore Technologies

Users can explore different frontend, backend, database, programming language, and development tools from the technology list. The technology information is loaded from a JSON file.

### 2. Build Your Own Stack

Users can add technologies to **Your Stack**, remove individual technologies, or remove all selected technologies. Duplicate technologies are prevented, and users receive toast notifications for important actions.

### 3. Responsive User Interface

The website is fully responsive and works across desktop, tablet, and mobile devices. The navigation, hero section, technology cards, stack section, and footer adapt to different screen sizes.

## ❓ React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript or TypeScript. React uses JSX to describe and build the user interface more easily.

### 2. What is the difference between props and state?

**Props** are data passed from a parent component to a child component.

**State** is data managed inside a component that can change over time and cause the component to re-render.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` is used to create and manage changing data inside a React component.

In this project, I used `useState` in `TechnologySection` to store the technologies, selected stack, loading state, and error state.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` is used to perform side effects in a React component.

I used it in `TechnologySection` to fetch the technology data from the JSON file when the component loads.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

A unique `key` helps React identify each item in a list. It allows React to know which item has changed, been added, or been removed and update the UI correctly.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI based on a condition.

In this project, I used it in the **Your Stack** section:

```tsx
{stack.length === 0 ? (
  <p>Your stack is empty</p>
) : (
  <div>
    {/* Selected technologies */}
  </div>
)}
```

When no technology is selected,  empty stack message is shown. When technologies are added, the selected technologies are displayed instead.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent passes data to a child through **props**.

In this project, `TechnologySection` passes a technology and an `onAdd` function to `TechnologyCard`.

The child can send information back by calling a function passed through props. For example, `TechnologyCard` calls `onAdd(technology)` when the user clicks **Add to Stack**.

## 📂 Project Structure

```text
My-Dev-Stack/
├── public/
│   └── data/
│       └── technologies.json
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── StackSidebar.tsx
│   │   ├── TechnologyCard.tsx
│   │   └── TechnologySection.tsx
│   ├── types/
│   │   └── technology.ts
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── package.json
├── vite.config.ts
└── README.md
```

## ⚙️ Getting Started

Clone the repository:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Go to the project directory:

```bash
cd My-Dev-Stack
```

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Run ESLint:

```bash
npm run lint
```

## 🌐 Live Demo

[YOUR_DEPLOYMENT_LINK](YOUR_DEPLOYMENT_LINK)

## 📁 GitHub Repository

[YOUR_GITHUB_REPOSITORY_URL](YOUR_GITHUB_REPOSITORY_URL)

## 👨‍💻 Author

Mohammed Safwan Jami Chowdhury