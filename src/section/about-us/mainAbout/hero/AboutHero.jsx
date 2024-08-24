import { Box, Typography } from "@mui/material";
// import aboutHero from "../../../../assets/about.jpg";

const AboutHero = () => {
  return (
    <Box
      sx={{
        position: "relative",
        textAlign: "left", // Align text to the left
        color: "white",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <img
        // src={aboutHero}
        src="https://i.pinimg.com/564x/70/03/f1/7003f188018f91b100787a94cf188938.jpg"
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
          bottom: 0, // Position at the bottom
          left: 0,   // Align to the left
          width: "100%", // Full width of the image
          padding: 2,   // Padding for better spacing
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background for readability
        }}
      >
        <Typography
          variant="h2"
          gutterBottom
          sx={{
            fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
            fontWeight: "bold",
            mb: 2,
            textAlign: "left", // Align text to the left within the Box
          }}
        >
          About Us
        </Typography>
      </Box>
    </Box>
  );
};

export default AboutHero;
