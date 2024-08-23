import { Box, Typography } from "@mui/material";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import ContactForm from "./ContactForm";

const data = [
  {
    icon: <LocationOnIcon />,
    title: "Arjun Nagar Tiraha, Kheria Airport road, Agra up",
  },
  {
    icon: <CallIcon />,
    title: "+91 9675141090",
  },
  {
    icon: <EmailIcon />,
    title: "drsharmashomeopathy@gmail.com",
  },
];

const ContactSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column-reverse", md: "row" },
        width: "80%",
        margin: "auto",
        padding: { xs: "2rem", md: "4rem" },
        gap: { xs: "2rem", md: "4rem" },
      }}
    >
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <Typography variant="h3" gutterBottom>
          Let's Get in Touch
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {data.map((item, index) => {
            const { icon, title } = item;
            return (
              <Box key={index} sx={{ display: "flex", alignItems: "center", gap: "0.7rem" }}>
                {icon}
                <Typography variant="subtitle2">
                  {title}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Box>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ContactForm />
      </Box>
    </Box>
  );
};

export default ContactSection;
