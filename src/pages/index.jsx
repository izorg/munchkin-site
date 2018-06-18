import React from 'react';

import Home from '../components/Home';
import Layout from '../components/Layout/en';

// eslint-disable-next-line react/prop-types
export default ({ location }) => (
  <Layout location={location}>
    <Home />
  </Layout>
);
