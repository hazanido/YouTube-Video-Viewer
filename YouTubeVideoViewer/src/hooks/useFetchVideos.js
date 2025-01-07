import { useState } from 'react';
import { fetchVideos } from '../api/videosApi'; // Import the fetchVideos function from your API module

export const useFetchVideos = () => {
  const [videos, setVideos] = useState([]);  // State to hold the fetched videos
  const [loading, setLoading] = useState(false); // State to manage loading state
  const [error, setError] = useState(null); // State to manage error messages

  
  const fetchVideosWithQuery = async (query) => {
    setLoading(true); 
    setError(null); 
    try {
      const data = await fetchVideos(query); 
      setVideos(data); 
    } catch (err) {
      console.error('Error fetching videos:', err);
      setError('Failed to fetch videos'); 
    } finally {
      setLoading(false); 
    }
  };

  
  return { videos, loading, error, fetchVideos: fetchVideosWithQuery }; // Return the state and the function to fetch videos
};
