import React from "react";
import { Stack, Box } from "@mui/material";
import { Close } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Sidebar = ({ close, links, showMenu }) => {
   return (
      <Box
         className={`sidebar ${showMenu === true ? "active" : ""}`}
         sx={{ display: { xs: "block", sm: "none" } }}
      >
         <Box className="close" onClick={close}>
            <Close sx={{ color: "#fff" }} />
         </Box>
         <Stack mt={7} gap="30px" pl={2}>
            {links.map(link => (
               <Link
                  className="textfont flex"
                  to={link.path}
                  key={link.id}
                  onClick={close}
               >
                  {link.icons}
                  {link.name}
               </Link>
            ))}
         </Stack>
      </Box>
   );
};

export default Sidebar;
