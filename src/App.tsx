import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./components";
import { About, Home, Skills, WorkExperience } from "./pages";
import { baseRoute } from "./config/baseRoute";

const Articles = () => <h1>Articles</h1>;

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path={`${baseRoute}`} element={<Home />} />
        <Route path={`${baseRoute}/about`} element={<About />} />
        <Route path={`${baseRoute}/skills`} element={<Skills />} />
        <Route
          path={`${baseRoute}/work-experience`}
          element={<WorkExperience />}
        />
        <Route path={`${baseRoute}/articles`} element={<Articles />} />
      </Routes>
    </Router>
  );
}

export default App;
