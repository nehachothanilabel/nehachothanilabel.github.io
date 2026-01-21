import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import heroImage from "../images/heroDesktop.png";
import heroImageMobile from "../images/heroMobile.jpeg";

export default function HeroImage() {
  const navigate = useNavigate();

  const CallToAction = () => (
    <Box
      sx={{
        position: "absolute",
        background: "rgba(0, 0, 0, 0.7)",
        color: "white",
        padding: { xs: 2, md: 3 },
        borderRadius: 2,
        backdropFilter: "blur(10px)",
        // Mobile positioning (bottom)
        bottom: { xs: 20, md: "auto" },
        left: { xs: 20, md: "auto" },
        // Desktop positioning (right side)
        top: { xs: "auto", md: "50%" },
        right: { xs: 20, md: "2%" },
        transform: { xs: "none", md: "translateY(-50%)" },

        textAlign: { xs: "center", md: "left" },
        zIndex: 2,
      }}
    >
      <Typography
        variant="h4"
        component="h2"
        sx={{
          fontWeight: "bold",
          marginBottom: 1,
          fontSize: { xs: "1.5rem", md: "2rem" },
        }}
      >
        Discover Fashion
      </Typography>
      <Typography
        variant="body1"
        sx={{
          marginBottom: 2,
          opacity: 0.9,
          fontSize: { xs: "0.875rem", md: "1rem" },
        }}
      >
        Explore our exclusive collection of premium clothing and accessories
      </Typography>
      <Button
        variant="contained"
        size="large"
        onClick={() => navigate("/women")}
        sx={{
          fontWeight: "bold",
          px: 3,
          py: 1,
        }}
      >
        Shop Now
      </Button>
    </Box>
  );

  return (
    <>
      {/* Mobile Hero */}
      <Box
        sx={{
          display: {
            md: "none",
          },
          position: "relative",
        }}
      >
        <Card sx={{ maxWidth: 2000 }}>
          <CardActionArea>
            <CardMedia
              sx={{ height: { xs: 560 } }}
              image={heroImageMobile}
              title="Hero image"
            />
          </CardActionArea>
        </Card>
        <CallToAction />
      </Box>

      {/* Desktop Hero */}
      <Box
        sx={{
          display: {
            xs: "none",
            md: "block",
          },
          position: "relative",
        }}
      >
        <Card sx={{ maxWidth: 2000 }}>
          <CardActionArea>
            <CardMedia
              sx={{ height: { xs: 230, sm: 800 } }}
              image={heroImage}
              title="Hero image"
            />
          </CardActionArea>
        </Card>
        <CallToAction />
      </Box>
    </>
  );
}
