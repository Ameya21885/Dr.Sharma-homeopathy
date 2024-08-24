import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";

const data = [
  {
    title: "Personalized Care",
    subtitle: "Tailored treatment plans to meet unique needs and health goals.",
  },
  {
    title: "Comprehensive Range of Services",
    subtitle:
      "Various services available, including in-person and teleconsultation options, catering to diverse needs.",
  },
  {
    title: "Focus on Holistic Healing",
    subtitle:
      "Addresses root cause of health issues, empowers patients to take control of well-being.",
  },
];

const CustomCards = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {data.map((item, index) => {
          const { title, subtitle } = item;
          return (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  height: '180px',  // Set a fixed height
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center', // Center vertically
                  alignItems: 'center',    // Center horizontally
                  boxShadow: 3,
                  borderRadius: 2,
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Smooth transition for hover effect
                  '&:hover': {
                    boxShadow: 6,          // Increase shadow on hover
                    transform: 'scale(1.05)', // Slightly scale up the card on hover
                  },
                }}
              >
                <CardContent
                  sx={{
                    textAlign: 'center',  // Center text horizontally
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center', // Center content vertically within CardContent
                    alignItems: 'center',    // Center content horizontally within CardContent
                    height: '100%',         // Full height of the Card
                    p: 3,                   // Padding
                  }}
                >
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{ fontWeight: 'bold', mb: 1 }}
                  >
                    {title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: 'text.secondary' }}
                  >
                    {subtitle}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default CustomCards;
