import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";


const StyledLink = styled(Link)`
color: white;
  text-decoration: none;
  padding: 10px;
  border-radius: 4px;
  font-weight: bold;
  font-size: 14px;
  margin-right: 10px; /* Espacio entre los enlaces */
  margin-bottom: 10px; /* Espacio entre los enlaces */ 
  font-family: sans-serif;

  &:hover {
    color: blue; /* Color rojo */
    background-color: #B1A8A6 ; /* Color de fondo sutil */
  }
`
 const Nav = () =>{
  return (


    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#001796" }}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: { xs: "column", sm: "row" },
            fontFamily: "sans-serif",
            flexWrap: "wrap", /* Ajuste responsive */
          }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, textAlign: { xs: "center", sm: "left" } }}
          >
            News
          </Typography>
          <div>
          <StyledLink to="/Autos">Inicio</StyledLink>
          </div>
          <div>
          <StyledLink to="/Novedades">Novedades</StyledLink>
          </div>
          <div>
          <StyledLink to="/Sobre">Sobre Nosotros</StyledLink>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Nav;
