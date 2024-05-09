import React from "react";

import "tailwindcss/tailwind.css";
import AccordionComponent from "../src/pageComponents/Accordian/AccordionComponent";
import SepratorComponent from "../src/pageComponents/Seprator/SepratorComponent";
import Image from "next/image";
import ChatImage from "../src/lib/Images/work-chat-animate.svg";

function Index() {
  return (
    <>
      <div className="bg-gray-800 flex flex-col md:flex-row justify-around items-center">
        <SepratorComponent />
        <Image src={ChatImage} alt="My SVG" />
      </div>

      <h2 className="text-4xl font-bold text-gray-800 text-center leading-relaxed lg:mb-4 sm:mb-2 h-100 w-100">
        FAQs
      </h2>
      <div className="lg:px-40 sm:px-10 md:px-20 py-10">
        <AccordionComponent />
      </div>
    </>
  );
}

export default Index;
