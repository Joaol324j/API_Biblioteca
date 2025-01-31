import pool from "../config/db.js";

const createBookTable = async () => {
    const createTableQuery = `
        CREATE TABLE IF NOT EXISTS books (
            id SERIAL PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            price DECIMAL NOT NULL,
            quantity INT NOT NULL,
            author VARCHAR(255) NOT NULL,
            genre VARCHAR(100),
            description VARCHAR(255) NOT NULL,
            published_year INT,
            created_at TIMESTAMP DEFAULT NOW(),
            image_url TEXT
        );
    `;


    try {
        await pool.query(createTableQuery);
        console.log("Tabela de livros criada e livros de exemplo adicionados com sucesso.");
    } catch (err) {
        console.error("Erro ao criar tabela de livros ou adicionar livros de exemplo:", err);
    }
};

export default createBookTable;
