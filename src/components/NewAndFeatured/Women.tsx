import { Link } from "react-router-dom";
import Customize from "../../assets/customize.jpg";
import { FaMinus, FaPlus, FaRegHeart } from "react-icons/fa";
import { useState } from "react";

// import { FaHeartCircleBolt } from "react-icons/fa6";

const Women = () => {
  const [category, setCategory] = useState<boolean>(false);
  const [shoeType, setShoeType] = useState<boolean>(false);
  const [collaboration, setCollaboration] = useState<boolean>(false);
  const [shoeWidth, setShoeWidth] = useState<boolean>(false);
  const [color, setColor] = useState<boolean>(false);
  const [trending, setTrending] = useState<boolean>(false);
  const [icon, setIcon] = useState<boolean>(false);
  const [material, setMaterial] = useState<boolean>(false);
  const [feature, setFeature] = useState<boolean>(false);
  const [size, setSize] = useState<boolean>(false);

  const handleCategory = () => {
    setCategory(!category);
  };

  const handleSize = () => {
    setSize(!size);
  };

  const handleShoeType = () => {
    setShoeType(!shoeType);
  };

  const handleCollab = () => {
    setCollaboration(!collaboration);
  };

  const handleShoeWidth = () => {
    setShoeWidth(!shoeWidth);
  };

  const handleColor = () => {
    setColor(!color);
  };

  const handleFavourite = () => {
    alert("favourite");
  };

  const handleTrending = () => {
    setTrending(!trending);
  };

  const handleIcon = () => {
    setIcon(!icon);
  };

  const handleMaterial = () => {
    setMaterial(!material);
  };

  const handleFeature = () => {
    setFeature(!feature);
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
          {/* <FaFilter/> */}
          <div className="mt-16 overflow-auto no-scrollbar">
            <div
              className={category ? "px-3 py-4" : "px-3 py-4 border"}
              onClick={handleCategory}
            >
              <div className="flex justify-between">
                <div>Category</div>
                <div>{category ? <FaMinus /> : <FaPlus />}</div>
              </div>
            </div>
            {category && (
              <div>
                <div className="border p-2 flex justify-between">
                  <div>
                    <input
                      className="mx-3 w-3"
                      type="checkbox"
                      value="Clothing"
                    />
                    <label htmlFor="clothing" className=" text-gray-400">
                      Clothing
                    </label>
                  </div>
                  <span className="text-gray-400">183</span>
                </div>

                <div className="border p-2 flex justify-between">
                  <div>
                    <input className="mx-3 w-3" type="checkbox" value="shoe" />
                    <label htmlFor="shoe" className=" text-gray-400">
                      Shoe
                    </label>
                  </div>
                  <span className="text-gray-400">133</span>
                </div>

                <div className="border p-2 flex justify-between">
                  <div>
                    <input
                      className="mx-3 w-3"
                      type="checkbox"
                      value="accessorie"
                    />
                    <label htmlFor="accessorie" className=" text-gray-400">
                      Accessories
                    </label>
                  </div>
                  <span className="text-gray-400">13</span>
                </div>
              </div>
            )}

            <div
              className={shoeType ? "px-3 py-4" : "px-3 py-4 border"}
              onClick={handleShoeType}
            >
              <div className="flex justify-between">
                <div>Shoe Type</div>
                <div>{shoeType ? <FaMinus /> : <FaPlus />}</div>
              </div>
            </div>
            {shoeType && (
              <div>
                <div className="border text-center grid grid-cols-2 mb-6">
                  <div className="border py-3 px-2">1</div>
                  <div className="border py-3 px-2">2</div>
                  <div className="border py-3 px-2">3</div>
                  <div className="border py-3 px-2">4</div>
                  <div className="border py-3 px-2 col-span-2">5</div>
                </div>
                <hr />
                <br />
              </div>
            )}

            <div className="px-3 py-4 border" onClick={handleCollab}>
              <div className="flex justify-between">
                <div>Collaboration</div>
                <div>
                  <FaPlus />
                </div>
              </div>
            </div>
            {collaboration && (
              <div>
                <div>1</div>
                <div>2</div>
                <div>3</div>
              </div>
            )}

            <div
              className={shoeWidth ? "px-3 py-4" : "px-3 py-4 border"}
              onClick={handleShoeWidth}
            >
              <div className="flex justify-between">
                <div>Shoe Width</div>
                <div>{shoeWidth ? <FaMinus /> : <FaPlus />}</div>
              </div>
            </div>
            {shoeWidth && (
              <div className="grid grid-cols-2 border mt-3 text-center mb-6">
                <div className="border py-3 px-2 text-gray-400">Standard</div>
                <div className="border py-3 px-2 text-gray-400">Wide</div>
              </div>
            )}

            <div
              className={size ? "px-3 py-4" : "px-3 py-4 border"}
              onClick={handleSize}
            >
              <div className="flex justify-between">
                <div>Size</div>
                <div>
                  <div>{size ? <FaMinus /> : <FaPlus />}</div>
                </div>
              </div>
            </div>
            {size && (
              <div className="flex flex-row flex-wrap text-center mb-6 mt-3">
                <div className="border px-2 py-3 w-[20%]">35</div>
                <div className="border px-2 py-3 w-[20%]">35.5</div>
                <div className="border px-2 py-3 w-[20%]">36</div>
                <div className="border px-2 py-3 w-[20%]">36.5</div>
                <div className="border px-2 py-3 w-[20%]">37</div>
                <div className="border px-2 py-3 w-[20%]">37.5</div>
                <div className="border px-2 py-3 w-[20%]">38</div>
                <div className="border px-2 py-3 w-[20%]">38.5</div>
                <div className="border px-2 py-3 w-[20%]">39</div>
                <div className="border px-2 py-3 w-[20%]">39.5</div>
                <div className="border px-2 py-3 w-[20%]">40</div>
                <div className="border px-2 py-3 w-[20%]">40.5</div>
                <div className="border px-2 py-3 w-[20%]">41</div>
                <div className="border px-2 py-3 w-[20%]">41.5</div>
                <div className="border px-2 py-3 w-[20%]">42</div>
                <div className="border px-2 py-3 w-[20%]">42.5</div>
                <div className="border px-2 py-3 w-[20%]">43</div>
                <div className="border px-2 py-3 w-[20%]">44.5</div>
                <div className="border px-2 py-3 w-[20%]">45</div>
                <div className="border px-2 py-3 w-[20%]">46.5</div>
                <div className="border px-2 py-3 w-[20%]">47.5</div>
                <div className="border px-2 py-3 w-[20%]">48</div>
                <div className="border px-2 py-3 w-[20%]">49</div>
                <div className="border px-2 py-3 w-[20%]">50</div>
                <div className="border px-2 py-3 w-[20%]">51.5</div>
                <div className="border px-2 py-3 w-[20%]">4XS</div>
                <div className="border px-2 py-3 w-[20%]">XXXS</div>
                <div className="border px-2 py-3 w-[20%]">XXS</div>
                <div className="border px-2 py-3 w-[20%]">XS</div>
                <div className="border px-2 py-3 w-[20%]">S</div>
                <div className="border px-2 py-3 w-[20%]">M</div>
                <div className="border px-2 py-3 w-[20%]">L</div>
                <div className="border px-2 py-3 w-[20%]">XL</div>
                <div className="border px-2 py-3 w-[20%]">XXL</div>
                <div className="border px-2 py-3 w-[20%]">XXXL</div>
                <div className="border px-2 py-3 w-[20%]">OS</div>
              </div>
            )}

            <div
              className={color ? "px-3 py-4" : "px-3 py-4 border"}
              onClick={handleColor}
            >
              <div className="flex justify-between">
                <div>Color</div>
                <div>
                  <div>{color ? <FaMinus /> : <FaPlus />}</div>
                </div>
              </div>
            </div>

            {color && (
              <div className="grid grid-cols-4 mt-6 mb-6">
                <div className="">
                  <div className="w-[30px] mb-2 h-[30px] bg-blue-700  rounded-full "></div>
                  <label htmlFor="blue" className=" ">Blue</label>
                </div>

                <div className="">
                  <div className="w-[30px] mb-2 h-[30px] bg-yellow-400 rounded-full "></div>
                  <label htmlFor="yellow" className="mr-2">Yellow</label>
                </div>

                <div className="">
                  <div className="w-[30px] mb-2 h-[30px] bg-red-600 rounded-full "></div>
                  <label htmlFor="Red" className="">Red</label>
                </div>

                <div className="">
                  <div className="w-[30px] mb-2 h-[30px] bg-pink-500 rounded-full "></div>
                  <label htmlFor="Pink" className="">Pink</label>
                </div>

                <div className="my-2">
                  <div className="w-[30px] mb-2 h-[30px] bg-orange-900 rounded-full "></div>
                  <label htmlFor="Brown" className="">Brown</label>
                </div>

                <div className="my-2">
                  <div className="w-[30px] mb-2 h-[30px] bg-green-500 rounded-full "></div>
                  <label htmlFor="Green" className="">Green</label>
                </div>

                <div className="my-2">
                  <div className="w-[30px] mb-2 h-[30px] bg-purple-500 rounded-full "></div>
                  <label htmlFor="Purple" className="">Purple</label>
                </div>

                <div className="my-2">
                  <div className="w-[30px] mb-2 h-[30px] bg-gray-400 rounded-full "></div>
                  <label htmlFor="Gray" className="">Gray</label>
                </div>

                <div className="my-2">
                  <div className="w-[30px] mb-2 h-[30px] bg-black rounded-full "></div>
                  <label htmlFor="Black" className="">Black</label>
                </div>

                <div className="my-2">
                  <div className="w-[30px] mb-2 h-[30px] bg-orange-400 rounded-full "></div>
                  <label htmlFor="Orange" className="mr-2">Orange</label>
                </div>
              </div>
            )}

            <div className="px-3 py-4 border" onClick={handleIcon}>
              <div className="flex justify-between">
                <div>Icon</div>
                <div>
                  <FaPlus />
                </div>
              </div>
            </div>
            {icon && (
              <div>
                <div className="border p-2">Chunk 70</div>
                <div className="border p-2">All Star</div>
                <div className="border p-2">Boot</div>
              </div>
            )}

            <div className="px-3 py-4 border" onClick={handleTrending}>
              <div className="flex justify-between">
                <div>Trending</div>
                <div>
                  <FaPlus />
                </div>
              </div>
            </div>
            {trending && (
              <div>
                <div className="border p-2">Chunk 70</div>
                <div className="border p-2">All Star</div>
                <div className="border p-2">Boot</div>
              </div>
            )}

            <div className="px-3 py-4 border" onClick={handleMaterial}>
              <div className="flex justify-between">
                <div>Material</div>
                <div>
                  <FaPlus />
                </div>
              </div>
            </div>
            {material && (
              <div>
                <div className="border p-2">Chunk 70</div>
                <div className="border p-2">All Star</div>
                <div className="border p-2">Boot</div>
              </div>
            )}

            <div className="px-3 py-4 border" onClick={handleFeature}>
              <div className="flex justify-between">
                <div>Featured</div>
                <div>
                  <FaPlus />
                </div>
              </div>
            </div>
            {feature && (
              <div>
                <div className="border p-2">Chunk 70</div>
                <div className="border p-2">All Star</div>
                <div className="border p-2">Boot</div>
              </div>
            )}
          </div>
        </div>
        <div className="col-span-3">
          <div className="grid grid-cols-3 ">
            <div className="col-span-2 border p-6">185 results</div>
            <div className=" border flex align-middle">
              <div className="p-6">Sort By</div>
              <select className="bg-slate-300 p-6">
                <option value="">Newest to Oldest</option>
                <option value="newest" className="py-2">
                  Newest
                </option>
                <option value="oldest" className="py-2">
                  Oldest
                </option>
              </select>
              <div></div>
            </div>
          </div>
          <div className="flex justify-evenly mt-12 flex-wrap overflow-auto no-scrollbar h-[800px]">
            <div className="border h-80 w-64">
              <div className="relative">
                <div className="absolute">
                  <FaRegHeart
                    className=" text-2xl mt-3 ml-2"
                    onClick={handleFavourite}
                  />
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
