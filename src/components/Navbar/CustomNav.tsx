import ConColor from "../../assets/ConColor.jpg";
import Valentine from "../../assets/custom valentine.webp";
import Insole from "../../assets/insole comfort.jpg";
import Custom from "../../assets/customize.jpg";

const MenNav = () => {
  return (
    <div className="flex flex-row items-start justify-center py-6 px-10">
      {/* FIRST ROW  */}
      <div className="flex flex-row basis-[70%] items-start text-start">
        {/* FIRST  */}
        <div className="a basis-1/4">
          <div className="text-2xl mb-2">Trending</div>
          <ul className="text-sm py-4">
            <li className="font-normal mb-2">Explore Kids</li>
            <li className="font-normal mb-2">New Arrivals</li>
            <li className="font-normal mb-2">Start With A Blank</li>
          </ul>
        </div>
        {/* SECOND  */}
        <div className="a basis-1/4 flex flex-row">
          <div>
            <div className="text-2xl mb-2">Shop By Gender</div>
            <ul className="text-sm py-4">
              <li className="font-normal mb-2">All Custom</li>
              <li className="font-normal mb-2">Women</li>
              <li className="font-normal mb-2">Men</li>
              <li className="font-normal mb-2">Kids</li>
            </ul>
          </div>
        </div>
        {/* THIRD  */}
        <div className="a basis-1/4 flex flex-row">
          <div>
            <div className="text-2xl mb-2">Custom By Style</div>
            <ul className="text-sm py-4">
              <li className="font-normal mb-2">All Custom</li>
              <li className="font-normal mb-2">High Top</li>
              <li className="font-normal mb-2">Low Top</li>
              <li className="font-normal mb-2">Platform</li>
              <li className="font-normal mb-2">Boot</li>
            </ul>
          </div>
        </div>
        {/* FOURTH  */}
        <div className="a basis-1/4 ">
          <div>
            <div className="text-2xl mb-2">Start With A Collections</div>
            <ul className="text-sm py-4">
              <li className="font-normal mb-2">All Custom</li>
              <li className="font-normal mb-2">Classic Chuck</li>
              <li className="font-normal mb-2">Chuck 70</li>
              <li className="font-normal mb-2">Wide Width</li>
              <li className="font-normal mb-2">Match Your Mini </li>
              <li className="font-normal mb-2">Pride</li><li className="font-normal mb-2">All Clothings</li>
              <li className="font-normal mb-2">Emboridery</li>
              <li className="font-normal mb-2">Prints</li>
              <li className="font-normal mb-2">Glitter</li>
              <li className="font-normal mb-2">Wedding</li>
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
                src={Valentine}
                alt="red-converse"
              />
              <p className="absolute bottom-0 ml-5 font-bold text-[20px] text-white pb-2">
                Valentine's Day
              </p>
            </div>

            <div className="relative sm:w-[45%]">
              <img
                className="w-full h-full object-cover"
                src={ConColor}
                alt="white-converse"
              />
              <p className="absolute bottom-0 ml-2 text-bold text-[20px] text-white pb-3">
                New In Custom 
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
              <p className="absolute bottom-0 z-50 ml-5 text-white text-[20px] font-bold pb-2">
                Add Extra Comfort
              </p>
              <div className="absolute bottom-0 left-0 w-full h-full bg-black opacity-20"></div>
            </div>

            <div className="relative w-[45%]">
              <img
                className="w-full h-full object-cover "
                src={Custom}
                alt="white-converse"
              />

              <p className="absolute bottom-0 left-4 font-bold z-50 text-white pb-3 text-[20px]">
                Create Your Own
              </p>
              {/* <div className="abs/olute bg-slate-300 z-30 px-6 inset-0 bg-opacity-50"></div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenNav;
