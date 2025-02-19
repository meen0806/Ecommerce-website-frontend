import React, { Suspense, useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import Product from "../../All_Json/allProducts.json";
import { Box } from "@mui/material";
import ProductCards from "../../common/Card/productsCard";
import { useNavigate } from "react-router";

export const AllProductsCards=({ setCartItemCount })=> {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const pageCount = Math.ceil(Product.length / itemsPerPage); // 4

  const currentItems = Product.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };
  const handleProductClick = (item) => {
    console.log(item);
    localStorage.setItem("cart", item);
    navigate("/productDetails", { state: { product: item } });
  };
  
  return (
    <>
      <ProductCards
        isProduct={true}
        data={currentItems}
        onPRoductClick={handleProductClick}
        setCartItemCount={setCartItemCount}
      />

      {/* Pagining  */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "23px",
          position: "fixed",
          marginLeft: "600px",
        }}
      >
        <Pagination
          data={currentItems}
          count={pageCount}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
        />
      </Box>
    </>
  );
}

