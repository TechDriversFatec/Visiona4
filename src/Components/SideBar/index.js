import React from 'react';
import { DiAptana } from 'react-icons/di';
import { Label } from 'semantic-ui-react';
import { Button } from 'rsuite';
import Sattelite from './sattelite';
import CloudCoverage from './cloudCoverage';
import Date from './date';

import 'semantic-ui-css/semantic.min.css';

import './style.scss';

const SideBar = () => {
  return (
    <div className="sideBar">
      <div className="title-container">
        <DiAptana size={30} />
        <Label className="title">Configurações</Label>
      </div>

      <Sattelite />
      <Date />
      <CloudCoverage />

      <div className="button">
        <Button appearance="primary">Verificar catálogo</Button>
      </div>
    </div>
  );
};

export default SideBar;
