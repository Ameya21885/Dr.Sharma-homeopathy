import { Box, Typography } from "@mui/material";
import React from "react";
import VedioPlayer from "./VedioPlayer";

const SeeHowWeWork = () => {
  return (
    <Box
      sx={{
        width: "70%",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 3,  // Spacing between elements
      }}
    >
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h2" gutterBottom>
          See How We Work
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Discover our personalized care and innovative solutions for optimal wellness.
        </Typography>
      </Box>
      <VedioPlayer />
    </Box>
  );
};

export default SeeHowWeWork;
