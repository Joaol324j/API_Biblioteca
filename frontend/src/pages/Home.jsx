import React, { useEffect, useState } from 'react';
import axios from '../services/axios';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

const Home = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await axios.get('/book');
                setBooks(response.data.data);
            } catch (error) {
                console.error('Erro ao buscar livros:', error);
            }
        };

        fetchBooks();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`/book/${id}`);
            setBooks(books.filter(book => book.id !== id));
        } catch (error) {
            console.error('Erro ao excluir livro:', error);
        }
    };

    return (
        <div className="app">
            <header className="header">
                <div className="header-left">
                    <h1>Gerenciador de livros</h1>
                </div>
                <div className="header-right">
                    <Link to="/add" className="btn btn-primary">Cadastrar Novo Livro</Link>
                </div>
            </header>
            <div className="main-content container mt-5">
                <div className="row">
                    {books.map(book => (
                        <div className="col-md-4 mb-4" key={book.id}>
                            <div className="card h-100">
                                <img src={book.image_url} className="card-img-top" alt={book.title}></img>
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">{book.title}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">{book.author}</h6>
                                    <p className="card-text">Publicado em: {book.published_year}</p>
                                    <div className="mt-auto">
                                        <Link to={`/edit/${book.id}`} className="btn btn-warning mr-2">Editar</Link>
                                        <button className="btn btn-danger" onClick={() => handleDelete(book.id)}>Excluir</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <footer className="footer">
                <div className="footer-content">
                    <p>&copy; {new Date().getFullYear()} Capacita Brasil/C-Jovem</p>
                    <p>Todos os direitos reservados.</p>
                </div>
            </footer>
        </div>
    );
};

export default Home;
