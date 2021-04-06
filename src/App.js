import { useState } from "react";
import "./App.scss";
import NavBar from "./Components/NavBar";
import HomePage from "./Pages/HomePage";
import { Switch, Route } from "react-router-dom";
import AboutPage from "./Pages/AboutPage";
import ProjectsPage from "./Pages/ProjectsPage";
import ContactPage from "./Pages/ContactPage";
import BlogsPage from "./Pages/BlogsPage";
import Backdrop from "./Components/Backdrop";

function App() {
 

  const [navToggle, setNavToggle] = useState(false);
  const navClick = () => {
    setNavToggle(!navToggle);
  };

  const click = () => {
    setNavToggle(false);
  };

  return (
    <div className="App">
      <Backdrop navStatus={navToggle} clicked={click} />
      <div className={`sidebar ${navToggle ? "nav-toggle" : ""}`}>
        <NavBar click={click} />
      </div>
      <div className="nav-btn" onClick={navClick}>
        <div className="lines-1"></div>
        <div className="lines-2"></div>
        <div className="lines-3"></div>
      </div>
      <div className="main-content">
        <div className="content">
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/about" exact>
              <AboutPage />
            </Route>
            <Route path="/projects" exact>
              <ProjectsPage />
            </Route>
            <Route path="/blogs" exact>
              <BlogsPage />
            </Route>
            <Route path="/contact" exact>
              <ContactPage />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
