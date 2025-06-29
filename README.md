# React-Query Task Manager - React Fundamental Project 15

---

<img width="534" alt="Screenshot" src="https://github.com/user-attachments/assets/950d6478-534a-4d4a-8b76-3480a11df744" />

---

## Project Summary

React-Query Task Manager is a CRUD task management application built with React and React Query. It demonstrates best practices in modern React development, including state and data management using React Query, custom hooks, API interaction with Axios, and modular component-based design. The project is an excellent resource for learners seeking to understand React fundamentals, advanced data fetching, and how to structure scalable front-end applications.

- **Live-Demo:** [https://react-query-task-manager-arnob.netlify.app/](https://react-query-task-manager-arnob.netlify.app/)
- **Backend Source Code:** [Task Management Server (GitHub)](https://github.com/arnobt78/Task-Management-Server--React-Fundamental-Project-15)

---

## Table of Contents

1. [Project Summary](#project-summary)
2. [Live Demo & Backend](#live-demo--backend)
3. [Features](#features)
4. [Technology Stack](#technology-stack)
5. [Project Structure](#project-structure)
6. [Getting Started](#getting-started)
7. [API Endpoints](#api-endpoints)
8. [Custom React Query Hooks](#custom-react-query-hooks)
9. [Core Components Walkthrough](#core-components-walkthrough)
10. [Detailed Functionality](#detailed-functionality)
11. [Learning Points](#learning-points)
12. [HTTP Methods & CRUD Operations](#http-methods--crud-operations)
13. [Examples](#examples)
14. [Project Resources](#project-resources)
15. [Conclusion](#conclusion)

---

## Features

- View, create, edit, and delete tasks
- Responsive, modern UI
- Real-time updates and cache management with React Query
- Modular React components for separation of concerns
- Error handling and loading states
- Custom hooks for API interaction and data fetching
- Usage of Axios for HTTP requests
- Educational code comments and best practices

---

## Technology Stack

- **Frontend:** React, React Query, Axios, JavaScript (ES6+), CSS
- **Backend:** Node.js/Express (see backend repo)
- **Other:** Vite (React build tool), npm

---

## Project Structure

```
react-query-task-manager/
├── public/
│   └── ...
├── src/
│   ├── App.jsx                # Main application component
│   ├── Form.jsx               # Component for adding new tasks
│   ├── Items.jsx              # Displays the list of tasks
│   ├── SingleItem.jsx         # Displays a single task
│   ├── reactQueryCustomHooks.jsx # Custom hooks for React Query (data fetching & mutations)
│   ├── utils.js               # Axios instance for API requests
│   ├── index.css              # Global CSS styles
│   └── main.jsx               # Entry point, sets up React Query provider
├── package.json
└── README.md
```
---

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.

---

### Installation

1. **Clone the repository:**
   ```sh
   git clone <repository-url>
   ```
2. **Navigate to the project directory:**
   ```sh
   cd react-query-task-manager
   ```
3. **Install dependencies:**
   ```sh
   npm install
   ```

---

### Running the Application

1. **Start the development server:**
   ```sh
   npm run dev
   ```
2. **Open your browser and navigate to:** `http://localhost:3000`

---

## API Endpoints

The application interacts with a backend server to perform CRUD operations on tasks.

**Base URL:** `http://localhost:5000/api/tasks`

| Method   | Endpoint         | Description         |
|----------|------------------|---------------------|
| GET      | `/`              | Fetch all tasks     |
| POST     | `/`              | Create a new task   |
| PATCH    | `/:taskId`       | Update a task       |
| DELETE   | `/:taskId`       | Delete a task       |

For full API documentation, see: [Task API Docs](https://documenter.getpostman.com/view/18152321/2s93RTSDLn)

---

## Custom React Query Hooks

Custom hooks encapsulate logic for each CRUD operation using React Query:

- `useFetchTasks`: Fetches the list of tasks.
- `useCreateTask`: Creates a new task.
- `useEditTask`: Edits an existing task.
- `useDeleteTask`: Deletes a task.

Example usage:
```js
const { data, isLoading, error } = useFetchTasks();
const { mutate: createTask } = useCreateTask();
```

---

## Core Components Walkthrough

- **App.jsx**: Main component, renders the form and task list.
- **Form.jsx**: Input form for creating a new task; uses `useCreateTask` hook.
- **Items.jsx**: Fetches and displays all tasks using `useFetchTasks`.
- **SingleItem.jsx**: Displays an individual task, with edit and delete functionality.
- **reactQueryCustomHooks.jsx**: Contains all custom hooks for React Query integration.
- **utils.js**: Exports a custom Axios instance with the API base URL.

---

## Detailed Functionality

- **Task Fetching**: On app load, tasks are fetched using React Query and displayed in `Items.jsx`.
- **Create Task**: Submitting the form triggers a POST request; React Query automatically updates the UI.
- **Edit Task**: Inline editing on a task sends a PATCH request; cache is updated for real-time UI feedback.
- **Delete Task**: Clicking delete removes a task from the server and updates the UI immediately.
- **State Management**: No Redux; state is managed via React Query and React’s local state when needed.
- **Error and Loading Handling**: UI displays loading spinners and error messages with React Query state.

---

## Learning Points

- **React Query**: Simplifies data fetching, caching, and updating UI. Learn to use `useQuery` and `useMutation`.
- **Custom Hooks**: Encapsulate API logic for reusable, maintainable code.
- **Axios**: Consistent HTTP requests and error handling.
- **Component Design**: Separation of concerns for scalability.
- **API Integration**: Real-world CRUD operations with a RESTful backend.

---

## HTTP Methods & CRUD Operations

- **GET**: Retrieve data from the server.
- **POST**: Send data to create resources.
- **PATCH**: Update parts of a resource.
- **DELETE**: Remove resources.

Example (GET using Axios):
```js
try {
  const response = await axios.get("/api/tasks");
  console.log(response.data);
} catch (error) {
  console.error(error);
}
```
---

## Examples

### POST (Create Task)
```js
try {
  const response = await axios.post("/api/tasks", { title: "New Task" });
  console.log(response.data);
} catch (error) {
  console.error(error);
}
```

### PATCH (Edit Task)
```js
try {
  const response = await axios.patch("/api/tasks/1", { completed: true });
  console.log(response.data);
} catch (error) {
  console.error(error);
}
```

### DELETE (Delete Task)
```js
try {
  const response = await axios.delete("/api/tasks/1");
  console.log(response.data);
} catch (error) {
  console.error(error);
}
```

---

## Project Resources

- [React Query Documentation](https://tanstack.com/query/v4/docs/react/overview)
- [Axios Documentation](https://axios-http.com/docs/intro)
- [Backend Source Code](https://github.com/arnobt78/Task-Management-Server--React-Fundamental-Project-15)
- [Task API Docs - Postman](https://documenter.getpostman.com/view/18152321/2s93RTSDLn)
- [Node Tutorial and Projects Course](https://www.udemy.com/course/nodejs-tutorial-and-projects-course/?referralCode=E94792BEAE9ADD204BC7)

---

## Conclusion

This React-Query Task Manager serves as a practical learning project for mastering React, React Query, and modern web application development practices. It demonstrates how to build a scalable, maintainable app with efficient state and server data management, real-world API interaction, and clean component-based design. Use this project to practice, extend, or teach others about professional React development!

---
