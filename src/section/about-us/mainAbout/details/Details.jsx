import { Box, Typography } from "@mui/material";
import React, { useState, useEffect, useRef } from "react";

const data = [
  {
    title: 10,
    subtitle: "Years of Experience",
  },
  {
    title: 20,
    subtitle: "Best of Team",
  },
  {
    title: 500,
    subtitle: "Happy Clients",
  },
];

const Details = () => {
  const [counts, setCounts] = useState(data.map(() => 0)); // Initialize counts as 0
  const [hasRendered, setHasRendered] = useState(false); // Track if the component is in view
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setHasRendered(true); // Set to true when the component enters the viewport
          observer.unobserve(containerRef.current); // Stop observing once in view
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current); // Cleanup observer
      }
    };
  }, []);

  useEffect(() => {
    if (hasRendered) {
      // Only increment counts if the component has been rendered (i.e., is in view)
      counts.forEach((count, index) => {
        const interval = setInterval(() => {
          setCounts((prevCounts) => {
            const newCounts = [...prevCounts];
            if (newCounts[index] < data[index].title) {
              newCounts[index] += 1; // Increment the count
            }
            return newCounts;
          });
        }, 50);

        // Clear interval when the title reaches its value
        return () => clearInterval(interval);
      });
    }
  }, [hasRendered]); // Dependency on hasRendered

  return (
    <Box
      ref={containerRef}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        gap: { xs: 2, md: 4 },
        background: "linear-gradient(135deg, #f8f8f8, #e0e0e0)",
        padding: { xs: 2, md: 4 },
        borderRadius: "12px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        width: "100%",
        maxWidth: "1200px",
        margin: "auto",
        height: "10rem",
        border: "1px solid #ccc",
      }}
    >
      {data.map((item, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontSize: { xs: "2rem", md: "2.5rem" },
              fontWeight: "bold",
              color: "#333",
            }}
          >
            {counts[index]}
          </Typography>
          <Typography
            variant="subtitle1"
            gutterBottom
            sx={{
              fontSize: { xs: "1rem", md: "1.25rem" },
              color: "#555",
            }}
          >
            {item.subtitle}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default Details;
