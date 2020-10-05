import React from 'react';
import { Container } from 'reactstrap';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';

const About = (props) => {
  return (
    <>
      <Header />
      <Container>
        <div>
          <div>
            <h1 className='text-center'>THE COMPANY</h1>
            <p className='text-center'>
              The world is a very strange place right now. COVID-19 is affecting
              people in many ways across the globe. The United Staes has over 30
              million Americans that have filed for unemployment benefits within
              the past three months, and that number continues to rise everyday.
              Here at Jobless, we want to help those in need of employment due
              to COVID-19. We have set up a search for you to find remote and
              essential employment in to help alleviate unemployment rates
              during these hard times. Jobless is committed to and passionate
              about helping finding your next job or career.
            </p>
            <hr />
            <hr />
            <h2 className='text-center'>DEVELOPERS</h2>
          </div>
          <div className='container'>
            <div className='row'>
              <div className='col-sm-6 col-md-4' style={{ padding: 20 }}>
                <div className='box'>
                  <div className='box-img'>
                    <img src='assets/img/chris.jpg' alt='Williamson' />
                  </div>
                  <div className='box-content'>
                    <h4 className='title'>Christopher Searcy</h4>
                    <p className='description'>
                      Chris is a javascript developer with experience in
                      database management and sales
                    </p>
                    <ul className='social-links'>
                      <li>
                        <a href='https://github.com/ChristopherNeill'>
                          <FontAwesomeIcon icon={faGithubAlt} />
                        </a>
                      </li>
                      <li>
                        <a href='https://www.linkedin.com/in/christopher-searcy-8298b2197/'>
                          <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                      </li>
                      <li>
                        <a href='https://christopherneill.github.io/latestportfolio/'>
                          <FontAwesomeIcon icon={faBriefcase} />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='col-sm-6 col-md-4' style={{ padding: 20 }}>
                <div className='box'>
                  <div className='box-img'>
                    <img src='assets/img/brennan.jpg' alt='Williamson' />
                  </div>
                  <div className='box-content'>
                    <h4 className='title'>
                      Brennan Predmoré
                      <br />
                    </h4>
                    <p className='description'>
                      Brennan is a former music teacher and a graduate of the UT
                      full stack software development bootcamp. He enjoys
                      playing music and skateboarding when hes not software
                      engineering
                    </p>
                    <ul className='social-links'>
                      <li>
                        <a href='https://github.com/BrennanPredmore'>
                          <FontAwesomeIcon icon={faGithubAlt} />
                        </a>
                      </li>
                      <li>
                        <a href='https://www.linkedin.com/in/brennan-predmor%C3%A9-132306195/'>
                          <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                      </li>
                      <li>
                        <a href='https://brennan-predmore-portfolio.herokuapp.com/'>
                          <FontAwesomeIcon icon={faBriefcase} />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='col-sm-6 col-md-4' style={{ padding: 20 }}>
                <div className='box'>
                  <div className='box-img'>
                    <img src='assets/img/shawn.jpeg' alt='Williamson' />
                  </div>
                  <div className='box-content'>
                    <h4 className='title'>
                      Shawn Tschoepe
                      <br />
                    </h4>
                    <p className='description'>
                      My name is Shawn. I like to Hike and fly planes.
                    </p>
                    <ul className='social-links'>
                      <li>
                        <a href='https://github.com/shawn220a'>
                          <FontAwesomeIcon icon={faGithubAlt} />
                        </a>
                      </li>
                      <li>
                        <a href='https://www.linkedin.com/in/shawn-tschoepe-245302195/'>
                          <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                      </li>
                      <li>
                        <a href='https://github.com/shawn220a/react-portfolio'>
                          <FontAwesomeIcon icon={faBriefcase} />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div
                className='col-sm-6 col-md-4'
                style={{ marginLeft: '16%', padding: 20 }}
              >
                <div className='box'>
                  <div className='box-img'>
                    <img src='assets/img/grant.jpeg' alt='Williamson' />
                  </div>
                  <div className='box-content'>
                    <h4 className='title'>Grant Kyle</h4>
                    <p className='description'>
                      After spending a few years in digital marketing, Grant
                      finally decided to take the plunge to the dev side. One of
                      the last remaining native Austinites, Grant spends his
                      free time outdoors when he is not staring at a computer
                      screen.
                    </p>
                    <ul className='social-links'>
                      <li>
                        <a href='https://github.com/grantkyle'>
                          <FontAwesomeIcon icon={faGithubAlt} />
                        </a>
                      </li>
                      <li>
                        <a href='https://www.linkedin.com/in/grant-kyle-53298711a/'>
                          <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                      </li>
                      <li>
                        <a href='https://grants-portfolio.herokuapp.com/'>
                          <FontAwesomeIcon icon={faBriefcase} />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='col-sm-6 col-md-4' style={{ padding: 20 }}>
                <div className='box'>
                  <div className='box-img'>
                    <img src='assets/img/tabby.jpeg' alt='Williamson' />
                  </div>
                  <div className='box-content'>
                    <h4 className='title'>
                      Tabitha Garcia
                      <br />
                    </h4>
                    <p className='description'>
                      Front end web developer goddess. I like to code and party.
                    </p>
                    <ul className='social-links'>
                      <li>
                        <a href='https://github.com/tabby-lab'>
                          <FontAwesomeIcon icon={faGithubAlt} />
                        </a>
                      </li>
                      <li>
                        <a href='https://www.linkedin.com/in/tabbitha-garcia-01164a144/'>
                          <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                      </li>
                      <li>
                        <a href='https://github.com/tabby-lab/Portfolio'>
                          <FontAwesomeIcon icon={faBriefcase} />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className='container'
            style={{ width: 'auto', height: 80, backgroundColor: '#ffffff' }}
          ></div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default About;
