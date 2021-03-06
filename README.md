# **Smusic**<br>

### *Summary:* <br>
Smusic is an **in progress** cross-platform (only tested on iOS thus far) react native application with the goal of recommending music to users based on photos they take or upload.

The end goal is for the app to work in the following way:
1. Users upload images or take pictures in the app
2. Those pictures are classified to one of fifteen Spotify genres using a machine learning algorithm developed using TensorFlow and Keras.
3. Once the images are classified the user can click the image to view other songs that Spotify recommends based on the genre.

### *Installation:*
1. Run 'npm install expo-cli --global'
2. Clone the project
3. Run 'npm clean-install'
4. Run 'npm start'
5. Use expo to start the app either on your phone or on a simulator on your computer. Documentation here: https://docs.expo.io/versions/v35.0.0/

### *Current App Progress:*
###### App Visual Design (Lots to be done here):
- <del>Create basic 3 tab application with screens for: Home, Camera, and Results of image classification</del>
- <del>Allow users to take photos that save to the Results tab</del>
- <del>Allow users to click photos they've already taken to view Spotify recommendations (randomly recommending as of now)</del>
- Think of better app name
- Remove GIFs and make app look more professional
- Make dark mode black instead of blue
- Add grabbing photos from camera roll
- Make selfie's save the way a user would expect (no selfie flipping)
- <del>Add dark theme (personal preference)</del>
- Make settings menu (if there are enough settings to be changed... tbd)
- Clean up PhotoScreen.js to be more visually appealing and ensure user will not load page until all images are loaded
- Make sure user's know they can click coverart of songs to open in Spotify
- Add icons to bottom tab navigator
- After all menus have been set up and satisfied, make first time interactive tutorial
- Maybe remove 3 tab setup and just have two pages (one with photos/classifications and one with a camera)
- Write on photos page what type of music photo was classified to
- Add background/header to images page it isn't so plain
###### App Optimization and Design:
- <del>Fetch request from Spotify working and returning recommendations based on requested category</del>
- Figure out how to add TensorFlow model or maybe try another ML platform
- Save Spotify auth token and expiration time to Redux store instead of asking for a new one on each call (waiting to implement TensorFlow)
- Save Spotify recommendations to Redux store instead of asking for new ones each time (waiting to implement TensorFlow)
- Clean up long component render methods (CameraScreen.js) and break them into components
- Give users option to save photos to camera roll
- Unsure if photos are saved if users closes app (because expo is a bit confusing with this), experiment and find out
- Make photo uri, their classification, and spotify recommendations all part of redux store (and save to local storage) so they are grouped and can be easily used again instead of making the same ML/Spotify API calls over and over
- Move Spotify API calls into separate file (Waiting for TensorFlow)
###### Machine Learning:
- <del>Train an image classifier using TensorFlow and Keras that can roughly associate pictures with Spotify genres (doesn't need to be perfect as the goal is to discover new music).</del>
- Save classifier in .pb format and move it into tensorflow.js to use inside the app (Having troubles with this)
- Use classifier to classify images after they are taken 
