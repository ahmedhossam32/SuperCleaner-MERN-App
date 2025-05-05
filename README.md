# SuperCleaner-MERN-App 🧼

A complete full-stack cleaning service web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). This system allows users to browse services, securely book appointments, manage existing bookings, and contact the business through an integrated message form.

---


## 📁 Project Structure
SuperCleaner/
│
├── backend/ # Express.js backend + MongoDB
│ ├── controllers/ # Logic for auth, booking, contact
│ ├── middleware/ # JWT middleware
│ ├── models/ # User, Booking, Contact schemas
│ ├── routes/ # API route definitions
│ └── server.js # App entry point
│
└── frontend/ # React.js frontend
├── assets/ # Icons, background images
├── components/ # Header, Footer
├── pages/ # All user-facing pages:
│ ├── Home
│ ├── About Us
│ ├── Contact Us
│ ├── Login / Sign Up
│ ├── Booking Form
│ ├── Manage Booking
│ └── Privacy Policy
└── App.js # Routing and layout



---

## 🚀 Features

- ✅ Fully responsive **multi-page frontend**
- ✅ Protected login/signup with **JWT authentication**
- ✅ **Booking system** with real-time form validation (Formik + Yup)
- ✅ **Manage Booking**: update or cancel using Booking ID
- ✅ **Contact form** integration with backend
- ✅ Privacy Policy, About Us, and service information pages
- ✅ Conditional navbar (Login/Logout changes dynamically)
- ✅ **LocalStorage** for session management

---

## 🔐 Authentication

- Passwords securely hashed using **bcrypt**
- JWT tokens created on login and stored in **localStorage**
- Tokens verified on each protected API request
- Logout clears token and updates UI

---

## 🛠 Tech Stack

- **Frontend:** React.js, Tailwind CSS, Formik, Yup
- **Backend:** Node.js, Express.js, Mongoose, JWT
- **Database:** MongoDB Atlas (Cloud NoSQL)

---

## 🌍 API Endpoints

### 🔑 Auth Routes
| Method | Endpoint         | Description              | Auth |
|--------|------------------|--------------------------|------|
| POST   | `/api/auth/register` | Register a new user      | ❌   |
| POST   | `/api/auth/login`    | Login + return JWT token | ❌   |

### 📦 Booking Routes
| Method | Endpoint | Description                  | Auth |
|--------|----------|------------------------------|------|
| POST   | `/api/bookings` | Create a booking             | ✅   |
| GET    | `/api/bookings` | Retrieve all bookings        | ✅   |
| PUT    | `/api/bookings/byBookingId/:id` | Update a booking     | ✅   |
| DELETE | `/api/bookings/byBookingId/:id` | Delete a booking     | ✅   |

### 📬 Contact Routes
| Method | Endpoint | Description              | Auth |
|--------|----------|--------------------------|------|
| POST   | `/api/contact` | Submit contact form      | ❌   |
| GET    | `/api/contact` | Get all contact messages | ❌   |
| DELETE | `/api/contact/:id` | Delete a message      | ❌   |

---
### 1. Clone the project
```bash
git clone https://github.com/yourusername/SuperCleaner-MERN-App.git
cd SuperCleaner-MERN-App

Set up the backend
cd backend
npm install
# Create a .env file with:
# MONGO_URI=your_connection_string
# JWT_SECRET=your_secret_key
npm run dev

Set up the frontend
cd ../frontend
npm install
npm start
