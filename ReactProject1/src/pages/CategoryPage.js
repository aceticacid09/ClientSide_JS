import { useParams } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import BookCard from '../components/BookCard';
import { books } from '../data/bookData';

const CategoryPage = () => {
  const { category } = useParams();
  const filteredBooks = books.filter((book) => book.category === category);

  return (
    <div>
      <h1>{category} Books</h1>
      <Row>
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <Col key={book.id} sm={6} md={4} lg={3}>
              <BookCard book={book} />
            </Col>
          ))
        ) : (
          <p>No books found in this category.</p>
        )}
      </Row>
    </div>
  );
};

export default CategoryPage;