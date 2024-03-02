import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import { Container } from "react-bootstrap";
import Header from "./components/header/Header";
import ContactPage from "./pages/contactpage/ContactPage";
import WorkExperiencePage from "./pages/workexperiencepage/WorkExperiencePage";
import EducationPage from "./pages/educationpage/EducationPage";
import CvPage from "./pages/cvpage/CvPage";

function App() {
  return (
    <Container fluid className="p-0 d-flex flex-column vh-100">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/work" element={<WorkExperiencePage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/cv" element={<CvPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
