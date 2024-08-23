import { Box, Button, Typography } from "@mui/material";
import ourstory from "../../../../assets/our-story.jpg";

const OurStory = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        width: "70%",
        margin: "auto",
        gap: 2, // Adds space between the sections
        alignItems: "center",
        justifyContent: "center",
        my: 4, // Adds vertical padding
      }}
    >
      <Box
        sx={{
          flex: 1,
          px: 2, // Adds horizontal padding
        }}
      >
        <Typography
          variant="h2"
          gutterBottom
          sx={{
            fontSize: { xs: "1.5rem", md: "2rem" },
            fontWeight: "bold",
            mb: 2,
          }}
        >
          Our Story
        </Typography>
        <Typography
          variant="subtitle1"
          gutterBottom
          sx={{
            fontSize: { xs: "0.875rem", md: "1rem" },
            lineHeight: 1.6,
            mb: 2,
          }}
        >
          Our story begins with a passion for holistic healing and a commitment
          to personalized care. At Healing Hands Homoeopathy, we strive to
          empower individuals to take control of their health and well-being
          through world-class homeopathic treatment. With a focus on innovative
          solutions and optimal wellness, we are dedicated to helping you
          achieve a healthier, happier life.
        </Typography>
        <Button
          variant="contained"
          sx={{
            mt: 2,
            px: 3,
            py: 1.5,
            fontSize: { xs: "0.875rem", md: "1rem" },
          }}
        >
          Contact Us
        </Button>
      </Box>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={ourstory}
          alt="Our Story"
          style={{
            width: "100%",
            maxWidth: "400px", // Ensures the image doesn’t exceed 400px
            height: "auto",
          }}
        />
      </Box>
    </Box>
  );
};

export default OurStory;
