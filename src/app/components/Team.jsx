"use client";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";

export default function Team() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-8">
      <p className="text-6xl font-bold mb-8 md:mb-16 lg:mb-20">PARTNERS - IN - GROWTH</p>

      {/* Container for profiles */}
      <div className="flex flex-wrap justify-center w-full gap-14 mb-8">
        
        {/* First row - 3 profiles */}
        <div className="flex flex-wrap justify-center w-full gap-8 ">
          {/* Profile 1 - Col. Prem Rajpurohit */}
          <div className="group rounded-lg p-6 flex flex-col justify-around items-center relative">
            <motion.div
              className="relative w-52 h-52 md:w-72 md:h-72 mb-4 overflow-hidden"
              initial={{ borderRadius: "0 30% 0 30%" }}
              whileHover={{ borderRadius: "0%", transition: { duration: 0.5, ease: "easeInOut" } }}
            >
              <motion.img
                src="/prem.png"
                alt="Col. Prem Rajpurohit"
                className="absolute inset-0 w-full h-full object-top"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1, transition: { duration: 1.5, ease: "easeInOut" } }}
              />

              {/* LinkedIn Logo and Hover Effects */}
              <a href="https://www.linkedin.com/in/col-prem-rajpurohit-pmp-lssbb-mba-b04585192/" target="_blank" rel="noopener noreferrer">
                <motion.div className="absolute inset-0 flex items-center justify-center bg-[#007F40] opacity-0 group-hover:opacity-80 transition-opacity duration-500 ease-in-out">
                  <span className="text-white text-sm text-center hidden group-hover:block">
                  Col. Prem Rajpurohit is the CEO of Nebula Accelerator, leveraging his extensive experience to foster innovation.
                  </span>
                </motion.div>
                <motion.div className="absolute bottom-0 right-0 bg-[#007F40] p-2 rounded-tr-2xl rounded-bl-2xl group-hover:scale-0 transition-all duration-500 ease-in-out">
                  <FaLinkedin className="w-6 h-6 text-white" />
                </motion.div>
              </a>
            </motion.div>
            <h2 className="text-lg font-semibold text-center">Col. Prem Rajpurohit</h2>
            <p className="text-gray-500 text-center">CEO @Nebula Accelerator</p>
          </div>

          {/* Profile 2 */}
          <div className="group rounded-lg p-6 flex flex-col justify-around items-center relative">
            <motion.div
              className="relative w-52 h-52 md:w-72 md:h-72 mb-4 overflow-hidden"
              initial={{ borderRadius: "0 30% 0 30%" }}
              whileHover={{ borderRadius: "0%", transition: { duration: 0.5, ease: "easeInOut" } }}
            >
              <motion.img
                src="/Pravash-hover.png"
                alt="Pravash Dey Hover"
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1, transition: { duration: 1.5, ease: "easeInOut" } }}
              />

              {/* LinkedIn Logo and Hover Effects */}
              <a href="https://www.linkedin.com/in/consultingleaders/" target="_blank" rel="noopener noreferrer">
                <motion.div className="absolute inset-0 flex items-center justify-center bg-[#007F40] opacity-0 group-hover:opacity-80 transition-opacity duration-500 ease-in-out">
                  <span className="text-white text-sm text-center hidden group-hover:block">
                  Led formation of the USIndia Blockchain Council and UKIndia Blockchain Council, a consortium of entrepreneurs, innovators, academia researchers, investors, financial institutions and trade & investment organisations. Currently I am also building multimillion dollar worth Blockchain as a Service (BaaS) - Fintech, DefTech & MediaTech Network for Content Distribution.                  </span>
                </motion.div>
                <motion.div className="absolute bottom-0 right-0 bg-[#007F40] p-2 rounded-tr-2xl rounded-bl-2xl group-hover:scale-0 transition-all duration-500 ease-in-out">
                  <FaLinkedin className="w-6 h-6 text-white" />
                </motion.div>
              </a>
            </motion.div>
            <h2 className="text-lg font-semibold text-center">Pravash Dey</h2>
            <p className="text-gray-500 text-center">Curator At US India Blockchain Council</p>
          </div>

          {/* Profile 3 */}
          <div className="group rounded-lg p-6 flex flex-col justify-around items-center relative">
            <motion.div
              className="relative w-52 h-52 md:w-72 md:h-72 mb-4 overflow-hidden"
              initial={{ borderRadius: "0 30% 0 30%" }}
              whileHover={{ borderRadius: "0%", transition: { duration: 0.5, ease: "easeInOut" } }}
            >
              <motion.img
                src="/navdeep-hover.png"
                alt="Navdeep Chobhiyal Hover"
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1, transition: { duration: 1.5, ease: "easeInOut" } }}
              />

              {/* LinkedIn Logo and Hover Effects */}
              <a href="https://www.linkedin.com/in/navdeep54g3/" target="_blank" rel="noopener noreferrer">
                <motion.div className="absolute inset-0 flex items-center justify-center bg-[#007F40] opacity-0 group-hover:opacity-80 transition-opacity duration-500 ease-in-out">
                  <span className="text-white text-sm text-center hidden group-hover:block">
                  Building VALUE generating systems & Consulting Firms @HansHills | Co-Founder & CBO @GydeXP                  </span>
                </motion.div>
                <motion.div className="absolute bottom-0 right-0 bg-[#007F40] p-2 rounded-tr-2xl rounded-bl-2xl group-hover:scale-0 transition-all duration-500 ease-in-out">
                  <FaLinkedin className="w-6 h-6 text-white" />
                </motion.div>
              </a>
            </motion.div>
            <h2 className="text-lg font-semibold text-center">Navdeep Chobhiyal</h2>
            <p className="text-gray-500 text-center">Co-Founder & CBO @GydeXP</p>
          </div>
        </div>

        {/* Second row - 4 profiles */}
        <div className="flex flex-wrap justify-center w-full gap-6 ">
          {/* Profile 4 */}
          <div className="group rounded-lg p-6 flex flex-col justify-around items-center relative">
            <motion.div
              className="relative w-52 h-52 lg:w-72 lg:h-72 mb-4 overflow-hidden"
              initial={{ borderRadius: "0 30% 0 30%" }}
              whileHover={{ borderRadius: "0%", transition: { duration: 0.5, ease: "easeInOut" } }}
            >
              <motion.img
                src="/Adarsh-hover.png"
                alt="Adarsh Gautam Hover"
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1, transition: { duration: 1.5, ease: "easeInOut" } }}
              />

              {/* LinkedIn Logo and Hover Effects */}
              <a href="https://www.linkedin.com/in/connect-adarsh/" target="_blank" rel="noopener noreferrer">
                <motion.div className="absolute inset-0 flex items-center justify-center bg-[#007F40] opacity-0 group-hover:opacity-80 transition-opacity duration-500 ease-in-out">
                  <span className="text-white text-sm text-center hidden group-hover:block">
                  Co-Curator At US India Blockchain Council
                  </span>
                </motion.div>
                <motion.div className="absolute bottom-0 right-0 bg-[#007F40] p-2 rounded-tr-2xl rounded-bl-2xl group-hover:scale-0 transition-all duration-500 ease-in-out">
                  <FaLinkedin className="w-6 h-6 text-white" />
                </motion.div>
              </a>
            </motion.div>
            <h2 className="text-lg font-semibold text-center">Adarsh Gautam</h2>
            <p className="text-gray-500 text-center">Founder @Shardz</p>
          </div>

          {/* Profile 5 */}
          <div className="group rounded-lg p-6 flex flex-col justify-around items-center relative">
            <motion.div
              className="relative w-52 h-52 md:w-72 md:h-72 mb-4 overflow-hidden"
              initial={{ borderRadius: "0 30% 0 30%" }}
              whileHover={{ borderRadius: "0%", transition: { duration: 0.5, ease: "easeInOut" } }}
            >
              <motion.img
                src="/kush-hover.png"
                alt="Kush Kalra"
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1, transition: { duration: 1.5, ease: "easeInOut" } }}
              />

              {/* LinkedIn Logo and Hover Effects */}
              <a href="https://www.linkedin.com/in/kush-kalra-12731b246/" target="_blank" rel="noopener noreferrer">
                <motion.div className="absolute inset-0 flex items-center justify-center bg-[#007F40] opacity-0 group-hover:opacity-80 transition-opacity duration-500 ease-in-out">
                  <span className="text-white text-sm text-center hidden group-hover:block">
                  A graphic designer with a passion for creating clean, functional designs. I&apos;ve gained experience as a graphic designer during internships at Purple Parrot and Broadway Infotech, and I love blending creativity with practicality to bring ideas to life.I&apos;m Kush Kalra, a graphic designer with a passion for creating clean,                  </span>
                </motion.div>
                <motion.div className="absolute bottom-0 right-0 bg-[#007F40] p-2 rounded-tr-2xl rounded-bl-2xl group-hover:scale-0 transition-all duration-500 ease-in-out">
                  <FaLinkedin className="w-6 h-6 text-white" />
                </motion.div>
              </a>
            </motion.div>
            <h2 className="text-lg font-semibold text-center">Kush Kalra</h2>
            <p className="text-gray-500 text-center">Graphic Designer</p>
          </div>

          {/* Profile 6 */}
          <div className="group rounded-lg p-6 flex flex-col justify-around items-center relative">
            <motion.div
              className="relative w-52 h-52 md:w-72 md:h-72 mb-4 overflow-hidden"
              initial={{ borderRadius: "0 30% 0 30%" }}
              whileHover={{ borderRadius: "0%", transition: { duration: 0.5, ease: "easeInOut" } }}
            >
              <motion.img
                src="/Krishika.jpg"
                alt="Krishika"
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1, transition: { duration: 1.5, ease: "easeInOut" } }}
              />

              {/* LinkedIn Logo and Hover Effects */}
              <a href="#" target="_blank" rel="noopener noreferrer">
                <motion.div className="absolute inset-0 flex items-center justify-center bg-[#007F40] opacity-0 group-hover:opacity-80 transition-opacity duration-500 ease-in-out">
                  <span className="text-white text-sm text-center hidden group-hover:block">
                  I&apos;m Krishika Aggarwal, a purpose-driven human and a Fashion Communication student at the National Institute of Fashion Technology, Mumbai. I focus on creating impactful, human-centered designs and am passionate about solving real-world problems by applying my skills in innovative ways to make a meaningful difference.                  </span>
                </motion.div>
                <motion.div className="absolute bottom-0 right-0 bg-[#007F40] p-2 rounded-tr-2xl rounded-bl-2xl group-hover:scale-0 transition-all duration-500 ease-in-out">
                  <FaLinkedin className="w-6 h-6 text-white" />
                </motion.div>
              </a>
            </motion.div>
            <h2 className="text-lg font-semibold text-center">Krishika Aggarwal</h2>
            <p className="text-gray-500 text-center">Fashion Communication</p>
          </div>
        </div>
      </div>
    </div>
  );
}
