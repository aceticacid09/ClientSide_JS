import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import AppNavbar from "./Navbar";

import { Button, Container } from "react-bootstrap";

function App() {
  return (
    <div>
      <AppNavbar/>
      <Header title="Welcome to My Website" />
      <Content mainText="This is the main content" />
      <Container className="text-center">
        <h1>Hello, React Bootstrap!</h1>
        <Button variant="primary">Click me</Button>
      </Container>
      <Footer author="Mario" year="2024" />
    </div>
  );
}

export default App;
