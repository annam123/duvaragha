import React from "react";
import logo from "../img/log1.png";
import property from "../img/property_small01.jpg";
import property1 from "../img/property_small02.jpg";
import {
  Grid,
  Typography,
  Button,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faPhone,
  faEnvelope,
  faAddressCard,
  faAddressBook,
  faLocationPin,
  faLocationCrosshairs,
  faMapLocation,
  faMailBulk,
} from "@fortawesome/free-solid-svg-icons";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer id="contact" style={{ backgroundColor: "#242831", color: "#fff" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          {/* First column */}
          <Typography
            variant="h6"
            sx={{ padding: "25px 35px 15px 15px" }}
            textAlign="left"
          >
            <img src={logo} alt="Logo" />
          </Typography>
          <Typography
            variant="body1"
            style={{
              fontSize: "16px",
              textAlign: "left",
              lineHeight: "26px",
              padding: "0px 35px 5px 35px",
            }}
          >
            In the ever-evolving construction industry, Dhuvaraga Builders
            stands out as a trusted and innovative force. With a proven history
            of satisfying numerous clients, we consistently raise the bar for
            excellence in every project we handle.
          </Typography>
          {/* <Typography textAlign="left" sx={{ padding: "25px 35px" }}>
            <Button
              variant="contained"
              color="info"
              sx={{
                padding: "8px 16px", // Adjust button padding
                fontSize: "11px", // Adjust button font size
                textAlign: "left",
                "&:hover": {
                  backgroundColor: "#000", // Change background color on hover
                },
              }}
            >
              Read More
            </Button>
          </Typography> */}
          {/* Add your content for the first column here */}
        </Grid>
        <Grid item xs={12} md={2} sx={{ padding: "25px 15px 15px 15px" }}>
          {/* Second column */}
          <Typography
            variant="h6"
            textAlign="left"
            sx={{ padding: "25px 35px 25px 35px", position: "relative" }}
          >
            Quick Links
            <span
              style={{
                position: "absolute",
                width: "30%",
                height: "1px",
                background: "#fff",
                bottom: "8px",
                zIndex: "0",
                display: "block",
                alignItems: "left",
              }}
            ></span>
          </Typography>
          <ListItem disablePadding style={{ padding: "10px 20px 0px 35px" }}>
            <ListItemIcon>
              <FontAwesomeIcon
                icon={faAngleDoubleRight}
                style={{ color: "#fff" }}
              />
            </ListItemIcon>
            <ListItemText primary="Home" id="home" style={{ color: "#fff" }} />
          </ListItem>
          <ListItem disablePadding style={{ padding: "10px 20px 0px 35px" }}>
            <ListItemIcon>
              <FontAwesomeIcon
                icon={faAngleDoubleRight}
                style={{ color: "#fff" }}
              />
            </ListItemIcon>
            <ListItemText
              primary="About Us"
              id="about"
              style={{ color: "#fff" }}
            />
          </ListItem>
          <ListItem disablePadding style={{ padding: "10px 20px 0px 35px" }}>
            <ListItemIcon>
              <FontAwesomeIcon
                icon={faAngleDoubleRight}
                style={{ color: "#fff" }}
              />
            </ListItemIcon>
            <ListItemText
              primary="Properties"
              id="projects"
              style={{ color: "#fff" }}
            />
          </ListItem>
          <ListItem disablePadding style={{ padding: "10px 20px 0px 35px" }}>
            <ListItemIcon>
              <FontAwesomeIcon
                icon={faAngleDoubleRight}
                style={{ color: "#fff" }}
              />
            </ListItemIcon>
            <ListItemText
              primary="Clients"
              id="clients"
              style={{ color: "#fff" }}
            />
          </ListItem>
          <ListItem disablePadding style={{ padding: "10px 20px 5px 35px" }}>
            <ListItemIcon>
              <FontAwesomeIcon
                icon={faAngleDoubleRight}
                style={{ color: "#fff" }}
              />
            </ListItemIcon>
            <ListItemText
              primary="Contact Us"
              id="contact"
              style={{ color: "#fff" }}
            />
          </ListItem>

          {/* Add your content for the second column here */}
        </Grid>
        <Grid item xs={12} md={4} paddingBottom={3}>
          {/* Third column */}
          <Typography
            variant="h6"
            textAlign="left"
            sx={{ padding: "25px 35px", position: "relative" }}
          >
            Recent Properties
            <span
              style={{
                position: "absolute",
                width: "12%",
                height: "1px",
                background: "#fff",
                bottom: "8px",
                zIndex: "0",
                display: "block",
                alignItems: "left",
              }}
            ></span>
          </Typography>
          <Grid container spacing={2} sx={{ padding: "25px 35px 25px 30px" }}>
            <Grid item xs={3} md={3} paddingLeft={0}>
              <img
                src={property}
                alt="property"
                style={{ width: "80px", height: "80px" }}
              />
            </Grid>
            {/* Right column for the text and button */}
            <Grid item xs={9} md={9}>
              <Typography
                variant="body1"
                textAlign="left"
                sx={{ paddingLeft: "10px" }}
              >
                Residential Construction
              </Typography>
              <Typography
                variant="body1"
                textAlign="left"
                fontSize={"12px"}
                sx={{ paddingLeft: "10px" }}
              >
                Surandai, TN
              </Typography>
              <Button
                variant="contained"
                color="info"
                sx={{
                  marginLeft: "10px",
                  textAlign: "left",
                  display: "block",
                  alignItems: "left",
                  fontSize: "11px",
                  marginTop: "10px",
                }} // Add margin to separate button from text
              >
                Rs. 25,000
              </Button>
            </Grid>
          </Grid>
          <Divider
            sx={{ backgroundColor: "#fff", margin: "0px 30px" }}
            width="60%"
          />{" "}
          {/* Add a horizontal line */}
          <Grid container spacing={2} sx={{ padding: "25px 35px 25px 30px" }}>
            <Grid item xs={3} md={3}>
              <img
                src={property1}
                alt="property"
                style={{ width: "80px", height: "80px" }}
              />
            </Grid>
            {/* Right column for the text and button */}
            <Grid item xs={9} md={9}>
              <Typography
                variant="body1"
                textAlign="left"
                sx={{ paddingLeft: "10px" }}
              >
                Renovations and Remodeling
              </Typography>
              <Typography
                variant="body1"
                textAlign="left"
                fontSize={"12px"}
                sx={{ paddingLeft: "10px" }}
              >
                KeelaSurandai, TN
              </Typography>
              <Button
                variant="contained"
                color="info"
                sx={{
                  marginLeft: "10px",
                  textAlign: "left",
                  display: "block",
                  alignItems: "left",
                  fontSize: "11px",
                  marginTop: "10px",
                }} // Add margin to separate button from text
              >
                Rs. 25,000
              </Button>
            </Grid>
          </Grid>
          {/* Add your content for the third column here */}
        </Grid>
        <Grid item xs={12} md={3} sx={{ padding: "25px 15px 15px 15px" }}>
          {/* Fourth column */}
          <Typography
            variant="h6"
            textAlign="left"
            sx={{ padding: "25px 35px 25px 35px", position: "relative" }}
          >
            Contact Info
            <span
              style={{
                position: "absolute",
                width: "17%",
                height: "1px",
                background: "#fff",
                bottom: "8px",
                zIndex: "0",
                display: "block",
                alignItems: "left",
              }}
            ></span>
          </Typography>
          {/* Add your content for the fourth column here */}
          <ListItem
            disablePadding
            style={{ paddingLeft: "35px", marginTop: "20px" }}
          >
            <ListItemIcon>
              <FontAwesomeIcon icon={faMapLocation} style={{ color: "#fff" }} />
            </ListItemIcon>
            <ListItemText
              primary="51/2 ,8th Street Keelasurandai -627 859"
              style={{ color: "#fff" }}
            />
          </ListItem>
          <ListItem disablePadding style={{ paddingLeft: "35px" }}>
            <ListItemIcon>
              <FontAwesomeIcon icon={faMailBulk} style={{ color: "#fff" }} />
            </ListItemIcon>
            <ListItemText
              primary="duvarahabuilders@gmail.com"
              style={{ color: "#fff" }}
            />
          </ListItem>
          <ListItem disablePadding style={{ paddingLeft: "35px" }}>
            <ListItemIcon>
              <FontAwesomeIcon icon={faPhone} style={{ color: "#fff" }} />
            </ListItemIcon>
            <ListItemText primary="875-465-1112" style={{ color: "#fff" }} />
          </ListItem>
          <Grid container marginTop={2} style={{ paddingLeft: "35px" }}>
            <Grid item xs={2} md={2}>
              <FaFacebook size={30} />
            </Grid>
            <Grid item xs={2} md={2}>
              <FaTwitter size={30} />
            </Grid>
            <Grid itemxs={2} md={2}>
              <FaInstagram size={30} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
