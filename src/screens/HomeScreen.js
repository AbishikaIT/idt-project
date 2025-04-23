import React, { useState, useEffect } from 'react';
import { 
  Button, 
  Typography, 
  Box, 
  Avatar,
  AppBar,
  Toolbar,
  IconButton,
  Paper,
  Container,
  Modal,
  TextField,
  Tabs,
  Tab,
  Divider
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import AccountCircle from '@mui/icons-material/AccountCircle';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import CloseIcon from '@mui/icons-material/Close';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function HomeScreen() {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [authTab, setAuthTab] = useState(0);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [signupData, setSignupData] = useState({ name: '', email: '', password: '', confirmPassword: '' });

  // Warm, humanized color palette
  const colors = {
    primary: '#FF6B6B',
    secondary: '#4ECDC4',
    accent: '#FFA3A3',
    background: '#F7F7F7',
    cardBg: 'rgba(255,255,255,0.9)',
    text: '#2D3436',
    textSecondary: '#636E72',
    border: 'rgba(0,0,0,0.1)'
  };

  const features = [
    {
      title: 'AI Recipes',
      description: 'Get personalized recipe suggestions based on what you have',
      icon: <LocalDiningIcon sx={{ fontSize: 40, color: colors.primary }} />,
      bgColor: colors.cardBg,
      borderColor: colors.primary
    },
    {
      title: 'Expiry Tracker',
      description: 'Never waste food again with smart expiry alerts',
      icon: <TrackChangesIcon sx={{ fontSize: 40, color: colors.secondary }} />,
      bgColor: colors.cardBg,
      borderColor: colors.secondary
    },
    {
      title: 'Smart Suggestions',
      description: 'Creative ideas for ingredients you need to use soon',
      icon: <LocalDiningIcon sx={{ fontSize: 40, color: colors.accent }} />,
      bgColor: colors.cardBg,
      borderColor: colors.accent
    },
    {
      title: 'Meal Planning',
      description: 'Weekly meal plans tailored to your pantry',
      icon: <LocalDiningIcon sx={{ fontSize: 40, color: colors.primary }} />,
      bgColor: colors.cardBg,
      borderColor: colors.primary
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prevStep) => (prevStep + 1) % features.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [features.length]);

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData(prev => ({ ...prev, [name]: value }));
  };

  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    setSignupData(prev => ({ ...prev, [name]: value }));
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted:', loginData);
    setOpenAuthModal(false);
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    console.log('Signup submitted:', signupData);
    setOpenAuthModal(false);
  };

  const handleTabChange = (event, newValue) => {
    setAuthTab(newValue);
  };

  return (
    <Box sx={{
      height: '100vh',
      width: '100vw',
      background: colors.background,
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Navigation Bar */}
      <AppBar position="fixed" sx={{ 
        bgcolor: 'white',
        boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
        borderBottom: `1px solid ${colors.border}`,
        height: '64px'
      }}>
        <Toolbar sx={{ minHeight: '64px !important' }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="home"
            sx={{ 
              mr: 1,
              color: colors.text,
              transition: 'all 0.3s ease',
              '&:hover': { 
                backgroundColor: 'rgba(255, 107, 107, 0.1)',
                color: colors.primary
              }
            }}
            onClick={() => navigate('/')}
          >
            <HomeIcon />
          </IconButton>
          
          <IconButton
            size="large"
            color="inherit"
            aria-label="about"
            sx={{ 
              mr: 1,
              color: colors.text,
              transition: 'all 0.3s ease',
              '&:hover': { 
                backgroundColor: 'rgba(78, 205, 196, 0.1)',
                color: colors.secondary
              }
            }}
            onClick={() => navigate('/about')}
          >
            <InfoIcon />
          </IconButton>

          <IconButton
            size="large"
            color="inherit"
            aria-label="track-recipes"
            sx={{ 
              mr: 1,
              color: colors.text,
              transition: 'all 0.3s ease',
              '&:hover': { 
                backgroundColor: 'rgba(255, 163, 163, 0.1)',
                color: colors.accent
              }
            }}
            onClick={() => navigate('/track-recipes')}
          >
            <TrackChangesIcon />
          </IconButton>
          
          <Box sx={{ flexGrow: 1 }} />
          
          <div>
            <Button 
              variant="outlined"
              onClick={() => setOpenAuthModal(true)}
              sx={{ 
                mr: 2,
                px: 2,
                py: 0.8,
                borderRadius: '50px',
                borderColor: colors.primary,
                color: colors.primary,
                fontWeight: 'bold',
                fontSize: '0.8rem',
                letterSpacing: '0.5px',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: colors.primary,
                  color: 'white',
                  boxShadow: `0 2px 10px ${colors.accent}`
                }
              }}
            >
              Login/Sign Up
            </Button>
            
            <IconButton
              size="large"
              aria-label="account of current user"
              onClick={() => navigate('/profile')}
              sx={{
                color: colors.text,
                transition: 'all 0.3s ease',
                '&:hover': { 
                  backgroundColor: 'rgba(255, 107, 107, 0.1)',
                  color: colors.primary
                }
              }}
            >
              <AccountCircle />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      {/* Auth Modal */}
      <Modal
        open={openAuthModal}
        onClose={() => setOpenAuthModal(false)}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Paper sx={{
          width: 400,
          maxWidth: '90vw',
          p: 3,
          position: 'relative'
        }}>
          <IconButton
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: colors.textSecondary
            }}
            onClick={() => setOpenAuthModal(false)}
          >
            <CloseIcon />
          </IconButton>
          
          <Tabs 
            value={authTab} 
            onChange={handleTabChange} 
            variant="fullWidth"
            sx={{ mb: 3 }}
          >
            <Tab label="Login" />
            <Tab label="Sign Up" />
          </Tabs>
          
          {authTab === 0 ? (
            <Box component="form" onSubmit={handleLoginSubmit}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={loginData.email}
                onChange={handleLoginChange}
                sx={{ mb: 2 }}
                required
              />
              <TextField
                fullWidth
                label="Password"
                name="password"
                type="password"
                value={loginData.password}
                onChange={handleLoginChange}
                sx={{ mb: 3 }}
                required
              />
              <Button
                fullWidth
                variant="contained"
                type="submit"
                sx={{
                  backgroundColor: colors.primary,
                  '&:hover': {
                    backgroundColor: colors.accent
                  },
                  py: 1.5,
                  mb: 2
                }}
              >
                Login
              </Button>
              
              <Divider sx={{ my: 2 }}>OR</Divider>
              
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Button
                  fullWidth
                  variant="outlined"
                  startIcon={<GoogleIcon />}
                  sx={{
                    color: colors.text,
                    borderColor: colors.border
                  }}
                >
                  Google
                </Button>
                <Button
                  fullWidth
                  variant="outlined"
                  startIcon={<FacebookIcon />}
                  sx={{
                    color: colors.text,
                    borderColor: colors.border
                  }}
                >
                  Facebook
                </Button>
              </Box>
            </Box>
          ) : (
            <Box component="form" onSubmit={handleSignupSubmit}>
              <TextField
                fullWidth
                label="Full Name"
                name="name"
                value={signupData.name}
                onChange={handleSignupChange}
                sx={{ mb: 2 }}
                required
              />
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={signupData.email}
                onChange={handleSignupChange}
                sx={{ mb: 2 }}
                required
              />
              <TextField
                fullWidth
                label="Password"
                name="password"
                type="password"
                value={signupData.password}
                onChange={handleSignupChange}
                sx={{ mb: 2 }}
                required
              />
              <TextField
                fullWidth
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                value={signupData.confirmPassword}
                onChange={handleSignupChange}
                sx={{ mb: 3 }}
                required
              />
              <Button
                fullWidth
                variant="contained"
                type="submit"
                sx={{
                  backgroundColor: colors.primary,
                  '&:hover': {
                    backgroundColor: colors.accent
                  },
                  py: 1.5,
                  mb: 2
                }}
              >
                Sign Up
              </Button>
              
              <Divider sx={{ my: 2 }}>OR</Divider>
              
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Button
                  fullWidth
                  variant="outlined"
                  startIcon={<GoogleIcon />}
                  sx={{
                    color: colors.text,
                    borderColor: colors.border
                  }}
                >
                  Google
                </Button>
                <Button
                  fullWidth
                  variant="outlined"
                  startIcon={<FacebookIcon />}
                  sx={{
                    color: colors.text,
                    borderColor: colors.border
                  }}
                >
                  Facebook
                </Button>
              </Box>
            </Box>
          )}
        </Paper>
      </Modal>

      {/* Main Content */}
      <Container maxWidth="md" sx={{
        height: 'calc(100vh - 64px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        mt: '64px',
        position: 'relative',
        zIndex: 1,
        padding: '0 20px'
      }}>
        {/* Centered Logo Section */}
        <Box sx={{ 
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mb: 4
        }}>
          <Avatar sx={{ 
            bgcolor: colors.primary, 
            width: 100, 
            height: 100,
            mb: 3,
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'scale(1.05)'
            }
          }}>
            <LocalDiningIcon sx={{ fontSize: 50, color: 'white' }} />
          </Avatar>
          <Typography 
            variant="h3" 
            sx={{ 
              fontWeight: 'bold',
              color: colors.text,
              mb: 1,
              textAlign: 'center'
            }}
          >
            RegenBoT
          </Typography>
          <Typography 
            variant="subtitle1" 
            sx={{ 
              color: colors.textSecondary,
              mb: 3,
              textAlign: 'center',
              maxWidth: '500px'
            }}
          >
            Your friendly kitchen assistant to reduce food waste
          </Typography>
        </Box>

        {/* Feature Carousel */}
        <Box sx={{
          width: '100%',
          height: '220px',
          position: 'relative',
          mb: 2,
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: '0 5px 15px rgba(0,0,0,0.05)'
        }}>
          {features.map((feature, index) => (
            <Paper
              key={index}
              elevation={0}
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: feature.bgColor,
                borderRadius: '16px',
                p: 3,
                opacity: activeStep === index ? 1 : 0,
                transition: 'opacity 0.8s ease-in-out, transform 0.5s ease',
                cursor: 'pointer',
                border: `2px solid ${feature.borderColor}`,
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: `0 10px 20px ${feature.borderColor}30`
                }
              }}
              onClick={() => navigate(index === 1 ? '/expiry-tracker' : '/ai-recipes')}
            >
              <Box sx={{ 
                mb: 2,
                transition: 'all 0.3s ease',
                '&:hover': { transform: 'scale(1.1)' }
              }}>
                {feature.icon}
              </Box>
              <Typography variant="h5" sx={{ 
                fontWeight: 'bold', 
                mb: 1,
                color: feature.borderColor,
                textAlign: 'center'
              }}>
                {feature.title}
              </Typography>
              <Typography variant="body1" sx={{ 
                color: colors.textSecondary,
                textAlign: 'center'
              }}>
                {feature.description}
              </Typography>
            </Paper>
          ))}
        </Box>
      </Container>

      {/* Chatbot Icon */}
      <IconButton
        sx={{
          position: 'fixed',
          bottom: 20,
          right: 20,
          backgroundColor: colors.primary,
          color: 'white',
          width: 60,
          height: 60,
          transition: 'all 0.3s ease',
          '&:hover': {
            backgroundColor: colors.accent,
            transform: 'scale(1.1)'
          },
          zIndex: 1000
        }}
        onClick={() => navigate('/chatbot')}
      >
        <SmartToyIcon sx={{ fontSize: 30 }} />
      </IconButton>
    </Box>
  );
}