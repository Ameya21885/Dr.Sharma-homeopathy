import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const GetInTouch = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/about-us");
    window.scrollTo(0, 0);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        px: { xs: 2, sm: 4, md: 6 },
        py: { xs: 4, sm: 6, md: 8 },
        backgroundColor: "#f9f9f9",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Typography
        variant="h3"
        gutterBottom
        sx={{
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 700,
          color: "#333",
          mb: 2,
        }}
      >
        Welcome to our Homeopathy Clinic
      </Typography>
      <Typography
        variant="h5"
        gutterBottom
        sx={{
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 500,
          color: "#555",
          mb: 2,
        }}
      >
        We’ve built a long-standing relationship based on trust
      </Typography>
      <Typography
        variant="subtitle2"
        gutterBottom
        sx={{
          fontFamily: "'Roboto', sans-serif",
          fontWeight: 400,
          color: "#777",
          mb: 3,
          maxWidth: "600px",
        }}
      >
        Among the finest Homeopathic Doctors in the city, Dr. DAKSH Homeo Clinic
        in Chhipitola, Agra is known for offering excellent patient care.
      </Typography>
      <Button
        variant="contained"
        onClick={handleClick}
        sx={{
          backgroundColor: "#1976d2",
          color: "#fff",
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 600,
          px: 4,
          py: 1.5,
          borderRadius: "20px",
          "&:hover": {
            backgroundColor: "#1565c0",
          },
        }}
      >
        Read More
      </Button>
    </Box>
  );
};

export default GetInTouch;
