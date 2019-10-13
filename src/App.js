import styled from '@emotion/styled';
import React from 'react';
import Header from './components/Header';
import NotesBoard from './components/NotesBoard';

const AppContainer = styled.div({
  padding: 40,
  margin: "0 auto",
  minWidth: 500,
  maxWidth: 1280,
});

function App() {
  return (
    <AppContainer>
      <Header />
      <NotesBoard />
    </AppContainer>
  );
}

export default App;
