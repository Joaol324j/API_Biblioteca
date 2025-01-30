import { createBookService, getAllBooksService, getBookByIdService, updateBookService, deleteBookService } from "../models/bookModel.js";

const handleResponse = (res, status, message, data = null) => {
    res.status(status).json({ status, message, data });
};

// Criar um novo livro (agora aceitando image_url)
export const createBook = async (req, res, next) => {
    const { title, author, price, quantity, genre, description, published_year, image_url } = req.body;
    try {
        const newBook = await createBookService(title, author, price, quantity, genre, description, published_year, image_url);
        handleResponse(res, 201, "Livro criado com sucesso", newBook);
    } catch (err) {
        next(err);
    }
};

// Obter todos os livros
export const getAllBooks = async (req, res, next) => {
    try {
        const books = await getAllBooksService();
        handleResponse(res, 200, "Livros encontrados com sucesso", books);
    } catch (err) {
        next(err);
    }
};

// Obter um livro por ID
export const getBookById = async (req, res, next) => {
    try {
        const book = await getBookByIdService(req.params.id);
        if (!book) return handleResponse(res, 404, "Livro não encontrado");
        handleResponse(res, 200, "Livro encontrado com sucesso", book);
    } catch (err) {
        next(err);
    }
};

// Atualizar um livro (agora aceitando image_url)
export const updateBook = async (req, res, next) => {
    const { title, author, price, quantity, genre, description, published_year, image_url } = req.body;
    try {
        const updatedBook = await updateBookService(req.params.id, title, author, price, quantity, genre, description, published_year, image_url);
        if (!updatedBook) return handleResponse(res, 404, "Livro não encontrado");
        handleResponse(res, 200, "Livro atualizado com sucesso", updatedBook);
    } catch (err) {
        next(err);
    }
};

// Excluir um livro
export const deleteBook = async (req, res, next) => {
    try {
        const deletedBook = await deleteBookService(req.params.id);
        if (!deletedBook) return handleResponse(res, 404, "Livro não encontrado");
        handleResponse(res, 200, "Livro deletado com sucesso", deletedBook);
    } catch (err) {
        next(err);
    }
};
