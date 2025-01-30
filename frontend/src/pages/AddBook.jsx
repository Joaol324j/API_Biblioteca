import React, { useState } from 'react';
import axios from '../services/axios';
import { useNavigate } from 'react-router-dom';

const AddBook = () => {
    const [book, setBook] = useState({});

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBook({ ...book, [name]: value });
    };

    const handleAddBook = async (e) => {
        e.preventDefault();

        const img = "https://png.pngtree.com/background/20221027/original/pngtree-paper-books-seamless-pattern-picture-image_1925120.jpg";

        let {title, author, price, quantity, genre, description, published_year, image_url } = book;

        if(!image_url) {
            image_url = img
        }

        try {
            await axios.post('/book', {title, author, price, quantity, genre, description, published_year, image_url });
            navigate('/'); // Redireciona para a página inicial após cadastrar o livro
        } catch (error) {
            console.error('Erro ao adicionar livro:', error);
        }
    };

    return (
        <div className="container mt-5">
            <h2>Cadastrar Novo Livro</h2>
            <form onSubmit={handleAddBook}>
                <div className="form-group">
                    <label>Título</label>
                    <input type="text" className="form-control" name="title" value={book.title} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                    <label>Autor</label>
                    <input type="text" className="form-control" name="author" value={book.author} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                    <label>Preço</label>
                    <input type="number" className="form-control" name="price" value={book.price} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                    <label>Quantidade</label>
                    <input type="number" className="form-control" name="quantity" value={book.quantity} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                    <label>Gênero</label>
                    <input type="text" className="form-control" name="genre" value={book.genre} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                    <label>Descrição</label>
                    <input type="text" className="form-control" name="description" value={book.description} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                    <label>Ano de Publicação</label>
                    <input type="number" className="form-control" name="published_year" value={book.published_year} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                    <label>URL da imagem</label>
                    <input type="text" className="form-control" name="image_url" value={book.image_url} onChange={handleInputChange} />
                </div>
                <button type="submit" className="btn btn-primary">Cadastrar</button>
            </form>
        </div>
    );
};

export default AddBook;