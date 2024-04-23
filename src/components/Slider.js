import * as React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery"; // Import useMediaQuery hook
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import slid1 from "../img/slid1.jpeg";
import slid2 from "../img/slid2.jpeg";
import slid3 from "../img/slid3.jpeg";
import slid4 from "../img/slid4.jpeg";
import slid5 from "../img/slid5.png";
import slid6 from "../img/slid6.jpeg";
import "../css/style.css";
import { Container } from "@mui/material";

const formatButtonLabel = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  /* {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath: slid1,
  }, */
  {
    label: "Residential Construction",
    imgPath: slid2,
    text: "24 1st Street, Surandai, TN",
    area: "3520 sqft, 5 Bed, 3 Bath, 2 Garage",
    price: "For Sale Rs. 54,000",
  },
  {
    label: "Renovations and Remodeling",
    imgPath: slid3,
    text: "20 South Street, Tenkasi, TN",
    area: "3520 sqft, 5 Bed, 3 Bath, 2 Garage",
    price: "For Sale Rs. 50,000",
  },
  {
    label: "Commercial Construction",
    imgPath: slid6,
    text: "22 North Street, Kadayam, TN",
    area: "3520 sqft, 5 Bed, 3 Bath, 2 Garage",
    price: "For Sale Rs. 52,000",
  },
  /* {
    label: "Bali, Indonesia",
    imgPath: slid4,
  }, */
  /* {
    label: "Bali, Indonesia",
    imgPath: slid5,
  }, */
  /* {
    label: "Bali, Indonesia",
    imgPath: slid6,
  }, */
];

function Slider() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  const formatButtonLabel = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  };

  return (
    <div id="slider" className="sliderTop">
      <Box sx={{ width: "100%" }}>
        <Paper
          square
          elevation={0}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: 50,
            pl: 2,
            bgcolor: "background.default",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
          }}
        >
          <Typography>{images[activeStep].label}</Typography>
        </Paper>
        <Box sx={{ position: "relative" }}>
          <AutoPlaySwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
            interval={5000} // Change the interval for automatic slide transitions
            animation="push" // Change the transition animation
            style={{ width: "100%" }} // Set width to 100% for full-width display
          >
            {images.map((step, index) => (
              <div key={step.label}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: isMobile ? "column" : "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      height: isMobile ? "auto" : 565,
                      width: "100%", // Ensure full width on laptop screens
                      position: "relative",
                    }}
                  >
                    <img
                      src={step.imgPath}
                      alt={step.label}
                      style={{
                        maxWidth: isMobile ? "100%" : "100%",
                        maxHeight: isMobile ? "auto" : "100%",
                      }}
                    />
                    {!isMobile && (
                      <Box
                        sx={{
                          position: "absolute",
                          left: "8%",
                          backgroundColor: "rgba(0, 0, 0, 0.6)",
                          padding: "60px 55px",
                          color: "#fff",
                          borderRadius: "5px",
                        }}
                      >
                        <Typography
                          variant="h4"
                          align="left"
                          padding="20px 0px"
                        >
                          {step.label}
                        </Typography>
                        <Typography
                          variant="h5"
                          align="left"
                          padding="10px 0px"
                        >
                          {step.text}
                        </Typography>
                        <Typography
                          variant="h6"
                          fontSize="16px"
                          padding="10px 0px"
                          align="left"
                        >
                          {step.area}
                        </Typography>
                        <Typography variant="h5" align="left">
                          {step.price}
                        </Typography>
                        <Box sx={{ mt: 2 }} align="left">
                          <Button
                            variant="contained"
                            color="success"
                            padding="2px"
                            fontSize="12px"
                            sx={{ mr: 2 }}
                            textTransform="initialize !important"
                          >
                            {formatButtonLabel("for sale")}
                          </Button>
                          <Button variant="contained" color="info">
                            {formatButtonLabel("featured")}
                          </Button>
                        </Box>
                      </Box>
                    )}
                  </Box>
                ) : null}
              </div>
            ))}
          </AutoPlaySwipeableViews>
        </Box>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          variant="none" // Set variant to "text" to hide the stepper dots
          nextButton={
            !isMobile ? ( // Conditionally render next button based on isMobile
              <Button
                size="small"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
                sx={{
                  position: "absolute",
                  right: 0,
                  top: "60%",
                  transform: "translateY(-50%)",
                  backgroundColor: "rgba(19, 41, 61, 0.9)",
                  width: "45px",
                  height: "100px",
                  color: "#fff",
                  "&:hover": {
                    backgroundColor: "rgba(19, 41, 61, 1)", // Change background color on hover
                  },
                }}
              >
                {theme.direction === "rtl" ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
            ) : null // Render null for mobile view
          }
          backButton={
            !isMobile ? ( // Conditionally render back button based on isMobile
              <Button
                size="small"
                onClick={handleBack}
                disabled={activeStep === 0}
                sx={{
                  position: "absolute",
                  left: 0,
                  top: "60%",
                  transform: "translateY(-50%)",
                  backgroundColor: "rgba(19, 41, 61, 0.9)",
                  width: "45px",
                  height: "100px",
                  color: "#fff",
                  "&:hover": {
                    backgroundColor: "rgba(19, 41, 61, 1)", // Change background color on hover
                  },
                }}
              >
                {theme.direction === "rtl" ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
              </Button>
            ) : null // Render null for mobile view
          }
        />
      </Box>
    </div>
  );
}

export default Slider;
