import React from 'react';
import PropTypes from 'prop-types';
import styles from './DevextremeTextInput.module.css';

import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';

import TextInput from 'devextreme-react/textinput';

const DevextremeTextInput = props => {
  return (
    <div className={styles.root}>
      <TextInput {...props} />
    </div>
  );
};

DevextremeTextInput.defaultProps = {

};

DevextremeTextInput.propTypes = {

};

export default DevextremeTextInput;
