import { FaPencil, FaRuler } from "react-icons/fa6";
import { useState } from "react";
import { FaMinus, FaPlus, FaRegHeart } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { platformShoeData } from "./shoeData";
import { useCart } from "../Context/CartProvider";

const HighTopDetail = () => {
  const [size, setSize] = useState<boolean>(false);
  
  const handleSize = () => {
    setSize(!size);
  };

  const { shoeId } = useParams();

  const selectedShoe = platformShoeData.find(
    (pDatas) => shoeId !== undefined && pDatas.id === parseInt(shoeId)
  );

  const {click} = useCart();
  const {addToCart} = useCart();
  const {setClick} = useCart();

  if (!selectedShoe) {
    return <div>Shoes not found</div>;
  }

  return (
    <>
      <div className="mt-16 p-8 w-full h-full">
        <div className=" grid grid-cols-2">
          <div className="">
            <div className="relative h-[600px] w-full">
              <div className="absolute flex mt-6 ml-6 underline hover:cursor-pointer">
                <p>All / </p>
                <p className="mx-2">All Sneaker /</p>
                <p>All High Top</p>
              </div>
              <img src={selectedShoe.image} alt="hightop" className="w-full" />
            </div>
          </div>
          <div className=" mt-8">
            <div className="mt-3 mb-6 ml-6">
              <p className="font-bold text-lg">{selectedShoe.name}</p>
              <p className="my-3">{selectedShoe.price}</p>
              <p className="mb-4 text-gray-400 font-bold">
                UNISEX HIGH TOP SHOE
              </p>
              <p className="text-gray-400">
                {selectedShoe.des}
                <small className=" underline mx-4">More info.</small>
              </p>
            </div>
            <hr />
            <div className="mt-4 ml-6">
              <p className="mb-6 mt-2">Color:True Sky/Egret/Black</p>
              <div className="mb-3 grid grid-cols-4 ">
                <div className=" border-b-4 border-zinc-950">
                  <img src={selectedShoe.image} alt="hightop" />
                </div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <hr className="mt-6" />
              <div className="mt-6 flex justify-between mb-6 mx-6">
                <div className="flex">
                  <div className="flex">
                    <FaRuler className="text-2xl " />
                    <FaPencil className="text-2xl " />
                  </div>
                  <div className="ml-4">
                    <small className=" block">This sneaker runs large.</small>
                    <small className=" block">
                      Order a <strong>half size down</strong>
                    </small>
                  </div>
                </div>
                <div className="underline font-bold">Size Guide</div>
              </div>

              <div
                className={
                  size ? "px-3 py-4 border-t mx-6" : "px-3 py-4 border mx-6"
                }
                onClick={handleSize}
              >
                <div className="flex justify-between">
                  <div className=" font-mono text-[16px]">Select a Size</div>
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

              {click && (
                <div className="alert grid grid-cols-3 bg-blue-400 p-3 w-[90%] ml-6">
                  <p className="col-span-2">Added to the cart!</p>
                  <button className="text-1xl text-end" onClick={()=>setClick(!click)}>X</button>
                </div>
              )}
              <div className="mt-6 mx-6">
                <div
                  className="flex justify-between"
                  onClick={() => addToCart(selectedShoe)}
                >
                  <button className="text-white font-dmsans px-3 py-4 bg-black basis-[89%]">
                    <p className="ml-3">Add to Cart</p>
                  </button>
                  <div className="px-4 py-4 bg-black text-white basis-[10%] text-center">
                    <FaRegHeart />
                  </div>
                </div>
              </div>

              <div className="my-6 mx-6">
                <p>Free shiping on all orders</p>
              </div>

              <div className="mt-3 mx-6">
                <p className="underline mb-6">Share</p>
                <p className="p-3 bg-gray-200">
                  Be the first to hear about product launches, collaborations,
                  <p>
                    and more.{" "}
                    <Link to="/sign/up" className="underline">
                      Sign up.
                    </Link>
                  </p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HighTopDetail;
