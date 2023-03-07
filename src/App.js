import React from "react";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// Pages
import Homepage from "./components/Homepage";
import ProjectsDisplay from "./components/ProjectsDisplay";
import ContactPage from "./components/ContactPage";

function App() {
  // Returning the various pages
  return (
    <BrowserRouter>
      <div>
        <Header />

        {/* Routing to different pages in the single page application */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="projects" element={<ProjectsDisplay />} />
          <Route path="contact" element={<ContactPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
