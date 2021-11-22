import React from 'react';
import Products from 'components/Products';
import Layout from 'Layout';
import Login from './Login';
class App extends React.Component {
  render() {
    return (
      <Layout>
        <Products />
      </Layout>
    );
  }
}

export default App;
