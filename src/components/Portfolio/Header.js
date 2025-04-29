import { Button, Stack } from "@mui/material";
import { useState } from "react";
import React from "react";
import { Tabs, Tab, Box, Typography, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";

//Making the menu responsive
import { Drawer, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu"; // <-- hamburger icon

import { Dialog, DialogContent } from "@mui/material";

const MySvgIcon = () => {
  const theme = useTheme();

  return (
    <svg
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      fill="#000000"
      stroke="#000000"
      className="icon"
      style={{ width: 64, height: 64 }}
    >
      <g id="SVGRepo_iconCarrier">
        <path
          d="M854.7 828.1H169.9c-38.9 0-70.5-31.6-70.5-70.5v-499c0-38.9 31.6-70.5 70.5-70.5h684.7c38.9 0 70.5 31.6 70.5 70.5v499c0.1 38.9-31.5 70.5-70.4 70.5z"
          fill="#FFFFFF"
        ></path>
        <path
          d="M885.2 258.1c0-16.5-13.5-30-30-30H169.4c-16.5 0-30 13.5-30 30v120.1h745.7V258.1z m-649.7 96.1c-28.2 0-51.2-23-51.2-51.2s23-51.2 51.2-51.2 51.2 23 51.2 51.2-22.9 51.2-51.2 51.2z m281.8-6.8H374.7c-24.1 0-43.7-19.6-43.7-43.7s19.6-43.7 43.7-43.7h142.6c24.1 0 43.7 19.6 43.7 43.7s-19.6 43.7-43.7 43.7z"
          fill="#E6E6E6"
        ></path>
        <path
          d="M213.3 752.8h298.8c5.5 0 10-4.5 10-10s-4.5-10-10-10H213.3c-8.5 0-15.4-6.9-15.4-15.4V524.6c0-5.5-4.5-10-10-10s-10 4.5-10 10v192.9c0.1 19.4 15.9 35.3 35.4 35.3z"
          fill={theme.palette.secondary.main} // Use secondary color
        ></path>
        <path
          d="M235.5 271.8c-17.2 0-31.2 14-31.2 31.2s14 31.2 31.2 31.2 31.2-14 31.2-31.2-14-31.2-31.2-31.2z"
          fill="#FFFFFF"
        ></path>
        <path
          d="M235.5 251.8c-28.2 0-51.2 23-51.2 51.2s23 51.2 51.2 51.2 51.2-23 51.2-51.2-22.9-51.2-51.2-51.2z m0 82.4c-17.2 0-31.2-14-31.2-31.2s14-31.2 31.2-31.2 31.2 14 31.2 31.2-14 31.2-31.2 31.2z"
          fill={theme.palette.primary.main} // Use primary color
        ></path>
        <path
          d="M517.3 280.1H374.7c-13 0-23.7 10.6-23.7 23.7s10.6 23.7 23.7 23.7h142.6c13 0 23.7-10.6 23.7-23.7s-10.7-23.7-23.7-23.7z"
          fill="#FFFFFF"
        ></path>
        <path
          d="M517.3 260.1H374.7c-24.1 0-43.7 19.6-43.7 43.7s19.6 43.7 43.7 43.7h142.6c24.1 0 43.7-19.6 43.7-43.7s-19.6-43.7-43.7-43.7z m0 67.3H374.7c-13 0-23.7-10.6-23.7-23.7s10.6-23.7 23.7-23.7h142.6c13 0 23.7 10.6 23.7 23.7s-10.7 23.7-23.7 23.7z"
          fill={theme.palette.primary.main} // Use primary color
        ></path>
        <path
          d="M855.2 188.1H169.4c-38.6 0-70 31.4-70 70v500c0 38.6 31.4 70 70 70h685.7c38.6 0 70-31.4 70-70v-500c0.1-38.6-31.3-70-69.9-70z m30 570c0 16.5-13.5 30-30 30H169.4c-16.5 0-30-13.5-30-30V398.2h745.7v359.9z m0-379.9H139.5V258.1c0-16.5 13.5-30 30-30h685.7c16.5 0 30 13.5 30 30v120.1z"
          fill={theme.palette.primary.main} // Use primary color
        ></path>
        <path
          d="M459.9 624.6l-114.3-45.3 114.3-43.7v-46.5L296.1 560v39.5l163.8 71.2zM568.7 454.8h-34.4L475.1 702h33.8zM747.9 560.3l-164-70.9v45.8l114.4 44.5-114.4 45v46.2l164-71.4z"
          fill={theme.palette.primary.main} // Use primary color
        ></path>
      </g>
    </svg>
  );
};

{
  /* Desktop Button */
}

const BookCallButton = ({ handleClick }) => {
  return (
    <Button
      variant="contained"
      color="secondary"
      onClick={() => handleClick()}
      sx={{
        borderRadius: "20px",
        textTransform: "none",
        fontWeight: "bold",
        px: 3,
        py: 1.2,
        whiteSpace: "nowrap",
      }}
    >
      Book a Call
    </Button>
  );
};

const Header = ({ onTabChange }) => {
  const [open, setOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [value, setValue] = useState(0);

  const theme = useTheme();

  const handleBookCallDialogOpen = () => {
    setOpen(true);
  };

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
    onTabChange(sections[newValue].name);
    setDrawerOpen(false); // Close drawer if selecting from mobile
  };

  const sections = [
    { name: "About" },
    { name: "Projects" },
    { name: "Skills" },
    { name: "Live Coding" },
    { name: "Contact" },
  ];

  return (
    <>
      <Stack
        sx={{
          height: 64,
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
          px: { xs: 2, md: 4 },
        }}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        {/* Logo and Name */}
        {/* onClick={() => handleTabChange(0)} */}
        <Stack  direction="row" spacing={1} alignItems="center" className="cursor-pointer">
          <MySvgIcon />
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              color: "text.secondary",
            }}
          >
            IMANOL
          </Typography>
        </Stack>

        {/* Desktop Tabs */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            flexGrow: 1,
            justifyContent: "center",
          }}
        >
          <Tabs
            value={value}
            onChange={handleTabChange}
            centered
            textColor="inherit"
            sx={{ height: "100%" }}
          >
            {sections.map((section, index) => (
              <Tab
                key={index}
                label={section.name}
                sx={{ fontSize: "16px", minHeight: "64px" }}
              />
            ))}
          </Tabs>
        </Box>

        {/* Desktop Book a Call button */}
        <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
          <BookCallButton handleClick={handleBookCallDialogOpen} />
        </Box>

        {/* Mobile Menu Icon */}
        <IconButton
          sx={{ display: { xs: "flex", md: "none" } }}
          onClick={handleDrawerToggle}
        >
          <MenuIcon />
        </IconButton>
      </Stack>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
        <Box
          sx={{ width: 250, height: '100vh', display: 'flex', flexDirection: 'column' }}
          role="presentation"
          onClick={handleDrawerToggle}
          onKeyDown={handleDrawerToggle}
        >
          <List sx={{ flexShrink: 0 }}>
            {sections.map((section, index) => (
              <ListItem
                button
                key={section.name}
                onClick={() => handleTabChange(null, index)}
              >
                <ListItemText primary={section.name} />
              </ListItem>
            ))}
            {/* <ListItem button onClick={() => setOpen(true)}>
              <ListItemText primary="Book a Call" />
            </ListItem> */}
          </List>
          <div className="flex h-full grow-1 justify-center items-center">
            <BookCallButton handleClick={handleBookCallDialogOpen} />
          </div>
        </Box>
      </Drawer>

      {/* Dialog for "Book a Call" (same as you had) */}
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="md"
        fullWidth
      >
        <DialogContent
          sx={{
            overflow: "hidden",
            padding: 0,
            height: "600px",
          }}
        >
          <Box sx={{ width: "100%", height: "100%" }}>
            <iframe
              src="https://calendly.com/imanolcondeimanol/20min"
              width="100%"
              height="100%"
              frameBorder="0"
              title="Book a Call"
            />
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Header;
