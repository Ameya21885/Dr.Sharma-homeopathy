import { useState, useEffect } from "react";
import "./slider.css";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const sliderData = [
  {
    image: "https://i.pinimg.com/564x/c7/bf/d2/c7bfd27c5ffcad283614c8ef828ee1c0.jpg",
    heading: "Our 6 Lac Doses",
    desc: "of Homeopathy Immunity Booster Given",
  },
  {
    image: "https://i.pinimg.com/564x/bf/d8/76/bfd876ac8f67d179be3bbb13784930fa.jpg",
    heading: "Homeopathy For Skin Diseases",
    desc: "Individualized treatments for all skin problems",
  },
  {
    image: "https://i.pinimg.com/564x/7a/22/f8/7a22f8e6504a9df8595408aabc73deef.jpg",
    heading: "Hair Fall Treatment",
    desc: "at home designed and approved by trichologists",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = sliderData.length;
  const navigate = useNavigate();

  // Navigate to /contact-us and scroll to top
  const handleClick = () => {
    navigate("/contact-us");
    window.scrollTo(0, 0);
  };

  // Move to the next slide
  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };

  // Move to the previous slide
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
  };

  // Auto scroll functionality
  const autoScroll = true;
  let slideInterval;
  const intervalTime = 6000;

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    setCurrentSlide(0); // Set the initial slide
    if (autoScroll) {
      auto(); // Start auto-scrolling if enabled
    }
    return () => clearInterval(slideInterval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="slider">
      {/* Left arrow button */}
      <ChevronLeftIcon className="arrow prev" onClick={prevSlide} />
      {/* Right arrow button */}
      <ChevronRightIcon className="arrow next" onClick={nextSlide} />
      {sliderData.map((slide, index) => (
        <div
          className={index === currentSlide ? "slide current" : "slide"}
          key={index}
        >
          {index === currentSlide && (
            <div className="slide-content">
              <img src={slide.image} alt="slide" className="image" />
              <div className="content">
                <Typography variant="h4" gutterBottom sx={{ color: "#fff" }}>
                  {slide.heading}
                </Typography>
                <Typography variant="subtitle2" gutterBottom sx={{ color: "#fff" }}>
                  {slide.desc}
                </Typography>
                <hr />
                <Button
                  variant="contained"
                  size="small"
                  onClick={handleClick}
                  sx={{ backgroundColor: "#892f9e" }}
                >
                  Consult Now
                </Button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Slider;
