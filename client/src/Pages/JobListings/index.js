import React, { useEffect, useState } from 'react';
import JobListing from '../../components/JobListingComponents/ListingDisplay';
import Header from '../../components/Header/index';
import Footer from '../../components/Footer';
import axios from 'axios';

const JobListingPage = () => {
  const [jobData, setJobData] = useState([]);
  useEffect(() => {
    axios.get('/api/jobs').then((res) => {
      setJobData(res.data.data);
    });
  }, []);

  return (
    <div className='App'>
      <Header />
      <h1 style={{ textAlign: 'center' }}>
        Your Next Opportunity Awaits...
        <hr />
      </h1>
      {jobData.map((job) => {
        return <JobListing job={job} />;
      })}
      ;
      <Footer />
    </div>
  );
};

export default JobListingPage;
