import { Box, Button, Typography } from "@mui/material";
import aboutUs from "../../assets/about-us.jpg";

const AboutUs = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        width: { xs: "90%", md: "70%" },
        margin: "auto",
        alignItems: "center",
        gap: { xs: 4, md: 6 },
      }}
    >
      <Box sx={{ flex: 1 }}>
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
            fontWeight: "bold",
            marginBottom: "1.5rem",
          }}
        >
          About Us
        </Typography>
        <Typography
          variant="subtitle1"
          gutterBottom
          sx={{
            fontSize: { xs: "1rem", sm: "1.125rem", md: "1.25rem" },
            lineHeight: 1.7,
            marginBottom: "1.5rem",
          }}
        >
          Welcome to Healing Hands Homoeopathy, where we offer top-quality
          homeopathic treatment in Agra and beyond. Our dedicated team of
          experts provides personalized care and innovative solutions for
          optimal health and wellness. With a focus on holistic healing and
          empowering our patients, we strive to deliver world-class homeopathic
          treatment tailored to your unique needs. Experience the difference at
          Healing Hands Homoeopathy today.
        </Typography>
        <Button
          variant="contained"
          sx={{
            padding: { xs: "0.5rem 1rem", sm: "0.75rem 1.5rem" },
            fontSize: { xs: "0.875rem", sm: "1rem" },
          }}
        >
          See more
        </Button>
      </Box>
      <Box sx={{ flex: 1, textAlign: "center" }}>
        <img
          src={aboutUs}
          alt="About Us"
          style={{
            width: "100%",
            maxHeight: "400px",
            objectFit: "cover",
            borderRadius: "8px",
          }}
        />
      </Box>
    </Box>
  );
};

export default AboutUs;
