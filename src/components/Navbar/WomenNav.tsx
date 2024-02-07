import YellowConverse from "../../assets/converse 2.jpg";
import Valentine from "../../assets/Valentine converse.jpg";
import Black from "../../assets/Black.webp";
import Color from "../../assets/colorful.jpg";

const WomenNav = () => {
  return (
    <div className="flex flex-row items-start justify-center py-6 px-10">
      {/* FIRST ROW  */}
      <div className="flex flex-row basis-[55%] items-start text-start">
        {/* FIRST  */}
        <div className="a basis-1/3">
          <div className="text-2xl mb-2">Trending</div>
          <ul className="text-sm py-4">
            <li className="font-normal mb-2">Best Sellers</li>
            <li className="font-normal mb-2">New Arrivals</li>
            <li className="font-normal mb-2">Converse Exclusive</li>
            <li className="font-normal mb-2">Comme Des Garcons</li>
            <li className="font-normal mb-2">Crafted in Italy</li>
            <li className="font-normal mb-2">Neutral Tones</li>
            <li className="font-normal mb-2">Leather & Seude</li>
            <li className="font-normal mb-2">Black & White Essentials</li>
            <li className="font-normal mb-2">Shoe Under €75</li>
            <li className="font-normal mb-2">Sale</li>
          </ul>
        </div>
        {/* SECOND  */}
        <div className="a basis-1/3">
          <div className="text-2xl mb-2">Shoes</div>
          <ul className="text-sm py-4">
            <li className="font-normal mb-2">High Top</li>
            <li className="font-normal mb-2">Low Top</li>
            <li className="font-normal mb-2">Platform</li>
            <li className="font-normal mb-2">Boot</li>
            <li className="font-normal mb-2">Crafted in Italy</li>
            <li className="font-normal mb-2">Classic Chunk</li>
            <li className="font-normal mb-2">Chunk 70</li>
            <li className="font-normal mb-2">Run Star</li>
            <li className="font-normal mb-2">Lugged</li>
            <li className="font-normal mb-2">One Star</li>
            <li className="font-normal mb-2">Wide Width</li>
            <li className="font-normal mb-2">Skateboarding</li>
            <li className="font-normal mb-2">Basketball</li>
            <li className="font-normal mb-2">Custom</li>
          </ul>
        </div>
        {/* THIRD  */}
        <div className="a basis-1/3 flex flex-col">
          <div>
            <div className="text-2xl mb-2">Clothings</div>
            <ul className="text-sm py-4">
              <li className="font-normal mb-2">All Clothings</li>
              <li className="font-normal mb-2">Bags & Backpacks</li>
              <li className="font-normal mb-2">Jackets & Sweatshirts</li>
              <li className="font-normal mb-2">Shorts & Pants</li>
              <li className="font-normal mb-2">Winter Shop</li>
            </ul>
          </div>
          <div>
            <div>
              <div className="text-2xl mb-2">Accessories</div>
              <ul className="text-sm py-4">
                <li className="font-normal mb-2">All Accessories</li>
                <li className="font-normal mb-2">New Arrivals</li>
                <li className="font-normal mb-2">Hats</li>
                <li className="font-normal mb-2">Socks</li>
                <li className="font-normal mb-2">Laces</li>
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
