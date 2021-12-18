import React from 'react';
import Products from 'components/Products';
import Layout from 'Layout';
import axios from 'commons/axios';

const App = () => {


  return(
    <Layout>
      <Products />
    </Layout>
  )
}
export default App;