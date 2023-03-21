var API_KEY = 'YOUR_API_KEY';


function onClientLoad() {
  gapi.client.init({
    apiKey: API_KEY,
    discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest']
  }).then(function() {
    console.log('Google API client loaded for YouTube API');
  }, function(reason) {
    console.log('Error: ' + reason.result.error.message);
  });
}

function searchVideos() {
  var query = document.getElementById('search').value;
  gapi.client.youtube.search.list({
    'part': 'snippet',
    'q': query,
    'type': 'video'
  }).then(function(response) {
    console.log(response);
    var results = document.getElementById('results');
    results.innerHTML = '';
    var items = response.result.items;
    items.forEach(function(item) {
      var video = document.createElement('div');
      video.innerHTML = '<h2>' + item.snippet.title + '</h2>' + 
                         '<p>' + item.snippet.description + '</p>' +
                         '<iframe width="560" height="315" src="https://www.youtube.com/embed/' + item.id.videoId + '" frameborder="0" allowfullscreen></iframe>';
      results.appendChild(video);
    });
  }, function(reason) {
    console.log('Error: ' + reason.result.error.message);
  });
}

gapi.load('client', onClientLoad);

//please refer to the Readme file 