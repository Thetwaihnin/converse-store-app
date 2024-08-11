// import React from 'react'
import yellow from "../../../assets/shoes/yellow.jpg";
import blue from "../../../assets/shoes/blue.jpg";
import karina from "../../../assets/shoes/20240618_073554 (2).jpg";

const NewArrival = () => {
  return (
    <>
      <div className="text-3xl font-bold ml-4 font-serif">New Arrivals</div>
      <div className=" my-9 lg:flex w-full">
        <div className="lg:w-1/2">
          <img src={yellow} alt="yellow" className="w-full h-full" />
        </div>
        <div className="lg:w-1/2">
          <img src={blue} alt="blue" className="w-full" />
        </div>
      </div>

      <div className="mt-12 h-[400px] lg:bg-green-600 ">
        <div className=" grid lg:grid-cols-3 sm:grid-cols-1 xs:justify-center xs:text-center  bg-green-600">
          <div className=" mt-6  px-3 bg-green-600 xs:text-center">
            <p className=" text-[20px] font-bold">THE SALES HEATING UP</p>
            <p className=" text-5xl font-bold mt-3">Up To 50% Off*</p>
            <p className="my-6">
              Stock up on everying you need for your best summer style.
            </p>
            <div className="flex flex-wrap sm:text-center xs:justify-center">
              <button className="bg-black text-white p-3 mx-2">
                Shop Women
              </button>
              <button className="bg-black text-white p-3 mx-2">Shop Men</button>
              <button className="bg-black text-white p-3 mx-2">
                Shop Kids
              </button>
            </div>
            <p className="my-6">
              *Sale ends on July 22 at 10:00 AM CEST Discount automatically
              applied at checkout. Exclusions Apply. See details.
            </p>
          </div>

          <div className=" bg-green-600 flex xs:justify-center">
            <img
              src={karina}
              alt="karina"
              className=" border-4 border-blue-700 w-[350px] h-[350px] mt-8 ml-6"
            />
          </div>

          <div className="mt-12 text-center  bg-green-600">
            <p className=" text-[30px] mt-12 font-mono font-bold text-blue-900">END OF SEASON</p>
            <p className=" text-9xl font-serif text-blue-900">SALE</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewArrival;
