import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import React from "react";
import { kidsCollection } from "../collectionData/kidsCollection";
import FloatingFollow from "../components/FloatingFollow";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

export default function Kids() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <Box sx={{ mx: { xs: 2, sm: 4 }, mt: { xs: 2, sm: 4 } }}>
        <Grid container spacing={2}>
          {kidsCollection.map((product) => (
            <Grid size={{ xs: 6, md: 3 }} key={product.id}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                <CardActionArea
                  onClick={() => navigate(`/product/${product.id}`)}
                >
                  <CardMedia
                    component="img"
                    image={product.defaultImage}
                    alt={product.title}
                    sx={{
                      maxHeight: 700,
                      objectFit: "cover",
                      width: "100%",
                    }}
                  />
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: "bold" }}
                    gutterBottom
                    mt={1}
                    ml={2}
                  >
                    {product.title}
                  </Typography>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      <FloatingFollow />
      <Footer />
    </>
  );
}
