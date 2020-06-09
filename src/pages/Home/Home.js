import React from 'react';
import PropTypes from 'prop-types';
import styles from './Home.module.css';
import { Box, Grommet, Heading, FormField } from "grommet";
import { withRouter } from "react-router-dom";
import TextBox from "./../../components/DevextremeTextBox";

const Header = () => (
  <Box
    tag="header"
    background="#075999"
    pad="small"
    elevation="small"
    justify="between"
    direction="row"
    align="center"
    flex={false}
  >
    <Heading level={3} margin="none">
      <strong>Welcome to AmpraDemo</strong>
    </Heading>
  </Box>
);

const Footer = () => (
  <Box
    tag="footer"
    direction="row"
    justify="end"
    pad="medium"
    border={{ side: "top" }}
    gap="small"
    flex={false}
  ></Box>
);

const Body = ({ history }) => {
 
  return (
    <Box
      justify={"center"}
      align={"center"}
      flex={true}
      pad="medium"
      overflow="auto"
    >
      <Box flex={false}>
        
        <Box pad={{ top: "medium" }} gap="">
          <TextBox
            id="name-input"
            value="Welcome to Ampra Dashboard"
            height={35}
            width={400}
            stylingMode={"filled"}
            readOnly={true}
          />
        </Box>
      </Box>
    </Box>
  );
};

const Home = ({ history }) => (
  <Grommet full={true}>
    <Box fill={true}>
      <Header />
      <Body history={history} />
      <Footer />
    </Box>
  </Grommet>
);

export default withRouter(Home);