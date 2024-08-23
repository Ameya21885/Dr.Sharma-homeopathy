import { useState } from "react";
import { AppBar, Box, IconButton, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import ContactsIcon from "@mui/icons-material/Contacts";

const pages = [
  {
    title: "Home",
    link: "/",
    icon: <HomeIcon />,
  },
  {
    title: "About",
    link: "about-us",
    icon: <LocalHospitalIcon />,
  },
  {
    title: "Contact",
    link: "contact-us",
    icon: <ContactsIcon />,
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: "100%" }} role="presentation">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px 20px",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            color: "inherit",
            textDecoration: "none",
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          Dr.Sharma
        </Typography>
        <IconButton onClick={toggleDrawer(false)} aria-label="close navigation menu">
          <CloseIcon
            sx={{
              border: "2px solid black",
              borderRadius: "20px",
              color: "black",
            }}
          />
        </IconButton>
      </Box>

      <List>
        {pages.map(({ title, link, icon }, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton
              component={Link}
              to={link}
              onClick={toggleDrawer(false)}
              sx={{
                "&:hover": {
                  backgroundColor: "#f5f5f5",
                },
              }}
            >
              <ListItemIcon sx={{ color: "black" }}>{icon}</ListItemIcon>
              <ListItemText
                primary={title}
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 500,
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          width: "100%",
          height: { xs: "4rem", sm: "4.3rem" },
          display: "flex",
          justifyContent: "center",
          backgroundColor: "white",
          color: "black",
          boxShadow: "none",
          borderBottom: "1px solid #e0e0e0",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            px: { xs: 2, sm: 3, md: 5 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: { xs: ".6rem", md: "4rem" },
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: "1rem", sm: "1.25rem" },
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600,
              }}
            >
               Dr.Sharma
            </Typography>

            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: { md: "1.5rem" },
              }}
            >
              {pages.map((item, index) => (
                <Typography
                  key={index}
                  component={Link}
                  to={item.link}
                  sx={{
                    textDecoration: "none",
                    color: "black",
                    fontSize: { md: "1rem" },
                    transition: "color 0.3s ease",
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 500,
                    "&:hover": {
                      color: "#1976d2",
                    },
                  }}
                >
                  {item.title}
                </Typography>
              ))}
            </Box>
          </Box>

          <Box sx={{ display: "flex", gap: { xs: "0.5rem", sm: "1rem" } }}>
            <Box sx={{ display: { md: "none" } }}>
              <IconButton
                onClick={toggleDrawer(true)}
                aria-label="open navigation menu"
              >
                <MenuIcon sx={{ color: "black" }} />
              </IconButton>
              <Drawer
                open={open}
                onClose={toggleDrawer(false)}
                anchor="right"
                PaperProps={{ sx: { width: "100%" } }}
              >
                {DrawerList}
              </Drawer>
            </Box>
          </Box>
        </Box>
      </AppBar>
    </Box>
  );
};

export default Navbar;
