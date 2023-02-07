import { useState, useEffect } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import axios from 'axios';

const App = () => {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get('http://localhost:3001/books');

    setBooks(response.data,);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const createBook = async (title) => {
    const response = await axios.post('http://localhost:3001/books', {
      title    // shortcut of title: title
    });

    const updatedBooks = [...books,response.data];

    /*
    //for local use
    const updatedBooks = [
      ...books,
      {
        id: Math.round(Math.random() * 9999),
        title,      // shortcut of title: title
      }
    ];
    */
    setBooks(updatedBooks);
  };

  const editBookById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });

    const editedBook = books.map((book) => {
      if (book.id === id) {
        //return { ...book, title: newTitle }; // for local use
        return { ...book, ...response.data };
      }

      return book;
    });

    setBooks(editedBook);
  };

  const deleteBookById = async (id) => {
    const response = await axios.delete(`http://localhost:3001/books/${id}`);

    const deletedBook = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(deletedBook);
  };

  return (
    <div className="app">
      <h1>Reading List</h1>
      <h4>Under development...</h4>
      <BookList onEdit={editBookById} books={books} onDelete={deleteBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  )
}

export default App;
