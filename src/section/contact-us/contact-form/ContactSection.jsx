import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import ContactForm from "./ContactForm";

const data = [
  {
    icon: <LocationOnIcon sx={{ fontSize: 24 }} />,
    title: "Arjun Nagar Tiraha, Kheria Airport road, Agra up",
  },
  {
    icon: <CallIcon sx={{ fontSize: 24 }} />,
    title: "+91 9675141090",
  },
  {
    icon: <EmailIcon sx={{ fontSize: 24 }} />,
    title: "drsharmashomeopathy@gmail.com",
  },
];

const ContactSection = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column-reverse", md: "row" },
        width: "80%",
        margin: "auto",
        padding: { xs: "2rem", md: "4rem" },
        gap: { xs: "2rem", md: "4rem" },
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
        }}
      >
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            fontWeight: "bold",
            textAlign: { xs: "center", md: "left" },
            mb: "1rem",
          }}
        >
          Let's Get in Touch
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
            "& > div": {
              transition: "transform 0.3s, box-shadow 0.3s",
              borderRadius: "8px",
              backgroundColor: theme.palette.background.paper,
              padding: "1rem",
              boxShadow: theme.shadows[2],
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: theme.shadows[6],
                backgroundColor: theme.palette.grey[100],
              },
            },
          }}
        >
          {data.map((item, index) => {
            const { icon, title } = item;
            return (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                {icon}
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: "medium",
                    color: "text.secondary",
                  }}
                >
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
