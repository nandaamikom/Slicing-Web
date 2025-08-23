import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL server');

    // Create database if it doesn't exist
    db.query(`CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME}`, (err) => {
        if (err) {
            console.error('Error creating database:', err);
            return;
        }
        console.log(`Database '${process.env.DB_NAME}' created or already exists`);

        // Use the database
        db.query(`USE ${process.env.DB_NAME}`, (err) => {
            if (err) {
                console.error('Error using database:', err);
                return;
            }

            // Create inventory table
            const createTableQuery = `
                CREATE TABLE IF NOT EXISTS inventory (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    nama VARCHAR(255) NOT NULL,
                    kategori VARCHAR(100) NOT NULL,
                    jumlah INT NOT NULL,
                    kondisi ENUM('Baik', 'Rusak', 'Perlu Perbaikan') DEFAULT 'Baik',
                    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
                )
            `;

            db.query(createTableQuery, (err) => {
                if (err) {
                    console.error('Error creating table:', err);
                    return;
                }
                console.log('Inventory table created or already exists');

                // Insert sample data
                const insertSampleData = `
                    INSERT INTO inventory (nama, kategori, jumlah, kondisi) VALUES
                    ('Laptop Dell XPS', 'Elektronik', 5, 'Baik'),
                    ('Meja Kerja', 'Furnitur', 10, 'Baik'),
                    ('Proyektor Epson', 'Elektronik', 3, 'Perlu Perbaikan'),
                    ('Kursi Kantor', 'Furnitur', 15, 'Baik'),
                    ('Printer HP', 'Elektronik', 2, 'Rusak')
                `;

                db.query(insertSampleData, (err) => {
                    if (err) {
                        console.error('Error inserting sample data:', err);
                        return;
                    }
                    console.log('Sample data inserted successfully');
                    db.end();
                });
            });
        });
    });
});
