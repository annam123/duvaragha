import React from "react";
import Button from "@mui/material/Button";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import FoundationIcon from "@mui/icons-material/Foundation";

const ScrollToTopButton = () => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling animation
    });
  };

  return (
    <Button
      onClick={handleClick}
      variant="contained"
      color="info"
      style={{
        position: "fixed",
        bottom: 20,
        right: 20,
        height: 50,
        width: "1px",
        borderRadius: 30,
        backgroundColor: "#de8b02",
        color: "black",
        fontFamily: "monospace",
        fontWeight: "bold",
        color: "#fff",
      }}
      // startIcon={< KeyboardArrowUpIcon  style={{backgroundColor:"yellow", color:"black",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"medium"}}}
    >
      {" "}
      <KeyboardArrowUpIcon />
    </Button>
  );
};

export default ScrollToTopButton;
