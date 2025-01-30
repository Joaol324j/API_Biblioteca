import pool from "../config/db.js";

// Obter todos os livros
export const getAllBooksService = async () => {
    const result = await pool.query("SELECT * FROM books");
    return result.rows;
};

// Obter um livro por ID
export const getBookByIdService = async (id) => {
    const result = await pool.query("SELECT * FROM books WHERE id = $1", [id]);
    return result.rows[0];
};

// Criar um livro com a URL da imagem
export const createBookService = async (title, author, price, quantity, genre, description, publishedYear, image) => {
    const result = await pool.query(
        "INSERT INTO books (title, author, price, quantity, genre, description, published_year, image_url) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
        [title, author, price, quantity, genre, description, publishedYear, image]
    );
    return result.rows[0];
};

// Atualizar um livro (mantendo a URL da imagem)
export const updateBookService = async (id, title, author, price, quantity, genre, description, publishedYear, imageUrl) => {
    const result = await pool.query(
        "UPDATE books SET title=$1, author=$2, price=$3, quantity=$4, genre=$5, description=$6, published_year=$7, image_url=$8 WHERE id=$9 RETURNING *",
        [title, author, price, quantity, genre, description, publishedYear, imageUrl, id] // Apenas URL da imagem
    );
    return result.rows[0];
};

// Excluir um livro
export const deleteBookService = async (id) => {
    const result = await pool.query(
        "DELETE FROM books WHERE id =$1 RETURNING *",
        [id]
    );
    return result.rows[0];
};
