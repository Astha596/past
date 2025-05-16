// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SeePastLife from "./pages/SeePastLife";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/see-past-life" element={<SeePastLife />} />
      </Routes>
    </Router>
  );
};

export default App;
