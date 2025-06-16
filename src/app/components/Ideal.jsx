"use client";
import React from "react";
import "./shine.css";
import Link from "next/link";

const SponsorComponent = () => {

  // const downloadFile = () => {
  //   const fileUrl = '/DihDocument.pdf'; // Ensure the file is inside the public folder
  //   const anchor = document.createElement('a');
  //   anchor.href = fileUrl;
  //   anchor.download = 'DihDocument.pdf'; // Set the downloaded file's name
  //   document.body.appendChild(anchor);
  //   anchor.click();
  //   document.body.removeChild(anchor);
  // };
  return (
    <div id="hello" className="flex flex-col lg:flex-row justify-between items-center lg:px-32 py-8 space-y-8 lg:space-y-0 lg:space-x-8">
      {/* Left Side - Image */}
      <div className="w-full lg:w-1/2 bg-[#007F40] rounded-md overflow-hidden">
        <img
          src="/idealsponsor.png"
          alt="Ideal Sponsor"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Right Side - Text and Button */}
      <div className="w-full lg:w-1/2  text-white space-y-[4vw]">
        <h2 className="text-black text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
          WHAT MAKES AN IDEAL SPONSOR?
        </h2>

        <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 mb-5 items-center space-x-3 justify-start">
          <Link
            href="/AccountDetails"
            target="_blank"
            className="shine-effect w-[70%] md:w-full text-center bg-[#007F40] hover:bg-green-700 hover:px-14 transition-all text-white font-bold py-1 px-4 lg:py-3 lg:px-8 rounded-sm text-lg "
          >
            PAY NOW
          </Link>

          <button
            onClick={() => window.open('/DihDocument.pdf', '_blank')}
            className="shine-effect w-[70%] md:w-full bg-[#007F40] hover:bg-green-700 hover:px-14 transition-all text-white font-bold py-1 px-4 lg:py-3 lg:px-8 rounded-sm text-lg "
          >
            SEE BROCHURE 
          </button>

          <button
            onClick={() => window.open('/pdf3.pdf', '_blank')}
            className="shine-effect w-[70%] md:w-full bg-[#007F40] hover:bg-green-700 hover:px-14 transition-all text-white font-bold py-1 px-4 lg:py-3 lg:px-8 rounded-sm text-lg "
          >
            SEE BROCHURE 
          </button>
        </div>
      </div>
    </div>
  );
};

export default SponsorComponent;
