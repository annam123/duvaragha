import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import clientImage1 from "../img/client.png";
import clientImage2 from "../img/client1.jpg";
import { Container, Grid, Typography } from "@mui/material";
import useTheme from "@mui/material/styles/useTheme";
import useMediaQuery from "@mui/material/useMediaQuery";

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: "John Doe",
    company: "ABC Inc.",
    quote:
      "Thank you walls property help me, choice dream home We were impressed with the build quality, Plus they are competitively priced",
    image: clientImage1,
  },
  {
    id: 2,
    name: "Jane Smith",
    company: "XYZ Corp.",
    quote:
      "Thank you walls property help me, choice dream home We were impressed with the build quality, Plus they are competitively priced",
    image: clientImage2,
  },
  {
    id: 3,
    name: "Alice Johnson",
    company: "123 Corp.",
    quote:
      "Thank you walls property help me, choice dream home We were impressed with the build quality, Plus they are competitively priced",
    image: clientImage1,
  },
];

const TestimonialCarousel = () => {
  const theme = useTheme(); // Access the theme object
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const slidesToShow = isMobile ? 1 : 2;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set autoplay speed (in milliseconds)
  };
  const scrollToTestimonialSection = () => {
    const testimonialSection = document.getElementById("testimonialSection");
    testimonialSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Container
      id="clients"
      style={{ overflow: "hidden", height: "auto", margin: "40px auto" }}
    >
      {/* Hide horizontal overflow */}
      <Grid container md={12} xs={12} justifyContent="center">
        <Grid
          item
          xs={12}
          md={12}
          style={{ width: "auto", margin: "0px", maxWidth: "auto" }}
        >
          <Typography variant="h4" padding={0} className="mobileView">
            What People Say
          </Typography>
          <Typography variant="body1" padding={0} margin="10px 0px">
            People Say About Walls Property.
          </Typography>
          {/* Hide vertical scrollbar */}
          <Slider
            style={{ margin: "60px 0px", overflow: "hidden" }}
            {...settings}
          >
            {testimonials.map((testimonial) => (
              <Grid
                md={12}
                key={testimonial.id}
                style={{
                  marginTop: "30px",
                  display: "flex",
                  alignItems: "flex-start",
                }}
              >
                <div style={{ padding: "0px 20px" }}>
                  <Typography variant="body1" textAlign="left">
                    {testimonial.quote}
                  </Typography>
                </div>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "20px 60px 20px 20px",
                  }}
                >
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      marginRight: "10px",
                    }}
                  />
                  <div>
                    <Typography variant="subtitle1">
                      {testimonial.name}
                    </Typography>
                    <Typography variant="body2">
                      {testimonial.company}
                    </Typography>
                  </div>
                </div>
              </Grid>
            ))}
          </Slider>
        </Grid>
      </Grid>
    </Container>
  );
};

export default TestimonialCarousel;
