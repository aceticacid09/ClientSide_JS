import { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import BookCard from '../components/BookCard';
import { books } from '../data/bookData';

const HomePage = () => {
  const [newBooks, setNewBooks] = useState([]);

  useEffect(() => {
    // จัดเรียงตามวันที่และแสดงหนังสือ 3 เล่มล่าสุด
    const sortedBooks = [...books].sort(
      (a, b) => new Date(b.dateAdded) - new Date(a.dateAdded)
    );
    setNewBooks(sortedBooks.slice(0, 3)); // เลือกแค่ 3 เล่ม
  }, []);

  return (
    <div>
      <h1>Prompoj Kongmanakiattikun 650710992</h1>
      <Row>
        {newBooks.map((book) => (
          <Col key={book.id} sm={6} md={4} lg={3}>
            <BookCard book={book} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HomePage;