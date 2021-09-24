import styled from 'styled-components';

export const Layout = styled.body`
  display: grid;
  grid-template-columns: 175px auto;
  grid-template-rows: auto;
  grid-template-areas: 'AS BD';
  height: 100vh;
  @media (max-width: 700px) {
    grid-template-columns: 100px auto;
  }
`;