import { Box, Typography } from "@mui/material";
import React from "react";

const data = [
  {
    title: 10,
    subtitle: "Years of Experience",
  },
  {
    title: 20,
    subtitle: "Best of Team",
  },
  {
    title: 500,
    subtitle: "Happy Clients",
  },
];

const Details = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: { xs: 2, md: 3 }, // Adjust gap for different screen sizes
        backgroundColor: "white",
        width: "100%",
        height: "8rem",
        border: "2px solid black",
       
      }}
    >
      {data.map((item, index) => {
        const { title, subtitle } = item;
        return (
          <Box
            key={index}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                fontSize: { xs: "1.5rem", md: "2rem" }, // Responsive font size
                fontWeight: "bold",
              }}
            >
              {title}
            </Typography>
            <Typography
              variant="subtitle1"
              gutterBottom
              sx={{
                fontSize: { xs: "0.875rem", md: "1rem" }, // Responsive font size
                textAlign: "center",
              }}
            >
              {subtitle}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
};

export default Details;
