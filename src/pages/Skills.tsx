import React from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';

// Skill data
const skills = [
  { title: 'JavaScript', color: '#f7df1e' },
  { title: 'TypeScript', color: '#3178c6' },
  { title: 'React', color: '#61dafb' },
  { title: 'React Native', color: '#6d6dc6' },
  { title: 'State Management', color: '#4caf50' },
  { title: 'CSS/SCSS', color: '#ff69b4' },
  { title: 'Kotlin', color: '#a972cb' },
];

// Animation variants
const cardVariants = {
  hover: {
    scale: 1.1,
    transition: { duration: 0.3 },
  },
};

const Skills: React.FC = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: '#121212',
        color: 'white',
        padding: 2,
      }}
    >
      {/* Title */}
      <Typography
        variant="h3"
        sx={{
          fontWeight: 700,
          letterSpacing: '.1em',
          marginBottom: 4,
        }}
      >
        My Skills
      </Typography>

      {/* Skill Cards */}
      <Grid container spacing={4} justifyContent="center">
        {skills.map((skill, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <motion.div whileHover="hover" variants={cardVariants}>
              <Card
                sx={{
                  minHeight: 150,
                  backgroundColor: skill.color,
                  color: '#121212',
                  borderRadius: 3,
                  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <CardContent>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 600,
                      letterSpacing: '.05em',
                    }}
                  >
                    {skill.title}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skills;
