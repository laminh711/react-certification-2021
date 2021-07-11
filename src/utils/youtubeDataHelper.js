import { notEmpty } from './typeHelper';

export function standadizeSearchResult(jsonSearchResult) {
  let { items } = jsonSearchResult;
  // youtube might return result video with empty snippet
  // so we will remove this item because the item with no snippet will not have title, description to render
  items = items.filter((video) => notEmpty(video.snippet));
  return items.map((v) => {
    return {
      videoId: v.id.videoId,
      title: v.snippet.title,
      description: v.snippet.description,
      thumbnail: v.snippet.thumbnails.default.url,
    };
  });
}

export function standadizeRelatedVideos(jsonRelatedVideos) {
  let { items } = jsonRelatedVideos;
  // youtube might return result video with empty snippet
  // so we will remove this item because the item with no snippet will not have title, description to render
  items = items.filter((video) => notEmpty(video.snippet));
  return items.map((v) => {
    return {
      videoId: v.id.videoId,
      title: v.snippet.title,
      description: v.snippet.description,
      thumbnail: v.snippet.thumbnails.default.url,
    };
  });
}

export function standadizeSingleVideo(jsonSingleVideo) {
  // same thing happens as the above comments
  if (jsonSingleVideo.items.length === 0) {
    return null;
  }
  const v = jsonSingleVideo.items[0];
  return {
    videoId: v.id,
    title: v.snippet.title,
    description: v.snippet.description,
    thumbnail: v.snippet.thumbnails.default.url,
  };
}
