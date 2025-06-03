import React from "react";
import { Card, CardContent, CardMedia } from "@mui/material";
import { Typography, Box, Chip, Rating, Button } from "@mui/material";

const ProductCard = ({ product }: any) => {
  const {
    title,
    description,
    price,
    discountPercentage,
    rating,
    brand,
    images,
    availabilityStatus,
    stock,
    tags,
    minimumOrderQuantity,
    reviews,
  } = product;

  const discountedPrice = (price - (price * discountPercentage) / 100).toFixed(
    2
  );
 
  return (
    <Card className="product-card">
      <CardMedia
        component="img"
        className="product-image"
        image={images[0]}
        alt={title}
      />
      <CardContent className="product-content">
        <Typography variant="h6" className="product-title">
          {title}
        </Typography>
        <Typography variant="body2" className="product-brand">
          Brand: {brand}
        </Typography>
        <Box className="product-rating">
          <Rating
            name="product-rating"
            value={rating}
            precision={0.5}
            readOnly
            size="small"
          />
          <Typography variant="caption">({rating.toFixed(1)})</Typography>
        </Box>
        <Typography variant="body2" className="product-description">
          {description.length > 100
            ? description.slice(0, 100) + "..."
            : description}
        </Typography>
        <Box className="product-price-box">
          <Typography variant="body1" className="product-discounted">
            ${discountedPrice}
          </Typography>
          <Typography variant="body2" className="product-original">
            ${price}
          </Typography>
          <Chip
            label={`-${discountPercentage}%`}
            color="success"
            size="small"
          />
        </Box>
        <Box className="product-tags">
          {tags.map((tag: any, i: any) => (
            <Chip key={i} label={tag} size="small" className="tag-chip" />
          ))}
        </Box>
        <Typography variant="body2" className="product-status">
          {availabilityStatus} • Stock: {stock} • Min Order:{" "}
          {minimumOrderQuantity}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          className="product-btn"
        >
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
