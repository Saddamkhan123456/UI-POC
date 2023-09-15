import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Navbar from '../../Components/Molecules/Navbar';
import Accordian from '../../Components/Molecules/Accordian';
import Typography from '../../Components/Atoms/Typography';
import ListRow from '../../Components/Molecules/ListRow';

const options = ['Home', ' Recommended'];

const recommendedBody = css`
  padding: 3.75rem 7.5rem 5rem;
  background: #f8f8f8;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

const list = css`
  padding-bottom: 1.5rem;
  paddingtop: 0.5rem;
  border-bottom: 1px solid #bebebe;
  &:last-child: {
    border-bottom: unset;
  }
`;

const StyledRecommendedBody = styled.div`
  ${recommendedBody}
`;

const StyledList = styled.div`
  ${list}
`;

const Recommended = () => {
  return (
    <>
      <Navbar options={options} showInput />
      <StyledRecommendedBody>
        <StyledList>
          <ListRow children={undefined} />
        </StyledList>
        <StyledList>
          <ListRow children={undefined} />
        </StyledList>
        <StyledList>
          <ListRow children={undefined} />
        </StyledList>
        <StyledList>
          <ListRow children={undefined} />
        </StyledList>
      </StyledRecommendedBody>
    </>
  );
};

export default Recommended;
