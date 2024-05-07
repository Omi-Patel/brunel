import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SuccessPage = () => {
  const [second, setSecond] = useState(5);
  const navigate = useNavigate();

  const timer = () => {
    setSecond(second - 1);
  };

  setTimeout(() => {
    timer();
  }, 1000);

  const redirect = () => {
    setTimeout(() => {
      navigate("/");
    }, 5000);
  };

  useEffect(() => {
    redirect();
  }, []);

  return (
    <div className="m-5">
      <div className="   flex justify-between items-center rounded-full p-5">
        <h1 className="text-4xl pl-5 tracking-wider font-bold">Brunel</h1>
      </div>
      <div className="flex flex-col justify-center items-center  mt-4 h-[80vh]">
        <svg
          viewBox="0 0 24 24"
          className="text-green-600 w-16 h-16 mx-auto my-6"
        >
          <path
            fill="currentColor"
            d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
          ></path>
        </svg>
        <h3 className="mt-6 text-2xl text-green-600 font-medium">
          Success Submitted
        </h3>
        <h1 className="mt-3 text-6xl font-medium tracking-wide">
          Congratulations
        </h1>
        <h2 className="mt-6 text-3xl text-center text-gray-500">
          Your request has been successfully submitted to us. We <br /> will
          validate your information and reach out to your <br /> shortly with
          updates.
        </h2>
        <div className="mt-32">
          <h2 className="text-xl text-gray-500">
            Redirecting you to Homepage in{" "}
            <strong className="text-black">{second} seconds</strong>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
