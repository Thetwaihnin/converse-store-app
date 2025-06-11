import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  Navigate,
} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Scence/Home";
import Cart from "./components/Cart/Cart";
import Women from "./components/NewAndFeatured/Women";
import SignUp from "./components/Navbar/SignIn/SignUp";
import Login from "./components/Navbar/SignIn/Login";
import HighTop from "./shoes/HighTop";
import Platform from "./shoes/Platform";
import Detail from "./shoes/PlatformDetail";
import HightopDetail from "./shoes/HightopDetail";
// import Error404 from "./Error404";
import CartProvider from "./Context/CartProvider";
import { useEffect, useState } from "react";
import { SelectedPage } from "./Shared/type";

const App = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.NewAndFeatured
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsTopOfPage(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-white">
      {!isLoginPage && (
        <Navbar
          isTopOfPage={isTopOfPage}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign/up" element={<SignUp />} />
        <Route path="/new&featured/women" element={<Women />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/hightop" element={<HighTop />} />
        <Route path="/platform" element={<Platform />} />
        <Route path="/shoes/:shoeId" element={<Detail />} />
        <Route path="/hightop/:shoeId" element={<HightopDetail />} />
        {/* <Route path="*" element={<Navigate to="/login" />} />{" "} */}
      </Routes>
      {isLoginPage && <Login />}{" "}
    </div>
  );
};

const AppWithRouter = () => (
  <Router>
    <CartProvider>
      <App />
    </CartProvider>
  </Router>
);

export default AppWithRouter;
