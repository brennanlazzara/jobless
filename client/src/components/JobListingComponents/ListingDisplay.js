import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Parser from 'html-react-parser';
import jobTable from '../jobTable/jobTable';
import searchBar from '../SearchBar/searchBar';

const JobListing = ({ job }) => {
  // Declare a new state variable to set all employees
  const [jobs, setJobs] = useState([]);

  // Declare a new state to filter
  const [filterText, setFilterText] = useState('');
  const filteredJobs = jobs.filter((e) => {
    // By company
    if (e.company.toLowerCase().includes(filterText.toLowerCase())) {
      return true;
    }
    // By location
    else if (e.location.toLowerCase().includes(filterText.toLowerCase())) {
      return true;
    }
    // By title
    else if (e.title.toLowerCase().includes(filterText.toLowerCase())) {
      return true;
    }
    // By description
    else if (e.description.toLowerCase().includes(filterText.toLowerCase())) {
      return true;
    } else {
      return false;
    }
  });

  const {
    company,
    location,
    title,
    description,
    company_logo,
    how_to_apply,
    created_at,
  } = job;

  setJobs(job);

  return (
    <div className='listingDisplay'>
      <jobTable jobs={filteredJobs} />
      <searchBar setFilterText={setFilterText} />
    </div>
  );
};

JobListing.propTypes = {
  job: PropTypes.object.isRequired,
};

export default JobListing;
