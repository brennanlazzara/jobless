import React from "react";
import "../Footer/style.css";

function index() {
  return (
    <div className="main-footer">
      <div className="row divy">
        <div className="col-sm-1">
          <img
            src="/assets/slogo.png"
            className="foot-pic"
            alt="logopic"
            width="100%"
            height="100%"
          ></img>
        </div>

        <div className="col-sm-9 container text-center">
          <div className="row justify-content-center">
            <div className="col-sm-3">
              <a id="aboutLink" href="/about">
                <i className="link nav-link">About</i>
              </a>
            </div>

            <div className="col-sm-3">
              <a id="blogLink" href="/blog">
                <i className="link nav-link">Blog</i>
              </a>
            </div>

            <div className="col-sm-3">
              <a
                id="contactLink"
                href="https://github.com/BrennanPredmore/jobless"
              >
                <i className="fab fa-github">Connect</i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div div className="row copy">
        <div className="col-sm-12 copyright">
          <p className="text-xs-center">
            © Copyright
            <a href="https://github.com/BrennanPredmore/jobless">
              Click here the Github Repo
            </a>
            (Generated by REACT.JS){" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default index;
