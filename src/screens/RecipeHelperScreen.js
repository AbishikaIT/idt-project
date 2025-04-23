import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const RecipeHelperScreen = () => {
  return (
    <Container>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="80vh"
        textAlign="center"
      >
        <Typography variant="h4">
          Recipe Helper Screen
        </Typography>
      </Box>
    </Container>
  );
};

export default RecipeHelperScreen;
