import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useForm } from "@formspree/react";
import SendIcon from "@mui/icons-material/Send";

const validationSchema = yup.object({
  name: yup.string("Enter your name").required("Name is required"),
  subject: yup.string("Enter your subject").required("Name is subject"),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  project: yup
    .string("Details about the project")
    .required("Please enter the details about the project"),
});

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xpwarogb");

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      project: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });
  return (
    <Box>
      <Typography variant="h3" gutterBottom>
        Leave a message
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        Transform your health with Healing Hands Homoeopathy. Contact us today!
      </Typography>
      <Box>
        {state.succeeded ? (
          <Typography
            variant="h6"
            sx={{ textAlign: "center", marginTop: "2rem" }}
          >
            Thanks for reaching out! Ill get back to you soon.
          </Typography>
        ) : (
          <Box
            component="form"
            onSubmit={formik.handleSubmit}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
              width: { xs: "100%", sm: "80%", md: "70%" },
            }}
          >
            <TextField
              label="Name"
              id="name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
              placeholder="Insert your name"
              variant="outlined"
              size="small"
              fullWidth
              required
              sx={{ fontFamily: "Roboto, sans-serif" }}
            />
            <TextField
              label="Email"
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              placeholder="Insert your email"
              variant="outlined"
              size="small"
              fullWidth
              required
              sx={{ fontFamily: "Roboto, sans-serif" }}
            />
            <TextField
              label="Subject"
              id="subject"
              name="subject"
              value={formik.values.subject}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.subject && Boolean(formik.errors.subject)}
              helperText={formik.touched.subject && formik.errors.subject}
              placeholder="Insert your subject"
              variant="outlined"
              size="small"
              fullWidth
              required
              sx={{ fontFamily: "Roboto, sans-serif" }}
            />
            <TextField
              label="Project"
              id="project"
              name="project"
              value={formik.values.project}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.project && Boolean(formik.errors.project)}
              helperText={formik.touched.project && formik.errors.project}
              placeholder="Write your project"
              variant="outlined"
              size="small"
              multiline
              fullWidth
              rows={4}
              required
              sx={{ fontFamily: "Roboto, sans-serif" }}
            />
            <Button
              type="submit"
              variant="contained"
              endIcon={<SendIcon />}
              sx={{
                width: "fit-content",
                textTransform: "none",
                fontFamily: "Roboto, sans-serif",
                padding: "0.75rem 1.5rem",
              }}
              disabled={state.submitting}
            >
              Send Message
            </Button>
          </Box>
        )}
      </Box>

    
    </Box>
  );
};

export default ContactForm;
