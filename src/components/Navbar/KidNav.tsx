import RedConverse from "../../assets/RedConverse.jpg";
import CustomNew from "../../assets/new in custom.jpg";
import KidBoot from "../../assets/kids boot.webp";
import Easyon from "../../assets/easy-on.webp";

const KidsNav = () => {
  return (
    <div className="flex flex-row items-start justify-center py-6 px-10">
      {/* FIRST ROW  */}
      <div className="flex flex-row basis-[70%] items-start text-start">
        {/* FIRST  */}
        <div className="a basis-1/3">
          <div className="text-2xl mb-2">Trending</div>
          <ul className="text-sm py-4">
            <li className="font-normal mb-2">Explore Kids</li>
            <li className="font-normal mb-2">New Arrivals</li>
            <li className="font-normal mb-2">Shoes under €55</li>
            <li className="font-normal mb-2">Sale</li>
          </ul>
        </div>
        {/* SECOND  */}
        <div className="a basis-3/6 flex flex-row">
          <div>
            <div className="text-2xl mb-2">By Age/Gender</div>
            <ul className="text-sm py-4">
              <li className="font-normal mb-2">Babies & Toddlers(Age 0-4)</li>
              <li className="font-normal mb-2">Little Kids(Age 4-8)</li>
              <li className="font-normal mb-2">Big Kids(Age 8-12)</li>
              <li className="font-normal mb-2">Boys</li>
              <li className="font-normal mb-2">Girls</li>
              <li className="font-normal mb-2">Kids Size Guide</li>
            </ul>
          </div>
          <div className="ml-6">
            <div className="text-2xl mb-2 ">Shoes</div>
            <ul className="text-sm py-4">
              <li className="font-normal mb-2">All Shoes</li>
              <li className="font-normal mb-2">High Top</li>
              <li className="font-normal mb-2">Low Top</li>
              <li className="font-normal mb-2">Platform</li>
              <li className="font-normal mb-2">Boot</li>
              <li className="font-normal mb-2">Easy-on Easy-off</li>
              <li className="font-normal mb-2">Kids' Prints</li>
              <li className="font-normal mb-2">Custom</li>
            </ul>
          </div>
        </div>
        {/* THIRD  */}
        <div className="a basis-1/3 ">
          <div>
            <div className="text-2xl mb-2">Clothings & Accessories</div>
            <ul className="text-sm py-4">
              <li className="font-normal mb-2">All Clothings</li>
              <li className="font-normal mb-2">Shorts & Pants</li>
              <li className="font-normal mb-2">Tops & T-Shirts</li>
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
