import React from 'react';
import { ContentWrapper, PageTitle, StyledGeneralPage } from './General.styled';

function GeneralPage({ children, title }) {
  return (
    <StyledGeneralPage>
      {title && <PageTitle>{title}</PageTitle>}
      <ContentWrapper>{children}</ContentWrapper>
    </StyledGeneralPage>
  );
}

export default GeneralPage;
