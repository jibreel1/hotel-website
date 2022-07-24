import React, { useState } from "react";
import { Box } from "@mui/material";
import Hero from "../components/Hero";
import SearchHotel from "../components/SearchHotel";
// import About from "../components/About";

const Home = () => {
   const [properties, setProperties] = useState("all");
   return (
      <Box>
         <Hero />
         <SearchHotel properties={properties} setProperties={setProperties} />
         {/* <About /> */}
      </Box>
   );
};

export default Home;
