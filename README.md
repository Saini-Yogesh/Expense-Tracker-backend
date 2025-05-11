# 💰 Expense Tracker Backend

This is the **backend** of a full-stack Expense Tracker application built using **Node.js**, **Express**, and **MongoDB**. It handles user authentication and expense management through RESTful APIs.

---

## 🚀 Features

- User registration and login with JWT-based authentication.
- Middleware to protect private routes.
- CRUD operations for tracking expenses.
- MongoDB-based data persistence using Mongoose.

---

## 🗂️ Project Structure

```
backend/
│
├── config/              # Database configuration
│   └── db.js
│
├── controllers/         # Business logic for routes
│   ├── authController.js
│   └── expenseController.js
│
├── middleware/          # Authentication middleware
│   └── authMiddleware.js
│
├── models/              # Mongoose data models
│   ├── Expense.js
│   └── User.js
│
├── routes/              # API route definitions
│   ├── authRoutes.js
│   └── expenseRoutes.js
│
├── .env                 # Environment variables
├── .gitignore
├── index.js             # Entry point
├── package.json
└── README.md
```

---

## 🌐 API Endpoints

### 🔐 Auth Routes

Base Path: `/api`

| Method | Endpoint    | Description            |
|--------|-------------|------------------------|
| POST   | `/register` | Register a new user    |
| POST   | `/login`    | Login user & get token |
| GET    | `/me`       | Get logged-in user     |

> Requires: JWT Token in `Authorization` header for `/me`

---

### 📊 Expense Routes

Base Path: `/api/expenses`  
All routes are protected and require a valid JWT token.

| Method | Endpoint     | Description              |
|--------|--------------|--------------------------|
| POST   | `/`          | Add a new expense        |
| GET    | `/`          | Get all user expenses    |
| PUT    | `/:id`       | Update an expense by ID  |
| DELETE | `/:id`       | Delete an expense by ID  |

---

## 🔐 Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

---

## ▶️ Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/Saini-Yogesh/Expense-Tracker-backend.git
   cd Expense-Tracker-backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Add your `.env` file**

4. **Run the server**
   ```bash
   npm start
   ```

---

## 📦 Dependencies

- express
- mongoose
- jsonwebtoken
- bcryptjs
- dotenv

---

## 🧪 Testing

Use tools like **Postman** or **Thunder Client** to test API endpoints. Don't forget to include the **Bearer Token** in the header for protected routes.

---

## 📄 License

This is a personal project, but feel free to explore, fork, or use the code for learning purposes. Attribution is appreciated.

