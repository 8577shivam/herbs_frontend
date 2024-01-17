import React, { useEffect, useState } from "react";
import { SliderData } from "../data/sliderdata";
// import "../Stlyles/Slider.css";
const HeroSection = () => {
  const [currentIndex, setcurrentIndex] = useState(0);

  // useEffect(() => {
  //   const intervalSet = setInterval(() => {
  //     setcurrentIndex((prevIndex) =>
  //       prevIndex === SliderData.length - 1 ? 0 : prevIndex + 1
  //     );
  //   }, 7000);

  //   // Clear the interval on component unmount
  //   return () => clearInterval(intervalSet);
  // }, [currentIndex]);

  return (
    <div className="slider-container  grid grid-flow-col">
      {SliderData.map((slide, index) => (
        <div
          key={slide.id}
          className={`slider-slide grid grid-flow-col py-[16px] relative ${
            index === currentIndex ? "active" : "hidden"
          } `}
        >
          <div className="leftside w-[90%] grid content-center gap-y-[3px] justify-self-center">
            <h2 className="text-[18px]">{slide.subHeading}</h2>
            <h1 className="text-2xl  font-bold">{slide.Heading}</h1>
            <p className="text-[12px] leading-[15px]">{slide.desc}</p>
            <button className="mt-[4px] grid justify-self-start bg-indigo-500 text-white px-3 py-2 rounded-lg  hover:bg-violet-800">
              BUY NOW
            </button>
            <h1
              className="text-7xl  font-bold 
            absolute text-indigo-300 bottom-0 translate-y-[20px] left-0 z-[-100] 
            opacity-25"
            >
              {slide.bgText}
            </h1>
          </div>
          <div className="rightside pr-3">
            <img width={"100%"} src={slide.image} alt={`Slider ${index + 1}`} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroSection;
