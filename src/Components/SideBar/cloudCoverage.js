import React, { useState } from 'react';
import { Grid } from 'semantic-ui-react';
import { Slider } from 'react-semantic-ui-range';
import { BsFillCloudFill } from 'react-icons/bs';

import 'semantic-ui-css/semantic.min.css';

import './style.scss';

const CloudCoverage = (props) => {
  const [value, setValue] = useState(50);
  const { CloudChange = () => {} } = props;

  const settings = {
    start: 50,
    min: 0,
    max: 100,
    step: 1,

    onChange: (e) => {
      setValue(e);
      CloudChange(e);
    },
  };

  return (
    <Grid className="coverage-container">
      <div className="title-container">
        <span className="title">Cobertura de nuvem</span>
      </div>
      <Grid.Column width={16}>
        <Slider value={value} color="blue" settings={settings} />
      </Grid.Column>
      <Grid.Column className="col" width={16}>
        <BsFillCloudFill size={30} />
        <span className="cloudValue">{value}%</span>
      </Grid.Column>
      <div className="border" />
    </Grid>
  );
};

export default CloudCoverage;
