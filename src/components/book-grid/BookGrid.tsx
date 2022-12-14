import { Book, Borrow } from '../../models/data'
import BookCard from './BookCard'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'

/*interface Props {
	// books: Book[];  <- har flyttat till Redux state
	borrowList: Borrow[];
	handleReturnClick: (bookId: number) => void;
	handleBorrowClick: (bookId: number) => void;
}*/

// Obs! Är också ok att skriva: (props: Props)
// const BookGrid = ({ borrowList, handleReturnClick, handleBorrowClick }: Props) => {
const BookGrid = () => {
	const books = useSelector((state: RootState) => state.books)
	
	return (
		<div className="book-grid">
			{books.map(book => (
				<BookCard key={book.bookId} book={book} />
			))}
		</div>
	)
}



export default BookGrid
