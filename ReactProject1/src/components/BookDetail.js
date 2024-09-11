import { useParams } from "react-router-dom";
import { Card } from "react-bootstrap";
import { books } from '../data/bookData';  // นำเข้าข้อมูลหนังสือ

const BookDetail = () => {
  const { id } = useParams();
  const book = books.find((b) => b.id === parseInt(id));

  if (!book) {
    return <p>Book not found</p>;
  }

  return (
    <Card style={{ width: "18rem", margin: "auto" }}>
      <Card.Img variant="top" src={book.image} alt={book.title} />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Text>Author: {book.author}</Card.Text>
        <Card.Text>{book.description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default BookDetail;