import React from 'react';
import PropTypes from 'prop-types';
import styles from './DevextremeChart1.module.css';

import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';

import { Chart, CommonSeriesSettings, Legend, SeriesTemplate, Animation, ArgumentAxis, Tick, Title } from 'devextreme-react/chart';
import dataSource from './../../data1';

const DevextremeChart1 = props => {
  return (
    <div className={styles.root}>
      <Chart id="chart" dataSource={dataSource} barGroupPadding={0.2} rotated={true}>
        <ArgumentAxis categories={['Royal Houses']}>
          <Tick visible={false} />
        </ArgumentAxis>
        <Title text="The British Monarchy"
          subtitle="An Abbreviated Timeline"
        />
        <CommonSeriesSettings
          type="rangeBar"
          argumentField="monarch"
          rangeValue1Field="start"
          rangeValue2Field="end"
          barOverlapGroup="monarch"
        >
        </CommonSeriesSettings>
        <Legend verticalAlignment="bottom" horizontalAlignment="center">
          <Title text="Royal Houses" />
        </Legend>
        <SeriesTemplate nameField="house" />
        <Animation enabled={false} />
      </Chart>    
      </div>
  );
};

DevextremeChart1.defaultProps = {

};

DevextremeChart1.propTypes = {

};

export default DevextremeChart1;
