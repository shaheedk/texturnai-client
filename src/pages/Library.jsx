import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { Download, Heart, ZoomIn } from "lucide-react";

function Library() {
  const { backendUrl, token } = useContext(AppContext);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔹 Fetch user library
  const fetchLibrary = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/image/get-library`, {
        headers: { token },
      });

      if (data.success) {
        setImages(data.images || []);
      } else {
        toast.error(data.message || "Failed to fetch library ❌");
      }
    } catch (err) {
      console.error(err);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) {
      fetchLibrary();
    } else {
      setLoading(false);
      toast.error("You must be logged in to view your library ⚠️");
    }
  }, [token]);

  // 🔹 Force download handler
  const downloadImage = async (url, filename = "downloaded-image.png") => {
    try {
      const response = await fetch(url, { mode: "cors" });
      const blob = await response.blob();
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = filename;
      link.click();
      URL.revokeObjectURL(link.href);
    } catch (err) {
      console.error("Download failed:", err);
      toast.error("Failed to download image ❌");
    }
  };

  return (
    <div className="min-h-screen px-4 sm:px-6 py-8">
      <h1 className="text-2xl font-bold text-white mb-8">Your Images</h1>

      {loading ? (
        <p className="text-gray-400 animate-pulse">Loading your images...</p>
      ) : images.length === 0 ? (
        <p className="text-gray-400">No images yet. Generate some!</p>
      ) : (
        <div className="columns-2 md:columns-3 lg:columns-3 gap-4 space-y-4">
          {images.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="relative break-inside-avoid overflow-hidden rounded-md group"
            >
              {/* Image */}
              <img
                src={item.url}
                alt={item.prompt || "Generated Image"}
                className="w-full rounded-md object-cover"
              />

              {/* Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-3 py-2 flex justify-between items-end">
                <span className="text-white text-xs font-medium truncate max-w-[70%]">
                rompt:  {item.prompt?.slice(0, 18) || "Untitled"}
                </span>
                <div className="flex items-center gap-3 text-gray-200 text-xs">
                  <button
                    onClick={() =>
                      downloadImage(item.url, `image-${idx + 1}.png`)
                    }
                    className="hover:text-white transition"
                  >
                    <Download size={16} />
                  </button>
                  
                  
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Library;
