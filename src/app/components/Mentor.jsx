"use client";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";

export default function Mentor() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-8">
      <p className="text-6xl font-bold mb-8 md:mb-16 lg:mb-20">MENTORS-IN-RESIDENCE</p>

      {/* Container for profiles */}

      <div className="flex flex-wrap justify-center w-full gap-14 mb-8">

        {/* First row - 4 profiles */}
        <div className="flex flex-wrap justify-center w-full gap-8 ">

          {/* Profile 1 */}
          <div className="group rounded-lg p-6 flex flex-col justify-around items-center relative">
            <motion.div
              className="relative w-52 h-52 md:w-72 md:h-72 mb-4 overflow-hidden"
              initial={{ borderRadius: "0 30% 0 30%" }}
              whileHover={{ borderRadius: "0%", transition: { duration: 0.5, ease: "easeInOut" } }}
            >
              <motion.img
                src="/mentor5.jpeg"
                alt="Saksham"
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1, transition: { duration: 1.5, ease: "easeInOut" } }}
              />
              {/* LinkedIn Logo and Hover Effects */}
              <a href="https://www.linkedin.com/in/priya-gupta-2a5324b8/" target="_blank" rel="noopener noreferrer">
                <motion.div className="absolute inset-0 flex items-center justify-center bg-[#007F40] opacity-0 group-hover:opacity-80 transition-opacity duration-500 ease-in-out">
                  <span className="text-white text-sm text-center hidden group-hover:block p-2">
                  Ms. Priya, a seasoned expert with over seven years of experience in sustainable finance, gender equality, public policy, and leadership, currently works with USAID on sustainable finance initiatives. She is also the founder of Sarvpriye Foundation and Chairperson of the Institute of Internal Auditors.                 </span>
                </motion.div>
                <motion.div className="absolute bottom-0 right-0 bg-[#007F40] p-2 rounded-tr-2xl rounded-bl-2xl group-hover:scale-0 transition-all duration-500 ease-in-out">
                  <FaLinkedin className="w-6 h-6 text-white" />
                </motion.div>
              </a>
            </motion.div>
            <h2 className="text-lg font-semibold text-center">Priya Gupta</h2>
            {/* <p className="text-gray-500 text-center">Curator At US India Blockchain Council</p> */}
          </div>


          {/* Profile 2 */}
          <div className="group rounded-lg p-6 flex flex-col justify-around items-center relative">
            <motion.div
              className="relative w-52 h-52 md:w-72 md:h-72 mb-4 overflow-hidden"
              initial={{ borderRadius: "0 30% 0 30%" }}
              whileHover={{ borderRadius: "0%", transition: { duration: 0.5, ease: "easeInOut" } }}
            >
              <motion.img
                src="/mentor4.jpg"
                alt="Kush Kalra"
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1, transition: { duration: 1.5, ease: "easeInOut" } }}
              />

              {/* LinkedIn Logo and Hover Effects */}
              <a href="https://www.linkedin.com/in/prachi-sharma-924490118?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
                <motion.div className="absolute inset-0 flex items-center justify-center bg-[#007F40] opacity-0 group-hover:opacity-80 transition-opacity duration-500 ease-in-out">
                  <span className="text-white text-sm text-center hidden group-hover:block p-2">
                  Ms. Prachi Sharma, a tech and marketing strategist specializing in AR and VR, creates immersive experiences that transform brand storytelling and boost customer engagement. She combines technology and creativity to drive growth and empower businesses in the digital era.</span>                 </motion.div>
                <motion.div className="absolute bottom-0 right-0 bg-[#007F40] p-2 rounded-tr-2xl rounded-bl-2xl group-hover:scale-0 transition-all duration-500 ease-in-out">
                  <FaLinkedin className="w-6 h-6 text-white" />
                </motion.div>
              </a>
            </motion.div>
            <h2 className="text-lg font-semibold text-center">Ms. Prachi Sharma</h2>
            {/* <p className="text-gray-500 text-center">Expertise in tech and marketing Especially AR & VR</p> */}
          </div>


          {/* Profile 3 */}
          <div className="group rounded-lg p-6 flex flex-col justify-around items-center relative">
            <motion.div
              className="relative w-52 h-52 md:w-72 md:h-72 mb-4 overflow-hidden"
              initial={{ borderRadius: "0 30% 0 30%" }}
              whileHover={{ borderRadius: "0%", transition: { duration: 0.5, ease: "easeInOut" } }}
            >
              <motion.img
                src="/mentor3.jpeg"
                alt="Ishita Garg Hover"
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1, transition: { duration: 1.5, ease: "easeInOut" } }}
              />

              {/* LinkedIn Logo and Hover Effects */}
              <a href="http://linkedin.com/in/col-tripati-arya-12dec" target="_blank" rel="noopener noreferrer">
                <motion.div className="absolute inset-0 flex items-center justify-center bg-[#007F40] opacity-0 group-hover:opacity-80 transition-opacity duration-500 ease-in-out">
                  <span className="text-white text-sm text-center hidden group-hover:block p-2">
                  Lieutenant Colonel Tripti Arya, an esteemed officer of the Indian Army&apos;s Army Service Corps, has 14 years of exemplary service in logistics and frontline delivery. Renowned for leading elite technical teams in high-risk environments, she embodies courage and leadership.</span>
                </motion.div>
                <motion.div className="absolute bottom-0 right-0 bg-[#007F40] p-2 rounded-tr-2xl rounded-bl-2xl group-hover:scale-0 transition-all duration-500 ease-in-out">
                  <FaLinkedin className="w-6 h-6 text-white" />
                </motion.div>
              </a>
            </motion.div>
            <h2 className="text-lg font-semibold text-center">Col.Tripti Arya</h2>
            {/* <p className="text-gray-500 text-center">I have been awarded "General Officer Commanding in chief commendation, Northern Command - 2021"</p> */}
          </div>

          {/* Profile 4 (moved up) */}
          <div className="group rounded-lg p-6 flex flex-col justify-around items-center relative">
            <motion.div
              className="relative w-52 h-52 md:w-72 md:h-72 mb-4 overflow-hidden"
              initial={{ borderRadius: "0 30% 0 30%" }}
              whileHover={{ borderRadius: "0%", transition: { duration: 0.5, ease: "easeInOut" } }}
            >
              <motion.img
                src="/mentor2.jpg"
                alt="Navdeep Chobhiyal Hover"
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1, transition: { duration: 1.5, ease: "easeInOut" } }}
              />
              {/* LinkedIn Logo and Hover Effects */}
              <a href="https://www.linkedin.com/in/mukeshkestwal" target="_blank" rel="noopener noreferrer">
                <motion.div className="absolute inset-0 flex items-center justify-center bg-[#007F40] opacity-0 group-hover:opacity-80 transition-opacity duration-500 ease-in-out">
                  <span className="text-white text-sm text-center hidden group-hover:block p-2">
                  Mukesh Kestwal, Chief Innovation Officer at iHub - AWaDH, IIT Ropar, drives innovation in AI, IoT, and cyber-physical systems. He fosters sustainable growth and supports startups through accelerator programs and industry-academia collaborations.</span>
                </motion.div>
                <motion.div className="absolute bottom-0 right-0 bg-[#007F40] p-2 rounded-tr-2xl rounded-bl-2xl group-hover:scale-0 transition-all duration-500 ease-in-out">
                  <FaLinkedin className="w-6 h-6 text-white" />
                </motion.div>
              </a>
            </motion.div>
            <h2 className="text-lg font-semibold text-center">Mukesh Kestwal</h2>
          </div>
        </div>

        {/* Second row - 3 profiles */}
        <div className="flex flex-wrap justify-center w-full gap-6 ">

          {/* Profile 5 */}
          <div className="group rounded-lg p-6 flex flex-col justify-around items-center relative">
            <motion.div
              className="relative w-52 h-52 md:w-72 md:h-72 mb-4 overflow-hidden"
              initial={{ borderRadius: "0 30% 0 30%" }}
              whileHover={{ borderRadius: "0%", transition: { duration: 0.5, ease: "easeInOut" } }}
            >
              <motion.img
                src="/mentor1.jpg"
                alt="Pravash Dey Hover"
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1, transition: { duration: 1.5, ease: "easeInOut" } }}
              />

              {/* LinkedIn Logo and Hover Effects */}
              <a href="https://www.linkedin.com/in/akbtheceo" target="_blank" rel="noopener noreferrer">
                <motion.div className="absolute inset-0 flex items-center justify-center bg-[#007F40] opacity-0 group-hover:opacity-80 transition-opacity duration-500 ease-in-out">
                  <span className="text-white text-sm text-center hidden group-hover:block p-2">
                  CEO of AATWRI Aerospace & Defence and an Avionics Engineer, specializes in aerospace innovation, leading projects like AI-based flight simulators with HAL and the Indian Air Force. Recognized as a Young Entrepreneur and iDEX DISC winner, he is also a researcher, mentor, and speaker</span>
                </motion.div>
                <motion.div className="absolute bottom-0 right-0 bg-[#007F40] p-2 rounded-tr-2xl rounded-bl-2xl group-hover:scale-0 transition-all duration-500 ease-in-out">
                  <FaLinkedin className="w-6 h-6 text-white" />
                </motion.div>
              </a>
            </motion.div>
            <h2 className="text-lg font-semibold text-center">Ashish K. Behera</h2>
            {/* <p className="text-gray-500 text-center">Expertise in tech and marketing Especially AR & VR</p> */}
          </div>

          {/* Profile 6 */}
          <div className="group rounded-lg p-6 flex flex-col justify-around items-center relative">
            <motion.div
              className="relative w-52 h-52 md:w-72 md:h-72 mb-4 overflow-hidden"
              initial={{ borderRadius: "0 30% 0 30%" }}
              whileHover={{ borderRadius: "0%", transition: { duration: 0.5, ease: "easeInOut" } }}
            >
              <motion.img
                src="/adarsh pic.jpg"
                alt="Saksham"
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1, transition: { duration: 1.5, ease: "easeInOut" } }}
              />
              {/* LinkedIn Logo and Hover Effects */}
              <a href=" https://www.linkedin.com/in/group-capt-adarsh-sidharth-retd-80b213121?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B5RDCQ39AQIer2SbaqTTKJA%3D%3D " target="_blank" rel="noopener noreferrer">
                <motion.div className="absolute inset-0 flex items-center justify-center bg-[#007F40] opacity-0 group-hover:opacity-80 transition-opacity duration-500 ease-in-out">
                  <span className="text-white text-sm text-center hidden group-hover:block p-2">
                    With over 25 years of service in the Indian Air Force, my journey has been defined by diverse roles in operations, project management, and advisory capacities, marked by continuous learning and significant contributions to aviation and defense innovation.</span></motion.div>
                <motion.div className="absolute bottom-0 right-0 bg-[#007F40] p-2 rounded-tr-2xl rounded-bl-2xl group-hover:scale-0 transition-all duration-500 ease-in-out">
                  <FaLinkedin className="w-6 h-6 text-white" />
                </motion.div>
              </a>
            </motion.div>
            <h2 className="text-lg font-semibold text-center">Capt Adarsh Sidharth</h2>
            {/* <p className="text-gray-500 text-center">I have been awarded "General Officer Commanding in chief commendation, Northern Command - 2021"</p> */}
          </div>

          <div className="group rounded-lg p-6 flex flex-col justify-around items-center relative">
            <motion.div
              className="relative w-52 h-52 md:w-72 md:h-72 mb-4 overflow-hidden"
              initial={{ borderRadius: "0 30% 0 30%" }}
              whileHover={{ borderRadius: "0%", transition: { duration: 0.5, ease: "easeInOut" } }}
            >
              <motion.img
                src="/drupad.jpeg"
                alt="Saksham"
                className="absolute inset-0 w-full h-full object-full object-cover"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1, transition: { duration: 1.5, ease: "easeInOut" } }}
              />
              {/* LinkedIn Logo and Hover Effects */}
              <a href="https://www.linkedin.com/in/dhrupad-das1905/" target="_blank" rel="noopener noreferrer">
                <motion.div className="absolute inset-0 flex items-center justify-center bg-[#007F40] opacity-0 group-hover:opacity-80 transition-opacity duration-500 ease-in-out">
                  <span className="text-white text-xs text-center hidden group-hover:block">
                  With over 15 years of experience as a corporate litigator before India&apos;s courts, Dhrupad Das is the founding partner of Panda Law, a firm renowned for its expertise in navigating complex regulatory landscapes for businesses, particularly in the web3 and blockchain sectors. Since 2017, he has been a strategic legal advisor to major industry players, adopting a tech-forward approach to guide exchanges, virtual asset service providers, and token issuers through India&apos;s stringent regulations. An advocate for web3 adoption in the northeast region, Das co-founded Colours of India and advises Web3Assam, initiatives fostering education and innovation in decentralized technologies. His blend of legal acumen and commitment to community empowerment positions him as a thought leader poised to mentor the next generation in the digital age.                     </span></motion.div>
                <motion.div className="absolute bottom-0 right-0 bg-[#007F40] p-2 rounded-tr-2xl rounded-bl-2xl group-hover:scale-0 transition-all duration-500 ease-in-out">
                  <FaLinkedin className="w-6 h-6 text-white" />
                </motion.div>
              </a>
            </motion.div>
            <h2 className="text-lg font-semibold text-center">Dhrupad</h2>
            {/* <p className="text-gray-500 text-center">I have been awarded "General Officer Commanding in chief commendation, Northern Command - 2021"</p> */}
          </div>

          <div className="group rounded-lg p-6 flex flex-col justify-around items-center relative">
            <motion.div
              className="relative w-52 h-52 md:w-72 md:h-72 mb-4 overflow-hidden"
              initial={{ borderRadius: "0 30% 0 30%" }}
              whileHover={{ borderRadius: "0%", transition: { duration: 0.5, ease: "easeInOut" } }}
            >
              <motion.img
                src="/vansh.png"
                alt="vansh"
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1, transition: { duration: 1.5, ease: "easeInOut" } }}
              />
              {/* LinkedIn Logo and Hover Effects */}
              <a href="https://www.linkedin.com/in/vanshgehlot/" target="_blank" rel="noopener noreferrer">
                <motion.div className="absolute inset-0 flex items-center justify-center bg-[#007F40] opacity-0 group-hover:opacity-80 transition-opacity duration-500 ease-in-out">
                  <span className="text-white text-sm text-center hidden group-hover:block">
                  Vansh Gehlot, a GenAI and blockchain enthusiast. I&apos;m the Co-founder & CEO at Dragverse and Founder & CEO of CodeAsia (test.codeasia.org), a registered 501(c)(3) non-profit community for high students to boost their innovative, collaborative and creative mindset, which is disappearing due to the monotonous education system of India and a few southern Asian countries. </span></motion.div>
                <motion.div className="absolute bottom-0 right-0 bg-[#007F40] p-2 rounded-tr-2xl rounded-bl-2xl group-hover:scale-0 transition-all duration-500 ease-in-out">
                  <FaLinkedin className="w-6 h-6 text-white" />
                </motion.div>
              </a>
            </motion.div>
            <h2 className="text-lg font-semibold text-center">Vansh Gehlot</h2>
            <p className="text-gray-500 text-center">Co-founder & CEO, Dragverse</p>
          </div>


        </div>
      </div>
    </div>
  );
}
