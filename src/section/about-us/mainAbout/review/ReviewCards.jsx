import { Avatar, Box, Card, CardContent, Grid, Typography, Paper } from "@mui/material";
import React from "react";
// import ReviewCarousel from "./ReviewCarousel";

const data = [
  {
    description:
      "I have struggled with chronic health issues for years, but Healing Hands Homoeopathy has put me on the path to recovery with personalized care and attention to detail.",
    name: "Ann Smith",
    designation: "Client",
  },
  {
    description:
      "I was skeptical at first, but now I'm a believer. Healing Hands Homoeopathy's care and results are truly amazing. Grateful for their expertise.",
    name: "Jamie G Britton",
    designation: "Client",
  },
  {
    description:
      "Healing Hands Homoeopathy changed my life. Their holistic approach and dedication helped me overcome health issues. Highly recommend for natural healthcare solutions.",
    name: "Adam S Curtis",
    designation: "Client",
  },
];

const ReviewCards = () => {
  return (
    <Box
      sx={{
        width: { xs: "90%", sm: "80%", md: "70%" },
        margin: "auto",
        p: { xs: 2, sm: 3 },
      }}
    >
      <Typography
        variant="h2"
        gutterBottom
        sx={{
          fontSize: { xs: "1.5rem", md: "2rem" },
          fontWeight: "bold",
          mb: 4,
          textAlign: "center",
          color: "primary.main", // Adding color to the heading
        }}
      >
        What Our Clients Say
      </Typography>

      {/* <ReviewCarousel/> */}
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {data.map((item, index) => {
          const { description, name, designation } = item;
          return (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  borderRadius: 2,
                  boxShadow: 3,
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.02)",
                    boxShadow: 6,
                  },
                }}
              >
                <CardContent
                  sx={{
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    textAlign: "center",
                    bgcolor: "background.paper", // Background color for card content
                    borderBottom: (theme) => `1px solid ${theme.palette.divider}`, // Border for separation
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      mb: 2,
                      fontStyle: "italic",
                      color: "text.secondary", // Slightly different color for description
                    }}
                  >
                    "{description}"
                  </Typography>
                </CardContent>
                <CardContent
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    p: 2,
                    bgcolor: "background.default", // Background color for card footer
                  }}
                >
                  <Avatar
                    alt={name}
                    src="/static/images/avatar/1.jpg"
                    sx={{ width: 56, height: 56, border: `2px solid ${theme => theme.palette.primary.main}` }}
                  />
                  <Box>
                    <Typography
                      variant="h6"
                      component="div"
                      sx={{
                        fontWeight: "bold",
                        color: "text.primary",
                      }}
                    >
                      {name}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color="text.secondary"
                    >
                      {designation}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default ReviewCards;
