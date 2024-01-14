import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./page/home";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;