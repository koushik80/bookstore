import BookShow from './BookShow';
import useBooksContext from '../hooks/use-books-context';

const BookList = () => {
  //used custom hook
  const { books } = useBooksContext();
  // equivalent to  const { books } = useContext(BooksContext);

  const renderedBooks = books.map((book) => {
    return <BookShow key={book.id} book={book} />;
  });

  return (
    <div className="book-list">
      {renderedBooks}
    </div>
  );
}

export default BookList;
