import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Paper } from '@mui/material';

const BlogForm = () => {
  const [formData, setFormData] = useState({
    blogName: '',
    description: '',
    authorName: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ blogName: '', description: '', authorName: '' });
  };

  return (
    <Paper
      elevation={3}
      sx={{
        p: 4,
        maxWidth: 600,
        mx: 'auto',
        mt: 4,
        borderRadius: 2,
      }}
    >
      <Typography variant="h5" component="h1" gutterBottom align="center">
        Add New Blog
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate>
        <TextField
          fullWidth
          label="Blog Name"
          name="blogName"
          value={formData.blogName}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          required
        />
        <TextField
          fullWidth
          label="Description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          multiline
          rows={4}
          required
        />
        <TextField
          fullWidth
          label="Author Name"
          name="authorName"
          value={formData.authorName}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          required
        />
        <Box mt={3} display="flex" justifyContent="center">
          <Button
            type="submit"
            variant="contained"
            size="large"
            sx={{ px: 4, borderRadius: 1 }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default BlogForm;