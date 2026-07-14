import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactSection from "./components/ContactSection";

function ContactPage() {
  return (
    <div className="App">
      <ContactSection />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;