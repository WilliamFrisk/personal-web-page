import React from "react";
import { Container, Row } from "react-bootstrap";
import Boids from "../components/boids/Boids.jsx";

const HomePage: React.FC = () => {
  return (
    <Container fluid className="flex-grow-1">
      <Row className="h-100 d-flex justify-content-center align-items-center">
        <Boids />
        <h1 style={{ textAlign: "center", color: "white", fontSize: "4rem" }}>
          William Frisk
        </h1>
      </Row>
    </Container>
  );
};

export default HomePage;
