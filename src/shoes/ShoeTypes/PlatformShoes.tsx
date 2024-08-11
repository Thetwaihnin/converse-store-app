import { FaRegHeart } from "react-icons/fa";
import {data, Shoe} from "../../shoes/shoeData"
import { Link, } from "react-router-dom";

const Shoes = () => {
  // const {shoeId = 0} = useParams();

  return (
    <div className="flex justify-evenly mt-12 flex-wrap overflow-auto no-scrollbar h-[800px]">
      {data.map((item: Shoe, index) => (
        <div
          className="border h-[400px] w-64 my-3"
          key={`${item.name}-${index}`}
        >
          <Link to={`/shoes/${item.id}`}>
            <div className="relative h-[60%]">
              <div className="absolute">
                <FaRegHeart className=" text-2xl mt-3 ml-2" />
              </div>
              <img src={item.image} alt="customize" className="w-full h-full" />
            </div>
            <div className="mt-4 h-[40%] ml-3">
              <input type="number" value={item.id} hidden />
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
