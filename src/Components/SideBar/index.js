import React, { useState } from 'react';
import { DiAptana } from 'react-icons/di';
import { Label } from 'semantic-ui-react';
import { Button } from 'rsuite';
import ModalGeoJSON from './modalGeoJSON';
import CloudCoverage from './cloudCoverage';
import Date from './date';

import 'semantic-ui-css/semantic.min.css';

import './style.scss';

const SideBar = (props) => {
  const [cloud, setCloud] = useState(50);
  const [rangedate, setDate] = useState(50);
  const { onClickButton = () => {}, bbox } = props;

  const data = {
    cloudCoverage: cloud,
    rangedate,
    coords: bbox,
  };

  function getSideBarData() {
    onClickButton(data);
  }

  return (
    <div className="sideBar">
      <div className="title-container">
        <DiAptana size={30} />
        <Label className="title">Configurações</Label>
      </div>

      <Date RangeDate={(date) => setDate(date)} />
      <CloudCoverage CloudChange={(e) => setCloud(e)} />

      <ModalGeoJSON
        className="modal-geojson"
        onClose={(f) => {
          console.log(f);
        }}
      />
      <div className="button">
        <Button onClick={getSideBarData} appearance="primary">
          Verificar catálogo
        </Button>
      </div>
    </div>
  );
};

export default SideBar;
