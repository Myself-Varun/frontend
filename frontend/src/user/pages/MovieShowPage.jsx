import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/navbar";

const VideoDashboard = ({ role }) => {
  const [videos, setVideos] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      const res = await axios.get("http://localhost:9090/api/video/all");
      setVideos(res.data);
    } catch (err) {
      console.error("Error fetching videos:", err);
      setVideos([]);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile || !title || !description) return;

    const formData = new FormData();
    formData.append("file", selectedFile); // must be "file" as per backend
    formData.append("title", title);
    formData.append("description", description);
    formData.append("channelId", "00000000-0000-0000-0000-000000000000"); // Replace with actual channel UUID

    try {
      await axios.post("http://localhost:9090/api/video/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setSelectedFile(null);
      setTitle("");
      setDescription("");
      fetchVideos();
    } catch (err) {
      console.error("Upload failed:", err);
      alert("Upload failed.");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:9090/api/video/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      fetchVideos();
    } catch (err) {
      alert("Delete failed.");
    }
  };

  return (
    <div className="p-4">
      <Navbar />
      <h2 className="text-2xl font-bold my-4">Video Library</h2>

      {role === "admin" && (
        <div className="mb-6 space-y-2">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border p-2 rounded w-full"
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border p-2 rounded w-full"
          />
          <input
            type="file"
            accept="video/*"
            onChange={(e) => setSelectedFile(e.target.files[0])}
            className="w-full"
          />
          <button
            onClick={handleUpload}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Upload
          </button>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {videos.length > 0 ? (
          videos.map((video) => (
            <div key={video.id} className="border p-2 rounded shadow">
              <video
                width="100%"
                controls
                src={`http://localhost:9090/api/video/${video.id}`}
              />
              <h3 className="mt-2 font-semibold">{video.title}</h3>
              <p>{video.description}</p>
              {role === "admin" && (
                <button
                  onClick={() => handleDelete(video.id)}
                  className="mt-2 bg-red-500 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              )}
            </div>
          ))
        ) : (
          <p>No videos available.</p>
        )}
      </div>
    </div>
  );
};

export default VideoDashboard;
