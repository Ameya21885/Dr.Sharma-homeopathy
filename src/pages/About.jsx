import React from "react";
import AboutHero from "../section/about-us/mainAbout/hero/AboutHero";
import OurStory from "../section/about-us/mainAbout/our-story/OurStory";
import Details from "../section/about-us/mainAbout/details/Details";
import ReviewCards from "../section/about-us/mainAbout/review/ReviewCards";
import { Box } from "@mui/material";
import OurVision from "../section/about-us/mainAbout/our-vision/OurVision";

const About = () => {
  return (
    <Box>
      <Box>
        <AboutHero />
      </Box>
      <Box
        sx={{
          py: { xs: 2, sm: 4, md: 6 },
        }}
      >
        <OurStory />
      </Box>
      <Box
        sx={{
          py: { xs: 2, sm: 4, md: 6 },
        }}
      >
        <OurVision />
      </Box>
     
      <Box
        sx={{
          py: { xs: 2, sm: 4, md: 6 },
        }}
      >
        <Details />
      </Box>
      <Box
        sx={{
          py: { xs: 2, sm: 4, md: 6 },
        }}
      >
      
        <ReviewCards />
      </Box>
    </Box>
  );
};

export default About;
