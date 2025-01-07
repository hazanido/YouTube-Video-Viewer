
```markdown
# YouTube Video Viewer

A React Native application that allows users to search and view YouTube videos. The app fetches data from the YouTube Data API v3, displays video search results in a list, and plays selected videos within the app.

---

## Table of Contents
- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Setup](#setup)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Screens and Components](#screens-and-components)
- [API Integration](#api-integration)
- [License](#license)

---

## Features
- Search for YouTube videos using a search bar.
- View a list of videos with their titles, thumbnails, and channel names.
- Play videos directly within the app.
- View detailed information (title, description) about a selected video.
- Loading and error handling screens.

---

## Requirements
Before running the project, ensure you have the following:
- Node.js (v14 or higher) and npm installed.
- React Native CLI or Expo CLI installed.
- Android Studio or Xcode installed for running the app on an emulator/simulator.
- YouTube Data API v3 API key (details below).

---

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repository/youtube-video-viewer.git
   cd youtube-video-viewer
   ```

2. Install the required dependencies:
   ```bash
   npm install
   ```

---

## Setup
### Step 1: YouTube Data API Key
1. Create a project in the [Google Cloud Console](https://console.cloud.google.com/).
2. Enable the "YouTube Data API v3" for your project.
3. Generate an API key and copy it.

### Step 2: Configure the API Key
1. Open the file `src/api/videosApi.js`.
2. Replace the placeholder `YOUR_YOUTUBE_API_KEY` with your API key:
   ```javascript
   const API_KEY = 'YOUR_YOUTUBE_API_KEY';
   ```

---

## Running the Application
### Using Expo
1. Start the development server:
   ```bash
   npx expo start
   ```
2. Scan the QR code using the Expo Go app on your device or run it on an emulator.

### Using React Native CLI
1. Run the app on Android:
   ```bash
   npx react-native run-android
   ```
2. Run the app on iOS:
   ```bash
   npx react-native run-ios
   ```

---

## Project Structure
```
src/
├── api/             // Contains API logic for fetching YouTube data
├── components/      // Reusable UI components (e.g., VideoCard, Spinner, SearchBar)
├── hooks/           // Custom React hooks (e.g., useFetchVideos)
├── screens/         // Application screens (e.g., VideoListScreen, VideoDetailsScreen)
├── App.js           // Main app entry point
```

---

## Screens and Components
### Screens
1. **VideoListScreen**: Displays a searchable list of videos fetched from the YouTube API.
2. **VideoDetailsScreen**: Plays the selected video and shows its title and description.
3. **LoadingScreen**: Displays a spinner while videos are being fetched.
4. **ErrorScreen**: Displays error messages when fetching fails.

### Components
1. **VideoCard**: Displays video thumbnail, title, and channel name in the list.
2. **SearchBar**: Allows users to search for videos.
3. **Spinner**: A loading spinner.

---

## API Integration
The app uses the YouTube Data API v3 for fetching video data. The key points of the integration are:
- API endpoint: `https://www.googleapis.com/youtube/v3/search`
- Parameters:
  - `q`: Search query
  - `part`: `snippet`
  - `type`: `video`
  - `maxResults`: 10
  - `key`: Your YouTube API key
- Response is mapped to extract video ID, title, channel name, and thumbnail.

---

## License
This project is licensed under the MIT License. See the LICENSE file for details.

---

### Notes
- Ensure your API key is restricted to prevent misuse.
- The app requires network connectivity to fetch video data.
- For any issues or contributions, feel free to create an issue or submit a pull request.

Happy coding! 🚀
```

You can update the placeholder sections such as the repository link and API key details based on your specific project setup. Let me know if you need further adjustments! 😊
