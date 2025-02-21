import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import { useLocation, useNavigate } from "react-router-dom";
import { womensCollection } from "../collectionData/womensCollection";
import FloatingFollow from "../components/FloatingFollow";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

export default function Women() {
  const query = useQuery();
  const colorFilter = query.get("color");
  const navigate = useNavigate();

  const filteredCollection = colorFilter
    ? womensCollection.filter(
        (product) =>
          product.color &&
          product.color.toLowerCase() === colorFilter.toLowerCase()
      )
    : womensCollection;

  return (
    <>
      <Navbar />
      <Box sx={{ mx: { xs: 2, sm: 4 }, mt: { xs: 2, sm: 4 } }}>
        <Grid container spacing={2}>
          {filteredCollection.map((product) => (
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
                      maxHeight: 500,
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
