import React from 'react';
import Capital from '../../components/Capital';
import Finance from '../../components/Finance';
import Management from '../../components/Management';

const Home = () => {
  return (
    <div>
      <Finance />
      <Management />
      <Capital />
    </div>
  );
};

export default Home;