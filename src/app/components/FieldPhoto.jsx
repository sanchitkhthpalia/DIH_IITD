"use client"
import React from "react";
import { motion, useInView } from "framer-motion";
import "./shine.css"
function FieldPhoto() {
    const containerRef = React.useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  
  return (
    <motion.div
    ref={containerRef}
    initial={{ opacity: 0, y: 50 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.8, ease: "easeOut" }}
    id="Fields"
    className="mt-10 lg:mt-14  lg:mx-32">
        <img 
        src="/Frame.png"
        alt="image" 
        className="w-full h-full "
      />
    </motion.div>
  )
}

export default FieldPhoto