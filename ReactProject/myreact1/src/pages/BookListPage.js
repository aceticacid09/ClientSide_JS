import { Row, Col, ListGroup } from 'react-bootstrap';
import { books } from '../data/bookData';
import { Link } from 'react-router-dom';

const BookListPage = () => {
  return (
    <div>
      <h1>All Books</h1>
      <ListGroup>
        {books.map((book) => (
          <ListGroup.Item key={book.id}>
            <Row>
              <Col md={2}>
                <img src={book.image} alt={book.title} style={{ width: '100%' }} />
              </Col>
              <Col md={8}>
                <h4>{book.title}</h4>
                <p>Author: {book.author}</p>
              </Col>
              <Col md={2}>
                <Link to={`/book/${book.id}`}>View Details</Link>
              </Col>
            </Row>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default BookListPage;