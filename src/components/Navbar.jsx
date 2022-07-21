import React, { useState } from "react";
import { Stack, Typography, IconButton } from "@mui/material";
import {
   Menu,
   Home,
   Apartment,
   Contacts,
   MiscellaneousServices,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

import Sidebar from "./Sidebar";

const Navbar = () => {
   const [showSidebar, setShowSidebar] = useState(false);

   const links = [
      {
         id: "0",
         name: "Home",
         path: "/",
         icons: <Home />,
      },
      {
         id: "1",
         name: "Facilities",
         path: "/facilities",
         icons: <MiscellaneousServices />,
      },
      {
         id: "2",
         name: "Rooms",
         path: "/rooms",
         icons: <Apartment />,
      },
      {
         id: "3",
         name: "Contact Us",
         path: "/contact",
         icons: <Contacts />,
      },
   ];

   const close = () => {
      setShowSidebar(false);
   };

   return (
      <Stack
         direction="row"
         justifyContent="space-between"
         height="60px"
         alignItems="center"
      >
         <Typography
            className="headfont"
            fontFamily="none"
            variant="h1"
            fontWeight="700"
            letterSpacing="1.5px"
            color="#c99200"
            sx={{ fontSize: { sm: "20px", xs: "16px" } }}
         >
            Hotel Lunar
         </Typography>
         <IconButton color="warning">
            <Menu
               onClick={() => {
                  setShowSidebar(true);
               }}
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
               gap: { lg: "40px", sm: "20px" },
               display: { xs: "none", sm: "flex" },
            }}
         >
            {links.map(link => (
               <Link className="textfont" to={link.path} key={link.id}>
                  {link.name}
               </Link>
            ))}
         </Stack>
         <Sidebar close={close} links={links} showMenu={showSidebar} />
      </Stack>
   );
};

export default Navbar;
