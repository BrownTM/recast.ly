var searchYouTube = (options, callback) => {
  // TODO
  var alt = {
    part: 'snippet',
    key: options.key,
    q: options.query,
    maxResults: options.max,
    type: 'video',
    videoEmbeddable: 'true'
  };

  $.get('https://www.googleapis.com/youtube/v3/search', alt)
    .done(function(results) { callback(results.items); });
};

export default searchYouTube;
