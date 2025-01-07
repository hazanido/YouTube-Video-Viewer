import axios from 'axios';

const API_KEY = 'AIzaSyB4cLJ6cxgQzR1JCa3yPjKoKY-7zDW4lmY';  // Replace with your actual API key
const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';

export const fetchVideos = async (query) => {
    try {
        console.log('Fetching videos with query:', query); 
      const response = await axios.get(BASE_URL, {
        params: {
          part: 'snippet',
          type: 'video',
          maxResults: 10,
          q: query, 
          key: API_KEY,
        },
      });
      
      return response.data.items.map((item) => ({
        id: item.id.videoId || item.id, // Ensure the ID is correctly extracted
        title: item.snippet?.title || 'No title available', 
        channel: item.snippet?.channelTitle || 'Unknown channel', 
        thumbnail: item.snippet?.thumbnails?.medium?.url || '', 
        description: item.snippet?.description || 'No description available', 
      }));
      
    } catch (error) {
      console.error('Error fetching videos:', error);
      throw new Error('Failed to fetch videos. Please try again.');
    }
  };
