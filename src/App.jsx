import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";
// Pages
import Home from "./pages/Home";
import Vision from "./pages/Vision";
import EndPoints from "./pages/Endpoints";

//Components
import GlobalStyles from "./components/GlobalStyles";

import "./App.css";

const NavMenu = styled.nav`
  display: flex;
  justify-content: center;
  background-color: #007acc;
  padding: 1rem;

  @media (max-width: 508px) {
    display: flex;
    flex-direction: center;
    padding: 0.2rem;
    margin: 0 rem;
    align-items: center;
  }
`;
const NavItem = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  margin: 0 4rem;
  &:hover {
    text-decoration: underline;
    font-weight: bold;
  }
     @media (max-width: 508px) {
    display: flex;
    flex-direction: center;
    padding: 0.2rem;
    margin: 0 2rem;
    align-items: center;
  }
`;

function App() {
  return (
    <Router>
      <GlobalStyles />
      <NavMenu>
        <NavItem to="/">Home</NavItem>
        <NavItem to="/vision">Vision</NavItem>
        <NavItem to="/endpoints">Endpoints</NavItem>
      </NavMenu>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/endpoints" element={<EndPoints />} />
        <Route path="*" element={<h1>404: Page Not Found</h1>} />

      </Routes>
    </Router>
  );
}

export default App;
