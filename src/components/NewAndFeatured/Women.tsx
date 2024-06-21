import { Link } from "react-router-dom";
import Customize from "../../assets/customize.jpg";
import { FaPlus, FaRegHeart } from "react-icons/fa";
import { useState } from "react";

// import { FaHeartCircleBolt } from "react-icons/fa6";

const Women = () => {
  const [click, setClick] = useState<boolean>(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <div className="p-8 mt-16 h-full w-full">
      <div className="mt-2 text-center">
        <div className="">
          <Link to="/home" className=" text-gray-400 hover:text-blue-400">
            Home
          </Link>
          <Link to="/all" className=" text-gray-400 hover:text-blue-400">
            {" "}
            / All
          </Link>
          <Link
            to="/allNewArrivals"
            className=" text-gray-400 hover:text-blue-400"
          >
            {" "}
            / All New Arrivals
          </Link>
        </div>
        <div className=" mt-5 text-6xl">Women's New Arrivals</div>
        <div className="mt-8">
          <button className=" outline outline-black p-2 w-28 rounded-3xl mr-6">
            Shoes
          </button>
          <button className=" outline outline-black p-2 w-28 rounded-3xl mr-6 ">
            Clothings
          </button>
          <button className=" outline outline-slate-900 p-2 w-28 rounded-3xl">
            Accessories
          </button>
        </div>
      </div>

      <div className="grid grid-cols-4 mt-10 h-full">
        <div className="h-[100%]">
          <div className="border p-6 text-gray-400">Hide Filter</div>
          <div className="mt-16 overflow-auto no-scrollbar">
            <div className="px-3 py-4 border" onClick={handleClick}>
              <div className="flex justify-between">
                <div>Category</div>
                <div>
                  <FaPlus />
                </div>
              </div>
            </div>
            {click && (
              <div>
                <div className="border p-2">1</div>
                <div className="border p-2">2</div>
                <div className="border p-2">3</div>
              </div>
            )}

            <div className="px-3 py-4 border" onClick={handleClick}>
              <div className="flex justify-between">
                <div>Shoe Type</div>
                <div>
                  <FaPlus />
                </div>
              </div>
            </div>
            {click && (
              <div>
                <div className="border p-2">Chunk 70</div>
                <div className="border p-2">All Star</div>
                <div className="border p-2">Boot</div>
              </div>
            )}
            <div className="px-3 py-4 border">Collaboration</div>
            <div className="px-3 py-4 border">Shoe Width</div>
            <div className="px-3 py-4 border">Size</div>
            <div className="px-3 py-4 border">Color</div>
            <div className="px-3 py-4 border">Icon</div>
            <div className="px-3 py-4 border">Trending</div>
            <div className="px-3 py-4 border">Material</div>
            <div className="px-3 py-4 border">Featured</div>
          </div>
        </div>
        <div className="col-span-3">
          <div className="grid grid-cols-3 ">
            <div className="col-span-2 border p-6">185 results</div>
            <div className="p-6 border">Sort By</div>
          </div>
          <div className="flex justify-evenly mt-12 flex-wrap overflow-auto no-scrollbar h-[800px]">
            <div className="border h-80 w-64">
              <div className="relative">
                <div className="absolute">
                  <FaRegHeart className=" text-2xl mt-3 ml-2" />
                </div>
                <img
                  src={Customize}
                  alt="customize"
                  className="w-full h-full"
                />
              </div>
              <div className="mt-4">
                <p>Chunk All Star Cruise</p>
                <p>85,00€</p>
                <p className="mt-2 text-sm font-bold text-gray-600">
                  UNISEX LOW TOP SHOE
                </p>
                <p className=" text-gray-400 text-sm mt-2">
                  5 colors available
                </p>
              </div>
            </div>
            <div className="border h-80 w-64">
              <div className="relative">
                <div className="absolute">
                  <FaRegHeart className=" text-2xl mt-3 ml-2" />
                </div>
                <img
                  src={Customize}
                  alt="customize"
                  className="w-full h-full"
                />
              </div>
              <div className="mt-4">
                <p>Chunk All Star Cruise</p>
                <p>85,00€</p>
                <p className="mt-2 text-sm font-bold text-gray-600">
                  UNISEX LOW TOP SHOE
                </p>
                <p className=" text-gray-400 text-sm mt-2">
                  5 colors available
                </p>
              </div>
            </div>
            <div className="border h-80 w-64">
              <div className="relative">
                <div className="absolute">
                  <FaRegHeart className=" text-2xl mt-3 ml-2" />
                </div>
                <img
                  src={Customize}
                  alt="customize"
                  className="w-full h-full"
                />
              </div>
              <div className="mt-4">
                <p>Chunk All Star Cruise</p>
                <p>85,00€</p>
                <p className="mt-2 text-sm font-bold text-gray-600">
                  UNISEX LOW TOP SHOE
                </p>
                <p className=" text-gray-400 text-sm mt-2">
                  5 colors available
                </p>
              </div>
            </div>
            <div className="border h-80 w-64">
              <div className="relative">
                <div className="absolute">
                  <FaRegHeart className=" text-2xl mt-3 ml-2" />
                </div>
                <img
                  src={Customize}
                  alt="customize"
                  className="w-full h-full"
                />
              </div>
              <div className="mt-4">
                <p>Chunk All Star Cruise</p>
                <p>85,00€</p>
                <p className="mt-2 text-sm font-bold text-gray-600">
                  UNISEX LOW TOP SHOE
                </p>
                <p className=" text-gray-400 text-sm mt-2">
                  5 colors available
                </p>
              </div>
            </div>
            <div className="border h-80 w-64">
              <div className="relative">
                <div className="absolute">
                  <FaRegHeart className=" text-2xl mt-3 ml-2" />
                </div>
                <img
                  src={Customize}
                  alt="customize"
                  className="w-full h-full"
                />
              </div>
              <div className="mt-4">
                <p>Chunk All Star Cruise</p>
                <p>85,00€</p>
                <p className="mt-2 text-sm font-bold text-gray-600">
                  UNISEX LOW TOP SHOE
                </p>
                <p className=" text-gray-400 text-sm mt-2">
                  5 colors available
                </p>
              </div>
            </div>
            <div className="border h-80 w-64">
              <div className="relative">
                <div className="absolute">
                  <FaRegHeart className=" text-2xl mt-3 ml-2" />
                </div>
                <img
                  src={Customize}
                  alt="customize"
                  className="w-full h-full"
                />
              </div>
              <div className="mt-4">
                <p>Chunk All Star Cruise</p>
                <p>85,00€</p>
                <p className="mt-2 text-sm font-bold text-gray-600">
                  UNISEX LOW TOP SHOE
                </p>
                <p className=" text-gray-400 text-sm mt-2">
                  5 colors available
                </p>
              </div>
            </div>
            <div className="border h-80 w-64">
              <div className="relative">
                <div className="absolute">
                  <FaRegHeart className=" text-2xl mt-3 ml-2" />
                </div>
                <img
                  src={Customize}
                  alt="customize"
                  className="w-full h-full"
                />
              </div>
              <div className="mt-4">
                <p>Chunk All Star Cruise</p>
                <p>85,00€</p>
                <p className="mt-2 text-sm font-bold text-gray-600">
                  UNISEX LOW TOP SHOE
                </p>
                <p className=" text-gray-400 text-sm mt-2">
                  5 colors available
                </p>
              </div>
            </div>
            <div className="border h-80 w-64">
              <div className="relative">
                <div className="absolute">
                  <FaRegHeart className=" text-2xl mt-3 ml-2" />
                </div>
                <img
                  src={Customize}
                  alt="customize"
                  className="w-full h-full"
                />
              </div>
              <div className="mt-4">
                <p>Chunk All Star Cruise</p>
                <p>85,00€</p>
                <p className="mt-2 text-sm font-bold text-gray-600">
                  UNISEX LOW TOP SHOE
                </p>
                <p className=" text-gray-400 text-sm mt-2">
                  5 colors available
                </p>
              </div>
            </div>
            <div className="border h-80 w-64">
              <div className="relative">
                <div className="absolute">
                  <FaRegHeart className=" text-2xl mt-3 ml-2" />
                </div>
                <img
                  src={Customize}
                  alt="customize"
                  className="w-full h-full"
                />
              </div>
              <div className="mt-4">
                <p>Chunk All Star Cruise</p>
                <p>85,00€</p>
                <p className="mt-2 text-sm font-bold text-gray-600">
                  UNISEX LOW TOP SHOE
                </p>
                <p className=" text-gray-400 text-sm mt-2">
                  5 colors available
                </p>
              </div>
            </div>
            <div className="border h-80 w-64">
              <div className="relative">
                <div className="absolute">
                  <FaRegHeart className=" text-2xl mt-3 ml-2" />
                </div>
                <img
                  src={Customize}
                  alt="customize"
                  className="w-full h-full"
                />
              </div>
              <div className="mt-4">
                <p>Chunk All Star Cruise</p>
                <p>85,00€</p>
                <p className="mt-2 text-sm font-bold text-gray-600">
                  UNISEX LOW TOP SHOE
                </p>
                <p className=" text-gray-400 text-sm mt-2">
                  5 colors available
                </p>
              </div>
            </div>
            <div className="border h-80 w-64">
              <div className="relative">
                <div className="absolute">
                  <FaRegHeart className=" text-2xl mt-3 ml-2" />
                </div>
                <img
                  src={Customize}
                  alt="customize"
                  className="w-full h-full"
                />
              </div>
              <div className="mt-4">
                <p>Chunk All Star Cruise</p>
                <p>85,00€</p>
                <p className="mt-2 text-sm font-bold text-gray-600">
                  UNISEX LOW TOP SHOE
                </p>
                <p className=" text-gray-400 text-sm mt-2">
                  5 colors available
                </p>
              </div>
            </div>
            <div className="border h-80 w-64">
              <div className="relative">
                <div className="absolute">
                  <FaRegHeart className=" text-2xl mt-3 ml-2" />
                </div>
                <img
                  src={Customize}
                  alt="customize"
                  className="w-full h-full"
                />
              </div>
              <div className="mt-4">
                <p>Chunk All Star Cruise</p>
                <p>85,00€</p>
                <p className="mt-2 text-sm font-bold text-gray-600">
                  UNISEX LOW TOP SHOE
                </p>
                <p className=" text-gray-400 text-sm mt-2">
                  5 colors available
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Women;
