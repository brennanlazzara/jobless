import React from 'react';
import JobListing from '../../components/JobListingComponents/ListingDisplay';
import Header from '../../components/Header/index';
import Footer from '../../components/Footer';

const JobListingPage = () => {
  
    return (
      <div className="App">
        <Header />
        <JobListing />
        <Footer />
      </div>
    );
  
}

export default JobListingPage;