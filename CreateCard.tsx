import React from "react";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import MUiCardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardProps } from "../services/Declarations";

function Card({ product, onClick }: CardProps) {
  const { title, description, image, id, price } = product;

  return (
    <div
      className="card"
      style={{ margin: "0 auto", maxWidth: "300px", padding: "20px 0" }}
    >
      <MUiCardMedia component="img" height="140" image={image} alt={title} />
      <Typography gutterBottom variant="h5">
        {" "}
        {title} - ${price}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>

      <IconButton
        color="primary"
        aria-label="add to shopping cart"
        onClick={() => onClick(id)}
      >
        <AddShoppingCartIcon />
      </IconButton>
    </div>
  );
}

export default Card;
