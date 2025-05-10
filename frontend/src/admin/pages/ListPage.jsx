import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../pagestyle/listpage.css';
import Navbar from '../components/navbar';

export default function ListPage() {
  const [videos, setVideos] = useState([]);

  // Fetch videos when the component mounts
  useEffect(() => {
    fetchVideos();
  }, []);

  // Function to fetch all videos
  const fetchVideos = async () => {
    try {
      const response = await axios.get('http://localhost:9090/api/video/all');
      setVideos(response.data);
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  };

  // Function to handle video deletion
  const handleDelete = async (id) => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('You are not authorized to delete videos.');
      return;
    }

    try {
      await axios.delete(`http://localhost:9090/api/video/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert('Video deleted successfully');
      fetchVideos(); // Refresh video list
    } catch (error) {
      console.error('Error deleting video:', error);
      alert('Delete failed. Make sure you are authorized.');
    }
  };

  // Function to handle video editing
  const handleEdit = async (id, updatedTitle, updatedDescription) => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('You are not authorized to edit videos.');
      return;
    }

    try {
      await axios.put(
        `http://localhost:9090/api/video/${id}`,
        {
          title: updatedTitle,
          description: updatedDescription,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert('Video updated successfully');
      fetchVideos(); // Refresh video list
    } catch (error) {
      console.error('Error editing video:', error);
      alert('Edit failed. Make sure you are authorized.');
    }
  };

  return (
    <div className="list-container">
      <Navbar />
      <h2>Uploaded Videos</h2>
      <div className="video-list">
        {videos.length > 0 ? (
          videos.map((video) => (
            <div key={video.id} className="video-item">
              <video
                width="100%"
                height="auto"
                controls
                src={`http://localhost:9090/api/video/${video.id}/stream`} // Assuming '/stream' endpoint streams the video
              />
              <div className="video-details">
                <h3>{video.title}</h3>
                <p>{video.description}</p>
              </div>
              <div className="video-actions">
                <button
                  onClick={() => {
                    const updatedTitle = prompt('Enter new title:', video.title);
                    const updatedDescription = prompt('Enter new description:', video.description);
                    if (updatedTitle && updatedDescription) {
                      handleEdit(video.id, updatedTitle, updatedDescription);
                    }
                  }}
                >
                  Edit
                </button>
                <button onClick={() => handleDelete(video.id)}>Delete</button>
              </div>
            </div>
          ))
        ) : (
          <p>No videos uploaded yet.</p>
        )}
      </div>
    </div>
  );
}
