import { Box, Typography } from "@mui/material";
import React from "react";

const data = [
  {
    image:
      "https://drdaksh.com/wp-content/uploads/2020/09/front_pg_ailment1.png",
    title: "Hair Loss",
  },
  {
    image:
      "https://drdaksh.com/wp-content/uploads/2020/09/front_pg_ailment2.png",
    title: "Skin Disorders",
  },
  {
    image:
      "https://drdaksh.com/wp-content/uploads/2020/09/front_pg_ailment3.png",
    title: "PCOS",
  },
  {
    image:
      "https://drdaksh.com/wp-content/uploads/2020/09/front_pg_ailment4.png",
    title: "Migraine",
  },
  {
    image:
      "https://drdaksh.com/wp-content/uploads/2020/09/front_pg_ailment5.png",
    title: "Thyroid Disorder",
  },
  {
    image:
      "https://drdaksh.com/wp-content/uploads/2020/09/front_pg_ailment6.png",
    title: "Psoriasis",
  },
  {
    image:
      "https://drdaksh.com/wp-content/uploads/2020/09/front_pg_ailment7.png",
    title: "Vitiligo",
  },
  {
    image:
      "https://drdaksh.com/wp-content/uploads/2020/09/front_pg_ailment8.png",
    title: "Depression",
  },
  {
    image:
      "https://drdaksh.com/wp-content/uploads/2020/09/front_pg_ailment9.png",
    title: "Respiratory Ailments",
  },
  {
    image:
      "https://drdaksh.com/wp-content/uploads/2020/09/front_pg_ailment10.png",
    title: "Child Health",
  },
];

const AlimentsTreated = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        px: { xs: 2, sm: 4, md: 6 },
        py: { xs: 4, sm: 6, md: 8 },
        backgroundColor: "#f9f9f9",
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 700,
          color: "#333",
          mb: 4,
        }}
      >
        100+ Aliments Treated
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "repeat(2, 1fr)", sm: "repeat(3, 1fr)", md: "repeat(5, 1fr)" },
          gap: 2,
          justifyContent: "center",
        }}
      >
        {data.map((item, index) => {
          const { image, title } = item;
          return (
            <Box
              key={index}
              sx={{
                textAlign: "center",
                backgroundColor: "#fff",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                p: 2,
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <img
                src={image}
                alt={title}
                style={{
                  borderRadius: "8px",
                }}
              />
              <Typography
                variant="subtitle1"
                gutterBottom
                sx={{
                  mt: 2,
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 500,
                  color: "#555",
                }}
              >
                {title}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default AlimentsTreated;
