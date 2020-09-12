import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Parser from 'html-react-parser';

const JobListing = ({ job }) => {
  const {
    id,
    company,
    location,
    title,
    description,
    company_logo,
    how_to_apply,
    created_at,
  } = job;

  return (
    <table>
      <container style={{ marginLeft: '10px' }}>
        <thead>
          <tr>
            <tr>
              <div>
                <td>
                  <h2>
                    <b>{company}</b>
                  </h2>
                </td>
              </div>
            </tr>

            <tr>
              <div>
                <img style={{ width: '35px' }} src={company_logo}></img>
              </div>
            </tr>

            <tr>
              <div>
                <td>
                  <h4>{location}</h4>
                </td>
              </div>
            </tr>

            <tr>
              <div>
                <th style={{ fontWeight: 'bold' }}>Job Title:</th>
              </div>
              <div>
                <td>{title}</td>
              </div>
            </tr>

            <tr>
              <div>
                <th style={{ fontWeight: 'bold' }}>Description:</th>
              </div>
              <div>
                <td> {Parser(description)}</td>
              </div>
            </tr>

            <tr>
              <div>
                <th style={{ fontWeight: 'bold' }}>How To Apply:</th>
              </div>
              <div>
                <td>{Parser(how_to_apply)}</td>
              </div>
            </tr>

            <tr>
              <div>
                <th style={{ fontWeight: 'bold' }}>Posted Date:</th>
              </div>
              <div>
                <td>{created_at}</td>
              </div>
            </tr>
          </tr>
        </thead>
        <hr />
      </container>
    </table>
  );
};

JobListing.propTypes = {
  job: PropTypes.object.isRequired,
};

export default JobListing;
