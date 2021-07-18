import React from 'react';
import { useParams } from 'react-router';
import VideoDetailsRegularView from '../../components/VideoDetailsRegularView';
import GeneralPage from '../GeneralPage';

function VideoDetailsPage() {
  const { videoId } = useParams();
  return (
    <GeneralPage title="Video Details">
      <VideoDetailsRegularView videoId={videoId} />
    </GeneralPage>
  );
}

export default VideoDetailsPage;
