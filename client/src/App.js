import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer';
import Home from './Pages/home';
import BlogForm from './components/BlogComponents/BlogArticle/BlogForm';
import BlogHome from './Pages/bloghome';




function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Route exact path="/" component={Home} />
        <Route exact path="/blog/post" component={BlogForm} />
        <Route exact path="/blog" component={BlogHome} />
        {/* <Route exact path="/about" component={About} />
        <Route exact path="/joblistings" component={JobListings} />
        <Route exact path="/login" component={Login} />

         */}

       <div>
       <Footer />
       </div>
       </div>
    </Router>
  
 
    
  );
}

export default App;
