import React from 'react';
import Main from '../../components/Container/Main';
import Bottom from '../../components/Container/Bottom';
import Container from '../../components/Container';
import Header from "../../components/Header";
import Footer from "../../components/Footer";

 const Home = () => {
    return (
        <Container>
            <Header/>
            <Main />
            <Bottom />
            <Footer />
       </Container>
    )

}

export default Home;