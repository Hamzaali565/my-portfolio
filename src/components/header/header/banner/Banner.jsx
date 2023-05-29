import React from "react";
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-[#17191A] via-[#0B3A60] to-[#191720] h-56 flex justify-center items-center mt-2">
      <TypeAnimation
        className="text-white font-bold sm:text-lg md:text-3xl"
        sequence={[
          "HI! my Name Is Hamza 👋.", // Types 'One'
          1000, // Waits 1s
          "I am a MERN Stack Developer.", // Deletes 'One' and types 'Two'
          2000, // Waits 2s
          "Visit this page to Know About my Work.", // Types 'Three' without deleting 'Two'
          3000,
          () => {
            console.log("Sequence completed"); // Place optional callbacks anywhere in the array
          },
        ]}
        wrapper="span"
        cursor={true}
        repeat={Infinity}
        // style={{ fontSize: "2em", display: "inline-block" }}
      />
    </div>
  );
};

export default Banner;
