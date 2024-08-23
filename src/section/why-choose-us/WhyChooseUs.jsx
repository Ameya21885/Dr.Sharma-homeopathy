import { Box, Typography } from "@mui/material";
import React from "react";
import CustomCards from "./CustomCards";

const WhyChooseUs = () => {
  return (
    <Box
      sx={{
        width: { xs: "90%", sm: "80%", md: "70%" },
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 3,
        px: 2, // Optional: add padding for small screens
        py: 4, // Optional: add padding for vertical spacing
      }}
    >
      <Box sx={{ textAlign: "center" }}>
        <Typography
          variant="h2"
          gutterBottom
          sx={{
            fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
            fontWeight: "bold",
            mb: 2, // margin-bottom
          }}
        >
          Why Choose Us
        </Typography>
        <Typography
          variant="subtitle1"
          gutterBottom
          sx={{
            fontSize: { xs: "1rem", sm: "1.125rem", md: "1.25rem" },
            lineHeight: 1.7,
          }}
        >
          Choose us for top-quality, personalized homeopathic care and holistic
          healing.
        </Typography>
      </Box>

      <CustomCards />
    </Box>
  );
};

export default WhyChooseUs;
