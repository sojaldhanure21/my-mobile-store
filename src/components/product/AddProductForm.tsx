// src/components/admin/ProductForm.tsx
import React, { useState, useEffect } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";

interface Product {
  id?: number;
  title: string;
  description: string;
  price: number;
  category: string;
}

interface ProductFormProps {
  product: Product | null;
  onSave: (product: Product) => void;
  onCancel: () => void;
}

const ProductForm: React.FC<ProductFormProps> = ({
  product,
  onSave,
  onCancel,
}) => {
  const [formState, setFormState] = useState<Product>({
    title: "",
    description: "",
    price: 0,
    category: "",
  });

  useEffect(() => {
    if (product) setFormState(product);
  }, [product]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: name === "price" ? +value : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formState);
  };

  return (
    <Box component="form" className="product-form" onSubmit={handleSubmit}>
      <Typography variant="h6" mb={2}>
        {product ? "Edit Product" : "Add New Product"}
      </Typography>
      <TextField
        label="Title"
        name="title"
        fullWidth
        value={formState.title}
        onChange={handleChange}
        margin="normal"
        required
      />
      <TextField
        label="Description"
        name="description"
        fullWidth
        multiline
        rows={3}
        value={formState.description}
        onChange={handleChange}
        margin="normal"
        required
      />
      <TextField
        label="Price"
        name="price"
        type="number"
        fullWidth
        value={formState.price}
        onChange={handleChange}
        margin="normal"
        required
      />
      <TextField
        label="Category"
        name="category"
        fullWidth
        value={formState.category}
        onChange={handleChange}
        margin="normal"
        required
      />
      <Box mt={2} display="flex" gap={2}>
        <Button type="submit" variant="contained" color="primary">
          Save
        </Button>
        <Button variant="outlined" onClick={onCancel}>
          Cancel
        </Button>
      </Box>
    </Box>
  );
};

export default ProductForm;
