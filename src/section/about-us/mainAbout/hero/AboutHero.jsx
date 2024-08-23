import { Box, Typography } from "@mui/material";
import aboutHero from "../../../../assets/about.jpg";

const AboutHero = () => {
  return (
    <Box
      sx={{
        position: "relative",
        textAlign: "center",
        color: "white",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <img
        src={aboutHero}
        alt="About Us"
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
          About Us
        </Typography>
      </Box>
    </Box>
  );
};

export default AboutHero;
