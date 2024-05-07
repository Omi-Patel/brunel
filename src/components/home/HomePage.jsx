import React from "react";
import Navbar from "../navbar/Navbar";
import TopHeader from "./TopHeader";
import Footer from "../footer/Footer";
import TextCarousel from "./Carousel";
import PrimaryButton from "../assests/PrimaryButton";
import Accordian from "./Accordian";

const HomePage = () => {
  const texts = [
    "Enhance fortune 50 company's insights teams research capabilites",
    "Utilize statistical and machine learning techniques to analyze datasets.",
    "Lorem ipsum dolor sit amet,Sed gravida commodo, sit vehicula lacus finibus.",
  ];

  const question = [
    {
      id: 1,
      que: "Do you offers freelances?",
      ans: "Yes, we offer freelancing.",
    },
    {
      id: 2,
      que: "What's the guarantee that I will be satisfied with the hired talent ?",
      ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida arcu a dui commodo, sit amet vehicula lacus finibus..",
    },
    {
      id: 3,
      que: "Can I hire multiple talents at once ?",
      ans: "If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Excalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.",
    },
    {
      id: 4,
      que: "Why should I not go to an agency directly ?",
      ans: "Utilize advanced statistical and machine learning techniques to analyze large and complex datasets.",
    },
    {
      id: 5,
      que: "Who can help me pick a right skillset and duration for me?",
      ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  return (
    <div className="m-5">
      <Navbar />

      <div className="">
        {/* top header  */}
        <TopHeader
          first={"Success Stories"}
          second={"Every success journey"}
          third={"we've encountered."}
        />

        {/* middle section  */}
        <div className=" m-5 my-36 flex justify-around items-center">
          {/* image  */}
          <div className=" w-1/2 flex justify-center relative">
            <img
              src="https://www.cined.com/content/uploads/2021/04/20210305_fujiGFX100s_Weinberg_DSCF0437-1.jpg"
              alt="image"
              width={600}
              className="p-4 rounded-[60px]"
            />
            <div className="bg-slate-800 text-white w-64 h-44 absolute top-80 right-2 rounded-3xl">
              <div className="flex flex-col justify-around items-center">
                <h1 className="text-6xl font-semibold">
                  $0.5 <span className="text-xl text-gray-400">MILLION</span>
                </h1>
                <h2 className="px-6 text-gray-300 py-4 text-lg">
                  Reduced client expenses by saving on hiring and employee
                  costs.
                </h2>
              </div>
            </div>
          </div>
          {/* carousel  */}
          <div className="w-1/2  p-4">
            <div className="App flex flex-col ml-36">
              {/* <h1 className="text-2xl font-bold mb-4">Text Carousel</h1> */}
              <TextCarousel texts={texts} />
              <span className="mt-20 pl-12">
                <PrimaryButton text={"Explore More ->"} />
              </span>
            </div>
          </div>
        </div>

        {/* ask question  */}
        <div className="bg-[#E1E5DC] text-black m-5 mt-24 flex rounded-[30px]">
          {/* right  */}
          <div className="w-1/2 px-16 py-24">
            <h1 className="text-2xl success">What's on Your Mind</h1>
            <h1 className="text-6xl tracking-wider mt-4 font-medium">Ask Questions</h1>
          </div>

          {/* left  */}
          <div className="w-1/2 p-12 ">
            {question.map((q, index) => {
              return <Accordian que={q.que} ans={q.ans} key={index} />;
            })}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
