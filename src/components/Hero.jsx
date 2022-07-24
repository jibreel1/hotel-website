import React from "react";
import heroImg from "../assets/hero1.png";
import { Typography, Box, Button } from "@mui/material";
import { CalendarMonth } from "@mui/icons-material";

const Hero = () => {
   return (
      <div>
         <img className="hero" src={heroImg} alt="Hero" loading="lazy" />
         <div className="overlay"></div>

         <Box
            sx={{
               width: "100%",
               textAlign: "center",
               alignItems: "center",
               mt: { xs: "50px", sm: "120px" },
            }}
         >
            <Typography
               variant="h5"
               className="textfont"
               sx={{ fontSize: { lg: "40px", xs: "20px" } }}
            >
               Welcome to
            </Typography>
            <Typography
               className="headfont"
               variant="h1"
               color="white"
               sx={{ fontSize: { lg: "100px", xs: "80px" } }}
            >
               Hotel Lunar
            </Typography>
            <Typography
               variant="body1"
               component="p"
               fontSize="20px"
               className="textfont"
            >
               Book your stay and enjoy Luxury redefined at the most affordable
               rates.
            </Typography>
            {/* <Button
               variant="contained"
               sx={{ bgcolor: "#c99200", mt: "30px", gap: "10px" }}
            >
               <CalendarMonth fontSize="small" />
               Book Now
            </Button> */}
         </Box>
      </div>
   );
};

export default Hero;
