import styled from 'styled-components';
import Container from '../../components/Container';

export const StyledGeneralPage = styled.section`
  width: 100%;
  height: 100%;
`;

export const PageTitle = styled.h1`
  color: ${(props) => props.theme.text};
  text-align: center;
  font-size: 2rem;
  margin: 8px 0;
`;

export const ContentWrapper = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 0;
  padding-right: 0;
`;
