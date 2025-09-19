import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import { useNavigate } from "react-router-dom";
import heroImage from "../images/event.jpg";
import heroImageMobile from "../images/event_m.jpg";

export default function HeroImage() {
  const navigate = useNavigate();
  return (
<>
    <Box
      sx={{
        display: {
          md: "none",
        },
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
    </Box>
    <Box
      sx={{
        display: {
          xs: "none",
          md: "block",
        },
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
    </Box>
    {/* <Box sx={{ mx: { xs: 2, sm: 4 }, mt: { xs: 2, sm: 4 } }}>
      <Card sx={{ maxWidth: 2000 }}>
        {/* <CardActionArea onClick={() => navigate("/product/w9")}> 
        <CardActionArea>
          <CardMedia
            sx={{ height: { xs: 230, sm: 800 } }}
            image={heroImage}
            title="Hero image"
          />
        </CardActionArea>
      </Card>
    </Box> */}
    </>
  );
}
