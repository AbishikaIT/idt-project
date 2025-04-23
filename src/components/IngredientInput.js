import React, { useState } from 'react';  // ONLY THIS ONE - DELETE ANY DUPLICATES
import { 
  Box, 
  TextField, 
  Button, 
  Chip, 
  Stack, 
  IconButton,
  Paper,
  Typography
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';
import axios from 'axios';

const IngredientInput = ({ ingredients, setIngredients, setRecipes }) => {
  const [input, setInput] = useState('');

  const handleAdd = () => {
    if (input.trim()) {
      setIngredients([...ingredients, input.trim()]);
      setInput('');
    }
  };

  const handleRemove = (index) => {
    const newIngredients = [...ingredients];
    newIngredients.splice(index, 1);
    setIngredients(newIngredients);
  };

  const handleFindRecipes = async () => {
    try {
      // Replace with your Spoonacular API key
      const apiKey = 'YOUR_API_KEY';
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/findByIngredients`, {
          params: {
            ingredients: ingredients.join(','),
            number: 5,
            apiKey: apiKey
          }
        }
      );
      setRecipes(response.data);
    } catch (error) {
      console.error("Error fetching recipes:", error);
      // For demo purposes, we'll use mock data if API fails
      setRecipes([
        {
          id: 1,
          title: "Vegetable Stir Fry",
          usedIngredientCount: 3,
          missedIngredientCount: 2,
          image: "https://spoonacular.com/recipeImages/12345-312x231.jpg"
        },
        {
          id: 2,
          title: "Fried Rice",
          usedIngredientCount: 2,
          missedIngredientCount: 3,
          image: "https://spoonacular.com/recipeImages/12346-312x231.jpg"
        }
      ]);
    }
  };

  return (
    <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
      <Typography variant="h6" gutterBottom>
        Add Your Leftover Ingredients
      </Typography>
      
      <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
        <TextField
          fullWidth
          variant="outlined"
          label="Ingredient"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleAdd()}
        />
        <IconButton 
          color="primary" 
          onClick={handleAdd}
          sx={{ height: '56px' }}
        >
          <AddIcon />
        </IconButton>
      </Box>
      
      {ingredients.length > 0 && (
        <>
          <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1, mb: 2 }}>
            {ingredients.map((ingredient, index) => (
              <Chip
                key={index}
                label={ingredient}
                onDelete={() => handleRemove(index)}
                deleteIcon={<ClearIcon />}
              />
            ))}
          </Stack>
          
          <Button 
            variant="contained" 
            onClick={handleFindRecipes}
            fullWidth
          >
            Find Recipes
          </Button>
        </>
      )}
    </Paper>
  );
};

export default IngredientInput;