import { SelectedPage } from "./Shared/type";
import Navbar from "./components/Navbar/Navbar";
import { useEffect, useState } from "react";
import Home from "./components/Scence/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import NewAndFeatured from "./components/Navbar/NewAndFeatured";
import Women from "./components/NewAndFeatured/Women";
import SignUp from "./components/Navbar/SignIn/SignUp";
import Login from "./components/Navbar/SignIn/Login";

const App = () => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.NewAndFeatured
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  // const [isLogin,setLogin] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
      }

      if (window.scrollY !== 0) {
        setIsTopOfPage(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-white">
      <Router>
        <Routes>
          {" "}
          <Route path="/login" element={<Login />} />
        </Routes>
        <Navbar
          isTopOfPage={isTopOfPage}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/new&featured/women" element={<Women />} />
          <Route path="/sign/up" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
