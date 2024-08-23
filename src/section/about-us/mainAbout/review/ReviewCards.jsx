import { Avatar, Box, Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";

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
        width: "70%",
        margin: "auto",
        p: { xs: 2, sm: 3 }, // Padding for responsiveness
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
          Review
        </Typography>
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
                  height: "100%", // Ensure all cards have equal height
                }}
              >
                <CardContent
                  sx={{
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      mb: 2,
                      textAlign: "center", // Center text alignment
                    }}
                  >
                    {description}
                  </Typography>
                </CardContent>
                <CardContent
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    p: 2,
                  }}
                >
                  <Avatar
                    alt={name}
                    src="/static/images/avatar/1.jpg"
                    sx={{ width: 56, height: 56 }} // Consistent avatar size
                  />
                  <Box>
                    <Typography
                      variant="h6"
                      component="div"
                      sx={{
                        textAlign: "center", // Center text alignment
                      }}
                    >
                      {name}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color="text.secondary"
                      sx={{ textAlign: "center" }}
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
