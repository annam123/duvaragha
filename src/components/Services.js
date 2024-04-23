// About.js
import { Container, Grid, Typography, IconButton } from "@mui/material";
import { Button } from "@mui/material";
import React from "react";
import StyleIcon from "@mui/icons-material/Style";
import property1 from "../img/about_image.jpg";
import property2 from "../img/about_image_small.jpg";
import Diversity2Icon from "@mui/icons-material/Diversity2";
import BusinessIcon from "@mui/icons-material/Business";
import ConstructionIcon from "@mui/icons-material/Construction";
import BuildIcon from "@material-ui/icons/Build";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";

export default function Services() {
  return (
    <div id="about">
      <Container>
        <Grid container sx={{ padding: "30px 0" }}>
          <Grid
            xs={12}
            md={6}
            sx={{ width: "100%", margin: "auto", textAlign: "left" }}
          >
            <Typography
              className="title mobileView"
              variant="h4"
              fontWeight="bold"
            >
              Our Services
            </Typography>
            <Typography variant="body1" color="rgb(36 40 49)" mt={2}>
              Duvaraha Builder is one of the most popular real estate company
              all around India. You can find your dream property or build
              property with us. We always provide importance to our customer.
            </Typography>
            <Grid item md={12} xs={12}>
              <Grid
                container
                alignItems="flex-start"
                sx={{ paddingTop: "30px" }}
              >
                <Grid
                  item
                  md={6}
                  xs={12}
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  {/* Left-hand side icon */}
                  <Grid item md={3} xs={3}>
                    <IconButton>
                      <BusinessIcon
                        style={{
                          color: "rgb(243 158 1)",
                          width: "60px",
                          height: "60px",
                        }}
                      />
                    </IconButton>
                  </Grid>

                  {/* Right-hand side header and content */}
                  <Grid item md={9} xs={9} sx={{ padding: "0px 10px" }}>
                    {/* Header */}
                    <Typography variant="body1">Site Preparation</Typography>

                    {/* Content */}
                    <Typography
                      variant="body1"
                      paddingTop={2}
                      fontSize={14}
                      textAlign="left"
                    >
                      Our team handles site clearing, grading, and excavation to
                      ensure a solid foundation for your project.
                    </Typography>
                  </Grid>
                </Grid>

                <Grid
                  item
                  md={6}
                  xs={12}
                  sx={{ display: "flex", justifyContent: "space-between" }}
                  className="space"
                >
                  {/* Left-hand side icon */}
                  <Grid item md={3} xs={3}>
                    <IconButton>
                      <ConstructionIcon
                        style={{
                          color: "rgb(243 158 1)",
                          width: "60px",
                          height: "60px",
                        }}
                      />
                    </IconButton>
                  </Grid>

                  {/* Right-hand side header and content */}
                  <Grid item md={9} xs={9} sx={{ padding: "0px 10px" }}>
                    {/* Header */}
                    <Typography variant="body1">
                      Temporary Facilities
                    </Typography>

                    {/* Content */}
                    <Typography
                      variant="body1"
                      paddingTop={2}
                      fontSize={14}
                      textAlign="left"
                    >
                      We provide all the essential facilities to support your
                      construction team & keep your site organized & secure.
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>

              <Grid
                container
                alignItems="flex-start"
                sx={{ paddingTop: "30px" }}
              >
                <Grid
                  item
                  md={6}
                  xs={12}
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  {/* Left-hand side icon */}
                  <Grid item xs={3}>
                    <IconButton>
                      <BuildIcon
                        style={{
                          color: "rgb(243 158 1)",
                          width: "60px",
                          height: "60px",
                        }}
                      />
                    </IconButton>
                  </Grid>

                  {/* Right-hand side header and content */}
                  <Grid item xs={9} sx={{ padding: "0px 10px" }}>
                    {/* Header */}
                    <Typography variant="body1">Equipment Rental</Typography>

                    {/* Content */}
                    <Typography
                      variant="body1"
                      paddingTop={2}
                      fontSize={14}
                      textAlign="left"
                    >
                      We offer a wide range of construction equipment rentals,
                      including excavators, bulldozers, cranes, and more.
                    </Typography>
                  </Grid>
                </Grid>

                <Grid
                  item
                  md={6}
                  xs={12}
                  sx={{ display: "flex", justifyContent: "space-between" }}
                  className="spaceBtm"
                >
                  {/* Left-hand side icon */}
                  <Grid item xs={3}>
                    <IconButton>
                      <LocalShippingIcon
                        style={{
                          color: "rgb(243 158 1)",
                          width: "60px",
                          height: "60px",
                        }}
                      />
                    </IconButton>
                  </Grid>

                  {/* Right-hand side header and content */}
                  <Grid item xs={9} sx={{ padding: "0px 10px" }}>
                    {/* Header */}
                    <Typography variant="body1">Material Delivery</Typography>

                    {/* Content */}
                    <Typography
                      variant="body1"
                      paddingTop={2}
                      fontSize={14}
                      textAlign="left"
                    >
                      Save time and streamline your operations with our material
                      delivery services.
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            xs={12}
            md={6}
            sx={{ position: "relative", display: "inline-block" }}
          >
            <img
              style={{ width: "100%" }}
              src={property1}
              alt="Background Image"
            />
            <img
              sx={{ width: "50%" }}
              src={property2}
              alt="Overlay Image"
              className="overlay_class"
              style={{
                position: "absolute",
                top: "90%",
                right: "-25%",
                transform: "translate(-50%, -50%)",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
