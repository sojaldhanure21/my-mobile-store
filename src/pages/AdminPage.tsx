// src/pages/AdminPage.tsx
import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import ProductList from "../components/product/ProductListAdmin";
import ProductForm from "../components/product/AddProductForm";
import { useSelector } from "react-redux";
import { RootState } from "../store/redux/store";

const AdminProfilePage = () => {
  const productCartApiRes = useSelector(
    (state: RootState) => state.productsStates?.productsApiData
  );
  const productListArry: any[] =
    productCartApiRes.data?.products &&
    productCartApiRes.data.products.length < 10
      ? productCartApiRes.data.products
      : [];

  const [editingProduct, setEditingProduct] = useState(null);
  const [productList, setProductList]: any = useState(productListArry);
  const [formOpen, setFormOpen] = useState(false);

  const handleAddClick = () => {
    setEditingProduct(null);
    setFormOpen(true);
  };

  const handleEditClick = (product: any) => {
    setEditingProduct(product);
    setFormOpen(true);
  };

  const handleFormSave = (product: any) => {
    if (product.id) {
      setProductList((prev: any) =>
        prev.map((p: any) => (p.id === product.id ? product : p))
      );
    } else {
      product.id = Date.now();
      setProductList((prev: any) => [...prev, product]);
    }
    setFormOpen(false);
  };

  return (
    <Box className="admin-page" p={4}>
      <Typography variant="h4" className="admin-title" mb={3}>
        Admin Dashboard
      </Typography>
      <Button variant="contained" color="primary" onClick={handleAddClick}>
        Add New Product
      </Button>
      <ProductList products={productList} onEdit={handleEditClick} />
      {formOpen && (
        <ProductForm
          product={editingProduct}
          onSave={handleFormSave}
          onCancel={() => setFormOpen(false)}
        />
      )}
    </Box>
  );
};

export default AdminProfilePage;
