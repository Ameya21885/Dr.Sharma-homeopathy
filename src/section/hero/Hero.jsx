import React from "react";
import heroImg from "../../assets/hero.jpg";
import { Box, Button, Typography } from "@mui/material";

const Hero = () => {
  return (
    <Box
      sx={{
        position: "relative",
        textAlign: "center",
        color: "white",
      }}
    >
      <img
        src={heroImg}
        alt="Hero"
        style={{
          width: "100%",
          height: "auto",
          maxHeight: { xs: "20rem", md: "40rem" }, // Set responsive height
          objectFit: "cover", // Ensure the image covers the area while maintaining aspect ratio
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            fontWeight: "bold",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
            fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
          }}
        >
          Healing Hands Homeopathy: Your Path to Wellness.
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
            mt: "1.5rem",
          }}
        >
          <Button
            variant="contained"
            sx={{
              fontSize: { xs: "0.875rem", sm: "1rem" },
              padding: "0.5rem 2rem",
              borderRadius: "8px",
            }}
          >
            Offer
          </Button>
          <Button
            variant="outlined"
            sx={{
              fontSize: { xs: "0.875rem", sm: "1rem" },
              padding: "0.5rem 2rem",
              borderRadius: "8px",
            }}
          >
            Portfolio
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
