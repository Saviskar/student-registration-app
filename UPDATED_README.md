# Student Registration Web Application

A simple full-stack web application built with **React (Vite)**, **Express.js**, and **Bootstrap** to register students by capturing their **name** and **email address**. The app follows the **MVC (Model-View-Controller)** architecture on the backend, and uses **Axios** for HTTP requests. It connects to a **MySQL** database for storing student records.

## ✨ Features

- Register, Read, Update and Delete a student with name and email
- Simple, clean Bootstrap-styled UI
- Frontend and backend are separated
- Follows MVC pattern for backend structure

---

## 🛠 Tech Stack

**Frontend**

- React (with Vite)
- Bootstrap CSS
- Axios (HTTP client)

**Backend**

- Node.js
- Express.js
- MVC architecture

---

## 🗂 Project Structure

```
student-registration-app/
├── backend/                    # Express backend
│   ├── config/
│   │   └── dbconnection.js     # Database connection config
│   ├── controllers/
│   │   └── UserController.js   # Controller logic
│   ├── models/
│   │   └── Student.js          # Mongoose (or other ORM) model
│   ├── routes/
│   │   └── UserRoutes.js       # API route definitions
│   └── server.js               # Backend entry point
│
├── frontend/                   # React frontend
│   ├── src/
│   │   ├── App.jsx
│   │   ├── CreateUser.jsx
│   │   ├── Home.jsx
│   │   ├── ReadUser.jsx
│   │   ├── UpdateUser.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── vite.config.js
│   └── ...
│
├── README.md
└── ...
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/student-registration-app.git
cd student-registration-app
```

### 2. Install dependencies

**Backend:**

```bash
cd backend
npm install
```

**Frontend:**

```bash
cd ../frontend
npm install
```

---

### 3. Run the app

**Start the backend server:**

```bash
cd backend
npm start
```

**Start the frontend dev server:**

```bash
cd ../frontend
npm run dev
```

The frontend will usually run on `http://localhost:5173` and backend on `http://localhost:8081`.

---

## 📦 API Endpoint

| Method | Endpoint                            | Description            |
| ------ | ----------------------------------- | ---------------------- |
| POST   | `http://localhost:8081/user/create` | Register a new student |

---

## 💡 Future Improvements

- Add form validation (client + server side)
- Connect to a database (e.g., MongoDB or MySQL)
- Display registered students in a list
- Edit/Delete student records

---

## 🙌 Acknowledgements

- [React](https://reactjs.org/)
- [Express](https://expressjs.com/)
- [Bootstrap](https://getbootstrap.com/)
- [Axios](https://axios-http.com/)
