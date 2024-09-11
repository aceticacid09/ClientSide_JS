import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

const BookCard = ({ book }) => {
  return (
    <Card style={{ width: "18rem", margin: "1rem" }}>
      <Card.Img variant="top" src={book.image} alt={book.title} />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Text>{book.author}</Card.Text>
        <Button as={Link} to={`/book/${book.id}`} variant="primary">
          View Details
        </Button>
      </Card.Body>
    </Card>
  );
};

export default BookCard;