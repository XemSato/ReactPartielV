import React from 'react';
import { Redirect } from 'react-router-dom';

const Home = () => {
  // Rediriger directement vers la page "/News"
  return <Redirect to="/News" />;
};

export default Home;