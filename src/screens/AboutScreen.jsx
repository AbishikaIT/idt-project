import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Box, 
  AppBar, 
  Toolbar, 
  IconButton, 
  Button, // Added this import
  Container, 
  Typography, 
  Avatar, 
  Paper, 
  Chip,
  Grid,
  useTheme
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import NatureIcon from '@mui/icons-material/Nature';
import AlarmIcon from '@mui/icons-material/Alarm';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

const AboutScreen = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  const features = [
    {
      icon: <AutoAwesomeIcon fontSize="large" />,
      title: 'Smart Recipe Generation',
      description: 'Tell us what ingredients you have, and our AI will suggest delicious recipes you can make right now.'
    },
    {
      icon: <NatureIcon fontSize="large" />,
      title: 'Waste Reduction',
      description: 'We help you use up those lingering ingredients before they go bad, saving money and the planet.'
    },
    {
      icon: <AlarmIcon fontSize="large" />,
      title: 'Expiry Tracking',
      description: 'Never waste food again with our smart alerts for ingredients nearing their expiration date.'
    },
    {
      icon: <RestaurantIcon fontSize="large" />,
      title: 'Personalized Meal Plans',
      description: 'Get weekly meal plans tailored to your pantry contents and dietary preferences.'
    }
  ];

  return (
    <Box sx={{
      minHeight: '100vh',
      background: theme.palette.background.default,
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Navigation Bar */}
      <AppBar position="fixed" sx={{ 
        bgcolor: 'background.paper',
        boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
      }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="home"
            onClick={() => navigate('/')}
            sx={{ color: theme.palette.text.primary }}
          >
            <HomeIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
  
      {/* Main Content */}
      <Container maxWidth="md" sx={{ 
        mt: 12, 
        mb: 6,
        px: { xs: 2, sm: 3 }
      }}>
        {/* Hero Section */}
        <Box sx={{ 
          textAlign: 'center', 
          my: 8,
          px: { xs: 0, sm: 2 }
        }}>
          <Avatar sx={{ 
            bgcolor: 'primary.main', 
            width: 80, 
            height: 80,
            mx: 'auto',
            mb: 3,
            boxShadow: theme.shadows[4]
          }}>
            <SmartToyIcon sx={{ fontSize: 40 }} />
          </Avatar>
          <Typography variant="h3" sx={{ 
            fontWeight: 700,
            mb: 2,
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
            lineHeight: 1.2
          }}>
            Meet RegenBoT
          </Typography>
          <Typography variant="h6" sx={{ 
            color: 'text.secondary',
            maxWidth: '800px',
            mx: 'auto',
            mb: 4,
            fontSize: { xs: '1.1rem', sm: '1.25rem' },
            lineHeight: 1.6
          }}>
            Your friendly AI kitchen companion helping you cook smarter, waste less, and enjoy food more
          </Typography>
          <Chip 
            label="AI-Powered Kitchen Assistant" 
            color="primary" 
            sx={{ 
              fontSize: '1rem', 
              p: 2,
              borderRadius: 2,
              fontWeight: 500 
            }} 
          />
        </Box>
  
        {/* Value Proposition */}
        <Paper elevation={0} sx={{
          p: { xs: 3, sm: 4 },
          mb: 8,
          borderRadius: 4,
          bgcolor: 'primary.light',
          color: 'primary.contrastText',
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`
        }}>
          <Typography variant="h5" sx={{ 
            fontWeight: 700, 
            mb: 3,
            fontSize: { xs: '1.5rem', sm: '1.75rem' }
          }}>
            Cooking should be joyful, not wasteful
          </Typography>
          <Typography sx={{
            fontSize: { xs: '1rem', sm: '1.1rem' },
            lineHeight: 1.7
          }}>
            We created RegenBoT because we believe good food should never go to waste. Our intelligent system learns 
            what's in your kitchen and helps you create delicious meals while reducing food waste. Whether you're 
            a busy parent, a cooking enthusiast, or just someone who hates throwing away food, RegenBoT makes 
            mealtime easier and more sustainable.
          </Typography>
        </Paper>
  
        {/* Features Section */}
        <Box sx={{ my: 8 }}>
          <Typography variant="h4" sx={{ 
            fontWeight: 700,
            mb: 6,
            textAlign: 'center',
            fontSize: { xs: '1.75rem', sm: '2.125rem' }
          }}>
            How RegenBoT helps you
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={5} key={index} sx={{ 
                display: 'flex',
                justifyContent: 'center'
              }}>
                <Paper elevation={0} sx={{
                  p: 4,
                  width: '100%',
                  maxWidth: '400px',
                  textAlign: 'center',
                  borderRadius: '16px',
                  border: `1px solid ${theme.palette.divider}`,
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: theme.shadows[4]
                  }
                }}>
                  <Box sx={{ 
                    color: 'primary.main',
                    mb: 3,
                    '& svg': {
                      fontSize: '2.5rem'
                    }
                  }}>
                    {feature.icon}
                  </Box>
                  <Typography variant="h5" sx={{ 
                    fontWeight: 600, 
                    mb: 2,
                    fontSize: '1.5rem'
                  }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body1" sx={{
                    color: 'text.secondary',
                    lineHeight: 1.6
                  }}>
                    {feature.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
  
        {/* Call to Action */}
        <Box sx={{ 
          textAlign: 'center', 
          my: 10,
          p: { xs: 3, sm: 4 },
          borderRadius: 4,
          bgcolor: 'background.paper',
          boxShadow: theme.shadows[2],
          border: `1px solid ${theme.palette.divider}`
        }}>
          <Typography variant="h5" sx={{ 
            fontWeight: 700, 
            mb: 3,
            fontSize: { xs: '1.5rem', sm: '1.75rem' }
          }}>
            Ready to transform your kitchen?
          </Typography>
          <Typography sx={{ 
            mb: 4,
            color: 'text.secondary',
            maxWidth: '600px',
            mx: 'auto',
            lineHeight: 1.6
          }}>
            Join thousands of home cooks who are saving money, reducing waste, and discovering new favorite recipes.
          </Typography>
          <Button 
            variant="contained" 
            size="large"
            onClick={() => navigate('/signup')}
            sx={{ 
              px: 5,
              py: 1.5,
              borderRadius: 2,
              fontSize: '1rem',
              fontWeight: 500,
              textTransform: 'none'
            }}
          >
            Start Cooking Smarter
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutScreen;