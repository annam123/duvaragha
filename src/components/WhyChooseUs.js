import React from "react";
import backgroundImage from "../img/house-bg.jpg";
import { Button, Grid, Typography } from "@mui/material";
import "../css/style.css";

const styles = {
  container: {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${backgroundImage})`,
    backgroundSize: "cover",
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

export default function WhyChooseUs() {
  return (
    <Grid
      container
      style={styles.container}
      sx={{ paddingBottom: "30px", marginTop: "50px" }}
    >
      <Grid style={styles.content}>
        <Typography variant="h3" padding={2} className="mobileView">
          Why Choose Us
        </Typography>
        <Typography
          sx={{
            width: "70%",
            margin: "auto",
            lineHeight: "26px",
            paddingBottom: "30px",
          }}
        >
          At Dhuvaraga Builders, we offer more than just construction services –
          we provide a commitment to excellence that sets us apart. With decades
          of experience, we bring unmatched expertise to every project, ensuring
          quality and innovation at every turn. Our transparent communication
          and dedication to timely delivery mean you can trust us to bring your
          vision to life on schedule and within budget. Plus, our focus on
          sustainability ensures a brighter future for generations to come.
          Choose Dhuvaraga Builders for a partnership built on trust, quality,
          and satisfaction.
        </Typography>
        <Button
          color="info"
          variant="contained"
          sx={{ padding: "15px 30px" }}
          style={styles.button}
        >
          Start Search Now
        </Button>
        <Button
          className="button"
          color="info"
          variant="contained"
          sx={{ padding: "15px 30px" }}
          style={styles.button}
        >
          Browse Properties
        </Button>
      </Grid>
    </Grid>
  );
}
