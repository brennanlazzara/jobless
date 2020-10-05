import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Cookies from 'js-cookie';
import { logInUserWithOauth, loadMe } from './store/actions/authActions';
import BlogHome from './Pages/BlogHome/BlogHome';
import BlogForm from './components/BlogComponents/BlogArticle/BlogForm';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import JobListingPage from './Pages/JobListings/JobListings';
import Register from './Pages/Register/Register';
import Loader from './components/Loader/Loader';

const App = ({ logInUserWithOauth, auth, loadMe }) => {
  useEffect(() => {
    loadMe();
  }, [loadMe]);

  useEffect(() => {
    if (window.location.hash === '#_=_') window.location.hash = '';

    const cookieJwt = Cookies.get('x-auth-cookie');
    if (cookieJwt) {
      Cookies.remove('x-auth-cookie');
      logInUserWithOauth(cookieJwt);
    }
  }, []);

  useEffect(() => {
    if (
      !auth.appLoaded &&
      !auth.isLoading &&
      auth.token &&
      !auth.isAuthenticated
    ) {
      loadMe();
    }
  }, [
    auth.isAuthenticated,
    auth.token,
    loadMe,
    auth.isLoading,
    auth.appLoaded,
  ]);

  return (
    <>
      {auth.appLoaded ? (
        <Router>
          <div className='App'>
            <Route exact path='/' component={Home} />
            <Route exact path='/blog/post' component={BlogForm} />
            <Route exact path='/blog' component={BlogHome} />
            <Route exact path='/about' component={About} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/jobs' component={JobListingPage} />
          </div>
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

export default compose(
  connect(mapStateToProps, { logInUserWithOauth, loadMe })
)(App);
