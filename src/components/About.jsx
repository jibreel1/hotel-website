import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import room from "../assets/room1.png";

const About = () => {
   return (
      <Stack
         mt={10}
         gap="25px"
         sx={{ flexDirection: { xs: "column", sm: "row" } }}
      >
         <Box>
            <Typography
               variant="h1"
               className="headfont"
               fontWeight="700"
               letterSpacing="1.5px"
               color="#c99200"
               fontSize="20px"
               mb={3}
            >
               About Us
            </Typography>
            <Typography
               variant="body1"
               sx={{ width: { xs: "100%", sm: "200px", md: "300px" } }}
            >
               Ladies and gentlemen, history keeps repeating itself but doesn't
               teach us any lessons. 'Never again' has turned into 'again and
               again and again.' So today, ladies and gentlemen, take Hotel
               Lunar as a wake-up call and a message to be our messenger that
               people are the ones who can change what they want to change.
            </Typography>
         </Box>
         <Box>
            <img src={room} alt="" className="width" loading="lazy" />
         </Box>
      </Stack>
   );
};

export default About;
