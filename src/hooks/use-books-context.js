import { useContext } from 'react';
import BooksContext from '../context/books';

//custom hook
function useBooksContext() {
  return useContext(BooksContext);
};

export default useBooksContext;