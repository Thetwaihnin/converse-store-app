// import { Link } from "react-router-dom"
import ShopByCategory from "./home/ShopByCategory";
import KarinaConverse from "../../assets/karina_converse.jpg";
import KarinaTwo from "../../assets/Home/17195650550.png";
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
          {/* <a href="#"> */}
            <button id="" className="py-2 px-4 mt-4 sm:w-[100px] sm:bg-white sm:text-black xs:w-full xs:bg-black xs:text-white">Shop</button>
          {/* </a> */}
        </div>
      </div>

      <div className="relative mt-24">
        <img src={KarinaTwo} alt="homeImg" className="w-full h-full" />
        <div className="absolute inset-y-0 justify-center flex flex-col items-center left-0 right-0 pb-2">
          <div className="text-[24px] font-sans text-black font-bold ">
            Converse X Karina
          </div>
          <div className="text-3xl font-serif my-2 text-black font-bold">
            RUN STAR TRAINER
          </div>
          <p className="text-black mt-4 text-center w-[30%]">
            Converse Star Silver Line New Siloutte
          </p>
          <p>Run Star Trainer</p>
          {/* <a href="#"> */}
            <button id="" className="py-2 px-4 mt-4 sm:w-[100px] sm:bg-black sm:text-white xs:w-full xs:bg-black xs:text-white">Shop</button>
          {/* </a> */}
        </div>
      </div>
      <div className="mt-12">
        <ShopByStyle/>
      </div>
      <div className="mt-12">
        <ShopByCategory/>
      </div>
      <div className="mt-12">
        <NewArrival/>
      </div>
    </div>
  //  
  );
};

export default Home;
