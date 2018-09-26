import styled from 'styled-components';
import breakpoints from '../utils/breakpoints';

const Section = styled.section`
  display: flex;
  flex: 1;
  margin: 0 ${({ fluid }) => (fluid ? 0 : 7.3)}em;

  @media screen and (max-width: ${breakpoints.dropdown}) {
    margin: 0 ${({ fluid }) => (fluid ? 0 : 3)}em;
  }

  @media screen and (max-width: ${breakpoints.medium}) {
    margin: 0 ${({ fluid }) => (fluid ? 0 : '5%')};
  }
`;

export default Section;
