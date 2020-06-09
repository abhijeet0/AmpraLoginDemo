import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./Login.module.css";
import Button from "./../../components/DevextremeButton";
import TextBox from "./../../components/DevextremeTextBox";
import { Box, Grommet, Heading, FormField } from "grommet";
import users from "./../../user.json";
import { withRouter } from "react-router-dom";

const GetUser = (uname, pass, history) => {
  users.map((value, index) => {
    if (value.username === uname.value && value.password === pass.value) {
      console.log("login success");
      history.push("/home");
    }
  });
};
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
const buttonProps = {
  // onClick:  () => {
  //   GetUser(uname, pass);
  // }
};
const Body = ({ history }) => {
  const [uname, setuName] = useState("");
  const [pass, setPass] = useState("");

  const onClick = () => {
    GetUser(uname, pass, history);
  };
  return (
    <Box
      justify={"center"}
      align={"center"}
      flex={true}
      pad="medium"
      overflow="auto"
    >
      <Box flex={false}>
        <Heading level={3} margin="none">
          <strong>Login to Ampra Demo</strong>
        </Heading>
        <Box pad={{ top: "medium" }} gap="">
          <TextBox
            id="name-input"
            placeholder="Username"
            height={35}
            width={400}
            stylingMode={"underlined"}
            onValueChanged={(text) => setuName(text)}
          />

          <TextBox
            id="pass-input"
            placeholder="Password"
            height={35}
            width={400}
            stylingMode={"underlined"}
            mode={"password"}
            onValueChanged={(text) => setPass(text)}
          />
        </Box>
        <Box pad={{ top: "medium" }} gap="">
          <Button text="Login" onClick={onClick} />
        </Box>
      </Box>
    </Box>
  );
};

const Login = ({ history }) => (
  <Grommet full={true}>
    <Box fill={true}>
      <Header />
      <Body history={history} />
      <Footer />
    </Box>
  </Grommet>
);

export default withRouter(Login);
