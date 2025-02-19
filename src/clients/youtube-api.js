const YOUTUBE_API_BASE_ADDRESS = 'https://youtube.googleapis.com/youtube/v3';

function youtubeApiSearch(searchString) {
  // build query param
  const queryParam = new URLSearchParams();
  queryParam.append('part', 'snippet');
  queryParam.append('maxResults', 25);
  queryParam.append('q', searchString);
  queryParam.append('type', 'video');
  queryParam.append('key', process.env.REACT_APP_YOUTUBE_API_KEY);

  const url = new URL(`${YOUTUBE_API_BASE_ADDRESS}/search?${queryParam.toString()}`);
  return fetch(url.href);
}

function youtubeApiSearchRelated(videoId) {
  // build query param
  const queryParam = new URLSearchParams();
  queryParam.append('part', 'snippet');
  queryParam.append('maxResults', 25);
  queryParam.append('relatedToVideoId', videoId);
  queryParam.append('type', 'video');
  queryParam.append('key', process.env.REACT_APP_YOUTUBE_API_KEY);

  const url = new URL(`${YOUTUBE_API_BASE_ADDRESS}/search?${queryParam.toString()}`);
  return fetch(url.href);
}

function youtubeApiGetSpecificVideo(videoId) {
  // build query param
  const queryParam = new URLSearchParams();
  queryParam.append('part', 'snippet');
  queryParam.append('id', videoId);
  queryParam.append('key', process.env.REACT_APP_YOUTUBE_API_KEY);

  const url = new URL(`${YOUTUBE_API_BASE_ADDRESS}/videos?${queryParam.toString()}`);
  return fetch(url.href);
}

export { youtubeApiSearch, youtubeApiSearchRelated, youtubeApiGetSpecificVideo };
