import styled from 'styled-components';
import breakpoints from '../../configs/breakpoints';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

export const VideoSection = styled.div`
  flex: 100%;
  max-width: 100%;
  padding: 8px;

  @media (min-width: ${breakpoints.md}) {
    flex: 75%;
    max-width: 75%;
  }
`;

export const VideoPlayer = styled.iframe`
  width: 100%;
  min-height: 512px;
`;

export const VideoTitleSection = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const AddToFavourite = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 30%;
  flex: 30%;
`;

export const VideoTitle = styled.h2`
  color: ${(props) => props.theme.text};
  max-width: 70%;
  flex: 70%;
`;

export const VideoDescription = styled.p`
  color: ${(props) => props.theme.text};
  text-align: justify;
  margin: 0;
`;

export const RelatedVideoSection = styled.div`
  flex: 100%;
  max-width: 100%;
  padding: 8px;

  @media (min-width: ${breakpoints.md}) {
    flex: 25%;
    max-width: 25%;
  }
`;
