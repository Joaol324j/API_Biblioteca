import React, { useState, useEffect } from 'react';
import axios from '../services/axios';
import { useNavigate, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './EditBook.css'; // Certifique-se de criar este arquivo CSS

const EditBook = () => {
    const { id } = useParams();
    const [book, setBook] = useState({});

    const navigate = useNavigate();

    useEffect(() => {
        const fetchBook = async () => {
            try {
                const response = await axios.get(`/book/${id}`);
                setBook(response.data.data); // Certifique-se de acessar a chave correta da resposta
            } catch (error) {
                console.error('Erro ao buscar livro:', error);
            }
        };

        fetchBook();
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBook({ ...book, [name]: value });
    };

    function checkURL(url) {
        return (url.match(/\.(jpeg|jpg|gif|png)$/) != null);
    }

    const handleUpdateBook = async (e) => {
        e.preventDefault();

        const img = "https://png.pngtree.com/background/20221027/original/pngtree-paper-books-seamless-pattern-picture-image_1925120.jpg";

        let { title, author, price, quantity, genre, description, published_year, image_url } = book;

        if (!checkURL(image_url)) {
            image_url = img;
        }

        try {
            await axios.put(`/book/${id}`, { title, author, price, quantity, genre, description, published_year, image_url });
            navigate('/'); // Redireciona para a página inicial após editar o livro
        } catch (error) {
            console.error('Erro ao atualizar livro:', error);
        }
    };

    return (
        <div className="container mt-2 edit-book-container">
            <h2 className="text-center">Editar Livro</h2>
            <form onSubmit={handleUpdateBook} className="form-horizontal">
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
                    <input type="number" className="form-control" name="published_year" value={book.published_year} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                    <label>URL da imagem</label>
                    <input type="text" className="form-control" name="image_url" value={book.image_url} onChange={handleInputChange} />
                </div>
                <button type="submit" className="btn btn-primary">Atualizar</button>
            </form>
        </div>
    );
};

export default EditBook;
