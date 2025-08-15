# Travel Booking Agency

A full-stack web application for booking travel packages and managing bookings. Users can browse destinations, book trips, and view their bookings. This project includes a React frontend and a Node.js + Express backend.

---

## Features

### Frontend
- Browse travel destinations and tour packages.
- Book trips by providing user details, hotel preference, travel date, and special requests.
- View and manage bookings in the "My Bookings" section.
- Form validations for email, phone number, travel date, and terms & conditions.
- Responsive UI built with React and React-Bootstrap.

### Backend
- Node.js + Express API for managing bookings.
- MongoDB database for storing bookings.
-  RESTful API endpoints

## Project Structure

Travel_booking_agency/
│
├─ frontend/ # React frontend
│ ├─ src/
│ │ ├─ components/ # Reusable UI components
│ │ ├─ pages/ # Booking, MyBookings, Payment, etc.
│ │ └─ App.js
│ └─ package.json
│
├─ backend/ # Node.js + Express backend
│ ├─ models/ # Mongoose models
│ ├─ routes/ # API routes
│ ├─ controllers/ # Route controllers
│ ├─ index.js # Main server file
│ └─ package.json
│
└─ README.md

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm 
- MongoDB (local or Atlas)

### Backend Setup
-cd backend
-npm install
# Add your MongoDB connection string in .env
-npm run dev
**Frontend Setup**
-cd frontend
-npm install
-npm start
-The frontend runs on http://localhost:3000 and backend on http://localhost:3001 (default).
