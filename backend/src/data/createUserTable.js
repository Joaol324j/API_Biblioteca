import pool from "../config/db.js";

const createUserTable = async () => {
    const createTableQuery = `
        CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(255) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT NOW()
        );
    `;

    try {
        await pool.query(createTableQuery);
        console.log("Tabela de usuários criada com sucesso.");
    } catch (err) {
        console.error("Erro ao criar tabela de usuários:", err);
    }
};

export default createUserTable;
