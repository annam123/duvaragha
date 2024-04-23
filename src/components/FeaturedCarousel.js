import * as React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Typography from "@mui/material/Typography";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "@mui/joy/Divider";
import IconButton from "@mui/joy/IconButton";
import Link from "@mui/joy/Link";
import Favorite from "@mui/icons-material/Favorite";
import property01 from "../img/property01.jpg";
import property02 from "../img/property02.jpg";
import property03 from "../img/property03.jpg";
import { Container, Grid, Button } from "@mui/material";
import "../css/style.css";
import Construction1 from "../img/construction/residential.jpg";
import Construction2 from "../img/construction/renovation.jpeg";
import Construction3 from "../img/construction/commercial.jpeg";
import Construction4 from "../img/construction/property.jpeg";

const images = [
  {
    imgPath: Construction1,
    title: "Residential Construction",
    area: "Surandai, TN",
    key: "For Sale",
    prop1: "Area - 1300",
    prop2: "Bed - 2",
    prop3: "Baths - 2",
    prop4: "Garages - 1",
  },
  {
    imgPath: Construction2,
    title: "Renovations and Remodeling",
    area: "SV Karai, TN",
    key: "For Sale",
    prop1: "Area - 1800",
    prop2: "Bed - 3",
    prop3: "Baths - 2",
    prop4: "Garages - 1",
  },
  {
    imgPath: Construction3,
    title: "Commercial Construction",
    area: "Keela Surandai, TN",
    key: "For Sale",
    prop1: "Area - 2000",
    prop2: "Bed - 3",
    prop3: "Baths - 2",
    prop4: "Garages - 1",
  },
  {
    imgPath: Construction4,
    title: "Property Valuation",
    area: "Sankaran Kovil, TN",
    key: "For Sale",
    prop1: "Area - 1100",
    prop2: "Bed - 2",
    prop3: "Baths - 2",
    prop4: "Garages - 1",
  },
];

function FeaturedCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 600, // adjust the breakpoint as needed for mobile view
        settings: {
          slidesToShow: 1,
          slidesToShow: 1,
          autoplay: true,
        },
      },
    ],
  };

  // Remove the last item from the images array
  const filteredImages = images.slice(0, images.length - 1);

  return (
    <Slider {...settings}>
      {filteredImages.map((image, index) => (
        <div key={index}>
          <Grid
            container
            spacing={2}
            sx={{ width: "100%", justifyContent: "center" }}
          >
            <Grid item md={12} className="extraSpace">
              <Card
                md={4}
                xs={12}
                variant="outlined"
                width="100%"
                height="100%"
              >
                <CardOverflow padding={2}>
                  <AspectRatio ratio="2">
                    <img src={image.imgPath} />
                  </AspectRatio>
                  <IconButton
                    aria-label="Like minimal photography"
                    size="md"
                    variant="solid"
                    color="danger"
                    sx={{
                      position: "absolute",
                      zIndex: 2,
                      borderRadius: "50%",
                      right: "1rem",
                      bottom: 0,
                      transform: "translateY(50%)",
                    }}
                  >
                    <Favorite />
                  </IconButton>
                </CardOverflow>
                <CardContent sx={{ textAlign: "left" }}>
                  <Typography level="title-md">
                    <Link href="#multiple-actions" overlay underline="none">
                      {image.title}
                    </Link>
                  </Typography>
                  <Typography level="body-sm">
                    <Link href="#multiple-actions">{image.area}</Link>
                  </Typography>
                  <Typography sx={{ margin: "10px 0px" }}>
                    <Button
                      variant="contained"
                      color="success"
                      padding="2px"
                      fontSize="12px"
                      sx={{ mr: 2 }}
                      textTransform="initialize !important"
                    >
                      {image.key}
                    </Button>
                  </Typography>
                </CardContent>
                <CardOverflow variant="soft">
                  <Divider inset="context" />
                  <CardContent orientation="horizontal">
                    <Typography level="body-xs">{image.prop1}</Typography>
                    <Divider orientation="vertical" />
                    <Typography level="body-xs">{image.prop2}</Typography>
                    <Divider orientation="vertical" />
                    <Typography level="body-xs">{image.prop3}</Typography>
                    <Divider orientation="vertical" />
                    <Typography level="body-xs">{image.prop4}</Typography>
                  </CardContent>
                </CardOverflow>
              </Card>
            </Grid>
          </Grid>
        </div>
      ))}
    </Slider>
  );
}

export default FeaturedCarousel;
