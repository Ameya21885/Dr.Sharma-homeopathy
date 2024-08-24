import React from "react";
// import contactHero from "../../../assets/contact.jpg";
import { Typography, Box } from "@mui/material";

const ContactHero = () => {
  return (
    <Box
      sx={{
        position: "relative",
        textAlign: "left", // Align text to the left
        color: "white",
        width: "100%",
        height: "auto",
        overflow: "hidden",
      }}
    >
      <img
        // src={contactHero}
        src="https://i.pinimg.com/564x/ff/7a/9b/ff7a9bcd253e5b688894821b2e7588cd.jpg"
        alt="Contact"
        style={{
          width: "100%",
          height: "auto",
          maxHeight: "300px",
          objectFit: "cover",
          objectPosition: "center",
          filter: "brightness(50%)", // Darkens the image for better text visibility
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: 0, // Position the box at the bottom
          left: 0, // Position the box to the left
          width: "100%", // Make sure the box covers the width of the image
          padding: { xs: 2, sm: 3 }, // Adjust padding as needed
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background for better text contrast
          borderTopRightRadius: 2, // Rounded top-right corner
          textAlign: "left", // Align text to the left
        }}
      >
        <Box
          sx={{
            maxWidth: { xs: "100%", sm: "90%", md: "80%" }, // Adjust max-width based on screen size
            margin: { xs: "0 auto", sm: "0" }, // Center the box horizontally on small screens
          }}
        >
          <Typography
            variant="h2"
            gutterBottom
            sx={{
              fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
              fontWeight: "bold",
              mb: 1,
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)", // Adds shadow to text for better readability
            }}
          >
            Contact
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactHero;
