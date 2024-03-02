import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import { Container } from "react-bootstrap";
import Header from "./components/header/Header";

function App() {
  return (
    <Container fluid className="p-0 d-flex flex-column vh-100">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
