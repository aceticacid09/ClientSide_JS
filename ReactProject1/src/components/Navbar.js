import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { books } from '../data/bookData';  // ดึงข้อมูลหนังสือ

const NavigationBar = () => {
  // ดึงหมวดหมู่ทั้งหมดที่ไม่ซ้ำจาก bookData
  const categories = [...new Set(books.map(book => book.category))];

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/">BookStore</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/books">All Books</Nav.Link>
          <NavDropdown title="Categories" id="basic-nav-dropdown">
            {/* สร้างเมนูจากหมวดหมู่ */}
            {categories.map((category, index) => (
              <NavDropdown.Item key={index} as={Link} to={`/category/${category}`}>
                {category}
              </NavDropdown.Item>
            ))}
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;