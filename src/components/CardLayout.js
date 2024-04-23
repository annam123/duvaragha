import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "@mui/joy/Divider";
import Typography from "@mui/joy/Typography";
import IconButton from "@mui/joy/IconButton";
import Link from "@mui/joy/Link";
import Favorite from "@mui/icons-material/Favorite";
import { Container, Grid, Button } from "@mui/material";
import property01 from "../img/construction/commercial1.jpeg";
import property02 from "../img/construction/commercial2.jpeg";
import property03 from "../img/construction/commercial3.jpeg";
import "../css/style.css";
import Construction1 from "../img/construction/hotel.jpeg";
import Construction2 from "../img/construction/commercial.jpeg";
import Construction3 from "../img/construction/warehouse.jpeg";
import Construction4 from "../img/construction/commercial2.jpeg";
import Construction5 from "../img/construction/residential.jpg";
import Construction6 from "../img/construction/industrial.jpeg";

const images = [
  {
    imgPath: Construction1,
    title: "Hotel",
    area: "Surandai, TN",
    key: "For Rent",
    prop1: "Area - 1300",
    prop2: "Bed - 2",
    prop3: "Baths - 2",
    prop4: "Garages - 1",
  },
  {
    imgPath: Construction2,
    title: "Commercial",
    area: "SV Karai, TN",
    key: "For Rent",
    prop1: "Area - 1800",
    prop2: "Bed - 3",
    prop3: "Baths - 2",
    prop4: "Garages - 1",
  },
  {
    imgPath: Construction3,
    title: "Warehouse",
    area: "Keela Surandai, TN",
    key: "For Sale",
    prop1: "Area - 2000",
    prop2: "Bed - 3",
    prop3: "Baths - 2",
    prop4: "Garages - 1",
  },
  {
    imgPath: Construction4,
    title: "Multifamily-Appartment",
    area: "Sankaran Kovil, TN",
    key: "For Rent",
    prop1: "Area - 1100",
    prop2: "Bed - 2",
    prop3: "Baths - 2",
    prop4: "Garages - 1",
  },
  {
    imgPath: Construction5,
    title: "Residential",
    area: "Tenkasi, TN",
    key: "For Sale",
    prop1: "Area - 1100",
    prop2: "Bed - 2",
    prop3: "Baths - 2",
    prop4: "Garages - 1",
  },
  {
    imgPath: Construction6,
    title: "Industrial",
    area: "Pavoorchathram, TN",
    key: "For Sale",
    prop1: "Area - 1100",
    prop2: "Bed - 2",
    prop3: "Baths - 2",
    prop4: "Garages - 1",
  },
];

export default function CardLayout() {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };
  const boxStyle = {};
  /*  const settings = {
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
  }; */

  // Remove the last item from the images array
  //const filteredImages = images.slice(0, images.length - 1);

  return (
    <Grid
      className="parent"
      container
      spacing={2}
      sx={{ width: "100%", justifyContent: "center" }}
    >
      {images.map((image, index) => (
        <Grid key={index} item md={4} className="child">
          <Card md={4} variant="outlined" width="100%" height="100%">
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
                  className="buttonname"
                  variant="contained"
                  color={image.key === "For Sale" ? "error" : "success"}
                  sx={{ mr: 2 }}
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
      ))}
    </Grid>
  );
}
