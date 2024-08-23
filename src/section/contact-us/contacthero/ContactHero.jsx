import React from "react";
import contactHero from "../../../assets/contact.jpg";
import { Typography, Box } from "@mui/material";

const ContactHero = () => {
  return (
    <Box
      sx={{
        position: "relative",
        textAlign: "center",
        color: "white",
        width: "100%",
        height: "auto",
        overflow: "hidden",
        // paddingTop: { xs: "2rem", sm: "3rem", md: "4rem", lg: "5rem" },
        paddingBottom: { xs: "2rem", sm: "3rem", md: "4rem", lg: "5rem" },
      }}
    >
      <img
        src={contactHero}
        alt="Contact"
        style={{
          width: "100%",
          height: "auto",
          maxHeight: "300px",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "20%",
          transform: "translate(-50%, -50%)",
          width: { xs: "80%", sm: "70%", md: "60%" },
          textAlign: "center",
        }}
      >
        <Typography
          variant="h2"
          gutterBottom
          sx={{
            fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
            fontWeight: "bold",
            mb: 2,
          }}
        >
          Contact
        </Typography>
      </Box>
    </Box>
  );
};

export default ContactHero;
