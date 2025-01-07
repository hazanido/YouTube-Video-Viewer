import axios from 'axios';

const API_KEY = 'asdsad'; 
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
        id: item.id.videoId,
        title: item.snippet.title,
        channel: item.snippet.channelTitle,
        thumbnail: item.snippet.thumbnails.medium.url,
      }));
    } catch (error) {
      console.error('Error fetching videos:', error);
      throw new Error('Failed to fetch videos. Please try again.');
    }
  };
