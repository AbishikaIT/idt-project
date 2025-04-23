import React from 'react';
import { 
  Grid, 
  Card, 
  CardMedia, 
  CardContent, 
  Typography, 
  Chip,
  Paper,
  Box  // This was missing
} from '@mui/material';

const RecipeResults = ({ recipes }) => {
  return (
    <Paper elevation={3} sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Recommended Recipes
      </Typography>
      
      <Grid container spacing={3}>
        {recipes.map((recipe) => (
          <Grid item xs={12} sm={6} key={recipe.id}>
            <Card sx={{ height: '100%' }}>
              {recipe.image && (
                <CardMedia
                  component="img"
                  height="140"
                  image={recipe.image}
                  alt={recipe.title}
                />
              )}
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {recipe.title}
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, mb: 1 }}>
                  <Chip 
                    label={`Uses ${recipe.usedIngredientCount} ingredients`} 
                    color="success" 
                    size="small" 
                  />
                  <Chip 
                    label={`Needs ${recipe.missedIngredientCount} more`} 
                    color="warning" 
                    size="small" 
                  />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default RecipeResults;