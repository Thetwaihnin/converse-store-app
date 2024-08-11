import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import {platformShoeData, Shoe} from "../shoes/shoeData"


const Shoes = () => {
  return (
    <div className="flex justify-evenly mt-12 flex-wrap overflow-auto no-scrollbar h-[800px]">
      {platformShoeData.map((item: Shoe, index) => (
        <div
          className="border h-[400px] w-64 my-3"
          key={`${item.name}-${index}`}
        >
          <Link to={`/hightop/${item.id}`}>
            <div className="relative h-[60%]">
              <div className="absolute">
                <FaRegHeart className=" text-2xl mt-3 ml-2" />
              </div>
              <img src={item.image} alt="customize" className="w-full h-full" />
            </div>
            <div className="mt-4 h-[40%] ml-3">
              <p>{item.name}</p>
              <p>{item.price}</p>
              <p className="mt-2 text-sm font-bold text-gray-600">{item.des}</p>
              <p className="pb-2 text-gray-400 text-sm mt-2">{item.color}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Shoes;
