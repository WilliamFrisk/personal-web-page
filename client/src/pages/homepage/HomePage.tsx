import React from "react";
import { Container, Row } from "react-bootstrap";
import Boids from "../../components/boids/Boids.jsx";
import "./HomePage.css";

const HomePage: React.FC = () => {
  return (
    <Container fluid className="flex-grow-1">
      <Row className="h-100">
        <div className="d-flex justify-content-center align-items-center p-0">
          <Boids />
          <h1 className="title">William Frisk</h1>
        </div>
      </Row>
    </Container>
  );
};

export default HomePage;
