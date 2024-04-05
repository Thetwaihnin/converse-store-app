import { FaSearch } from "react-icons/fa";

const ClickDropDown = () => {
  return (
    <div className="fixed inset-x-0 bottom-0 top-[60px]  bg-gray-200 bg-opacity-50 z-20 flex flex-row">
      {/* <div className="mx-auto p-6 shadow-sm max-w-full flex flex-row bg-white rounded-lg">
        <div className="flex-grow">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>
        <button onClick={closeSearchBar}>
          <XMarkIcon className="h-6 w-6 text-gray-500" />
        </button>
      </div> */}
      <div className="w-[50%]"></div>
      <div className="relative w-[50%] bg-white">
        <div className=" mt-16">
          <div className="ml-12 font-extralight text-2xl">SEARCH</div>
          <div className="flex  justify-between mt-8 ml-20 px-10 w-[80%]">
            <input
              type="text"
              placeholder="WHAT ARE YOU LOOKING FOR?"
              className="w-full px-4 py-2 font-bold text-[16px]  border-none outline-none"
            />{" "}
            {/* <div className="font-montserrat text-lg">WHAT ARE YOU LOOKING FOR?</div> */}
            <div className="mx-2 py-2 text-[20px]">
              <FaSearch />
            </div>
          </div>
          <div className="underline text-black mt-2 border-b-2 text-bold ml-20 w-[80%]"></div>
        </div>
      </div>
    </div>
  );
};

export default ClickDropDown;
