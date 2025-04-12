import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#1976d2' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
          Blog Dashboard
        </Typography>
        <Box>
          <Button
            color="inherit"
            component={Link}
            to="/"
            sx={{ mx: 1, textTransform: 'none', fontSize: '1rem' }}
          >
            Home
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/add-blog"
            sx={{ mx: 1, textTransform: 'none', fontSize: '1rem' }}
          >
            Add Blog
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;