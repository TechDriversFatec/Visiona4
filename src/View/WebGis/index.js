import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import Header from '../../Components/Header';
import SideBar from '../../Components/SideBar';
import Map from '../../Components/Map';
import './style.scss';

const WebGis = () => {
  return (
    <div className="container">
      <Row className="row">
        <Col className="col" sm={12}>
          <Header />
        </Col>
      </Row>
      <Container className="container">
        <Row className="row">
          <Col className="col" sm={3}>
            <SideBar />
          </Col>
          <Col className="col" sm={9}>
            <Map />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WebGis;
