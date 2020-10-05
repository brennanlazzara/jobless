import React from 'react';
import Main from '../../components/Container/Main/Main';
import Bottom from '../../components/Container/Bottom/Bottom';
import Container from '../../components/Container';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <Container>
      <Header />
      <Main />
      <Bottom />
      <Footer />
    </Container>
  );
};

export default Home;
