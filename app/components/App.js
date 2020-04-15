import React from 'react';
import styled from 'styled-components';

import Routes from '../routes';
import GlobalStyle from '../global-styles';

import 'sanitize.css/sanitize.css';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  font-family: 'Open Sans', sans-serif;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 500px;
  height: 40%;
`;

const Title = styled.h1`
  color: black;
  font-size: 2.5rem;
  font-weight: 700;
`;

const App = () => (
  <Container>
    <Wrapper>
      <Title>Dashboard</Title>
      {/* You can add your common html/header/footer/loader component here */}
      <h3>Your Common HTML goes here</h3>
      <Routes />
      <GlobalStyle />
    </Wrapper>
  </Container>
);

export default App;
