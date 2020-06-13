import React, { useState } from 'react';
import { Label, Grid } from 'semantic-ui-react';
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
      <Label className="title">Cobertura de nuvem</Label>
      <Grid.Column width={16}>
        <Slider value={value} color="blue" settings={settings} />
      </Grid.Column>
      <Grid.Column className="Col" width={16}>
        <BsFillCloudFill size={30} />
        <Label className="cloudValue">{value}%</Label>
      </Grid.Column>
      <div className="border" />
    </Grid>
  );
};

export default CloudCoverage;
