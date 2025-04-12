import React from 'react';
import { Container } from '@mui/material';
import BlogForm from '../components/BlogForm';

const AddBlog = () => {
  return (
    <Container sx={{ py: 4 }}>
      <BlogForm />
    </Container>
  );
};

export default AddBlog;