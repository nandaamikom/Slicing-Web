import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MySQL Connection
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});

// Connect to MySQL
db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

// API Routes

// GET all inventory items
app.get('/api/inventory', (req, res) => {
    const query = 'SELECT * FROM inventory ORDER BY created_at DESC';
    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

// GET single inventory item by ID
app.get('/api/inventory/:id', (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM inventory WHERE id = ?';
    db.query(query, [id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (results.length === 0) {
            return res.status(404).json({ error: 'Inventory item not found' });
        }
        res.json(results[0]);
    });
});

// POST create new inventory item
app.post('/api/inventory', (req, res) => {
    const { nama, kategori, jumlah, kondisi } = req.body;
    
    if (!nama || !kategori || !jumlah) {
        return res.status(400).json({ error: 'Nama, kategori, and jumlah are required' });
    }

    const query = 'INSERT INTO inventory (nama, kategori, jumlah, kondisi) VALUES (?, ?, ?, ?)';
    db.query(query, [nama, kategori, jumlah, kondisi || 'Baik'], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ 
            id: results.insertId, 
            message: 'Inventory item created successfully' 
        });
    });
});

// PUT update inventory item
app.put('/api/inventory/:id', (req, res) => {
    const { id } = req.params;
    const { nama, kategori, jumlah, kondisi } = req.body;

    const query = 'UPDATE inventory SET nama = ?, kategori = ?, jumlah = ?, kondisi = ? WHERE id = ?';
    db.query(query, [nama, kategori, jumlah, kondisi, id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ error: 'Inventory item not found' });
        }
        res.json({ message: 'Inventory item updated successfully' });
    });
});

// DELETE inventory item
app.delete('/api/inventory/:id', (req, res) => {
    const { id } = req.params;
    
    const query = 'DELETE FROM inventory WHERE id = ?';
    db.query(query, [id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ error: 'Inventory item not found' });
        }
        res.json({ message: 'Inventory item deleted successfully' });
    });
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', message: 'Server is running' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
