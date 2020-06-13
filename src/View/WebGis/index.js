import React from 'react';
import { Grid } from 'semantic-ui-react';
import Header from '../../Components/Header';
import SideBar from '../../Components/SideBar';
import Map from '../../Components/Map';
import './style.scss';

const WebGis = () => {
  return (
    <div style={{ height: '100%' }}>
      <Header />
      <div className="container">
        <Grid style={{ height: '100%' }}>
          <Grid.Column width={5} className="col">
            <SideBar />
          </Grid.Column>
          <Grid.Column width={11} className="col">
            <Map />
          </Grid.Column>
        </Grid>
      </div>
      {/* <Container className="container"> */}
      {/* <Row className="row"> */}
      {/* <Col className="col" sm={3}> */}

      {/* </Col> */}
      {/* <Col className="col" sm={9}> */}
      {/* <Map /> */}
      {/* </Col> */}
      {/* </Row> */}
      {/* </Container> */}
    </div>
  );
};

export default WebGis;
