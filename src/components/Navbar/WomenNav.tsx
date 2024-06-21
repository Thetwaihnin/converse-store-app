import YellowConverse from "../../assets/converse 2.jpg";
import Valentine from "../../assets/Valentine converse.jpg";
import Black from "../../assets/Black.webp";
import Color from "../../assets/colorful.jpg";
import { Link } from "react-router-dom";

const WomenNav = () => {
  return (
    <div className="flex flex-row items-start justify-center py-6 px-10">
      {/* FIRST ROW  */}
      <div className="flex flex-row basis-[55%] items-start text-start">
        {/* FIRST  */}
        <div className="a basis-1/3">
          <div className="text-2xl mb-2">Trending</div>
          <ul className="text-sm py-4">
            <li className="mb-3 font-normal link1">
              <Link
                to="/women/sale"
                className="hover:text-blue-500 hover:text-[17px] transition-colors duration-300"
              >
                Best Sellers
              </Link>
            </li>
            <li className="mb-3 font-normal link1">
              <Link
                to="/women/new/arrival"
                className="hover:text-blue-500 hover:text-[17px] transition-colors duration-300"
              >
                New Arrivals
              </Link>
            </li>
            <li className="mb-3 font-normal link1">
              <Link
                to="/women/converse/exclusive"
                className="hover:text-blue-500 hover:text-[17px] transition-colors duration-300"
              >
                Converse Exclusive
              </Link>
            </li>
            <li className="mb-3 font-normal link1">
              <Link
                to="/women/commedesgarcons"
                className="hover:text-blue-500 hover:text-[17px] transition-colors duration-300"
              >
                Comme Des Garcons
              </Link>
            </li>
            <li className="mb-3 font-normal link1">
              <Link
                to="/women/craftedin/italy"
                className="hover:text-blue-500 hover:text-[17px] transition-colors duration-300"
              >
                Crafted in Italy
              </Link>
            </li>
            <li className="mb-3 font-normal link1">
              <Link
                to="/women/neutral/tones"
                className="hover:text-blue-500 hover:text-[17px] transition-colors duration-300"
              >
                Neutral Tones
              </Link>
            </li>
            <li className="mb-3 font-normal link1">
              <Link
                to="/women/leather/seude"
                className="hover:text-blue-500 hover:text-[17px] transition-colors duration-300"
              >
                Leather & Seude
              </Link>
            </li>
            <li className="mb-3 font-normal link1">
              <Link
                to="/women/black/white/essentials"
                className="hover:text-blue-500 hover:text-[17px] transition-colors duration-300"
              >
                Black & White Essentials
              </Link>
            </li>
            <li className="mb-3 font-normal link1">
              <Link
                to="/women/shoe/under/75"
                className="hover:text-blue-500 hover:text-[17px] transition-colors duration-300"
              >
                Shoe Under €75
              </Link>
            </li>
            <li className="mb-3 font-normal link1">
              <Link
                to="/women/sale"
                className="hover:text-blue-500 hover:text-[17px] transition-colors duration-300"
              >
                Sale
              </Link>
            </li>
          </ul>
        </div>
        {/* SECOND  */}
        <div className="a basis-1/3">
          <div className="text-2xl mb-2">Shoes</div>
          <ul className="text-sm py-4">
            <li className="mb-3 font-normal link1">
              <Link
                to="/women/high/top"
                className="hover:text-blue-500 hover:text-[17px] transition-colors duration-300"
              >
                High Top
              </Link>
            </li>
            <li className="mb-3 font-normal link1">
              <Link
                to="/women/low/top"
                className="hover:text-blue-500 hover:text-[17px] transition-colors duration-300"
              >
                Low Top
              </Link>
            </li>
            <li className="mb-3 font-normal link1">
              <Link
                to="/women/platform"
                className="hover:text-blue-500 hover:text-[17px] transition-colors duration-300"
              >
                Platform
              </Link>
            </li>
            <li className="mb-3 font-normal link1">
              <Link
                to="/women/boot"
                className="hover:text-blue-500 hover:text-[17px] transition-colors duration-300"
              >
                Boot
              </Link>
            </li>
            <li className="mb-3 font-normal link1">
              <Link
                to="/women/craftedin/italy"
                className="hover:text-blue-500 hover:text-[17px] transition-colors duration-300"
              >
                Crafted in Italy
              </Link>
            </li>
            <li className="mb-3 font-normal link1">
              <Link
                to="/women/classic/chunks"
                className="hover:text-blue-500 hover:text-[17px] transition-colors duration-300"
              >
                Classic Chunks
              </Link>
            </li>
            <li className="mb-3 font-normal link1">
              <Link
                to="/women/chunk/70"
                className="hover:text-blue-500 hover:text-[17px] transition-colors duration-300"
              >
                Chunk 70
              </Link>
            </li>
            <li className="mb-3 font-normal link1">
              <Link
                to="/women/runstar"
                className="hover:text-blue-500 hover:text-[17px] transition-colors duration-300"
              >
                Run Star
              </Link>
            </li>
            <li className="mb-3 font-normal link1">
              <Link
                to="/women/lugged"
                className="hover:text-blue-500 hover:text-[17px] transition-colors duration-300"
              >
                Lugged
              </Link>
            </li>
            <li className="mb-3 font-normal link1">
              <Link
                to="/women/onestar"
                className="hover:text-blue-500 hover:text-[17px] transition-colors duration-300"
              >
                One Star
              </Link>
            </li>
            <li className="mb-3 font-normal link1">
              <Link
                to="/women/wide/width"
                className="hover:text-blue-500 hover:text-[17px] transition-colors duration-300"
              >
                Wide Width
              </Link>
            </li>
            <li className="mb-3 font-normal link1">
              <Link
                to="/women/skateboating"
                className="hover:text-blue-500 hover:text-[17px] transition-colors duration-300"
              >
                Skateboating
              </Link>
            </li>
            <li className="mb-3 font-normal link1">
              <Link
                to="/women/basketball"
                className="hover:text-blue-500 hover:text-[17px] transition-colors duration-300"
              >
                Basketball
              </Link>
            </li>
            <li className="mb-3 font-normal link1">
              <Link
                to="/women/custom"
                className="hover:text-blue-500 hover:text-[17px] transition-colors duration-300"
              >
                Custom
              </Link>
            </li>
          </ul>
        </div>
        {/* THIRD  */}
        <div className="a basis-1/3 flex flex-col">
          <div>
            <div className="text-2xl mb-2">Clothings</div>
            <ul className="text-sm py-4">
              <li className="mb-3 font-normal link1">
                <Link
                  to="/women/all/clothings"
                  className="hover:text-blue-500 hover:text-[17px] transition-colors duration-300"
                >
                  All Clothings
                </Link>
              </li>
              <li className="mb-3 font-normal link1">
                <Link
                  to="/women/bags/backpacks"
                  className="hover:text-blue-500 hover:text-[17px] transition-colors duration-300"
                >
                  Bags & Backpacks
                </Link>
              </li>
              <li className="mb-3 font-normal link1">
                <Link
                  to="/women/jacket/sweatshirt"
                  className="hover:text-blue-500 hover:text-[17px] transition-colors duration-300"
                >
                  Jackets & Sweatshirts
                </Link>
              </li>
              <li className="mb-3 font-normal link1">
                <Link
                  to="/women/shorts/pants"
                  className="hover:text-blue-500 hover:text-[17px] transition-colors duration-300"
                >
                  Shorts & Pants
                </Link>
              </li>
              <li className="mb-3 font-normal link1">
                <Link
                  to="/women/winter/shop"
                  className="hover:text-blue-500 hover:text-[17px] transition-colors duration-300"
                >
                  Winter Shop
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div>
              <div className="text-2xl mb-2">Accessories</div>
              <ul className="text-sm py-4">
                <li className="mb-3 font-normal link1">
                  <Link
                    to="/women/all/accessories"
                    className="hover:text-blue-500 hover:text-[17px] transition-colors duration-300"
                  >
                    All Accessories
                  </Link>
                </li>
                <li className="mb-3 font-normal link1">
                  <Link
                    to="/women/new/arrival"
                    className="hover:text-blue-500 hover:text-[17px] transition-colors duration-300"
                  >
                    New Arrival
                  </Link>
                </li>
                <li className="mb-3 font-normal link1">
                  <Link
                    to="/women/hats"
                    className="hover:text-blue-500 hover:text-[17px] transition-colors duration-300"
                  >
                    Hats
                  </Link>
                </li>
                <li className="mb-3 font-normal link1">
                  <Link
                    to="/women/socks"
                    className="hover:text-blue-500 hover:text-[17px] transition-colors duration-300"
                  >
                    Socks
                  </Link>
                </li>
                <li className="mb-3 font-normal link1">
                  <Link
                    to="/women/laces"
                    className="hover:text-blue-500 hover:text-[17px] transition-colors duration-300"
                  >
                    Laces
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* SECOND ROW  */}
      <div className="b basis-2/6 flex flex-col">
        <div className="mb-6 text-2xl">Featured Collections</div>
        <div className="div1 flex flex-col basis-2/3">
          <div className="img1 flex flex-row">
            <div className="sm:w-[45%] mr-1 relative">
              <img
                className="w-full h-full object-cover"
                src={YellowConverse}
                alt="red-converse"
              />
              <p className="absolute bottom-0 ml-5 font-bold text-[20px] text-white pb-2">
                De Luxe Family Collection
              </p>
            </div>

            <div className="relative sm:w-[45%]">
              <img
                className="w-full h-full object-cover"
                src={Valentine}
                alt="white-converse"
              />
              <p className="absolute bottom-0 ml-2 text-bold text-[20px] text-white pb-3">
                Valentine's Day
              </p>
            </div>
          </div>

          <div className="img1 flex flex-row mt-1">
            <div className="w-[45%] mr-1 relative">
              <img
                className="w-full h-full object-cover"
                src={Black}
                alt="red-converse"
              />
              <p className="absolute bottom-0 z-50 ml-5 text-zinc-500 text-[20px] font-bold pb-2">
                Black and White Icons
              </p>
              <div className="absolute bg-slate-300 z-30 px-6 inset-0 bg-opacity-20"></div>
            </div>

            <div className="relative w-[45%]">
              <img
                className="w-full h-full object-cover "
                src={Color}
                alt="white-converse"
              />
              <p className="absolute bottom-0 left-4 font-bold z-50 text-white pb-3 text-[20px]">
                Customise
              </p>
              <div className="absolute bg-slate-300 z-30 px-6 inset-0 bg-opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WomenNav;
