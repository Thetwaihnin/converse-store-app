import useMediaQuery from "../../hooks/useMediaQuery";
import Logo from "../../assets/pngwing.com.png";
import { SelectedPage } from "../../Shared/type";
import LInk from "./LInk";
import { FaBars, FaSearch } from "react-icons/fa";
import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/16/solid";
import { motion, AnimatePresence } from "framer-motion";
import LinkDropDown from "./LinkDropDown";
// import { IoHeadsetSharp } from "react-icons/io5";
import { MdShoppingCart } from "react-icons/md";
import ClickDropDown from "./ClickDropDown";
import { BsPerson } from "react-icons/bs";
import Login from "./SignIn/Login";
import { Link } from "react-router-dom";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  };

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const flexBetween = `flex items-center justify-between`;
  const isAboveMediumScreens = useMediaQuery("(min-width: 760px)");
  const navbarBackground = isTopOfPage ? "" : " border-b-2 bg-white";
  const styleImg = `max-w-[120px] max-h-16`;

  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
  const [isSearchBarOpen, setSearchBarOpen] = useState<boolean>(false);
  const [isClick, setClick] = useState<boolean>(false);
  const [isLogin, setLogin] = useState<boolean>(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleSearch = () => {
    setSearchBarOpen(true);
    setClick(!isClick);
  };

  const handleLogin = () => {
    setLogin(!isLogin);
  };

  return (
    <nav>
      <div
        className={`${navbarBackground} ${flexBetween} max-h-[100px] fixed flex flex-row justify-between top-0 z-30  w-full `}
      >
        <div className="flex items-center justify-start ml-7 w-5/6">
          <div className="flex items-center justify-between w-full gap-3">
            {isAboveMediumScreens ? (
              <>
                <div className={`${flexBetween} w-full`}>
                  <div>
                    <Link to="/home">
                      <img
                        src={Logo}
                        alt="converse-logo"
                        className={`${styleImg}`}
                      />
                    </Link>
                  </div>

                  {/* LINK DROPDOWN  */}
                  <div className={`${flexBetween} text-[15px] gap-8 font-bold`}>
                    <LinkDropDown
                      page="New & Featured"
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />

                    <LinkDropDown
                      page="Women"
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                    <LinkDropDown
                      page="Men"
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                    <LinkDropDown
                      page="Kids"
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                    <LinkDropDown
                      page="Custom"
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                    <LinkDropDown
                      page="Launch"
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                    <LinkDropDown
                      page="SALE"
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                  </div>

                  {/* LAST ROW  */}
                  <div className="flex items-center justify-end space-x-10">
                    {isClick ? (
                      <div
                        className="cursor-pointer font-bold text-lg"
                        onClick={() => {
                          setSearchBarOpen(!isSearchBarOpen);
                          setClick(!isClick);
                        }}
                      >
                        <XMarkIcon className="h-6 w-6 text-gray-500" />
                      </div>
                    ) : (
                      <a
                        className="text-black hover:text-gray-400 mx-2 font-bold flex-grow text-center"
                        onClick={handleSearch}
                      >
                        <FaSearch />
                      </a>
                    )}

                    <Link 
                      to="/login"
                      className="text-black text-2xl hover:text-gray-400 mx-2 font-bold flex-grow text-center"
                      onClick={handleLogin}
                    >
                      <BsPerson />
                    </Link>
                    <a
                      href="#"
                      className="text-black hover:text-gray-400 mx-2 font-bold"
                    >
                      <MdShoppingCart />
                    </a>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div>
                  <FaBars onClick={toggleMenu} />
                </div>
                <div className="justify-center w-full items-center">
                  <img
                    src={Logo}
                    alt="converse-logo"
                    className={`${styleImg} mx-auto`}
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && !isAboveMediumScreens && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed left-0 bottom-0 z-40 h-full w-full bg-white"
          >
            {/* Close Icon  */}
            <div className="flex justify-end p-5">
              <button onClick={() => setMenuOpen(!isMenuOpen)}>
                <XMarkIcon className="h-6 w-6 text-black" />
              </button>
            </div>

            <div className="flex ml-3 flex-col gap-4 text-[24px] font-serif mt-5">
              <LInk
                page="New & Featured"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />

              <LInk
                page="Women"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <LInk
                page="Men"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <LInk
                page="Kids"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <LInk
                page="Custom"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <LInk
                page="Launch"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <LInk
                page="SALE"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
          </motion.div>
        </AnimatePresence>
      )}

      {/* Search Dropdown  */}
      {isSearchBarOpen && <ClickDropDown />}

      {/* Login Form  */}
      {isLogin && <Login />}
    </nav>
  );
};

export default Navbar;
