import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import FeaturedCarousel from "./FeaturedCarousel";

export default function FeaturedProJects() {
  return (
    <Container id="projects">
      <Grid container sx={{ display: "flex", justifyContent: "center" }}>
        <Grid
          sx={{
            width: "100%",
            margin: "auto",
            textAlign: "center",
            paddingTop: "50px",
          }}
        >
          <Typography
            className="title"
            variant="h5"
            align="left"
            color="#de8b02"
            fontWeight="bold"
            sx={{ flexGrow: 1, marginRight: "16px", padding: "30px 0" }} // Add marginRight for space
          >
            FEATURED PROPERTIES
          </Typography>
          <FeaturedCarousel />
        </Grid>
      </Grid>
    </Container>
  );
}
