# Netflix Clone

A Netflix clone built with React, leveraging the TMDB API for movie data and Firebase for user authentication. This project aims to replicate a modern streaming platform's core functionalities, allowing users to sign up, log in, browse movies by category, and watch trailers.

## Features
- **User Authentication**: Sign up, sign in and log out securely using Firebase.
- **Browse Movies**: Explore a variety of movie categories, including "Popular", "Top Rated" and "Upcoming" titles from TMDB.
- **Trailer Playback**: Click on a movie and watch its corresponding trailer or video clip, fetching directly from the TMDB API.
- **Responsive Design**: The website is fully responsive for both desktop and mobile devices.

## Technologies Used
- **React.js**
- **JavaScript**
- **HTML & CSS**
- **Firebase**
- **TMDB API**

## Installation
**Prerequisites**
- **Node.js**: Ensure you have Node.js and npm installed.

1. **Clone the repository**

   ```bash
   git clone https://github.com/Stacey-Lee-hub/Netflix_Clone.git
   cd your-project-name
   ```
2. **Install NPM packages**
   ```bash
   npm install
   ```

## API Keys and Configuration

This project requires API keys for both TMDB and Firebase.

1. **TMDB API**:
- Go to https://www.themoviedb.org/ and create an account.
- Request an API key from your account settings.

2. **Firebase**:
- Go to https://console.firebase.google.com/ and create a new project.
- Set up a new Web App within your project.
- Enable **Authentication** and choose an authentication method (Email/Password).
- Copy your Firebase configuration object.

3. **Environment Variables**:
- Create a *.env* file in the root directory of the project.
Add your API keys to the file, ensuring the are prefixed with "*VITE_*" for vite to access them correctly
   ```bash
   VITE_TMDB_API_KEY=your_tmdb_api_key                                         # in API subscription settings
   VITE_FIREBASE_API_KEY=your_firebase_api_key                                 # in Project Settings -> General -> Your apps
   VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain         
   VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
   VITE_FIREBASE_APP_ID=your_firebase_app_id
   ```
