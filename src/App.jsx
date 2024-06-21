import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

import Menu from "./Compontents/Menu";
import AllCom from "./Compontents/AllCom";
import FullStackDev from "./Compontents/FullStackDev";
import DataScience from "./Compontents/DataScience";
import CyberSecurity from "./Compontents/CyperSecurity";
import Career from "./Compontents/Career";
import Footer from "./Compontents/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu></Menu>
        <Routes>
          <Route path="/" element={<AllCom />}></Route>
          <Route
            path="/fullStackDevelopment"
            element={<FullStackDev />}
          ></Route>
          <Route path="/dataScience" element={<DataScience />}></Route>
          <Route path="/cyberSecurity" element={<CyberSecurity />}></Route>
          <Route path="/career" element={<Career />}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
