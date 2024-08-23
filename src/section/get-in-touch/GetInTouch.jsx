import { Box, Button, Typography } from "@mui/material";
import getintouch from "../../assets/get-in-touch.jpg";

const GetInTouch = () => {
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
        src={getintouch}
        alt="Get in Touch"
        style={{
          width: "100%",
          height: "20rem",
          maxHeight: "500px",
          objectFit: "cover",
          objectPosition: "center",
          "@media (min-width: 600px)": {
            height: "auto", // Default height for larger screens
          },
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: "80%", sm: "70%", md: "60%" },
          p: 2,
          textAlign: "center",
        }}
      >
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
            fontWeight: "bold",
            mb: 2,
          }}
        >
          Get in Touch
        </Typography>
        <Typography
          variant="subtitle1"
          gutterBottom
          sx={{
            fontSize: { xs: "1rem", sm: "1.125rem", md: "1.25rem" },
            lineHeight: 1.7,
            mb: 2,
          }}
        >
          Contact us today to schedule your consultation and start your journey
          to optimal health and wellness. Your well-being is our priority at
          Healing Hands Homoeopathy.
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 2,
          }}
        >
          <Button
            variant="contained"
            sx={{
              px: 3,
              py: 1.5,
              fontSize: { xs: "0.875rem", sm: "1rem" },
            }}
          >
            Contact Us
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default GetInTouch;
