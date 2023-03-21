# YOUTUBE DATA API

The HTML and JS files provided in this GitHub repository allow users to search for YouTube videos using the YouTube API.

To use this code, you will need to obtain an API key from the Google Cloud Console. Once you have your API key, replace `API_KEY` in the `onClientLoad()` function in `script.js` with your API key.

The `onClientLoad()` function is used to initialize the YouTube API client using the API key and the discovery document for the YouTube API. If the client is successfully loaded, the function logs a message to the console. If there is an error, the function logs an error message.

The `searchVideos()` function is called when the user clicks the search button. It retrieves the search query from the input field with the id search. Then, it uses the YouTube API client to search for videos with the given query using the `gapi.client.youtube.search.list()` method. If the search is successful, the function logs the response to the console and creates a video element for each video in the response. The video element includes the video title, description, and an embedded video player. Finally, the function appends each video element to the `results` div.

The HTML file includes an input field with the id `search`, a search button, and a `results` div where the search results will be displayed. The HTML file also includes links to the CSS and JS files needed to run the code.

To use this code, you can clone the repository to your local machine and open the HTML file in a web browser. Then, enter a search query and click the search button to retrieve a list of YouTube videos matching the search query.

- Note: Before using this code, make sure to review and comply with the YouTube API Terms of Service and the Google Cloud Console Terms of Service.