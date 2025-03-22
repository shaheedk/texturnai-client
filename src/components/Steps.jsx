import React from "react";
import { stepsData } from "../assets/assets";
import { motion } from "framer-motion";

function Steps() {
  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center my-32 text-gray-300"
    >
      <h1 className="text-3xl sm:text-4xl font-semibold mb-2">How it works</h1>
      <p className="text-lg text-gray-400 mb-8">
        Transform Words Into Stunning Images
      </p>

      <div className="space-y-4 w-full max-w-3xl text-sm">
        {stepsData.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 p-5 px-8 bg-gray-800/50 shadow-lg 
             cursor-pointer hover:scale-105 transition-all duration-300 rounded-lg"
          >
            <img width={40} src={item.icon} alt="" />
            <div>
              <h2 className="text-lg font-medium">{item.title}</h2>
              <p className="text-gray-400">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default Steps;
