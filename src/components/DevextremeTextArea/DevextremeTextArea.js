import React from 'react';
import PropTypes from 'prop-types';
import styles from './DevextremeTextArea.module.css';

import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';

import TextArea from 'devextreme-react/textarea';

const DevextremeTextArea = props => {
  return (
    <div className={styles.root}>
      <TextArea
            maxLength={props.maxLength}
            value={props.value} />
    </div>
  );
};

DevextremeTextArea.defaultProps = {

};

DevextremeTextArea.propTypes = {

};

export default DevextremeTextArea;
