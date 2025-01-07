import axios from 'axios';

const API_KEY = 'YOUR_YOUTUBE_API_KEY'; 
const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';

export const fetchVideos = async () => {
  const response = await axios.get(BASE_URL, {
    params: {
      part: 'snippet',
      type: 'video',
      maxResults: 10,
      q: 'programming', 
      key: API_KEY,
    },
  });

  return response.data.items.map((item) => ({
    id: item.id.videoId,
    title: item.snippet.title,
    channel: item.snippet.channelTitle,
    thumbnail: item.snippet.thumbnails.medium.url,
  }));
};
