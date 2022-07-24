import React, { useState } from "react";
import { Stack, Typography, IconButton, Box } from "@mui/material";
import {
   Menu,
   Home,
   Apartment,
   Download,
   MiscellaneousServices,
   AccountCircle,
   Contacts,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

import Sidebar from "./Sidebar";

const Navbar = () => {
   const [showSidebar, setShowSidebar] = useState(false);
   const [showDropDown, setShowDropDown] = useState(false);

   const dropLinks = [
      {
         id: "0",
         name: "Sign Up",
         path: "/",
      },
      {
         id: "1",
         name: "Login",
         path: "/",
      },
      {
         id: "2",
         name: "Help Center",
         path: "/",
      },
   ];

   const links = [
      {
         id: "0",
         name: "Find a Property",
         path: "/",
         icons: <Home />,
      },
      {
         id: "1",
         name: "Blogs",
         path: "/facilities",
         icons: <MiscellaneousServices />,
      },
      {
         id: "2",
         name: "Contacts",
         path: "/rooms",
         icons: <Contacts />,
      },
   ];

   const DropDown = () => {
      return (
         <Box className="drop-down">
            {dropLinks.map(link => (
               <Link className="links" to={link.path} key={link.id}>
                  {link.name}
               </Link>
            ))}
         </Box>
      );
   };

   const close = () => {
      setShowSidebar(false);
   };

   return (
      <Stack
         direction="row"
         justifyContent="space-between"
         height="80px"
         alignItems="center"
         sx={{ fontSize: { xs: "14px", lg: "16px" } }}
      >
         <Typography
            className="headfont"
            variant="h1"
            fontWeight="700"
            letterSpacing="1.5px"
            color="#c99200"
            sx={{ fontSize: { sm: "24px", xs: "20px" } }}
         >
            Hotel Lunar
         </Typography>
         <IconButton
            color="warning"
            sx={{
               display: { xs: "block", sm: "none" },
            }}
            onClick={() => {
               setShowSidebar(true);
            }}
         >
            <Menu
               sx={{
                  display: { xs: "block", sm: "none" },
                  color: "#c99200",
                  cursor: "pointer",
               }}
            />
         </IconButton>
         <Stack
            direction="row"
            sx={{
               gap: { lg: "30px", sm: "20px" },
               display: { xs: "none", md: "flex" },
               alignItems: "center",
               fontSize: { xs: "14px", lg: "16px" },
            }}
         >
            {links.map(link => (
               <Link className="textfont" to={link.path} key={link.id}>
                  {link.name}
               </Link>
            ))}
         </Stack>
         <Stack
            direction="row"
            gap="10px"
            sx={{
               display: { xs: "none", sm: "flex" },
            }}
         >
            <Typography
               sx={{
                  bgcolor: "#c99200",
                  p: "10px 25px",
                  borderRadius: "40px",
                  alignItems: "center",
                  // height: "45px",
               }}
            >
               <Link to="/" className="textfont">
                  Download App
               </Link>
            </Typography>
            <Box
               className="flex"
               onClick={() => {
                  setShowDropDown(!showDropDown);
               }}
               sx={{
                  bgcolor: "#fff",
                  p: "10px",
                  borderRadius: "40px",
                  height: "45px",
                  position: "relative",
               }}
            >
               <Menu
                  sx={{
                     color: "#c99200",
                     cursor: "pointer",
                  }}
               />
               <AccountCircle fontSize="large" />
               {showDropDown && <DropDown />}
            </Box>
         </Stack>
         <Sidebar close={close} links={links} showMenu={showSidebar} />
      </Stack>
   );
};

export default Navbar;
