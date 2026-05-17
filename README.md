# Chat-Application-MERN-
# Real-Time Group Chat Application

A full-stack real-time group chat application built using the MERN stack and Socket.IO.  
This project includes user authentication, protected routes, real-time messaging, MongoDB chat persistence, and live chat updates.

---

# Features

- User Signup & Login
- JWT Authentication & Authorization
- Protected Dashboard
- Real-Time Group Chat using Socket.IO
- Automatic Room Joining
- MongoDB Chat History Storage
- Total Users Count
- Total Chat Messages Count

---

# Tech Stack

## Frontend
- React.js
- Tailwind CSS
- Socket.IO Client
- React Router DOM

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- Socket.IO
- JWT Authentication
- bcrypt.js

---

# Project Structure

```bash
project-root/
│
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── socket/
│   ├── .env.example
│   ├── package.json
│   └── index.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── lib/
│   │   └── App.jsx
│   │
│   └── package.json
│
└── README.md
```
## Backend Setup
### 1. Navigate to the backend folder
```bash
cd backend
```
### 2. Install dependencies
```bash
npm install
```
### 3. Create .env file
Create a .env file inside the backend folder using .env.example as a reference.
```bash
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
CLIENT_URL=http://localhost:5173
```
### 4. Start backend server
```bash
npm run start
```
## Frontend Setup
### 1. Navigate to the frontend folder
```bash
cd frontend
```
### 2. Install dependencies
```bash
npm install
```
### 3. Start frontend server
```bash
npm run dev
```
