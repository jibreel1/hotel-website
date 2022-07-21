import React from "react";
import heroImg from "../assets/hero1.png";
import { Typography, Box, Button } from "@mui/material";
import { CalendarMonth, KeyboardArrowDown } from "@mui/icons-material";

const Hero = () => {
   return (
      <div>
         <div>
            <img className="hero" src={heroImg} alt="Hero" loading="lazy" />
            <div className="overlay"></div>
         </div>
         <Box
            sx={{
               width: { xs: "100%", md: "600px", lg: "900px" },
               textAlign: { xs: "center", sm: "left" },
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
            <Button
               variant="contained"
               sx={{ bgcolor: "#c99200", mt: "30px", gap: "10px" }}
            >
               <CalendarMonth fontSize="small" />
               Book Now
            </Button>
         </Box>
         <Box
            sx={{
               textAlign: "center",
               mt: { xs: "25px", sm: "70px", lg: "50px" },
            }}
         >
            <Typography
               variant="body1"
               component="p"
               fontSize="14px"
               className="textfont"
               mb={2}
            >
               Scroll
            </Typography>
            <KeyboardArrowDown
               onClick={() => {
                  window.scrollTo({ bottom: 10, behavior: "smooth" });
               }}
               fontSize="large"
               sx={{
                  color: "#fff",
                  cursor: "pointer",
                  bgcolor: "#c99200",
                  p: "5px",
                  borderRadius: "50%",
                  alignItems: "center",
               }}
            />
         </Box>
      </div>
   );
};

export default Hero;
