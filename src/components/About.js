// About.js
import { Container, Grid, Typography } from "@mui/material";
import { Button } from "@mui/material";
import React from "react";
import property1 from "../img/about_image.jpg";
import property2 from "../img/about_image_small.jpg";
import "../css/style.css";

export default function About() {
  return (
    <div id="about">
      <Container>
        <Grid container sx={{ padding: "30px 0" }}>
          <Grid
            md={6}
            sx={{ width: "100%", margin: "auto", textAlign: "left" }}
          >
            <Typography
              className="title"
              variant="body1"
              color="#de8b02" //"rgb(36 40 49)"
              fontWeight="bold"
            >
              TRUSTED BY THOUSANDS
            </Typography>
            <Typography
              variant="h5"
              color="rgb(36 40 49)"
              mt={2}
              fontWeight="bold"
            >
              Stands out as a trusted and innovative force.
            </Typography>
            <Typography mt={2}>
              In the ever-evolving construction industry, Dhuvaraga Builders
              stands out as a trusted and innovative force. With a proven
              history of satisfying numerous clients, we consistently raise the
              bar for excellence in every project we handle.
            </Typography>
            <Typography mt={2}>
              From carefully assessing property values to bringing your dreams
              to life, we blend creativity and skill to create spaces that leave
              a lasting impression. Come join us on a journey where honesty
              meets innovation, and allow Dhuvaraga Builders to be your ally in
              constructing a better tomorrow.
            </Typography>
            <Button
              variant="contained"
              color="info"
              sx={{
                marginTop: "20px",
                textTransform: "capitalize",
                backgroundColor: "#de8b02",
              }}
            >
              Enquiry Now
            </Button>
          </Grid>
          <Grid
            md={6}
            className="paddingTop"
            sx={{ position: "relative", display: "inline-block" }}
          >
            <img
              src={property1}
              alt="Background Image"
              style={{ width: "100%", maxWidth: "100%" }}
            />
            <img
              sx={{ width: "50%" }}
              src={property2}
              alt="Overlay Image"
              className="overlay_class"
              style={{
                position: "absolute",
                top: "90%",
                left: "15%",
                transform: "translate(-50%, -50%)",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
