import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";
import { AppContext } from "../context/AppContext";
import { toast } from "react-toastify";
import Library from "./Library";

function Result() {
  const [image, setImage] = useState(assets.sample_img_1);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");

  const { generateImage } = useContext(AppContext);

  // 🔹 Form submit handler
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (input) {
      try {
        const generatedImage = await generateImage(input); 
        console.log("Generated Image:", generatedImage);

        if (generatedImage) {
          setIsImageLoaded(true);
          setImage(generatedImage); // set Cloudinary URL as preview
        }
      } catch (error) {
        toast.error("Something went wrong while generating ❌");
      }
    } else {
      toast.warn("Please enter a description ⚠️");
    }

    setLoading(false);
  };

  return (
    <motion.form
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onSubmit={onSubmitHandler}
      className="flex flex-col min-h-[90vh] justify-center items-center"
    >
      <div>
        <div className="relative">
          <img src={image} alt="Generated" className="max-w-sm rounded-sm" />
          <span
            className={`absolute bottom-0 left-0 h-1 bg-blue-500 ${
              loading ? "w-full transition-all duration-[10s]" : "w-0"
            }`}
          />
        </div>
        {loading && <p className="text-lg mt-2 animate-pulse">Loading...</p>}
      </div>

      {/* Input bar (only shows if no image yet) */}
      {!isImageLoaded && (
        <div className="flex w-full max-w-xl bg-neutral-500 text-white text-sm p-0.5 rounded-full mt-4">
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            type="text"
            placeholder="Describe what you want to generate"
            className="flex-1 bg-transparent outline-none ml-8 max-sm:w-20 placeholder-gray-300"
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-zinc-900 px-10 sm:px-16 py-3 rounded-full disabled:opacity-50"
          >
            {loading ? "Generating..." : "Generate"}
          </button>
        </div>
      )}

      {/* Actions (only shows after image is generated) */}
      {isImageLoaded && (
        <div className="flex gap-2 justify-center flex-wrap text-white text-sm p-0.5 mt-10 rounded-full">
          <p
            className="bg-transparent border border-zinc-900 text-black px-8 py-3 rounded-full cursor-pointer"
            onClick={() => {
              setIsImageLoaded(false);
              setInput("");
              setImage(assets.sample_img_1);
            }}
          >
            Generate Another
          </p>
          <a
            href={image}
            download
            className="bg-zinc-900 px-10 py-3 rounded-full cursor-pointer"
          >
            Download
          </a>

        </div>
      )}
                <Library/>
    </motion.form>
  );
}

export default Result;
