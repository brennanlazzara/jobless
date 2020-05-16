import React from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';

import { BlogHome } from '../../../pages/bloghome';

const Blog = (props) => {
  return (
    <Switch>
      <Route exact path="/blog" component={BlogHome} />
    </Switch>

  )
}

export default withRouter(Blog);