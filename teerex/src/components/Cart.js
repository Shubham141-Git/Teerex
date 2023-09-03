import React from "react";
import Header from "./Header";

import { useCart } from "./CartContext";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Grid,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import "./Cart.css";
import { useState, useEffect } from "react";

const Cart = () => {
  const { cartItems, setCartItems } = useCart();
  

  const handleQuantityChange = (itemId, Quantity) => {
    if (Quantity > 0) {
      setCartItems((prevCartItems) =>
        prevCartItems.map((item) =>
          item.id === itemId ? { ...item, quantity: Quantity } : item
        )
      );
    } else {
      removeItem(itemId);
    }
  };

  const removeItem = (itemId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== itemId)
    );
  };

  const total = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <>
      <Header />
      <div className="cartHeading">
        <Typography variant="h5" ml={5} sx={{ color: "white" }}>
          Shopping Cart
        </Typography>
      </div>

      <Box mt={2} ml={5} sx={{ position: "relative", top: "8rem" }}>
        {cartItems.length === 0 ? (
          <Typography variant="body1" sx={{ color: "white" }}>
            Your cart is empty.
          </Typography>
        ) : (
          <Box mt={2}>
            <Grid container spacing={2}>
              {cartItems.map((item) => (
                <Grid item xs={12} sm={6} md={4} key={item.id}>
                  <Card
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      maxWidth: 340,
                      borderRadius: "15px",
                      mr: "10px",
                      mb: "10px",
                      p: "2px",
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={item.imageURL}
                      alt={item.title}
                      height={180}
                      sx={{ objectFit: "contain" }}
                    />
                    <CardContent sx={{ textAlign: "center", flexGrow: 1 }}>
                      <Typography variant="h6">{item.name}</Typography>
                      <Typography variant="subtitle1">
                        Price: Rs {item.price}
                      </Typography>
                    </CardContent>
                    <CardActions sx={{ justifyContent: "center" }}>
                      <Button
                        variant="contained"
                        size="small"
                        onClick={() => {
                          handleQuantityChange(item.id, item.quantity - 1);
                        }}
                      >
                        <RemoveIcon />
                      </Button>
                      <Typography variant="body1" sx={{ mx: 1 }}>
                        {item.quantity}
                      </Typography>
                      <Button
                        variant="contained"
                        size="small"
                        onClick={() => {
                          handleQuantityChange(item.id, item.quantity + 1);
                        }}
                      >
                        <AddIcon />
                      </Button>
                    </CardActions>
                    <CardActions sx={{ justifyContent: "center" }}>
                      <Button
                        variant="contained"
                        startIcon={<DeleteIcon />}
                        onClick={() => removeItem(item.id)}
                      >
                        Delete
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}
        <Box mt={2} p={5}>
          <Typography variant="h6" sx={{ color: "white" }}>
            Total Amount: Rs {total}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Cart;
