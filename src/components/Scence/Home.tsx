// import { Link } from "react-router-dom"
import KarinaConverse from "../../assets/karina_converse.jpg";
import NewArrival from "./home/NewArrival";
import ShopByStyle from "./home/ShopByStyle";

const Home = () => {
  return (
    <div id="home" className="py-8 mt-6">
      <div className="relative ">
        <img src={KarinaConverse} alt="homeImg" className="w-full h-full" />
        <div className="absolute inset-y-0 justify-center flex flex-col items-center left-0 right-0 pb-2">
          <div className="text-[14px] font-sans text-white font-bold ">
            NEW IN: DELUXE SQUARED
          </div>
          <div className="text-3xl font-serif my-2 text-white font-bold">
            ALL EYES ON YOU
          </div>
          <p className="text-white mt-4 text-center w-[30%]">
            Step into your moment-whether you prefer a subtle edge or an all out
            glam with Swarovski® crystals.
          </p>
          <a href="#">
            <button className="py-2 px-4 mt-4 bg-white text-black">Shop</button>
          </a>
        </div>
      </div>
      <div className="mt-12">
        <ShopByStyle/>
      </div>
      <div className="mt-12">
        <NewArrival/>
      </div>
    </div>
  //  
  );
};

export default Home;
