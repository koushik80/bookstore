import { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import axios from 'axios';

const App = () => {
  const [books, setBooks] = useState([]);

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

  const editBookById = (id, newTitle) => {
    const editedBook = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle };
      }

      return book;
    });

    setBooks(editedBook);
  };

  const deleteBookById = (id) => {
    const deletedBook = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(deletedBook);
  };

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList onEdit={editBookById} books={books} onDelete={deleteBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  )
}

export default App;
