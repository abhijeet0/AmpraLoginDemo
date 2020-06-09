import React from "react";
import PropTypes from "prop-types";
import styles from "./DevextremeTextBox.module.css";

import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";

import { TextBox } from "devextreme-react";

const DevextremeTextBox = (props) => {
  return (
    <div className={styles.root}>
      <TextBox 
      {...props}/>
    </div>
  );
};

DevextremeTextBox.defaultProps = {};

DevextremeTextBox.propTypes = {};

export default DevextremeTextBox;
