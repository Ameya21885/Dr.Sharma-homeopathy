import React from "react";
import ContactHero from "../section/contact-us/contacthero/ContactHero";
import ContactSection from "../section/contact-us/contact-form/ContactSection";
import { Box } from "@mui/material";

const Contact = () => {
  return (
    <div>
      <ContactHero />
      <ContactSection />
      <Box
        sx={{
          overflow: "hidden",
          height: "0",
          paddingBottom: "10%",
          position: "relative",
        }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3549.597710907353!2d77.975402875111!3d27.168944876495374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397477827465dbd7%3A0x937390b3da704919!2sArjun%20Nagar%20Airport%20Gate!5e0!3m2!1sen!2sin!4v1724410274179!5m2!1sen!2sin"
          width="100%"
          height="500"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Box>
    </div>
  );
};

export default Contact;
