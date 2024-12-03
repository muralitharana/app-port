import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { motion } from 'framer-motion';

// Framer Motion Animations
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const buttonHover = {
  scale: 1.1,
  transition: { duration: 0.3 },
};

const Home: React.FC = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: '#121212',
        color: 'white',
        padding: 2,
      }}
    >
      <Container maxWidth="md">
        {/* Main Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Title */}
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: 700,
              letterSpacing: '.1em',
              marginBottom: 2,
            }}
          >
            Welcome to My Portfolio!
          </Typography>

          {/* Subtitle */}
          <Typography
            variant="h5"
            component="h2"
            color="text.white"
            gutterBottom
            sx={{ marginBottom: 4 }}
          >
            I'm <strong>Muralitharan A</strong>, a React Developer specializing
            in creating stunning mobile applications.
          </Typography>

          {/* Buttons */}
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
            <motion.div whileHover={buttonHover}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                sx={{ padding: '10px 20px', fontWeight: 600 }}
              >
                View My Work
              </Button>
            </motion.div>
            <motion.div whileHover={buttonHover}>
              <Button
                variant="outlined"
                color="secondary"
                size="large"
                sx={{
                  padding: '10px 20px',
                  fontWeight: 600,
                  color: 'white',
                  borderColor: 'white',
                  '&:hover': { borderColor: '#ff4081', color: '#ff4081' },
                }}
              >
                Contact Me
              </Button>
            </motion.div>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Home;
