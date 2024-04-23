import React from "react";
import backgroundImage from "../img/transparent.png";
import { Button, Grid, Typography, IconButton } from "@mui/material";
import "../css/style.css";
import { Menu } from "@mui/icons-material";
import Diversity2Icon from "@mui/icons-material/Diversity2";
import StyleIcon from "@mui/icons-material/Style";
import BusinessIcon from "@mui/icons-material/Business";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";

const styles = {
  container: {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundColor: "#303441",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "auto", // Adjust as needed
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    textAlign: "center",
    color: "#fff",
    padding: "20px",
  },
  button: {
    margin: "0 10px", // Adjust as needed
    padding: "15px 25px !important",
  },
};

export default function HowWorks() {
  return (
    <Grid
      container
      alignItems="center"
      style={styles.container}
      className="works"
      sx={{
        maxWidth: "100%",
        paddingBottom: "30px",
        marginTop: "50px",
        paddingLeft: "100px",
        paddingRight: "110px",
        color: "#fff !important",
      }}
    >
      <Grid item md={12} xs={12} style={styles.content}>
        <Typography
          variant="h4"
          padding={2}
          className="worksFontSize"
          sx={{ color: "#de8b02" }}
        >
          How Duvaraha Builder Works
        </Typography>
      </Grid>

      <Grid item md={4} xs={12}>
        <Grid className="marginBorder ">
          <Grid
            container
            alignItems="flex-start"
            className="topBorder hoverEffect"
          >
            {/* Left-hand side icon */}
            <Grid item xs={3}>
              <IconButton>
                <Diversity2Icon
                  style={{ color: "#fff", width: "60px", height: "60px" }}
                />
              </IconButton>
            </Grid>

            {/* Right-hand side header and content */}
            <Grid item xs={9} sx={{ padding: "0px 10px" }}>
              {/* Header */}
              <Typography variant="body1" className="fontSize">
                TRUSTED BY THOUSANDS
              </Typography>

              {/* Content */}
              <Typography
                variant="body1"
                paddingTop={2}
                fontSize={14}
                textAlign="left"
              >
                10 new offers every day. 350 offers on site, trusted by a
                community of thousands of users.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid item md={4} xs={12}>
        <Grid className="marginBorder ">
          <Grid
            container
            alignItems="flex-start"
            className="topBorder hoverEffect"
          >
            {/* Left-hand side icon */}
            <Grid item xs={2}>
              <IconButton>
                <BusinessCenterIcon
                  style={{ color: "#fff", width: "60px", height: "60px" }}
                />
              </IconButton>
            </Grid>

            {/* Right-hand side header and content */}
            <Grid item xs={9} sx={{ padding: "0px 10px" }}>
              {/* Header */}
              <Typography variant="body1" className="fontSize" textAlign="left">
                WIDE RANGE PROPERTY
              </Typography>

              {/* Content */}
              <Typography
                variant="body1"
                paddingTop={2}
                fontSize={14}
                textAlign="left"
              >
                With a robust selection of popular properties on hand, as well
                as leading properties from real estate experts.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid item md={4} xs={12}>
        <Grid className="marginBorder ">
          <Grid
            container
            alignItems="flex-start"
            className="topBorder hoverEffect"
          >
            {/* Left-hand side icon */}
            <Grid item xs={2}>
              <IconButton>
                <MonetizationOnIcon
                  style={{ color: "#fff", width: "60px", height: "60px" }}
                />
              </IconButton>
            </Grid>

            {/* Right-hand side header and content */}
            <Grid item xs={9} sx={{ padding: "0px 10px" }}>
              {/* Header */}
              <Typography variant="body1" className="fontSize" textAlign="left">
                FINANCING MADE EASY
              </Typography>

              {/* Content */}
              <Typography
                variant="body1"
                paddingTop={2}
                fontSize={14}
                textAlign="left"
              >
                Our stress-free finance department that can find financial
                solutions to save you money.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
