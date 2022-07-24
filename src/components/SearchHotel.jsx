import React, { useState } from "react";
import { Stack, TextField, Button, InputAdornment } from "@mui/material";
import { Search, CalendarMonth } from "@mui/icons-material";
import { hotelOptions, fetchData } from "../utils/FetchData";

const SearchHotel = ({ properties, setProperties }) => {
   const [search, setSearch] = useState("");
   //    const [hotel, setHotel] = useState([]);

   const handleSearch = async () => {
      if (search) {
         const hotelData = await fetchData(
            "https://hotels4.p.rapidapi.com/properties/list",
            hotelOptions
         );
         console.log(hotelData);
      }
   };

   return (
      <Stack
         direction="row"
         position="relative"
         mt="72px"
         bgcolor="#fff"
         p="20px"
         borderRadius="10px"
         gap="10px"
      >
         <TextField
            height="76px"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Which city do you prefer"
            type="text"
            InputProps={{
               startAdornment: (
                  <InputAdornment position="start">
                     <Search />
                  </InputAdornment>
               ),
            }}
            sx={{
               input: {
                  border: "none",
                  borderRadius: "40px",
                  outline: "none",
               },
               width: "100%",
               backgroundColor: "#FFF",
               //    borderRadius: "40px",
            }}
         />
         <TextField
            height="76px"
            // onChange={e => setSearch(e.target.value.toLowerCase())}
            type="date"
            placeholder="Which city do you prefer"
            InputProps={{
               startAdornment: (
                  <InputAdornment position="start">
                     <CalendarMonth />
                  </InputAdornment>
               ),
            }}
            sx={{
               input: {
                  border: "none",
                  borderRadius: "40px",
               },
               width: "100%",
               display: { sm: "flex", xs: "none" },
               backgroundColor: "#FFF",
               //    borderRadius: "40px",
            }}
         />
         <Button
            variant="contained"
            sx={{
               bgcolor: "#c99200",
               color: "#FFF",
               textTransform: "none",
               width: "50%",
               fontSize: { lg: "20px", xs: "14px" },
               height: "56px",
            }}
            onClick={handleSearch}
         >
            Find Hotels
         </Button>
      </Stack>
   );
};

export default SearchHotel;
