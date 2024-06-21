import { XMarkIcon } from "@heroicons/react/16/solid";
import { Link } from "react-router-dom";

// type Props = {
//   isLogin : boolean,
//   setLogin: (value: boolean)=>void,
// }
// import SignUp from "./SignUp";

const Login = () => {
  // const handleClose =()=>{
  //   setLogin(!isLogin)
  // }

  return (
    <div className="fixed inset-x-0 bottom-0 top-0  bg-gray-200 bg-opacity-50 z-20 flex justify-center items-center">
      <div className="mx-auto p-6 shadow-sm max-w-full flex bg-white rounded-lg h-[60%]">
        <form method="post" className=" text-center">
          <strong className="text-2xl ">Log In</strong>
          <span className="">
            {" "}
            <XMarkIcon className="h-6 w-8 inline-block float-end"/>
          </span>
          <div className="mt-3 text-start">
            <div>
              <label htmlFor="email" className="">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>
            <div className="my-3">
              <label htmlFor="password" className="">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter Your Password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              className=" bg-black text-white outline-zinc-50 rounded-sm px-3 py-2"
            >
              Login
            </button>
            <div className="mt-3 py-2 ">
              <p>
                Doesn't have an account?{" "}
                <Link className=" text-red-600" to="/sign/up">
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
