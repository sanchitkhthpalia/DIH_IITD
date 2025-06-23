"use client";
import React, { useState, useRef, useEffect } from "react";
import { FaRegClock, FaMapMarkerAlt, FaTrophy } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { motion, useInView } from "framer-motion";

const EventInfo = () => {
  const [activeTab, setActiveTab] = useState("about");
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef(null);

  const tabs = [
    { name: "ABOUT US", value: "about" },
    { name: "OUR GOAL", value: "goal" },
    { name: "VISION & MISSION", value: "vision" },
  ];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [activeTab]);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      id="Hero2"
      className="text-white flex flex-col items-stretch lg:flex-row p-4 lg:p-8 space-y-6 lg:space-y-0 lg:space-x-6"
    >
      {/* Left section: Event Information */}
      <motion.div
      className="w-full h-full lg:w-3/6 text-white rounded p-6"
      style={{
        backgroundImage: "url('/bg-venue.png')", // Adjust as needed
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "650px", // You can adjust this as needed
      }}
      initial={{ opacity: 0, x: -100 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <h2 className="text-3xl font-bold mb-10">EVENT INFORMATION</h2>

      {[
        {
          icon: <FaMapMarkerAlt className="w-10 h-10" />,
          title: "Location",
          description: "Hauz Khas Social ",
          delay: 0.5,
        },
        {
          // icon: <FaRegClock className="w-10 h-10" />,
          // title: "Time Duration",
          // description: "",
          // delay: 0.6,
        },
        {
          icon: <RiTeamFill className="w-10 h-10" />,
          title: "Team Size",
          description: "5-7 Members",
          delay: 0.7,
        },
        {
          icon: <FaTrophy className="w-10 h-10" />,
          title: "Prize",
          description: " Winner - 2.5 laks INR + Incubator / Accelerator Grant, Total Prizes worth 12 laks Approx.",
          delay: 0.8,
        },
      ].map((item, index) => (
        <motion.div
          key={index}
          className="flex items-center mb-6"
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: item.delay }}
        >
          {item.icon}
          
          <div className="ml-4">
            <h3 className="text-base font-semibold">{item.title}</h3>
            <p className="text-sm ">{item.description}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>

      {/* Right section: Tabs and content */}
      <motion.div
        className="w-full lg:w-3/4 bg-white text-black rounded-lg p-4 lg:p-6 relative"
        initial={{ opacity: 0, x: 100 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
        style={{ minHeight: contentHeight }} // Set min-height based on content
      >
        {/* Tab Buttons */}
        <div className="relative flex justify-between border-b border-gray-300 space-x-2 sm:space-x-4">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              className={`flex-1 py-2 mb-4 text-base sm:text-lg lg:text-2xl font-semibold transition-colors duration-300 ${
                activeTab === tab.value ? "text-green-500" : "text-gray-400"
              }`}
              onClick={() => handleTabClick(tab.value)}
            >
              {tab.name}
            </button>
          ))}

          {/* Full line under tabs */}
          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gray-300"></div>

          {/* Animated underline */}
          <motion.div
            className={`absolute bottom-0 h-[2px] bg-green-500 transition-all duration-300`}
            style={{
              width: `${100 / tabs.length}%`,
              transform: `translateX(${
                tabs.findIndex((tab) => tab.value === activeTab) * 100
              }%)`,
            }}
          />
        </div>

        {/* Tab Content */}
        <motion.div
          className="mt-6 text-lg sm:text-lg md:mx-10 md:text-base lg:text-xl"
          ref={contentRef} // Attach ref for dynamic height calculation
        >
          {activeTab === "about" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <p className="mb-5 text-justify">
                Digital India Hackathon is a national-level innovation challenge focused on Defence and DeepTech, designed to inspire, engage, and empower the next generation of developers, designers, and tech enthusiasts. This hackathon is a unique opportunity to build real-world, impactful solutions specifically for the Indian Armed Forces and national defence ecosystem.
              </p>
              <p className="mb-5 text-justify">
                Unlike conventional hackathons, we are not looking for hypothetical or purely conceptual ideas. We are seeking practical, deployable, and innovative tech solutions that can directly support defence operations, security, logistics, intelligence, surveillance, training, and more. Whether it's a mobile app for field use, a web dashboard for command operations, or a DApp to ensure secure communication — if it helps our armed forces on the ground, it belongs here.
              </p>
              <p className="text-justify">
                Join us in this mission to blend technology with patriotism. Collaborate, prototype, and pitch your defence-driven innovations in front of experts, mentors, and investors. Your idea could be the next big leap in strengthening our nation's security infrastructure.
              </p>
            </motion.div>
          )}

          {activeTab === "goal" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <p className="mb-5 text-justify">
                Our goal is to bring together developers, designers, and
                entrepreneurs from diverse backgrounds, creating an ecosystem
                where meaningful connections can flourish. By uniting these
                creative minds, we aim to channel their skills toward solving
                real-world challenges and building innovative solutions. This
                Hack-a-thon provides an opportunity for participants to
                collaborate and apply their talents in a space designed to
                inspire creativity and productivity.
              </p>
              <p className="mb-5 text-justify">
                By establishing a makerspace, we are creating a dynamic
                environment where creators can engage with one another,
                brainstorm ideas, and work together to develop cutting-edge
                solutions. The event will encourage participants to think beyond
                the scope of traditional problem-solving and tap into their
                entrepreneurial potential. The solutions they create could
                become the foundation for new ventures or even future companies.
              </p>

              <p className="text-justify">
                Set in an intellectually stimulating environment, the Hack-a-thon
                will spur innovation, push boundaries, and drive participants to
                explore their full potential. This unique platform will foster
                not only technical innovation but also a sense of community and
                shared learning. Through this event, participants will gain the
                chance to create, collaborate, and build projects that could
                shape the future of technology and entrepreneurship.
              </p>

              </motion.div>
          )}

          {activeTab === "vision" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <p className="mb-5 text-justify">
                India, a land rich with cultural variety where many
                civilisations flourished, kingdoms rose and fell - leaving
                behind an array of splendid historic attractions, majestic
                temples and sculptures making India a unique destination. More
                than 50% of Indian population are under 25, filled with high
                aspirations, unique talents waiting to be explored. India is the
                'Powerhouse of Technology'.
              </p>
              <p className="mb-5 text-justify">
                <strong>Vision -</strong> Our vision is to equip over 1 million Indian students
                with comprehensive knowledge in mobile technology and the
                implementation of cutting-edge concepts such as the Internet of
                Things (IoT), eCommerce, mCommerce, and social media skills. By
                empowering the youth with these essential digital skills, we aim
                to mold them into SMART professionals who are ready to take on
                the challenges of the modern digital economy.
              </p>
              {/* More content can be added here */}

              <p className="text-justify" >
                <strong>Mission -</strong> Our mission is to build the 'Digital India
                Hack-a-thon'—a multifaceted platform that operates across
                web, mobile, and on-the-ground formats. This platform will serve
                as a space for young Indians to challenge their entrepreneurial
                abilities, put their creativity to the test, and maximize their
                potential in real-world scenarios. Through this initiative, we
                aim to inspire innovation and foster the development of the next
                generation of tech-savvy professionals who will drive
                India's digital transformation forward.
              </p>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};


export default EventInfo;