import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";

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
      toast.error("Failed to load library ❌");
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

  return (
    <div className="min-h-screen px-6 py-10 bg-gray-50">
      <h1 className="text-2xl font-bold mb-6">📂 My Library</h1>

      {loading ? (
        <p className="text-gray-500 animate-pulse">Loading your images...</p>
      ) : images.length === 0 ? (
        <p className="text-gray-500">No images yet. Generate some!</p>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((item, idx) => (
            <div
              key={idx}
              className="rounded-xl shadow-md border border-gray-200 overflow-hidden flex flex-col bg-white"
            >
              <img
                src={item.url}
                alt={item.prompt || "Generated Image"}
                className="w-full h-48 object-cover"
              />
              <div className="p-3 flex flex-col flex-1">
                <p className="text-sm text-gray-700 flex-1">
                  {item.prompt || "No prompt available"}
                </p>
                <div className="mt-3 flex justify-between items-center text-xs text-gray-500">
                  <span>
                    {item.createdAt
                      ? new Date(item.createdAt).toLocaleDateString()
                      : ""}
                  </span>
                  <a
                    href={item.url}
                    download
                    className="text-blue-600 font-medium hover:underline"
                  >
                    Download
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Library;
