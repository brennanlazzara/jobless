import React, {useEffect} from 'react';

const JobListing = () => {

    const {
      id,       
      company,
      location,
      title,
      description,
      company_logo,
      how_to_apply,
      created_at } = this.props.job;

  return (
    <table>
      <container style={{ marginLeft: "10px" }}>
        <thead>
          <tr>

            <tr>
              <div>
                <th style={{ fontWeight: "bold" }}>Company</th>
              </div>
              <div>
                <td>{company}</td>
              </div>
            </tr>

            <tr>
              <div>
                <th style={{ fontWeight: "bold" }}>Location</th>
              </div>
              <div>
                <td>{location}</td>
              </div>
            </tr>

            <tr>
              <div>
                <th style={{ fontWeight: "bold" }}>Job Title</th>
              </div>
              <div>
                <td>{title}</td>
              </div>
            </tr>

            <tr>
              <div>
                <th style={{ fontWeight: "bold" }}>Description</th>
              </div>
              <div>
                <td>{description}</td>
              </div>
            </tr>

            <tr>
              <div>
                <th style={{ fontWeight: "bold" }}>How To Apply</th>
              </div>
              <div>
                <td>{how_to_apply}</td>
              </div>
            </tr>

            <tr>
              <div>
                <th style={{ fontWeight: "bold" }}>Company Logo</th>
              </div>
              <div>
                <td>{company_logo}</td>
              </div>
            </tr>

            <tr>
              <div>
                <th style={{ fontWeight: "bold" }}>Posted Date</th>
              </div>
              <div>
                <td>{created_at}</td>
              </div>
            </tr>

          </tr>
        </thead>
      </container>
    </table>
  );
}

export default JobListing