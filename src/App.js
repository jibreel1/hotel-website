import React from "react";
import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";

import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Facilities from "./pages/Facilities";
import Rooms from "./pages/Rooms";
import ContactUs from "./pages/ContactUs";

const App = () => {
   return (
      <Box sx={{ mx: { md: "150px", sm: "50px", xs: "20px" } }}>
         <Navbar />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/contact" element={<ContactUs />} />
         </Routes>
      </Box>
   );
};

export default App;
