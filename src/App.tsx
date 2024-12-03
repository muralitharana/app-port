import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./components";
import { About, Home, Skills, WorkExperience } from "./pages";
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
