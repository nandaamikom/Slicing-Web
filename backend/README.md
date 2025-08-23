# Backend Setup for Inventaris App

## Prerequisites
- Node.js (v14 or higher)
- MySQL Server
- phpMyAdmin 

## Installation

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

## Database Setup

### Using phpMyAdmin
1. Open phpMyAdmin in your browser
2. Create a new database named `inventaris_db`
3. Run the SQL queries from `database-setup.sql` in the SQL tab

## Environment Configuration

Update the `.env` file with your MySQL credentials:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=inventaris_db
DB_PORT=3306

PORT=5000
NODE_ENV=development
```

## Running the Backend

Start the development server:
```bash
npm run dev
```

The API will be available at: http://localhost:5000

## API Endpoints

### Inventory Management

#### Get All Inventory Items
```http
GET /api/inventory
```
**Response:**
```json
[
  {
    "id": 1,
    "nama": "Laptop Dell XPS",
    "kategori": "Elektronik",
    "jumlah": 5,
    "kondisi": "Baik",
    "created_at": "2024-01-15T10:30:00.000Z",
    "updated_at": "2024-01-15T10:30:00.000Z"
  }
]
```

#### Get Single Inventory Item
```http
GET /api/inventory/:id
```
**Parameters:**
- `id` (number) - Inventory item ID

**Response:**
```json
{
  "id": 1,
  "nama": "Laptop Dell XPS",
  "kategori": "Elektronik",
  "jumlah": 5,
  "kondisi": "Baik",
  "created_at": "2024-01-15T10:30:00.000Z",
  "updated_at": "2024-01-15T10:30:00.000Z"
}
```

#### Create New Inventory Item
```http
POST /api/inventory
```
**Body:**
```json
{
  "nama": "Monitor LG 24inch",
  "kategori": "Elektronik",
  "jumlah": 3,
  "kondisi": "Baik"
}
```
**Required Fields:** nama, kategori, jumlah, kondisi

#### Update Inventory Item
```http
PUT /api/inventory/:id
```
**Parameters:**
- `id` (number) - Inventory item ID

**Body:**
```json
{
  "nama": "Monitor LG 24inch Updated",
  "kategori": "Elektronik",
  "jumlah": 4,
  "kondisi": "Sangat Baik"
}
```

#### Delete Inventory Item
```http
DELETE /api/inventory/:id
```
**Parameters:**
- `id` (number) - Inventory item ID

**Response:**
```json
{
  "message": "Inventory item deleted successfully"
}
```

### Health Check
```http
GET /api/health
```
**Response:**
```json
{
  "status": "OK",
  "timestamp": "2024-01-15T10:30:00.000Z",
  "database": "connected"
}
```

## Database Schema

### Inventory Table
```sql
CREATE TABLE inventory (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nama VARCHAR(255) NOT NULL,
  kategori VARCHAR(100) NOT NULL,
  jumlah INT NOT NULL,
  kondisi ENUM('Baik', 'Rusak', 'Perlu Perbaikan') NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

## Error Handling

The API returns standard HTTP status codes:

- `200` - Success
- `201` - Created
- `400` - Bad Request (validation errors)
- `404` - Not Found
- `500` - Internal Server Error

**Error Response Format:**
```json
{
  "error": "Error message description",
  "details": "Additional error details (if available)"
}
```

## Development

### Project Structure
```
backend/
├── server.js          # Main server file
├── init-db.js         # Database initialization
├── database-setup.sql # Database schema
├── package.json       # Dependencies and scripts
├── .env              # Environment variables
└── README.md         # Documentation
```

### Available Scripts
- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon
- `npm run init-db` - Initialize database (run once)

### Dependencies
- **express** - Web framework
- **mysql2** - MySQL database driver
- **cors** - Cross-Origin Resource Sharing
- **dotenv** - Environment variables
- **nodemon** - Development hot reload (dev dependency)

### Environment Variables
Create a `.env` file with the following variables:
```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=inventaris_db
DB_PORT=3306
PORT=5000
NODE_ENV=development
CORS_ORIGIN=http://localhost:3000
```