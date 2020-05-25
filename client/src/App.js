import React, {useEffect} from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Cookies from 'js-cookie';
import { logInUserWithOauth, loadMe } from './store/actions/authActions';

import BlogForm from './components/BlogComponents/BlogArticle/BlogForm';
import Home from './Pages/Home';
// import BlogArticle from './pages/BlogArticle/Form';
import BlogHome from './Pages/BlogHome';
import About from './Pages/About';
import Login from "./Pages/Login";
import Register from './Pages/Register';
import Loader from './components/Loader/Loader';

const App = ({ logInUserWithOauth, auth, loadMe }) => {

  useEffect(() => {
    loadMe();
  }, [loadMe]);

  //redosled hookova
  useEffect(() => {
    if (window.location.hash === '#_=_') window.location.hash = '';

    const cookieJwt = Cookies.get('x-auth-cookie');
    if (cookieJwt) {
      Cookies.remove('x-auth-cookie');
      logInUserWithOauth(cookieJwt);
    }
  }, []);

  useEffect(() => {
    if (!auth.appLoaded && !auth.isLoading && auth.token && !auth.isAuthenticated) { //  && !auth.isAuthenticated 
      loadMe();
    }
  }, [auth.isAuthenticated, auth.token, loadMe, auth.isLoading, auth.appLoaded]);

  return (
    <>
      {auth.appLoaded ? (
        <Router>
          <div className="App">
            <Route exact path="/" component={Home} />
            <Route exact path="/blog/post" component={BlogForm} />
            <Route exact path="/blog" component={BlogHome} />
            <Route exact path="/about" component={About} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
          </div>
          {/* 
            <Route exact path="/joblistings" component={JobListings} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/blogpost" component={BlogArticle} />
            <Route exact path="/bloghome" component={BlogHome} />
            <Route exact path="/about" component={About} />
            <Route exact path="/joblistings" component={JobListings} />
          */}
        </Router>
          ) : (
        <Loader />
        )}
    </>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default compose(connect(mapStateToProps, { logInUserWithOauth, loadMe }))(App);