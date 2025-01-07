import { useState, useEffect } from 'react';
import { fetchVideos } from '../api/videosApi'; 

export const useFetchVideos = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getVideos = async () => {
      try {
        const data = await fetchVideos();
        setVideos(data); 
      } catch (err) {
        setError('Failed to fetch videos'); 
      } finally {
        setLoading(false); 
      }
    };

    getVideos();
  }, []);

  return { videos, loading, error };
};
