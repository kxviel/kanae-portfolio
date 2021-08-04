import { Container, Row, Col, Form } from "react-bootstrap";

const Navbar = () => {
  return (
    <Container className="my-appbar" fluid>
      <Row className="h-100 align-items-center justify-content-between">
        <Col sm={4}>
          <p className="my-brand">
            <span>•</span>
            <span>か</span>
            <span>な</span>
            <span>え</span>
            <span>•</span>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Navbar;
