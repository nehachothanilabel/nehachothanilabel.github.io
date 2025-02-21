import { Box } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { kidsCollection } from "../collectionData/kidsCollection";
import { mensCollection } from "../collectionData/mensCollection";
import { womensCollection } from "../collectionData/womensCollection";
import FloatingFollow from "../components/FloatingFollow";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProductViewDesktop from "../components/ProductViewDesktop";
import ProductViewMobile from "../components/ProductViewMobile";
import PageNotFound from "../pages/PageNotFound";

export default function Product() {
  const { id } = useParams();

  const allCollections = [
    ...mensCollection,
    ...womensCollection,
    ...kidsCollection,
  ];

  // Find the product by ID
  const product = allCollections.find((item) => item.id === id);

  if (!product) {
    return <PageNotFound />;
  }

  return (
    <>
      <Navbar />
      {/* TODO DECIDE IF DISPLAY SHOULD BE SM OR MD */}
      <Box
        sx={{
          display: {
            md: "none",
          },
        }}
      >
        <ProductViewMobile product={product} />
      </Box>

      {/* TODO DECIDE IF DISPLAY SHOULD BE SM OR MD */}
      <Box
        sx={{
          display: {
            xs: "none",
            md: "block",
          },
        }}
      >
        <ProductViewDesktop product={product} />
      </Box>

      <FloatingFollow />
      <Footer />
    </>
  );
}
