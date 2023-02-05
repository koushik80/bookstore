import { useState } from 'react';
import BookCreate from './components/BookCreate';

const App = () => {
  const [books, setBooks] = useState([]);

  const createBook = (title, id) => {
    const updatedBooks = [
      ...books, ({
        id: id,
        title: title
      })
    ];
    setBooks(updatedBooks);
  };

  /*
  const editBook = (e) => {
    
  };

  const deleteBook = (e) => {
    
  };
  */


  return (
    <div>
      <BookCreate onCreate={createBook} />
    </div>
  )
}

export default App;
