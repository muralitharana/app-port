import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { motion } from 'framer-motion';

// Framer Motion Animations
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const About: React.FC = () => {
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
            About Me
          </Typography>

          {/* Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <Typography
                variant="h6"
                component="p"
                sx={{ marginBottom: 2, color: 'text.white' }}
              >
                Hello! I'm <strong>Muralitharan A</strong>, a passionate software
                developer with a strong focus on React and React Native.
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Typography
                variant="h6"
                component="p"
                sx={{ marginBottom: 2, color: 'text.white' }}
              >
                I specialize in building mobile and web applications with
                cutting-edge technologies and delivering high-quality user
                experiences.
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Typography
                variant="h6"
                component="p"
                sx={{ marginBottom: 4, color: 'text.white' }}
              >
                With a knack for problem-solving and a keen eye for detail, I
                aim to create impactful and innovative software solutions.
              </Typography>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About;
