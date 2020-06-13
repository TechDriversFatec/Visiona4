import React, { useState } from 'react';
import { Grid } from 'semantic-ui-react';
import Header from '../../Components/Header';
import SideBar from '../../Components/SideBar';
import Map from '../../Components/Map';
import './style.scss';

const WebGis = () => {
  const [bbox, setBBox] = useState();

  return (
    <div style={{ height: '100%' }}>
      <Header />
      <div className="container">
        <Grid style={{ height: '100%' }}>
          <Grid.Column width={5} className="col">
            <SideBar
              onClickButton={(data) => console.log('dados ->', data)}
              bbox={bbox}
            />
          </Grid.Column>
          <Grid.Column width={11} className="col">
            <Map GetBBox={(data) => setBBox(data)} />
          </Grid.Column>
        </Grid>
      </div>
    </div>
  );
};

export default WebGis;
