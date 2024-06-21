import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

// import SignUp from "./SignUp";
const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const EMAIL_REGEX = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const SignUp = () => {
  const userRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  // const pwdRef = useRef<HTMLInputElement>(null);

  const [validName, setValidName] = useState<boolean>(false);
  const [userFocus, setUserFocus] = useState<boolean>(false);

  const [validEmail, setValidEmail] = useState<boolean>(false);
  const [emailFocus, setEmailFocus] = useState<boolean>(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState<boolean>(false);
  const [pwdFocus, setPwdFocus] = useState<boolean>(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState<boolean>(false);
  const [matchFocus, setMatchFocus] = useState<boolean>(false);

  const [errMsg, setErrMsg] = useState("");
  const [, setSuccess] = useState<boolean>(false);

  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    userRef.current?.focus();
  }, []);

  useEffect(() => {
    setValidName(USER_REGEX.test(user));
  }, [user]);

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, matchPwd]);

  const navigate = useNavigate();

  // const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   const v1 = USER_REGEX.test(user);
  //   const v3 = EMAIL_REGEX.test(email);
  //   const v2 = PWD_REGEX.test(pwd);
  //   if (!v1 || !v2 || !v3) {
  //     setErrMsg("Invalid Entry");
  //     return;
  //   }
  //   try {
  //     const response = await axios.post(
  //       "http://localhost:5173/home",
  //       JSON.stringify({ user, email, pwd }),
  //       {
  //         headers: { "Content-Type": "application/json" },
  //         withCredentials: true,
  //       }
  //     );
  //     console.log(response?.data);
  //     console.log(response?.accessToken);
  //     console.log(JSON.stringify(response));
  //     setSuccess(true);
  //     //clear state and controlled inputs
  //     //need value attrib on inputs for this
  //     setUser("");
  //     setPwd("");
  //     setMatchPwd("");
  //   } catch (err) {
  //     if (!err?.response) {
  //       setErrMsg("No Server Response");
  //     } else if (err.response?.status === 409) {
  //       setErrMsg("Username Taken");
  //     } else {
  //       setErrMsg("Registration Failed");
  //     }
  //     errRef.current.focus();
  //   }
  // };

  // http://localhost:5173/sign/up
  
  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const v1 = USER_REGEX.test(user);
    const v3 = EMAIL_REGEX.test(email);
    const v2 = PWD_REGEX.test(pwd);
    if (!v1 || !v2 || !v3) {
      setErrMsg("Invalid Entry");
      return;
    }
    try {
      const response = await axios.post(
        'http://localhost:5173/home',
        JSON.stringify({ user, email, pwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      
      console.log(response?.data);
      console.log(response?.accessToken);
      console.log(JSON.stringify(response));
      setSuccess(true);
      // Clear state and controlled inputs
      // Need value attrib on inputs for this
      setUser("");
      setPwd("");
      setMatchPwd("");
  
      // Navigate to home page after successful registration
      navigate('/home');
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 409) {
        setErrMsg("Username Taken");
      } else {
        setErrMsg("Registration Failed");
      }
      errRef.current.focus();
    }
  };
  return (
    <div className="fixed inset-x-0 bottom-0 top-0  bg-gray-200 bg-opacity-50 z-20 flex justify-center items-center">
      <div className="mx-auto p-6 shadow-sm max-w-full flex bg-white rounded-lg h-[80%]">
        <form onSubmit={handleSubmit} className=" text-center">
          <strong className="text-2xl ">Sign Up</strong>
          <div className="mt-3 text-start">
            <div>
              <label htmlFor="name" className="flex ">
                Name{" "}
                {user && validName && (
                  <FaCheck className="ml-2 text-green-500" />
                )}
              </label>
              <input
                type="text"
                ref={userRef}
                onChange={(e) => setUser(e.target.value)}
                value={user}
                autoComplete="off"
                required
                aria-invalid={validName ? "false" : "true"}
                aria-describedby="uidnote"
                placeholder="Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                onFocus={() => setUserFocus(true)}
                onBlur={() => setUserFocus(false)}
              />
              <p
                id=""
                className={user && !validName ? "text-red-600" : "hidden"}
              >
                4 to 24 characters.
                <br />
                Must begin with a letter.
                <br />
                Letters, numbers, underscores, hyphens allowed.
              </p>
            </div>
            <div className="mt-3">
              <label htmlFor="email" className="flex">
                Email{" "}
                {email && validEmail && (
                  <FaCheck className="ml-2 text-green-500" />
                )}
              </label>
              <input
                type="email"
                ref={emailRef}
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                autoComplete="off"
                required
                onFocus={() => setEmailFocus(true)}
                onBlur={() => setEmailFocus(false)}
                placeholder="Enter Your Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
              />
              <p
                id=""
                className={email && !validEmail ? "text-red-600" : "hidden"}
              >
                Enter a valid email.
              </p>
            </div>
            <div className="my-3">
              <label htmlFor="password" className="flex">
                Password{" "}
                {pwd && validPwd && <FaCheck className="ml-2 text-green-500" />}
              </label>
              <input
                type="password"
                placeholder="Enter Your Password"
                onChange={(e) => {
                  setPwd(e.target.value);
                }}
                value={pwd}
                onFocus={() => setPwdFocus(true)}
                onBlur={() => setPwdFocus(false)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
              />
              <p className={pwd && !validPwd ? "text-red-500" : "hidden"}>
                8 to 24 characters.
                <br />
                Must include uppercase and lowercase letters, a number and a
                special character.
                <br />
                Allowed special characters:{" "}
                <span aria-label="exclamation mark">!</span>{" "}
                <span aria-label="at symbol">@</span>{" "}
                <span aria-label="hashtag">#</span>{" "}
                <span aria-label="dollar sign">$</span>{" "}
                <span aria-label="percent">%</span>
              </p>
            </div>
            <div className="my-3">
              <label htmlFor="comfirmedPassword" className="flex">
                Comfirmed Password {""}
                {matchPwd && validMatch && (
                  <FaCheck className="ml-2 text-green-500" />
                )}
              </label>
              <input
                type="password"
                onChange={(e) => {
                  setMatchPwd(e.target.value);
                }}
                value={matchPwd}
                onFocus={() => setMatchFocus(true)}
                onBlur={() => setMatchFocus(false)}
                placeholder="Enter Your Password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
              />
              <p
                id="confirmnote"
                className={
                  matchFocus && !validMatch ? "text-red-500" : "hidden"
                }
              >
                Must match the first password input field.
              </p>
            </div>
            <button className=" bg-black text-white outline-zinc-50 rounded-sm px-3 py-2">
              Sign Up
            </button>
            <div className="mt-3 py-2 ">
              <p>
                Already have an account?{" "}
                <Link className=" text-red-600" to="/login">
                  Login here
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
