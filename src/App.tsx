

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./components";
import { Home } from "./pages";

const About = () => <h1>About</h1>;
const Skills = () => <h1>Skills</h1>;
const WorkExperience = () => <h1>Work Experience</h1>;
const Articles = () => <h1>Articles</h1>;

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/work-experience" element={<WorkExperience />} />
        <Route path="/articles" element={<Articles />} />
      </Routes>
    </Router>
  );
}

export default App;
