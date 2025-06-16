"use client";
import Link from "next/link";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa";

import { FaWhatsapp } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const fadeInVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer
      id="Footer"
      className="bg-white py-6 border-t border-gray-200"
      ref={ref}
    >
      <motion.div
        className="container mx-auto flex flex-col lg:flex-row justify-around items-center space-y-8 lg:space-y-0"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeInVariant}
        transition={{ duration: 0.5 }}
      >
        {/* Left Section - Logo */}
        <div className="flex justify-center lg:justify-start">
          <object
            data="/logo.svg" // Adjust this to the actual path
            type="image/svg+xml"
            className="w-32 h-32 md:w-40 md:h-40 mb-5 md:mb-14"
          />
        </div>

        <div className="space-y-[5vw]">
          {/* Center Section - Navigation Links */}
          <nav className="flex flex-wrap justify-center text-gray-700 text-lg font-medium">
            {/* First row on small screens, all links on medium and larger */}
            <div className="w-full flex justify-center space-x-4 sm:space-x-6 md:space-x-8 mb-4 md:mb-0">
              <Link href="#Hero">Home</Link>
              <Link href="https://bit.ly/4eipzG7"
            target='_blank'>Registration</Link>
              <Link href="#Fields">Problem Statements</Link>
              {/* Hide extra links on small screens, show them on medium and larger */}
              <Link href="#Sponsor" className="hidden md:inline">
                Sponsors
              </Link>
              
              <Link href="https://www.nebulaaccelerator.org/contact.html" target="_blank" className="hidden md:inline">
                Contact Us
              </Link>
              <Link href="https://www.nebulaaccelerator.org/index.html" target="_blank" className="hidden md:inline">
                About Nebula
              </Link>
            </div>

            {/* Second row for small screens only */}
            <div className="w-full flex justify-center space-x-4 sm:space-x-6 md:hidden">
              <Link href="#Sponsor">Sponsors</Link>
              <Link href="#Footer">Contact Us</Link>
              <Link href="/about-nebulla">About Nebula</Link>
            </div>
          </nav>
          {/* Right Section - Contact Info & Social Media */}
          <div className="text-center md:flex justify-between lg:text-right">
            <div className="md:text-left">
              <div className="  text-gray-400">CONTACT US</div>
              <div className="text-lg text-gray-900">+91 9638413900</div>
              <div className="text-lg text-gray-900">nebuladeftech@gmail.com</div>
            </div>
            {/* Social Media Links */}
            <div className="flex justify-center lg:justify-end space-x-4 mt-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="border border-gray-300 rounded-full py-1 px-3 text-base">
                <FaInstagram className="w-5 h-5" />
                </button>
              </a>
              <a
                href="https://x.com/DigitalIndHack"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="border border-gray-300 rounded-full py-1 px-3 text-base">
                <FaXTwitter className="w-5 h-5"  />
                </button>
              </a>
              <a
                href="https://wa.me/9638413900"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="border border-gray-300 rounded-full py-1 px-3 text-base">
                <FaWhatsapp className="w-5 h-5"  />
                </button>
              </a>
              <a
                href="https://m.facebook.com/digitalindiahack/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="border border-gray-300 rounded-full py-1 px-3 text-base">
                <FaFacebook className="w-5 h-5"  />

                </button>
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Bottom Section */}
      <div className="mt-6 border-t border-gray-200 pt-4 flex flex-col lg:flex-row justify-between px-24 items-center text-lg text-gray-500">
      <p className="text-center lg:text-left flex items-center justify-center lg:justify-start">
      <span className="mr-1"> <FaRegCopyright /></span> Digital India Hackathon. 2024 - All Rights Reserved 
</p>

        <div>
          <p className="text-center lg:text-right text-green-600">
            <a
              href="https://www.nebulaaccelerator.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Nebulex Def-Tech Foundation.
            </a>
          </p>

          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
