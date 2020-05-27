import React from "react";
import "./style.css";

function index() {
    
    return (
<div className="footer-dark" style={{padding: 12}}>
  <footer>
    <div className="container">
      <div className="row" style={{height: 64}}>
        <div className="col-sm-6 col-md-3 item" style={{height: 64, minHeight: 4}}><img src="assets/img/128logo.png" width="128px" height="128px" style={{width: 64, height: 64}} /></div>
        <div className="col item social" style={{height: 64, marginTop: 0}}><a href="https://github.com/BrennanPredmore/jobless"><i className="fab fa-github-alt" /></a><a href="https://www.linkedin.com/company/joblesscareerdev"><i className="fab fa-linkedin-in" /></a></div>
        <div className="col-sm-6 col-md-3 item" style={{height: 64, minHeight: 64}}>
          <h3 style={{marginBottom: 0}}>Services</h3>
          <ul>
            <li><a>Web design</a></li>
            <li><a href>Development</a></li>
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
