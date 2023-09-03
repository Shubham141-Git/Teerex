import { AddShoppingCartOutlined } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@mui/material";
import React from "react";
import "./cards.css";

import { useState } from "react";

const Cards = ({ product, handleAddToCart }) => {
  let [button, setButton] = useState(false);

  return (
    <Card
      sx={{
        maxWidth: 345,
        borderRadius: "15px",
        mr: "10px",
        mb: "10px",
        p: "2px",
      }}
      key={product.id}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          image={product.imageURL}
          title={product.name}
          height={180}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Rs {product.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="card-actions">
        <Button
          className="card-button"
          variant="contained"
          fullWidth
          onClick={() => {
            handleAddToCart(product);
            setButton(true);
          }}
        >
          {button ? "Added" : "ADD TO CART"}
        </Button>
      </CardActions>
    </Card>
  );
};

export default Cards;
