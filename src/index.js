import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

const theme = createTheme({
   typography: {
      fontFamily: "Montserrat, sans-serif",
      h1: {
         fontFamily: "Cormorant Garamond, serif",
      },
   },
});

root.render(
   <BrowserRouter>
      <ThemeProvider theme={theme}>
         <App />
      </ThemeProvider>
   </BrowserRouter>
);
