import Women from "../../../assets/Home/Women.jpg";
import Men from "../../../assets/Home/Men.jpg";
import Kids from "../../../assets/Home/Kids.jpg";
import { FaArrowRight } from "react-icons/fa6";

const NewArrival = () => {
  return (
    <>
      <div className="text-3xl font-bold ml-4 font-serif">Shop By Category</div>
      <div className=" my-9 lg:flex w-full">
        <div className="relative">
          <img src={Women} alt="yellow" className="w-full h-full" />
          <div className="absolute  bottom-0 ml-5 text-[20px]  pb-2">
            <div className="flex">
              <FaArrowRight />
              <small className="mx-2">Women</small>
            </div>
          </div>
        </div>
        <div className=" relative">
          <img src={Men} alt="blue" className="w-full h-full" />
          <div className="absolute  bottom-0 ml-5 text-[20px]  pb-2">
            <div className="flex">
              <FaArrowRight />
              <small className="mx-2">Men</small>
            </div>
          </div>
        </div>
        <div className="s relative">
          <img src={Kids} alt="blue" className="w-full h-full" />
          <div className="absolute  bottom-0 ml-5 text-[20px]  pb-2">
            <div className="flex">
              <FaArrowRight />
              <small className="mx-2">Kids</small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewArrival;
