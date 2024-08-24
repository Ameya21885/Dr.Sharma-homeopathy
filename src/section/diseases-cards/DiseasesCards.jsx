import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const data = [
  {
    img: "https://drdaksh.com/wp-content/uploads/2020/08/home_ail_thumb_4.jpg",
    title: "HOMEOPATHY",
    subtitle:
      "An AYUSH Ministry recommended Immunity Boosting Treatment to Fight COVID-19",
  },
  {
    img: "https://drdaksh.com/wp-content/uploads/2020/08/home_ail_thumb_3.jpg",
    title: "RESPIRATORY PROBLEMS",
    subtitle:
      "Your each breath is important to us. Treat all your respiratory problems with Safe and Effective Homeopathic Medicines.",
  },
  {
    img: "https://drdaksh.com/wp-content/uploads/2020/08/home_ail_thumb_1.jpg",
    title: "CHILD IMMUNITY",
    subtitle:
      "Build your Childs Immunity with Homeopathy. Its is a Natural Booster that will protect your child from all illnesses and viruses.",
  },
  {
    img: "https://drdaksh.com/wp-content/uploads/2020/08/home_ail_thumb_2.jpg",
    title: "IMMUNITY BUILDING",
    subtitle:
      "Its time to put your immunity on priority. Safeguard your health without any side effects with Natural & Effective homeopathic medicines.",
  },
];

const DiseasesCards = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/contact-us");
    window.scrollTo(0, 0);
  };

  return (
    <div style={{ width: "80%", margin: "auto" }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {data.map((item, index) => {
          const { img, title, subtitle } = item;
          return (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition:
                    "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: 6,
                  },
                }}
              >
                <CardMedia
                  sx={{
                    height: 140,
                    transition: "transform 0.3s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.1)",
                    },
                  }}
                  image={img}
                  title={title}
                />
                <CardContent sx={{ paddingBottom: 0 }}>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    sx={{
                      fontWeight: "bold",
                      transition: "color 0.3s ease-in-out",
                      "&:hover": {
                        color: "primary.main",
                      },
                    }}
                  >
                    {title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      transition: "color 0.3s ease-in-out",
                      "&:hover": {
                        color: "text.primary",
                      },
                    }}
                  >
                    {subtitle}
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{ justifyContent: "center", paddingTop: 0, paddingBottom: 2 }}
                >
                  <Button
                    size="small"
                    onClick={handleButtonClick}
                    sx={{
                      transition:
                        "background-color 0.3s ease-in-out, color 0.3s ease-in-out",
                      "&:hover": {
                        backgroundColor: "primary.main",
                        color: "white",
                      },
                    }}
                  >
                    More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default DiseasesCards;
