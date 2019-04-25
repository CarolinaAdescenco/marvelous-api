import React from 'react';
import Container from './components/container';
import ContentQuiz from './components/contentQuiz';
import HomeQuiz from './components/testQuiz';
import './App.css';

function App() {
  return (
    <Container>
      <ContentQuiz/>      
    </Container>
    // <HomeQuiz />
  );
}

export default App;
