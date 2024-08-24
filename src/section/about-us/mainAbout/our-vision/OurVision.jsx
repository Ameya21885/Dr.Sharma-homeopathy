import { Box, Typography } from "@mui/material";
import React from "react";

const OurVision = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "center",
        gap: 4, // Space between text and image
        width: "80%",
        margin: "auto",
        my: 6, // Vertical padding
        p: 4, // Adds padding around the section
        backgroundColor: "#f9f9f9", // Light background color
        borderRadius: "8px", // Rounded corners
        boxShadow: 3, // Adds shadow for depth
      }}
    >
      <Box
        sx={{
          flex: 1,
          px: 3, // Horizontal padding
          textAlign: { xs: "center", md: "left" }, // Center-align text on small screens
        }}
      >
        <Typography
          variant="subtitle1"
          gutterBottom
          sx={{
            fontSize: { xs: "1rem", md: "1.125rem" },
            mb: 3,
            color: "#333", // Darker text color for better readability
            lineHeight: 1.8, // Increases line height for readability
          }}
        >
          Our Team of Best Homeopathy Doctors in Agra. Our practical approach in
          treating chronic and incurable cases has earned us accolades and fame
          both in Agra and across India. Dr. Daksh BHMS is an Expert Homeopathy
          Doctor in Agra. He treats his patients with great efficiency using a
          scientific approach.
        </Typography>
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontSize: { xs: "1.75rem", md: "2.25rem" },
            fontWeight: "bold",
            mb: 3,
            color: "#006400", // Dark green color for emphasis
          }}
        >
          Our Vision
        </Typography>
        <Typography
          variant="subtitle1"
          gutterBottom
          sx={{
            fontSize: { xs: "1rem", md: "1.125rem" },
            color: "#555", // Slightly lighter text color
            lineHeight: 1.8, // Increases line height for readability
            fontStyle: "italic", // Italicize for emphasis
          }}
        >
          “To relieve the suffering of patients who come to us in the shortest
          possible time.”
        </Typography>
      </Box>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src="https://i.pinimg.com/736x/f5/dc/71/f5dc71d6eb3ebbf897f312b10a1ba3d3.jpg"
          alt="Our Vision"
          style={{
            width: "100%",
            maxWidth: "450px", // Adjusted max width for balance
            height: "auto",
            borderRadius: "12px", // Rounded corners
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Subtle shadow
          }}
        />
      </Box>
    </Box>
  );
};

export default OurVision;
