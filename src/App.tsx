import { SelectedPage } from "./Shared/type";
import Navbar from "./components/Navbar/Navbar";
import { useEffect, useState } from "react";
import Home from "./components/Scence/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import NewAndFeatured from "./components/Navbar/NewAndFeatured";
import Women from "./components/NewAndFeatured/Women";

const App = () => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.NewAndFeatured
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

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
        <Navbar
          isTopOfPage={isTopOfPage}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/women" element={<Women/>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
