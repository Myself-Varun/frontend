import { useState } from 'react';
import axios from 'axios';
import '../pagestyle/adminpage.css';
import Navbar from "../components/navbar";

export default function AdminPage() {
  const [video, setVideo] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('movie');
  const [videoPreview, setVideoPreview] = useState(null);

  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    setVideo(file);
    if (file) {
      setVideoPreview(URL.createObjectURL(file));
    }
  };

  const handleVideoUpload = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('file', video); // ✅ key must be 'file'
    formData.append('title', title);
    formData.append('description', description);
    formData.append('channelId', '3fa85f64-5717-4562-b3fc-2c963f66afa6'); // ✅ Use actual channel ID
    // You can also append 'type' if backend needs it later
    // formData.append('type', type);

    try {
      const response = await axios.post('http://localhost:9090/api/video/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      alert('Video uploaded successfully');
    } catch (error) {
      console.error('Error uploading video:', error);
      alert('Error uploading video');
    }
  };

  return (
    <div className="admin-container">
      <Navbar />
      <div className="admin-form">
        <div className="preview-container">
          {videoPreview && <video src={videoPreview} controls />}
        </div>
        <div className="form-inputs">
          <h2>Upload Video</h2>
          <form onSubmit={handleVideoUpload}>
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <textarea
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>

            <input
              type="file"
              accept="video/*"
              onChange={handleVideoChange}
              required
            />

            <button type="submit">Upload</button>
          </form>
        </div>
      </div>
    </div>
  );
}
