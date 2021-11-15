import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navibar from "./components/Navibar/Navibar";

import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Work from "./components/pages/Work";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";

const App = () => {
  return (
    <>
      <Navibar></Navibar>
      <Router>
        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/work" component={Work}></Route>
          <Route path="/projects" component={Projects}></Route>
          <Route path="/contact" component={Contact}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
