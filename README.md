# Customer Information Management System

A full-stack web application for managing customer information, built with Node.js, Express, PostgreSQL, Prisma, and React.

## 🏗️ Architecture Overview

### Backend Architecture
```
backend/
├── server.js              # Main server entry point
├── routes/
│   └── customers.js        # Customer API routes
├── prisma/
│   ├── schema.prisma       # Database schema
│   └── seed.js            # Database seeding script
├── package.json           # Backend dependencies
└── .env                   # Environment variables
```

**Backend Tech Stack:**
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **PostgreSQL** - Database
- **Prisma ORM** - Database toolkit and ORM
- **CORS** - Cross-origin resource sharing

**API Endpoints:**
- `GET /api/customers` - Get all customers
- `GET /api/customers/:id` - Get customer by ID
- `POST /api/customers` - Create new customer
- `PUT /api/customers/:id` - Update customer
- `DELETE /api/customers/:id` - Delete customer
- `GET /api/health` - Health check

### Frontend Architecture
```
frontend/
├── public/
│   └── index.html         # HTML template
├── src/
│   ├── components/        # React components
│   │   ├── CustomerList.js    # Customer list view
│   │   ├── CustomerForm.js    # Customer form (add/edit)
│   │   └── CustomerDetail.js  # Customer detail view
│   ├── services/
│   │   └── api.js         # API service layer
│   ├── App.js             # Main app component
│   ├── index.js           # React entry point
│   └── index.css          # Global styles
└── package.json           # Frontend dependencies
```

**Frontend Tech Stack:**
- **React** - UI library
- **JavaScript (ES6+)** - Programming language
- **CSS3** - Styling
- **Fetch API** - HTTP client

## 🚀 Setup Instructions (Windows)

### Prerequisites

1. **Install Node.js**
   - Download from [nodejs.org](https://nodejs.org/)
   - Choose LTS version (recommended)
   - Verify installation: `node --version` and `npm --version`

2. **Install PostgreSQL**
   - Download from [postgresql.org](https://www.postgresql.org/download/windows/)
   - During installation, remember the password for the `postgres` user
   - Verify installation: `psql --version`

3. **Install Git** (optional, for version control)
   - Download from [git-scm.com](https://git-scm.com/download/win)

### Database Setup

1. **Create Database**
   ```cmd
   # Open Command Prompt as Administrator
   psql -U postgres
   
   # In PostgreSQL shell:
   CREATE DATABASE customer_db;
   \q
   ```

2. **Update Database Connection**
   - Edit `backend/.env` file
   - Replace `username` and `password` with your PostgreSQL credentials:
   ```env
   DATABASE_URL="postgresql://postgres:your_password@localhost:5432/customer_db"
   ```

### Backend Setup

1. **Navigate to backend directory**
   ```cmd
   cd backend
   ```

2. **Install dependencies**
   ```cmd
   npm install
   ```

3. **Setup database schema**
   ```cmd
   npx prisma migrate dev --name init
   npx prisma generate
   ```

4. **Seed database with sample data** (optional)
   ```cmd
   npm run db:seed
   ```

5. **Start backend server**
   ```cmd
   npm run dev
   ```
   
   The backend will run on `http://localhost:3001`

### Frontend Setup

1. **Open new Command Prompt window**

2. **Navigate to frontend directory**
   ```cmd
   cd frontend
   ```

3. **Install dependencies**
   ```cmd
   npm install
   ```

4. **Start frontend development server**
   ```cmd
   npm start
   ```
   
   The frontend will run on `http://localhost:3000`

## 🎯 Usage

1. **Access the application**
   - Open your browser and go to `http://localhost:3000`

2. **Features available:**
   - **Customer List**: View all customers with their basic information
   - **Add Customer**: Create new customers with name, email, phone, and address
   - **View Details**: Click on any customer to see full details
   - **Edit Customer**: Update customer information
   - **Delete Customer**: Remove customers from the system

## 🧪 Testing the Application

1. **Test Backend API** (optional)
   ```cmd
   # Test health endpoint
   curl http://localhost:3001/api/health
   
   # Test get customers
   curl http://localhost:3001/api/customers
   ```

2. **Test Frontend**
   - Navigate through the application
   - Try adding, editing, and deleting customers
   - Verify data persistence by refreshing the page

## 📝 Development Scripts

### Backend Scripts
```cmd
npm start          # Start production server
npm run dev        # Start development server with nodemon
npm run db:migrate # Run database migrations
npm run db:generate # Generate Prisma client
npm run db:seed    # Seed database with sample data
```

### Frontend Scripts
```cmd
npm start          # Start development server
npm run build      # Build for production
npm test           # Run tests
```

## 🔧 Troubleshooting

### Common Issues

1. **Database Connection Error**
   - Verify PostgreSQL is running
   - Check DATABASE_URL in `.env` file
   - Ensure database `customer_db` exists

2. **Port Already in Use**
   - Backend (3001): Change PORT in `backend/.env`
   - Frontend (3000): React will prompt to use different port

3. **CORS Issues**
   - Ensure backend is running on port 3001
   - Check proxy setting in `frontend/package.json`

4. **Prisma Issues**
   - Run `npx prisma generate` after schema changes
   - Run `npx prisma migrate dev` for database changes

## 🌟 Features

- ✅ Full CRUD operations for customers
- ✅ Form validation (client and server-side)
- ✅ Error handling and user feedback
- ✅ Responsive design
- ✅ Loading states
- ✅ Confirmation dialogs for destructive actions
- ✅ Database relationships and constraints
- ✅ RESTful API design

## 📋 Project Structure Summary

This project follows a clean separation of concerns:

- **Backend**: Handles data persistence, business logic, and API endpoints
- **Frontend**: Manages user interface, user interactions, and API communication
- **Database**: Stores customer data with proper constraints and relationships

The architecture supports easy scaling and maintenance, with clear boundaries between different layers of the application.
