import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row className="text-center py-3">
          <Col>
            Copyright &copy; ShoppingCart | Developed by 
            <a href="https://nasbeer.com" target="_blank" rel="noopener noreferrer">
              <span style={{ color: "red" }}> Nasbeer Ahammed</span>
            </a>
            
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
