import React from 'react';
import PropTypes from 'prop-types';
import styles from './DevextremeButton.module.css';

import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';

import Button from 'devextreme-react/button';

const DevextremeButton = props => {
  onClick = (e) => {
    const buttonText = e.component.option('text');
    notify(`The ${capitalize(buttonText)} button was clicked`);
  }
  return (
    <div className={styles.root}>
      <Button
                  width={120}
                  text={props.text}
                  type="default"
                  stylingMode="contained"
                  onClick={this.onClick}
                />
    </div>
  );
};

DevextremeButton.defaultProps = {

};

DevextremeButton.propTypes = {

};

export default DevextremeButton;
