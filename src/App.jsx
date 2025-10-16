import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Registration from "./components/Registration";
import Home from "./components/Home";
import OrganizingCommittee from "./components/OrganizingCommittee";
import PlacesRourkela from "./components/PlacesRourkela";
import Accommodation from "./components/Accommodation";

function App() {
  return (
    <>
      <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-background-light dark:bg-background-dark font-display">
        <div className="layout-container flex h-full grow flex-col">
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/committee" element={<OrganizingCommittee />} />
            <Route path="/places" element={<PlacesRourkela />}></Route>
            <Route path="/accommodation" element={<Accommodation />}></Route>
          </Routes>
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}

export default App;
