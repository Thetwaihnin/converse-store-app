import RedConverse from "../../assets/RedConverse.jpg";
import CustomNew from "../../assets/new in custom.jpg";
import KidBoot from "../../assets/kids boot.webp";
import Easyon from "../../assets/easy-on.webp";
import { Link } from "react-router-dom";

const KidsNav = () => {
  return (
    <div className="flex flex-row items-start justify-center py-6 px-10">
      {/* FIRST ROW  */}
      <div className="flex flex-row basis-[70%] items-start text-start">
        {/* FIRST  */}
        <div className="a basis-1/3">
          <div className="text-2xl mb-2">Trending</div>
          <ul className="text-sm py-4">
            <li className="mb-3 font-normal link1">
              <Link
                to="/kids/sale"
                className="hover:text-blue-500 hover:text-[17px] transition-colors duration-300"
              >
                Explore Kids
              </Link>
            </li>
            <li className="mb-3 font-normal link1">
              <Link
                to="/kids/newArrival"
                className="hover:text-blue-500 hover:text-[17px] transition-colors duration-300"
              >
                New Arrival
              </Link>
            </li>
            <li className="mb-3 font-normal link1">
              <Link
                to="/kids/shoesUnder/55"
                className="hover:text-blue-500 hover:text-[17px] transition-colors duration-300"
              >
                Shoes under $55
              </Link>
            </li>
            <li className="mb-3 font-normal link1">
              <Link
                to="/kids/sales"
                className="hover:text-blue-500 hover:text-[17px] transition-colors duration-300"
              >
                Sales
              </Link>
            </li>
          </ul>
        </div>
        {/* SECOND  */}
        <div className="a basis-3/6 flex flex-row">
          <div className=" mr-5">
            <div className="text-2xl mb-2">By Age/Gender</div>
            <ul className="text-sm py-4">
              <li className="mb-3 font-normal link1">
                <Link
                  to="/kids/babies/toddlers"
                  className="hover:text-blue-500 hover:text-[14px] transition-colors duration-300"
                >
                  Babies & Toddlers(Age 0-4)
                </Link>
              </li>
              <li className="mb-3 font-normal link1">
                <Link
                  to="/kids/sales"
                  className="hover:text-blue-500 hover:text-[17px] transition-colors duration-300"
                >
                  Little Kids(Age 4-8)
                </Link>
              </li>
              <li className="mb-3 font-normal link1">
                <Link
                  to="/kids/big/kids"
                  className="hover:text-blue-500 hover:text-[17px] transition-colors duration-300"
                >
                  Big Kids(Age 8-12)
                </Link>
              </li>
              <li className="mb-3 font-normal link1">
                <Link
                  to="/kids/boys"
                  className="hover:text-blue-500 hover:text-[17px] transition-colors duration-300"
                >
                  Boys
                </Link>
              </li>
              <li className="mb-3 font-normal link1">
                <Link
                  to="/kids/girls"
                  className="hover:text-blue-500 hover:text-[17px] transition-colors duration-300"
                >
                  Girls
                </Link>
              </li>
              <li className="mb-3 font-normal link1">
                <Link
                  to="/kids/size/guide"
                  className="hover:text-blue-500 hover:text-[17px] transition-colors duration-300"
                >
                  Kids Size Guide
                </Link>
              </li>
              <li className="mb-3 font-normal link1">
                <Link
                  to="/kids/sales"
                  className="hover:text-blue-500 hover:text-[17px] transition-colors duration-300"
                >
                  Sales
                </Link>
              </li>
            </ul>
          </div>
          <div className="ml-8">
            <div className="text-2xl mb-2 ">Shoes</div>
            <ul className="text-sm py-4">
              <li className="mb-3 font-normal link1">
                <Link
                  to="/kids/sales"
                  className="hover:text-blue-500 hover:text-[17px] transition-colors duration-300"
                >
                  Sales
                </Link>
              </li>
              <li className="mb-3 font-normal link1">
                <Link
                  to="/kids/high/top"
                  className="hover:text-blue-500 hover:text-[17px] transition-colors duration-300"
                >
                  High Top
                </Link>
              </li>
              <li className="mb-3 font-normal link1">
                <Link
                  to="/kids/low/top"
                  className="hover:text-blue-500 hover:text-[17px] transition-colors duration-300"
                >
                  Low Top
                </Link>
              </li>
              <li className="mb-3 font-normal link1">
                <Link
                  to="/kids/platform"
                  className="hover:text-blue-500 hover:text-[17px] transition-colors duration-300"
                >
                  Platform
                </Link>
              </li>
              <li className="mb-3 font-normal link1">
                <Link
                  to="/kids/boot"
                  className="hover:text-blue-500 hover:text-[17px] transition-colors duration-300"
                >
                  Boots
                </Link>
              </li>
              <li className="mb-3 font-normal link1">
                <Link
                  to="/kids/easy-on/easy-off"
                  className="hover:text-blue-500 hover:text-[17px] transition-colors duration-300"
                >
                  Easy-on Easy-off
                </Link>
              </li>
              <li className="mb-3 font-normal link1">
                <Link
                  to="/kids/prints"
                  className="hover:text-blue-500 hover:text-[17px] transition-colors duration-300"
                >
                  Kids Prints
                </Link>
              </li>
              <li className="mb-3 font-normal link1">
                <Link
                  to="/kids/custom"
                  className="hover:text-blue-500 hover:text-[17px] transition-colors duration-300"
                >
                  Custom
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* THIRD  */}
        <div className="a basis-1/3 ">
          <div>
            <div className="text-2xl mb-2">Clothings & Accessories</div>
            <ul className="text-sm py-4">
              <li className="mb-3 font-normal link1">
                <Link
                  to="/kids/all/clothings"
                  className="hover:text-blue-500 hover:text-[17px] transition-colors duration-300"
                >
                  All Clothings
                </Link>
              </li>
              <li className="mb-3 font-normal link1">
                <Link
                  to="/kids/shorts/pants"
                  className="hover:text-blue-500 hover:text-[17px] transition-colors duration-300"
                >
                  Shorts & Pants
                </Link>
              </li>
              <li className="mb-3 font-normal link1">
                <Link
                  to="/kids/tops/shirts"
                  className="hover:text-blue-500 hover:text-[17px] transition-colors duration-300"
                >
                  Tops & T-Shirt
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* SECOND ROW  */}
      <div className="b basis-[30%] flex flex-col">
        <div className="mb-6 text-2xl">Featured Collections</div>
        <div className="div1 flex flex-col basis-2/3">
          <div className="img1 flex flex-row">
            <div className="sm:w-[45%] mr-1 relative">
              <img
                className="w-full h-full object-cover"
                src={CustomNew}
                alt="red-converse"
              />
              <p className="absolute bottom-0 ml-5 font-bold text-[20px] text-white pb-2">
                Valentine's Day
              </p>
            </div>

            <div className="relative sm:w-[45%]">
              <img
                className="w-full h-full object-cover"
                src={RedConverse}
                alt="white-converse"
              />
              <p className="absolute bottom-0 ml-2 text-bold text-[20px] text-white pb-3">
                Custom Kids' Prints
              </p>
            </div>
          </div>

          <div className="img1 flex flex-row mt-1">
            <div className="w-[45%] mr-1 relative">
              <img
                className="w-full h-full object-cover"
                src={KidBoot}
                alt="red-converse"
              />
              <p className="absolute bottom-0 z-50 ml-5 text-white text-[20px] font-bold pb-2">
                Easy-on Easy-off
              </p>
              <div className="absolute bg-slate-300 z-30 px-6 inset-0 bg-opacity-20"></div>
            </div>

            <div className="relative w-[45%]">
              <img
                className="w-full h-full object-cover "
                src={Easyon}
                alt="white-converse"
              />
              <p className="absolute bottom-0 left-4 font-bold z-50 text-white pb-3 text-[20px]">
                Kids Boots
              </p>
              {/* <div className="absolute bg-slate-300 z-30 px-6 inset-0 bg-opacity-50"></div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KidsNav;
