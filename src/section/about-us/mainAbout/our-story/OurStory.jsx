import { Box, Button, Typography } from "@mui/material";
// import ourstory from "../../../../assets/our-story.jpg";

const OurStory = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row-reverse" },
        width: "80%", // Adjusted width for a better look
        margin: "auto",
        gap: 4, // Increased gap for better spacing
        alignItems: "center",
        justifyContent: "center",
        my: 6, // Added more vertical padding
        p: 4, // Added padding around the section
        backgroundColor: "#f7f7f7", // Light background color
        borderRadius: "12px", // Rounded corners
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
      }}
    >
      <Box
        sx={{
          flex: 1,
          px: 3, // Increased horizontal padding
          py: 2, // Added vertical padding
          backgroundColor: "#ffffff", // White background for the text section
          borderRadius: "8px", // Rounded corners
          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)", // Subtle shadow for text section
        }}
      >
        <Typography
          variant="h2"
          gutterBottom
          sx={{
            fontSize: { xs: "1.75rem", md: "2.5rem" }, // Adjusted font size
            fontWeight: "bold",
            mb: 3,
            textAlign: { xs: "center", md: "left" }, // Center align text on small screens
            color: "#333", // Darker text color for better readability
          }}
        >
          About Dr. Sharma Homeopathy
        </Typography>
        <Typography
          variant="subtitle1"
          gutterBottom
          sx={{
            fontSize: { xs: "1rem", md: "1.125rem" }, // Adjusted font size
            lineHeight: 1.8, // Increased line height for readability
            mb: 4,
            textAlign: { xs: "center", md: "left" }, // Center align text on small screens
            color: "#555", // Slightly lighter text color
          }}
        >
          We always try to level best to give you the perfect solution for any
          of the problems such as Head & Scalp, Eye, ENT problems, Respiratory
          Tract, Gastrointestinal, Skin and General Problems, Uro-Genital
          System, Pediatric (Child), Gynecological and Bones and Joints
          Problems, Mental & Emotional Problems.
          <br />
          So we work accordingly only to provide you the best service. We will
          always give genuine advice for each and every problem once you
          approach us.
          <br />
          We will also offer various types of treatment services at very
          reasonable rates. We possess experienced doctors, who have deep
          knowledge in the field of Homeopathy. Waiting to hear a word from you.
        </Typography>
        <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
          <Button
            variant="contained"
            color="primary"
            sx={{
              mt: 1, // Margin top for spacing
              backgroundColor: "#006400", // Custom button color
              "&:hover": {
                backgroundColor: "#004d00", // Darker shade on hover
              },
            }}
          >
            Learn More
          </Button>
        </Box>
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
          // src={ourstory}
          src="https://i.pinimg.com/564x/4f/dc/4a/4fdc4a6514cb93748e32911b95de9a67.jpg"
          alt="Our Story"
          style={{
            width: "100%",
            maxWidth: "400px", // Ensures the image doesn’t exceed 400px
            height: "auto",
            transition: "transform 0.3s ease-in-out", // Adds a transition effect
            borderRadius: "8px", // Adds rounded corners to the image
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Subtle shadow for depth
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")} // Hover effect
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")} // Reset hover effect
        />
      </Box>
    </Box>
  );
};

export default OurStory;
