CREATE DATABASE IF NOT EXISTS anime_db;

USE anime_db;

CREATE TABLE IF NOT EXISTS general_info(
    id VARCHAR(60) NOT NULL PRIMARY KEY,
    name TEXT NOT NULL,
    first_emision DATE NOT NULL,
    season VARCHAR(30),
    studio VARCHAR(70),
    rate DECIMAL(10,1) DEFAULT '0,0',
    cover TEXT
);