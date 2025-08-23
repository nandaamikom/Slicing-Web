# Inventory Management System - Frontend

Frontend web application for inventory management system built with React.js and Vite.

## Main Features

- ✅ **Inventory Management**: Add, edit, view, and delete inventory items
- ✅ **Form Validation**: Forms with validation for name, category, quantity, and condition
- ✅ **Responsive Table**: Table display with zebra striping and pagination
- ✅ **Search & Filter**: Search and filter functionality for inventory data
- ✅ **Responsive Design**: Optimal display for desktop and mobile
- ✅ **Navigation**: Routing with React Router for different pages

## Technologies Used

- **React.js** - Main UI framework
- **Vite** - Build tool and development server
- **Tailwind CSS** - Styling and responsive design
- **React Router DOM** - Navigation and routing
- **Lucide React** - UI icons and symbols

## Project Structure

```
frontend/
├── src/
│   ├── components/     # Reusable React components
│   │   ├── Navbar.jsx
│   │   ├── Table.jsx
│   │   ├── SearchFilter.jsx
│   │   ├── Pagination.jsx
│   │   └── Footer.jsx
│   ├── pages/         # Application pages
│   │   ├── InventarisList.jsx
│   │   ├── InventarisForm.jsx
│   │   └── InventarisDetail.jsx
│   ├── services/      # API services
│   │   └── api.js
│   ├── assets/        # Static assets
│   ├── App.jsx        # Main component
│   └── main.jsx       # Entry point
├── package.json
└── README.md
```

## Installation and Running

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## Available Scripts

- `npm run dev` - Run development server
- `npm run build` - Build application for production
- `npm run preview` - Preview production build


## Application Pages

- **/inventaris** - List all inventory items
- **/tambah** - Form to add new item
- **/edit/:id** - Form to edit item
- **/detail/:id** - Item detail information

## Backend Integration

This application integrates with backend API for CRUD operations on inventory data. Ensure the backend server is running before using the application.
