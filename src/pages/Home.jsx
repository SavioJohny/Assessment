import React from 'react';
import { Container } from '@mui/material';
import BlogList from '../components/BlogList';

const Home = () => {
  return (
    <Container sx={{ py: 4 }}>
      <BlogList />
    </Container>
  );
};

export default Home;