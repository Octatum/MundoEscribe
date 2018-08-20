import styled from 'styled-components';

const Layout = styled.div`
  display: flex;
  flex: 1;
  margin: 0 ${({fluid}) => fluid ? 0 : 7.3}em;
`;

export default Layout;