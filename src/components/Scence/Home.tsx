import ShopByCategory from "./home/ShopByCategory";
import KarinaConverse from "../../assets/karina_converse.jpg";
import KarinaTwo from "../../assets/Home/17195650550.png";
import NewArrival from "./home/NewArrival";
import ShopByStyle from "./home/ShopByStyle";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div id="home" className="py-8 mt-6">
      {/* Hero Section 1 */}
      <div className="relative w-full h-auto">
        <img
          src={KarinaConverse}
          alt="homeImg"
          className="w-full h-auto object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center px-4 text-center">
          <div className="text-sm sm:text-base text-white font-bold font-sans">
            NEW IN: DELUXE SQUARED
          </div>
          <div className="text-xl sm:text-3xl text-white font-bold font-serif my-2">
            ALL EYES ON YOU
          </div>
          <p className="text-white text-xs sm:text-base md:text-lg mt-2 sm:mt-4 max-w-md">
            Step into your moment—whether you prefer a subtle edge or an all out
            glam with Swarovski® crystals.
          </p>
          <Link to="/hightop">
            <button className="mt-4 px-6 py-2 bg-black text-white rounded-sm w-full sm:w-auto md:bg-white md:text-black">
              Shop
            </button>
          </Link>
        </div>
      </div>

      {/* Hero Section 2 */}
      <div className="relative w-full h-auto mt-12 md:mt-24">
        <img
          src={KarinaTwo}
          alt="homeImg"
          className="w-full h-auto object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center px-4 text-center">
          <div className="text-lg sm:text-2xl text-black font-bold font-sans">
            Converse X Karina
          </div>
          <div className="text-xl sm:text-3xl text-black font-bold font-serif my-1">
            RUN STAR TRAINER
          </div>
          <p className="text-xs sm:text-base text-black mt-1 sm:mt-4 max-w-md">
            Converse Star Silver Line New Silhouette
          </p>
          <p className="text-xs sm:text-xl mt-1">Run Star Trainer</p>
          <Link to="/platform">
            <button className="mt-4 px-6 py-2 bg-black text-white rounded-sm w-full sm:w-auto md:bg-white md:text-black">
              Shop
            </button>
          </Link>
        </div>
      </div>

      {/* Other Sections */}
      <div className="mt-12">
        <ShopByStyle />
      </div>

      <div className="mt-24 md:mt-64">
        <ShopByCategory />
      </div>

      <div className="mt-12">
        <NewArrival />
      </div>
    </div>
  );
};

export default Home;
