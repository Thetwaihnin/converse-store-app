import { Link } from "react-router-dom";
// import Customize from "../assets/customize.jpg";
import { FaMinus, FaPlus,  } from "react-icons/fa";
import { useState } from "react";
import Shoes from "../shoes/ShoeTypes/PlatformShoes";


// import { FaHeartCircleBolt } from "react-icons/fa6";

const HighTop = () => {
  const [gender, setGender] = useState<boolean>(false);
  const [kids, setKids] = useState<boolean>(false);
  const [shoeType, setShoeType] = useState<boolean>(false);
  const [collaboration, setCollaboration] = useState<boolean>(false);
  const [shoeWidth, setShoeWidth] = useState<boolean>(false);
  const [color, setColor] = useState<boolean>(false);
  const [trending, setTrending] = useState<boolean>(false);
  const [icon, setIcon] = useState<boolean>(false);
  const [material, setMaterial] = useState<boolean>(false);
  const [feature, setFeature] = useState<boolean>(false);
  const [size, setSize] = useState<boolean>(false);

  const handleGender = () => {
    setGender(!gender);
  };

  const handleShoeType = () => {
    setShoeType(!shoeType);
  };

  const handleSize = () => {
    setSize(!size);
  };

  const handleKids = () => {
    setKids(!kids);
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

  // const handleFavourite = () => {
  //   alert("favourite");
  // };

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
      <div className="mt-2 text-center justify-center">
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
            / All Sneakers
          </Link>
        </div>
        <div className=" mt-5 text-6xl">Platform Shoes</div>
        <div className=" mt-2 justify-center flex">
            <p className="w-1/2 ">
                Stand tall and elevate yor style with a pair of platform 
                sneakers,designed to add height and attitude to any outfit.
            </p>
        </div>
      </div>

      <div className="grid grid-cols-4 mt-10 h-full">
        <div className="h-[100%]">
          <div className="border p-6 text-gray-400">Hide Filter</div>
          {/* <FaFilter/> */}
          <div className="mt-16 overflow-auto no-scrollbar">
            {/* GENDER SECTION  */}
            <div
              className={gender ? "px-3 py-4 border-t" : "px-3 py-4 border-y"}
              onClick={handleGender}
            >
              <div className="flex justify-between">
                <div>Gender</div>
                <div>{gender ? <FaMinus /> : <FaPlus />}</div>
              </div>
            </div>
            {gender && (
              <div>
                <div className=" p-2 flex justify-between">
                  <div>
                    <input
                      className="mx-3 w-3"
                      type="checkbox"
                      value="Clothing"
                    />
                    <label htmlFor="clothing" className=" text-gray-400">
                      Women
                    </label>
                  </div>
                  <span className="text-gray-400">421</span>
                </div>

                <div className=" p-2 flex justify-between">
                  <div>
                    <input className="mx-3 w-3" type="checkbox" value="shoe" />
                    <label htmlFor="shoe" className=" text-gray-400">
                      Men
                    </label>
                  </div>
                  <span className="text-gray-400">358</span>
                </div>

                <div className=" p-2 flex justify-between">
                  <div>
                    <input
                      className="mx-3 w-3"
                      type="checkbox"
                      value="accessorie"
                    />
                    <label htmlFor="accessorie" className=" text-gray-400">
                      kids
                    </label>
                  </div>
                  <span className="text-gray-400">42</span>
                </div>
              </div>
            )}

            {/* KIDS SECTION  */}
            <div
              className={kids ? "px-3 py-4 border-t" : "px-3 py-4 border-y"}
              onClick={handleKids}
            >
              <div className="flex justify-between">
                <div>Kids</div>
                <div>{kids ? <FaMinus /> : <FaPlus />}</div>
              </div>
            </div>
            {kids && (
              <div>
                <div className=" p-2 flex justify-between">
                  <div>
                    <input className="mx-3 w-3" type="checkbox" value="boys" />
                    <label htmlFor="clothing" className=" text-gray-400">
                      Boys
                    </label>
                  </div>
                  <span className="text-gray-400">21</span>
                </div>

                <div className=" p-2 flex justify-between">
                  <div>
                    <input className="mx-3 w-3" type="checkbox" value="girls" />
                    <label htmlFor="shoe" className=" text-gray-400">
                      Girls
                    </label>
                  </div>
                  <span className="text-gray-400">38</span>
                </div>
              </div>
            )}

            {/* SHOE TYPE  */}
            <div
              className={shoeType ? "px-3 py-4 border-t" : "px-3 py-4 border-y"}
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

              {/* COLLABORATION  */}
            <div
              className={
                collaboration ? "px-3 py-4 border-t" : "px-3 py-4 border-y"
              }
              onClick={handleCollab}
            >
              <div className="flex justify-between">
                <div>Collaboration</div>
                <div>
                  {collaboration? (<FaMinus/>):(<FaPlus/>)}
                </div>
              </div>
            </div>
            {collaboration && (
              <div>
                <div className=" p-2 flex justify-between">
                  <div>
                    <input className="mx-3 w-3" type="checkbox" value="shoe" />
                    <label htmlFor="shoe" className=" text-gray-400">
                      NBA
                    </label>
                  </div>
                  <span className="text-gray-400">38</span>
                </div>

                <div className=" p-2 flex justify-between">
                  <div>
                    <input
                      className="mx-3 w-3"
                      type="checkbox"
                      value="accessorie"
                    />
                    <label htmlFor="accessorie" className=" text-gray-400">
                      Comme des Garcons
                    </label>
                  </div>
                  <span className="text-gray-400">2</span>
                </div>

                <div className=" p-2 flex justify-between">
                  <div>
                    <input
                      className="mx-3 w-3"
                      type="checkbox"
                      value="accessorie"
                    />
                    <label htmlFor="accessorie" className=" text-gray-400">
                      Dundeons and Dragons
                    </label>
                  </div>
                  <span className="text-gray-400">2</span>
                </div>

                <div className=" p-2 flex justify-between">
                  <div>
                    <input
                      className="mx-3 w-3"
                      type="checkbox"
                      value="kimjones"
                    />
                    <label htmlFor="accessorie" className=" text-gray-400">
                      Kim Jones
                    </label>
                  </div>
                  <span className="text-gray-400">2</span>
                </div>

                <div className=" p-2 flex justify-between">
                  <div>
                    <input
                      className="mx-3 w-3"
                      type="checkbox"
                      value="accessorie"
                    />
                    <label htmlFor="accessorie" className=" text-gray-400">
                      LFC
                    </label>
                  </div>
                  <span className="text-gray-400">2</span>
                </div>

                <div className=" p-2 flex justify-between">
                  <div>
                    <input
                      className="mx-3 w-3"
                      type="checkbox"
                      value="accessorie"
                    />
                    <label htmlFor="accessorie" className=" text-gray-400">
                      RickOwens
                    </label>
                  </div>
                  <span className="text-gray-400">2</span>
                </div>

                <div className=" p-2 flex justify-between">
                  <div>
                    <input
                      className="mx-3 w-3"
                      type="checkbox"
                      value="accessorie"
                    />
                    <label htmlFor="accessorie" className=" text-gray-400">
                      Stussy
                    </label>
                  </div>
                  <span className="text-gray-400">2</span>
                </div>
              </div>
              //  nba, comme des garcons,dundeons and dragons,kim jones,lfc,rickowens,stussy
            )}

              {/* SHOEWIDTH  */}
            <div
              className={
                shoeWidth ? "px-3 py-4 botder-t" : "px-3 py-4 border-y"
              }
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

              {/* SIZE  */}
            <div
              className={size ? "px-3 py-4 border-t" : "px-3 py-4 border-y"}
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

              {/* COLOR  */}
            <div
              className={color ? "px-3 py-4 border-t" : "px-3 py-4 border-y"}
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
              <div className="grid grid-cols-4 mt-6 mb-6 ml-6">
                <div className="">
                  <div className="w-[30px] mb-2 h-[30px] bg-blue-700  rounded-full "></div>
                  <label htmlFor="blue" className=" ">
                    Blue
                  </label>
                </div>

                <div className="">
                  <div className="w-[30px] mb-2 h-[30px] bg-yellow-400 rounded-full "></div>
                  <label htmlFor="yellow" className="mr-2">
                    Yellow
                  </label>
                </div>

                <div className="">
                  <div className="w-[30px] mb-2 h-[30px] bg-red-600 rounded-full "></div>
                  <label htmlFor="Red" className="">
                    Red
                  </label>
                </div>

                <div className="">
                  <div className="w-[30px] mb-2 h-[30px] bg-pink-500 rounded-full "></div>
                  <label htmlFor="Pink" className="">
                    Pink
                  </label>
                </div>

                <div className="my-2">
                  <div className="w-[30px] mb-2 h-[30px] bg-orange-900 rounded-full "></div>
                  <label htmlFor="Brown" className="">
                    Brown
                  </label>
                </div>

                <div className="my-2">
                  <div className="w-[30px] mb-2 h-[30px] bg-green-500 rounded-full "></div>
                  <label htmlFor="Green" className="">
                    Green
                  </label>
                </div>

                <div className="my-2">
                  <div className="w-[30px] mb-2 h-[30px] bg-purple-500 rounded-full "></div>
                  <label htmlFor="Purple" className="">
                    Purple
                  </label>
                </div>

                <div className="my-2">
                  <div className="w-[30px] mb-2 h-[30px] bg-gray-400 rounded-full "></div>
                  <label htmlFor="Gray" className="">
                    Gray
                  </label>
                </div>

                <div className="my-2">
                  <div className="w-[30px] mb-2 h-[30px] bg-black rounded-full "></div>
                  <label htmlFor="Black" className="">
                    Black
                  </label>
                </div>

                <div className="my-2">
                  <div className="w-[30px] mb-2 h-[30px] bg-orange-400 rounded-full "></div>
                  <label htmlFor="Orange" className="mr-2">
                    Orange
                  </label>
                </div>
              </div>
            )}

              {/* ICON  */}
            <div
              className={icon ? "px-3 py-4 border-t" : "px-3 py-4 border-y"}
              onClick={handleIcon}
            >
              <div className="flex justify-between">
                <div>Icon</div>
                <div>
                  {icon?(<FaMinus/>):(<FaPlus/>)}
                </div>
              </div>
            </div>
            {icon && (
              <div>
                <div className=" p-2 flex justify-between">
                  <div>
                    <input
                      className="mx-3 w-3"
                      type="checkbox"
                      value="Clothing"
                    />
                    <label htmlFor="clothing" className=" text-gray-400">
                      Chunk Taylor All Star
                    </label>
                  </div>
                  <span className="text-gray-400">386</span>
                </div>

                <div className=" p-2 flex justify-between">
                  <div>
                    <input className="mx-3 w-3" type="checkbox" value="shoe" />
                    <label htmlFor="shoe" className=" text-gray-400">
                      Chunk 70
                    </label>
                  </div>
                  <span className="text-gray-400">119</span>
                </div>
              </div>
            )}

              {/* TRENDING  */}
            <div
              className={trending ? "px-3 py-4 border-t" : "px-3 py-4 border-y"}
              onClick={handleTrending}
            >
              <div className="flex justify-between">
                <div>Trending</div>
                <div>
                  {trending?(<FaMinus/>):(<FaPlus/>)}
                </div>
              </div>
            </div>
            {trending && (
              <div>
                <div className=" p-2 flex justify-between">
                  <div>
                    <input
                      className="mx-3 w-3"
                      type="checkbox"
                      value="Clothing"
                    />
                    <label htmlFor="clothing" className=" text-gray-400">
                      Run Star
                    </label>
                  </div>
                  <span className="text-gray-400">421</span>
                </div>

                <div className=" p-2 flex justify-between">
                  <div>
                    <input className="mx-3 w-3" type="checkbox" value="chucktaylorallstar" />
                    <label htmlFor="taylorallstar" className=" text-gray-400">
                      Chuck Taylor All Star Move
                    </label>
                  </div>
                  <span className="text-gray-400">38</span>
                </div>

                <div className=" p-2 flex justify-between">
                  <div>
                    <input
                      className="mx-3 w-3"
                      type="checkbox"
                      value="craftedinitaly"
                    />
                    <label htmlFor="craftedinitaly" className=" text-gray-400">
                      Crafted In Italy
                    </label>
                  </div>
                  <span className="text-gray-400">42</span>
                </div>

                <div className=" p-2 flex justify-between">
                  <div>
                    <input
                      className="mx-3 w-3"
                      type="checkbox"
                      value="allstarlugged"
                    />
                    <label htmlFor="allstarlugged" className=" text-gray-400">
                      Chuck Taylor All Star Lugged
                    </label>
                  </div>
                  <span className="text-gray-400">12</span>
                </div>

                <div className=" p-2 flex justify-between">
                  <div>
                    <input
                      className="mx-3 w-3"
                      type="checkbox"
                      value="designedinitaly"
                    />
                    <label htmlFor="designedinitaly" className=" text-gray-400">
                      Designed In Italy
                    </label>
                  </div>
                  <span className="text-gray-400">43</span>
                </div>

                <div className=" p-2 flex justify-between">
                  <div>
                    <input
                      className="mx-3 w-3"
                      type="checkbox"
                      value="limitedediton"
                    />
                    <label htmlFor="limitededition" className=" text-gray-400">
                      Limited Edition
                    </label>
                  </div>
                  <span className="text-gray-400">42</span>
                </div>

                <div className=" p-2 flex justify-between">
                  <div>
                    <input
                      className="mx-3 w-3"
                      type="checkbox"
                      value="wedding"
                    />
                    <label htmlFor="wedding" className=" text-gray-400">
                      Wedding
                    </label>
                  </div>
                  <span className="text-gray-400">10</span>
                </div>
              </div>

              // run star,chck taylor all star move,craftd in italy,chuck taylor all star lugged,designed initaly,limitted edition,wedding
            )}

              {/* MATERIAL  */}
            <div
              className={material ? "px-3 py-4 border-t" : "px-3 py-4 border-y"}
              onClick={handleMaterial}
            >
              <div className="flex justify-between">
                <div>Material</div>
                <div>
                  {material? (<FaMinus/>):(<FaPlus/>)}
                </div>
              </div>
            </div>
            {material && (
              <div>
                <div className=" p-2 flex justify-between">
                  <div>
                    <input
                      className="mx-3 w-3"
                      type="checkbox"
                      value="cotton"
                    />
                    <label htmlFor="cotton" className=" text-gray-400">
                      Cotton
                    </label>
                  </div>
                  <span className="text-gray-400">421</span>
                </div>

                <div className=" p-2 flex justify-between">
                  <div>
                    <input className="mx-3 w-3" type="checkbox" value="goretex" />
                    <label htmlFor="goretex" className=" text-gray-400">
                      Gore-Tex
                    </label>
                  </div>
                  <span className="text-gray-400">58</span>
                </div>

                <div className=" p-2 flex justify-between">
                  <div>
                    <input
                      className="mx-3 w-3"
                      type="checkbox"
                      value="stretchcanvas"
                    />
                    <label htmlFor="stretchcanvas" className=" text-gray-400">
                      Stretch Canvas
                    </label>
                  </div>
                  <span className="text-gray-400">42</span>
                </div>

                <div className=" p-2 flex justify-between">
                  <div>
                    <input
                      className="mx-3 w-3"
                      type="checkbox"
                      value="canvas"
                    />
                    <label htmlFor="canvas" className=" text-gray-400">
                       Canvas
                    </label>
                  </div>
                  <span className="text-gray-400">132</span>
                </div>

                <div className=" p-2 flex justify-between">
                  <div>
                    <input
                      className="mx-3 w-3"
                      type="checkbox"
                      value="leather"
                    />
                    <label htmlFor="leather" className=" text-gray-400">
                      Leather
                    </label>
                  </div>
                  <span className="text-gray-400">86</span>
                </div>

                <div className=" p-2 flex justify-between">
                  <div>
                    <input
                      className="mx-3 w-3"
                      type="checkbox"
                      value="suede"
                    />
                    <label htmlFor="suede" className=" text-gray-400">
                      Suede
                    </label>
                  </div>
                  <span className="text-gray-400">49</span>
                </div>
              </div>

              // canvas,leather,suede,cotton,gore-tex,stretch canvas
            )}

              {/* FEATURE  */}
            <div
              className={feature ? "px-3 py-4 border-t" : "px-3 py-4 border-y"}
              onClick={handleFeature}
            >
              <div className="flex justify-between">
                <div>Featured</div>
                <div>
                  {feature? (<FaMinus/>):(<FaPlus/>)}
                </div>
              </div>
            </div>
            {feature && (
              <div>
                <div className=" p-2 flex justify-between">
                  <div>
                    <input
                      className="mx-3 w-3"
                      type="checkbox"
                      value="warmlining"
                    />
                    <label htmlFor="warmlining" className=" text-gray-400">
                      Warm Lining
                    </label>
                  </div>
                  <span className="text-gray-400">41</span>
                </div>

                <div className=" p-2 flex justify-between">
                  <div>
                    <input className="mx-3 w-3" type="checkbox" value="waterproof" />
                    <label htmlFor="waterproof" className=" text-gray-400">
                      Waterproof
                    </label>
                  </div>
                  <span className="text-gray-400">38</span>
                </div>

                <div className=" p-2 flex justify-between">
                  <div>
                    <input
                      className="mx-3 w-3"
                      type="checkbox"
                      value="waterRepellent"
                    />
                    <label htmlFor="waterRepellent" className=" text-gray-400">
                      Water Repellent
                    </label>
                  </div>
                  <span className="text-gray-400">42</span>
                </div>

                <div className=" p-2 flex justify-between">
                  <div>
                    <input
                      className="mx-3 w-3"
                      type="checkbox"
                      value="easyoneasyoff"
                    />
                    <label htmlFor="easyoneasyoff" className=" text-gray-400">
                      Easy On Easy Off
                    </label>
                  </div>
                  <span className="text-gray-400">42</span>
                </div>
                <div className=" p-2 flex justify-between">
                  <div>
                    <input
                      className="mx-3 w-3"
                      type="checkbox"
                      value="extracomfort"
                    />
                    <label htmlFor="extracomfort" className=" text-gray-400">
                      Extra Comfort
                    </label>
                  </div>
                  <span className="text-gray-400">142</span>
                </div>
              </div>

              // extra comfort,easy on easy off, warm lining ,waterproof,water repellent
            )}
          </div>
        </div>

        <div className="col-span-3">
          <div className="grid grid-cols-3 ">
            <div className="col-span-2 border p-6">128 results</div>
            <div className=" border flex align-middle">
              <div className="p-6">Sort By</div>
              <select className="bg-slate-300 p-6 ">
                <option value="">Featured</option>
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
          <div >
            <Shoes/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighTop;
