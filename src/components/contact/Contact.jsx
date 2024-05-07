import React, { useState } from "react";
import TopHeader from "../home/TopHeader";
import SecondaryButton from "../assests/SecondaryButton";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = () => {
    // console.log(validateEmail(email));
    if (!validateEmail(email)) {
      console.log("Invalid");
      setIsValid(false);
    } else {
      console.log("Name : ", name);
      console.log("Email : ", email);
      navigate("/success");
    }
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  return (
    <div className="m-5">
      {/* header  */}
      <div>
        <div className="   flex justify-between items-center rounded-full p-5">
          <h1 className="text-4xl tracking-wider font-bold pl-5">Brunel</h1>
          <div className="flex justify-between items-center gap-4">
            <SecondaryButton
              navigate={"/"}
              text={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              }
            />
          </div>
        </div>
      </div>

      {/* TopHeader  */}
      <div className="mt-[-60px]">
        <TopHeader
          first={"Registration Form"}
          second={"Start your success"}
          third={"Journey here!"}
        />
      </div>

      {/* form  */}
      <div className="w-1/3 p-3 mt-6 mx-auto">
        <div>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-gray-200 my-2 p-6 rounded-full w-full focus:outline-none focus:ring focus:ring-blue-400 focus:bg-blue-50 text-xl"
            type="text"
            placeholder="Enter your name"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-gray-200 my-2 p-6 rounded-full w-full focus:outline-none focus:ring focus:ring-blue-400 focus:bg-blue-50 text-xl"
            type="email"
            placeholder="Enter your email"
          />
          <span>
            {!isValid && (
              <h2 className="mx-4 text-red-500 font-medium">
                Enter a valid email address..!
              </h2>
            )}
          </span>
          <button
            onClick={handleSubmit}
            type="button"
            className={`text-xl my-8 p-6 rounded-full w-full   ${
              name && email
                ? `bg-black text-white hover:bg-black/65 duration-150 cursor-pointer`
                : `bg-black/30 text-white tracking-wide transition ease-in-out `
            }`}
            disabled={!name && !email}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
