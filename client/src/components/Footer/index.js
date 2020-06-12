import React from "react";
import "./style.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


function index() {
    
    return (
<div className="footer-dark" style={{padding: 12}}>
  <footer>
    <div className="container">
      <div className="row" style={{height: 64}}>
        <div className="col-sm-6 col-md-3 item" style={{height: 64, minHeight: 4}}><img src="assets/img/128logo.png" alt={'footer'} width="128px" height="128px" style={{width: 64, height: 64}} /></div>
        <div className="col item social" style={{height: 64, marginTop: 0}}>
          <a href="https://github.com/BrennanPredmore/jobless"><FontAwesomeIcon icon={faGithubAlt} /></a>
        <a href="https://www.linkedin.com/company/joblesscareerdev"><FontAwesomeIcon icon={faLinkedin} /></a></div>
        <div className="col-sm-6 col-md-3 item" style={{height: 64, minHeight: 64}}>
          <h3 style={{marginBottom: 0}}>Services</h3>
          <ul>
            <li>Web design</li>
            <li>Development</li>
            <li />
          </ul>
        </div>
        <div className="col-md-6 item text" style={{maxWidth: 266, height: 64, minHeight: 64}}>
          <h3 style={{marginBottom: 0}}>Jobless</h3>
          <p>Need A Job? We're here to help.<br /></p>
          <p>JoblessCarrerDev© 2020</p>
        </div>
      </div>
    </div>
  </footer>
</div>

);
}

export default index;
