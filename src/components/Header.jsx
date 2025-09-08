import { useContext } from "react";
import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { AppContext } from "../context/AppContext";
function Header() {
  const { user, setShowLogin } = useContext(AppContext);
  const navigate = useNavigate();

  const onclickHandler = () => {
    if (user) {
      navigate("/result");
    } else {
      setShowLogin(true);
    }
  };

  return (
    <motion.div
      className="flex flex-col justify-center items-center text-center mt-7"
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="text-stone-500 inline-flex text-center bg-white px-6 py-1 rounded-full border border-neutral-500"
        initial={{ opacity: 0, y: -20 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        animate={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p>Best text to image generator</p>
        <img src={assets.star_icon} alt="" />
      </motion.div>

      <motion.h1 className="text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px] m-auto mt-7 text-center">
        Turn text to{" "}
        <span
          className="text-red-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 2 }}
        >
          image
        </span>{" "}
        in seconds
      </motion.h1>
      <motion.p
        className="text-center max-w-xl mx-auto mt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        Unleash you creativity with Ai. Turn your imagination into visual art in
        seconds-just type,and watch the magic happen
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          default: { duration: 0.5 },
          opacity: { delay: 0.8, duration: 1 },
        }}
        onClick={onclickHandler}
        className="sm:text-lg text-white bg-black w-auto mt-5 px-12 py-2.5 flex items-center gap-2 rounded-full"
      >
        Generate Image
        <img className="h-6" src={assets.star_group} alt="" />
      </motion.button>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="flex flex-wrap justify-center mt-6 gap-3"
      >
        {Array(6)
          .fill("")
          .map((item, index) => (
            <motion.img
              whileHover={{ scale: 1.05, duration: 0.1 }}
              className="rounded hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-10"
              src={index % 2 === 0 ? assets.sample_img_1 : assets.sample_img_2}
              alt=""
              key={index}
              width={70}
            />
          ))}
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="mt-1 text-gray-200"
      >
        Generated images from TexturnAI
      </motion.p>
    </motion.div>
  );
}

export default Header;
