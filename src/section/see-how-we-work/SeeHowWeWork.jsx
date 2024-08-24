import { Box, Typography } from "@mui/material";
import React from "react";
import VedioPlayer from "./VedioPlayer";

const SeeHowWeWork = () => {
  return (
    <Box
      sx={{
        width: { xs: "90%", sm: "80%", md: "70%" }, // Responsive width
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 3,  // Spacing between elements
        py: 4,   // Vertical padding
        backgroundColor: "#f5f5f5", // Light background color
        borderRadius: 2, // Rounded corners
        boxShadow: 1, // Subtle shadow for depth
      }}
    >
      <Box sx={{ textAlign: 'center', maxWidth: '600px' }}>
        <Typography
          variant="h2"
          gutterBottom
          sx={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 700,
            color: "#333",
            mb: 2,
          }}
        >
          See How We Work
        </Typography>
        <Typography
          variant="subtitle1"
          gutterBottom
          sx={{
            fontFamily: "'Poppins', sans-serif",
            color: "#555",
            fontWeight: 400,
            lineHeight: 1.6,
          }}
        >
          Discover our personalized care and innovative solutions for optimal wellness.
        </Typography>
      </Box>
      <VedioPlayer />
    </Box>
  );
};

export default SeeHowWeWork;
