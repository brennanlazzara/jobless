import React, {useEffect} from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer';
import BlogForm from './components/BlogComponents/BlogArticle/BlogForm';
import Home from './pages/home';
// import BlogArticle from './pages/BlogArticle/Form';
import BlogHome from './pages/bloghome.jsx';
import About from './pages/about';


// CHRIS'S IMPORTS 
import { compose } from 'redux';
import { connect } from 'react-redux';
import Cookies from 'js-cookie';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Profile from './pages/Profile/Profile';
import Users from './pages/Users/Users';
import Admin from './pages/Admin/Admin';
import NotFound from './pages/NotFound/NotFound';
import Loader from './components/Loader/Loader';
import { logInUserWithOauth, loadMe } from './store/actions/authActions';


function App({ logInUserWithOauth, auth, loadMe }) {

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
    if (!auth.appLoaded && !auth.isLoading && auth.token && !auth.isAuthenticated) {
      loadMe();
    }
  }, [auth.isAuthenticated, auth.token, loadMe, auth.isLoading, auth.appLoaded]);

  return (
    <Router>
      <div className="App">
        <Header/>
        <Route exact path="/" component={Home} />
        <Route exact path="/blog/post" component={BlogForm} />
        <Route exact path="/blog" component={BlogHome} />
         <Route exact path="/about" component={About} />
         
         {/* CHRIS'S ROUTES */}
         <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/users" component={Users} />
          <Route path="/notfound" component={NotFound} />
          <Route path="/admin" component={Admin} />
          <Route exact path="/:username" component={Profile} />
          <Route component={NotFound} />

       <div>
       <Footer />
       </div>
       </div>
    </Router>
  
 
    
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default compose(connect(mapStateToProps, { logInUserWithOauth, loadMe }))(App);
