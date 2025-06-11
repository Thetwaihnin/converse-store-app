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
          <div className="md:text-3xl font-serif my-2 text-white font-bold">
            ALL EYES ON YOU
          </div>
          <p className="text-white md:text-[20px] text-[10px] md:mt-4 text-center  md:w-[30%]">
            Step into your moment-whether you prefer a subtle edge or an all out
            glam with Swarovski® crystals.
          </p>
          {/* <a href="#"> */}
            <button id="" className="py-2 px-4 mt-4 sm:w-auto bg-black text-white rounded-sm w-full md:bg-white md:text-gray-950">Shop</button>
          {/* </a> */}
        </div>
      </div>

      <div className="relative mt-12 md:mt-24">
        <img src={KarinaTwo} alt="homeImg" className="w-full h-full" />
        <div className="absolute inset-y-0 justify-center flex flex-col items-center left-0 right-0 pb-2">
          <div className="md:text-[24px] font-sans text-black font-bold ">
            Converse X Karina
          </div>
          <div className="md:text-3xl font-serif md:my-2 text-black font-bold">
            RUN STAR TRAINER
          </div>
          <p className="text-black sm:text-[16px] text-[10px] md:mt-4 text-center w-full md:w-[30%]">
            Converse Star Silver Line New Siloutte
          </p>
          <p className="text-[10px] sm:text-[24px]">Run Star Trainer</p>
          {/* <a href="#"> */}
            <button id="" className="py-2 px-4 mt-4 sm:w-auto bg-black text-white rounded-sm w-full md:bg-white md:text-gray-950">Shop</button>
          {/* </a> */}
        </div>
      </div>
      <div className="mt-12">
        <ShopByStyle/>
      </div>
      <div className="md:mt-64 ">
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
