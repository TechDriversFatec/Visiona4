import React from 'react';
import { BsMap } from 'react-icons/bs';
import { Dropdown, Label } from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css';
import './style.scss';

const Sattelite = () => {
  const Options = [
    {
      key: 'B02',
      text: <span className="sattelite">B02</span>,
      value: 'B02',
      image: <BsMap size={25} />,
    },
    {
      key: 'B03',
      text: <span className="sattelite">B03</span>,
      value: 'B03',
      image: <BsMap size={25} />,
    },
    {
      key: 'B04',
      text: <span className="sattelite">B04</span>,
      value: 'B04',
      image: <BsMap size={25} />,
    },
    {
      key: 'B08',
      text: <span className="sattelite">B08</span>,
      value: 'B08',
      image: <BsMap size={25} />,
    },
  ];

  // function to get band selected
  function getBand(e, { value }) {
    console.log('banda -->', value);
  }

  return (
    <div className="container">
      <Label className="title">Selecione a banda desejável:</Label>
      <div className="select-container">
        <Dropdown
          placeholder="Select Friend"
          fluid
          selection
          options={Options}
          onChange={getBand}
        />
      </div>
      <div className="border" />
    </div>
  );
};

export default Sattelite;
