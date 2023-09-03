import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar sx={{ backgroundColor: "black" }}>
          <Toolbar>
            <Typography
              variant="h3"
              component="div"
              sx={{ flexGrow: 1, p: 0.5 }}
            >
              Teerex
            </Typography>
            <Link to="/">
              <Button
                color="inherit"
                sx={{
                  display: { xs: "none", sm: "block" },
                  p: 0.5,
                  mr: 2,
                  color: "white",
                }}
              >
                Products
              </Button>
            </Link>

            <Link to="/cart">
              <Button sx={{ color: "white" }}>
                <ShoppingCartOutlinedIcon />
              </Button>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Header;
