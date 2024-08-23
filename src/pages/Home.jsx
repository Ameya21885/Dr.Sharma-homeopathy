import React from "react";
import Hero from "../section/hero/Hero";
import AboutUs from "../section/about-us/AboutUs";
import GetInTouch from "../section/get-in-touch/GetInTouch";
import WhyChooseUs from "../section/why-choose-us/WhyChooseUs";
import SeeHowWeWork from "../section/see-how-we-work/SeeHowWeWork";
import { Box } from "@mui/material";

const Home = () => {
  return (
    <Box>
      <Box>
        <Hero />
      </Box>
      <Box
        sx={{
          py: { xs: 2, sm: 4, md: 6 },
        }}
      >
        <AboutUs />
      </Box>
      <Box
        sx={{
          py: { xs: 2, sm: 4, md: 6 },
        }}
      >
        <GetInTouch />
      </Box>
      <Box
        sx={{
          py: { xs: 2, sm: 4, md: 6 },
        }}
      >
        <WhyChooseUs />
      </Box>
      <Box
        sx={{
          py: { xs: 2, sm: 4, md: 6 },
        }}
      >
        <SeeHowWeWork />
      </Box>
    </Box>
  );
};

export default Home;
