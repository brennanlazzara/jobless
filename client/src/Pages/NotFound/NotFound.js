import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const NotFound = () => {
  return (
    <Fragment>
      <div className="not-found-page">
        <h1>Not Found 404</h1>
        <p>
          Go back to{' '}
          <Link className="bold" to="/">
            Home
          </Link>
        </p>
      </div>
    </Fragment>
  );
};

export default NotFound;
