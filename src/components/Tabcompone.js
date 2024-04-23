import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardLayout from "./CardLayout";
import { Container, Divider } from "@mui/material";
import Sale from "./Sale";
import Rent from "./Rent";
import "../css/style.css";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Tabcompone() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container sx={{ display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          width: "100%",
          margin: "auto",
          textAlign: "center",
          paddingTop: "50px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <Typography
            className="title"
            variant="h5"
            align="left"
            color="#de8b02" //"rgb(36 40 49)"
            fontWeight="bold"
            sx={{ flexGrow: 1, marginRight: "16px" }} // Add marginRight for space
          >
            LATEST PROPERTIES
          </Typography>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab className="tabname" label="All" {...a11yProps(0)} />
            <Tab className="tabname" label="Rent" {...a11yProps(1)} />
            <Tab className="tabname" label="Sale" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <CardLayout />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Rent />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <Sale />
        </CustomTabPanel>
      </Box>
    </Container>
  );
}
