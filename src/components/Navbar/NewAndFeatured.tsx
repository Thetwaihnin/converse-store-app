import { Link } from "react-router-dom";
import Insole from "../../assets/insole comfort.jpg";
import Valentine from "../../assets/Valentine converse.jpg";
import WhiteConverse from "../../assets/WhiteConverse.jpg";
import Converse from "../../assets/converse.jpg";
import Fifty from "../../assets/fifty.jpg";

const NewAndFeatured = () => {
  // const hoverLink = {

  // }
  return (
    <div className=" flex flex-row items-start justify-center  h-full">
      {/* FIRST ROW  */}
      <div className=" basis-1/4 flex flex-col mb-16 top-0 justify-center items-center">
        <div className="text-center">
          <ul className="text-sm p-4 text-left ">
            <li className="text-2xl mb-4">What's New</li>
            <li className="mb-2 font-normal link1">
              <Link
                to="/new&featured/women"
                className="hover:text-blue-500 transition-colors duration-300"
              >
                Women's New Arrival
              </Link>
            </li>
            <li className="mb-2 font-normal link1">
              <Link
                to="/menNewArrival"
                className="hover:text-blue-500 transition-colors duration-300"
              >
                Men's New Arrival
              </Link>
            </li>
            <li className="mb-2 font-normal link1">
              <Link
                to="/menNewArrival"
                className="hover:text-blue-500 transition-colors duration-300"
              >
                Kids' New Arrival
              </Link>
            </li>
            <li className="mb-2 font-normal link1">
              <Link
                to="/styleSeries"
                className="hover:text-blue-500 transition-colors duration-300"
              >
                Style Series
              </Link>
            </li>
            <li className="mb-2 font-normal link1">
              <Link
                to="/counter/climate"
                className="hover:text-blue-500 transition-colors duration-300"
              >
                Counter Climate
              </Link>
            </li>
            <li className="mb-2 font-normal link1">
              <Link
                to="/craftedInItaly"
                className="hover:text-blue-500 transition-colors duration-300"
              >
                Crafted in Italy
              </Link>
            </li>
          </ul>
        </div>

        <div className="text-center ">
          <ul className="text-sm p-2 text-left">
            <li className="text-[18px] mb-3">
              <div>Converse Colors</div>
            </li>
            <li className="mb-2 font-normal link1">
              <Link
                to="/getinspired"
                className=" hover:text-blue-500 hover:text-[17px] transition-colors duration-300"
              >
                Get Inspired
              </Link>
            </li>
            <li className="mb-2 font-normal link1">
              <Link
                to="/newfeatured/shop"
                className=" hover:text-blue-500 hover:text-[17px] transition-colors duration-300"
              >
                Shop
              </Link>
            </li>
            <li className="mb-2 font-normal link1">
              <Link
                to="/newfeatured/customize"
                className=" hover:text-blue-500 hover:text-[17px] transition-colors duration-300"
              >
                Customize
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* SECOND ROW  */}

      <div className=" basis-1/2 flex flex-row p-4">
        <div className="div1 flex flex-col basis-2/3">
          <div className="img1 flex flex-row">
            <div className="sm:w-[45%] mr-1 relative">
              <img
                className="w-full h-full object-cover"
                src={Valentine}
                alt="red-converse"
              />
              <p className="absolute bottom-0 ml-5 text-[20px] text-white pb-2">
                Valentine's Days
              </p>
            </div>

            <div className="relative sm:w-[45%]">
              <img
                className="w-full h-full object-cover"
                src={WhiteConverse}
                alt="white-converse"
              />
              <p className="absolute bottom-0 ml-2 text-[20px] text-white pb-3">
                Converse Colors
              </p>
            </div>
          </div>

          <div className="img1 flex flex-row mt-1">
            <div className="w-[45%] mr-1 relative">
              <img
                className="w-full h-full object-cover"
                src={Insole}
                alt="red-converse"
              />
              <p className="absolute bottom-0 ml-5 z-50 text-white text-[20px] font-bold pb-2">
                Add Extra Comfort
              </p>
              <div className="absolute bottom-0 left-0 w-full h-full bg-black opacity-20"></div>
            </div>

            <div className="relative w-[45%]">
              <img
                className="w-full h-full object-cover"
                src={Fifty}
                alt="white-converse"
              />
              <p className="absolute bottom-0 text-[20px] ml-2 text-white pb-3">
                Unlock:Up to 50% off
              </p>
            </div>
          </div>
        </div>

        <div className="div2 flex flex-col">
          <div className="mb-6">
            <div className="text-2xl mb-4">Featured</div>
            <div>
              <ul>
                <li className="mb-2 font-normal link1">
                  <Link
                    to="/newfeatured/createnext"
                    className=" hover:text-blue-500 hover:text-[17px] transition-colors duration-300"
                  >
                    Create Next
                  </Link>
                </li>
                <li className="mb-2 font-normal link1">
                  <Link
                    to="/newfeatured/converse/allstars"
                    className=" hover:text-blue-500 hover:text-[17px] transition-colors duration-300"
                  >
                    Converse All Stars
                  </Link>
                </li>
                <li className="mb-2 font-normal link1">
                  <Link
                    to="/newfeatured/pride"
                    className=" hover:text-blue-500 hover:text-[17px] transition-colors duration-300"
                  >
                    Pride
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <div className="text-[20px] mb-4">Skateboating</div>
            <ul>
              <li className="mb-3 font-normal link1">
                <Link
                  to="/newfeatured/skate/latest"
                  className=" hover:text-blue-500 hover:text-[17px] transition-colors duration-300"
                >
                  Skate Latest
                </Link>
              </li>
              <li className="mb-4 font-normal link1">
                <Link
                  to="/newfeatured/skateboating/shop"
                  className=" hover:text-blue-500 hover:text-[17px] transition-colors duration-300"
                >
                  Shop
                </Link>
              </li>
              
            </ul>
          </div>

          <div className="mt-8">
            <div className="text-[20px] mb-4">Basketball</div>
            <ul>
            <li className="mb-4 font-normal link1">
                <Link
                  to="/newfeatured/basketball/shop"
                  className=" hover:text-blue-500 hover:text-[17px] transition-colors duration-300"
                >
                  Shop
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* THIRD ROW  */}
      <div className=" basis-1/4 p-4">
        <div className="w-full">
          <img src={Converse} alt="converse" />
        </div>
        <div className="text-2xl my-3">The De luxe Collection</div>
        <p className="font-normal mb-3">
          The classic but more Luxe Designed for those who play at the bold edge
          of style
        </p>

        <button className="bg-black p-2 text-white mt-3 w-full">Shop</button>
      </div>
    </div>
  );
};

export default NewAndFeatured;
