import { FaPaypal } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
// import { Shoe } from "../../shoes/shoeData";
import { useCart } from "../../Context/CartProvider";

// interface CartProps {
//   cartItem: Shoe[];
// }

const Cart = () => {
  const { cartItem } = useCart();

  const count = cartItem.length;

  let shippingValue = 15;
  let tax = 2;

  return (
    <div className="h-full w-full mt-24">
      {count > 0 ? (
        <>
          <div className=" text-6xl font-bold ml-12">
            CART
            <small className=" text-[16px] ml-3 text-gray-400">
              {count} ITEMS
            </small>
          </div>

          <div className=" flex">
            <div className="basis-[60%]">
                {cartItem.map((item) => (
                  <div key={item.id} className="mt-9">
                    <div className="grid grid-cols-2">
                      <div>
                        <img src={item.image} alt={item.name} />
                      </div>
                      <div className=" align-middle ml-2">
                        <p className=" text-[20px] font-bold">{item.name}</p>
                        <p className="my-4">{item.color}</p>
                        <p className="my-2">{item.des}</p>
                        <p className="my-2">{item.price}</p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            <div className="ml-6 px-3 basis-1/3 my-8">
              <p className="text-2xl font-bold">ORDER SUMMARY</p>
              <div className="mt-6">
                <div className="flex justify-between">
                  <p className="text-[18px]">Subtotal</p>
                  <p className="text-[18px]">$0.00</p>
                </div>
                <div className="mt-6 flex justify-between">
                  <p className="text-[18px]">Shipping</p>
                  <p className="text-[18px]">${shippingValue}</p>
                </div>
                <div className="mt-6 flex justify-between">
                  <p className="text-[18px]">Est. Tax</p>
                  <p className="text-[18px]">${tax}</p>
                </div>
                <hr className=" font-bold mt-8" />

                <div className="mt-6 flex justify-between">
                  <p className="font-bold text-[20px]">Est. Tax</p>
                  <p className="font-bold text-[20px]">$0.00</p>
                </div>

                <button className="mt-6 py-5 text-gray-400 text-[20px] justify-center hover:bg-blue-600 flex w-full bg-gray-300">
                  Checkout
                </button>

                <button className="mt-3 py-5 text-gray-400 text-[20px] justify-center hover:bg-blue-600 flex w-full border-2 border-gray-400">
                  <FaPaypal className="text-[35px] text-gray-400" />
                  Paypal
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className=" text-6xl font-bold">
            CART
            <small className=" text-[16px] ml-3 text-gray-400">0 ITEMS</small>
          </div>

          <div className=" flex">
            <div className="basis-[60%]">
              <div className="flex">
                <div className="my-8  border-2 p-4 bg-yellow-200">
                  <p className="mx-4">
                    FREE shipping for members!
                    <Link to="/login" className="underline">
                      {" "}
                      Sign In{" "}
                    </Link>
                    or
                    <Link to="/sign/up" className="underline">
                      {" "}
                      Sign Up{" "}
                    </Link>
                    to Save!
                  </p>
                </div>
              </div>

              <div className="mt-6 flex">
                <p className="text-3xl ">Your Cart Is Empty</p>{" "}
                <FaCartArrowDown className="text-3xl mx-4" />
              </div>

              <div className="mt-4">
                <p className="text-gray-400">
                  Your cart is currently empty.Don't forget to add these styles
                  before they're gone.
                </p>
              </div>

              <div className="mt-16">
                <p className="text-3xl font-bold">SHOP BY STYLE</p>
                <div className="mt-6 grid grid-cols-2 gap-3 text-center">
                  <div className="border-[3px] p-5 ">High Top</div>
                  <div className="border-[3px] p-5 ">Low Top</div>
                  <div className="border-[3px] p-5 ">Platform</div>
                  <div className="border-[3px] p-5 ">Custom</div>
                </div>
              </div>

              <div className="mt-8">
                <p className="text-3xl font-bold">New Arrival</p>
                <div className="mt-6 grid grid-cols-2 gap-3 text-center">
                  <div className="border-2 p-5 ">Shop Women's</div>
                  <div className="border-2 p-5 ">Shop Men's</div>
                </div>
              </div>
            </div>

            <div className="ml-6 px-3 basis-1/3 my-8">
              <p className="text-2xl font-bold">ORDER SUMMARY</p>
              <div className="mt-6">
                <div className="flex justify-between">
                  <p className="text-[18px]">Subtotal</p>
                  <p className="text-[18px]">$0.00</p>
                </div>
                <div className="mt-6 flex justify-between">
                  <p className="text-[18px]">Shipping</p>
                  <p className="text-[18px]">$0.00</p>
                </div>
                <div className="mt-6 flex justify-between">
                  <p className="text-[18px]">Est. Tax</p>
                  <p className="text-[18px]">$0.00</p>
                </div>
                <hr className=" font-bold mt-8" />

                <div className="mt-6 flex justify-between">
                  <p className="font-bold text-[20px]">Est. Tax</p>
                  <p className="font-bold text-[20px]">$0.00</p>
                </div>

                <button className="mt-6 py-5 text-gray-400 text-[20px] justify-center hover:bg-blue-600 flex w-full bg-gray-300">
                  Checkout
                </button>

                <button className="mt-3 py-5 text-gray-400 text-[20px] justify-center hover:bg-blue-600 flex w-full border-2 border-gray-400">
                  <FaPaypal className="text-[35px] text-gray-400" />
                  Paypal
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      <div className="mt-24 text-gray-700 justify-center px-24 text-center bg-gray-300 py-6 grid grid-cols-4">
        <div className="px-3 text-start">
          <p className="text-2xl font-bold">GET IN TOUCH</p>
          <p className="mt-4 text-black font-bold">1-800-555-404</p>
          <p className="mt-3">7 days a week</p>
          <p>8am-12am ET/5am-9pm PT</p>
        </div>

        <div className="px-3 text-start">
          {" "}
          <p className="text-2xl font-bold">WORRY-FREE RETURN</p>
          <p className="mt-5">
            If you're not sastified,return or exchange in for free within 30days
          </p>
          <p className="mt-2 underline text-gray-600 text-[18px]">Learn More</p>
        </div>

        <div className="px-3 text-start">
          {" "}
          <p className="text-2xl font-bold">FAST,FREE, SHIPPING</p>
          <p className="mt-10">
            Order over $75 ship for free.Or sign up for a Converse.com and get
            free shipping for every order.
          </p>
          <p className="mt-2 underline text-gray-600 text-[18px]">Learn More</p>
        </div>
        <div className="px-3 text-start">
          {" "}
          <p className="text-2xl font-bold">HELP FAQUS</p>
          <p className="underline text-gray-400 mt-6 text-[20px]">
            How secure is my order?
          </p>
          <p className="underline text-gray-400 mt-2 text-[20px]">
            How do converse products fit?
          </p>
          <p className="underline text-gray-400 mt-2 text-[20px]">
            When will I get my order?
          </p>
          <p className="underline text-gray-400 mt-2 text-[20px]">
            What is Converse return/exchange policy?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
