// src/components/admin/ProductList.tsx
import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
} from "@mui/material";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
}

interface ProductListProps {
  products: Product[];
  onEdit: (product: Product) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, onEdit }) => {
  return (
    <Grid container spacing={3} mt={4}>
      {products.map((product) => (
        <Grid key={product.id}>
          <Card className="admin-product-card">
            <CardContent>
              <Typography variant="h6">{product.title}</Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                {product.category}
              </Typography>
              <Typography variant="body1">₹{product.price}</Typography>
              <Typography variant="body2" className="truncate">
                {product.description}
              </Typography>
              <Box mt={2}>
                <Button variant="outlined" onClick={() => onEdit(product)}>
                  Edit
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;
