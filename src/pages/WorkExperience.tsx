import React from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";

// Experience data
const experiences = [
  {
    role: "Software Engineer",
    company: "TechCorp Inc.",
    duration: "2020 - Present",
    description: "Developed scalable React and React Native applications.",
  },
  {
    role: "Frontend Developer",
    company: "WebWorld",
    duration: "2018 - 2020",
    description: "Built responsive web interfaces using JavaScript and TypeScript.",
  },
  {
    role: "Intern",
    company: "Startup Lab",
    duration: "2017 - 2018",
    description: "Assisted in building MVPs for startup clients.",
  },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 15,
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const WorkExperience: React.FC = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#1e1e1e",
        color: "white",
        padding: 4,
        textAlign: "center",
      }}
    >
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            letterSpacing: ".1em",
            marginBottom: 4,
          }}
        >
          Work Experience
        </Typography>
      </motion.div>

      {/* Experience Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Grid container spacing={4} justifyContent="center">
          {experiences.map((exp, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }}>
                <Card
                  sx={{
                    minHeight: 200,
                    backgroundColor: "#2e2e2e",
                    color: "white",
                    borderRadius: 3,
                    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  <CardContent>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 600,
                        marginBottom: 1,
                      }}
                    >
                      {exp.role}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontWeight: 500,
                        color: "#cfcfcf",
                        marginBottom: 2,
                      }}
                    >
                      {exp.company} | {exp.duration}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#b0b0b0",
                      }}
                    >
                      {exp.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Box>
  );
};

export default WorkExperience;
