-- Create database if it doesn't exist
CREATE DATABASE IF NOT EXISTS inventaris_db;

-- Use the database
USE inventaris_db;

-- Create inventory table
CREATE TABLE IF NOT EXISTS inventory (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(255) NOT NULL,
    kategori VARCHAR(100) NOT NULL,
    jumlah INT NOT NULL,
    kondisi ENUM('Baik', 'Rusak', 'Perlu Perbaikan') DEFAULT 'Baik',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Insert sample data
INSERT INTO inventory (nama, kategori, jumlah, kondisi) VALUES
('Laptop Dell XPS', 'Elektronik', 5, 'Baik'),
('Meja Kerja', 'Furnitur', 10, 'Baik'),
('Proyektor Epson', 'Elektronik', 3, 'Perlu Perbaikan'),
('Kursi Kantor', 'Furnitur', 15, 'Baik'),
('Printer HP', 'Elektronik', 2, 'Rusak'),
('Monitor LG 24"', 'Elektronik', 8, 'Baik'),
('Lemari Arsip', 'Furnitur', 4, 'Baik'),
('Scanner Canon', 'Elektronik', 2, 'Perlu Perbaikan'),
('Whiteboard', 'Alat Tulis', 3, 'Baik'),
('Kabel HDMI', 'Elektronik', 20, 'Baik');


