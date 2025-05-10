 // src/pages/WatchPage.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../pagestyle/watchpage.css';

export default function WatchPage() {
  const { id } = useParams();
  const [video, setVideo] = useState(null);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await axios.get(`http://localhost:9090/api/videos/${id}`);
        setVideo(response.data);
      } catch (error) {
        console.error('Error fetching video:', error);
      }
    };
    fetchVideo();
  }, [id]);

  if (!video) return <div>Loading...</div>;

  return (
    <div className="watch-container">
      <h2>{video.title}</h2>
      <video controls width="100%">
        <source src={`http://localhost:9090/api/videos/videos/${video.videoFilename}`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <p>{video.description}</p>
      <p><strong>Category:</strong> {video.category}</p>
      <p><strong>Type:</strong> {video.type}</p>
    </div>
  );
}
