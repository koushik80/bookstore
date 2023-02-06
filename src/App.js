import { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

const App = () => {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    const updatedBooks = [
      ...books,
      {
        id: Math.round(Math.random() * 9999),
        title,
      }
    ];  // shortcut of title: title
    setBooks(updatedBooks);
  };

  const deleteBookById = (id) => {
    const deletedBook = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(deletedBook);
  };

  /*
  const editBook = (e) => {
    
  };

  */


  return (
    <div className="app">
      <BookList books={books} onDelete={deleteBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  )
}

export default App;
