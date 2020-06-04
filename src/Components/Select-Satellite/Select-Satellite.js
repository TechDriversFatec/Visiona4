import React from 'react';
import { Select } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateSatelliteType } from '../../action';

import IconSatellite from '../../icon/satellite2.png';

import 'semantic-ui-css/semantic.min.css';
import './Select-Satellite.scss';

const satelliteOptions = [
  {
    key: 'sentinel',
    value: 'sentinel',
    text: 'Sentinel - 2',
  },
  {
    key: 'blank',
    value: 'blank',
    text: 'Nenhum',
  },
];

function SelectSatellite(props) {
  // eslint-disable-next-line no-shadow
  const { updateSatelliteType } = props;

  function SatelliteType(e, { value }) {
    updateSatelliteType(value);
  }

  return (
    <div className="select-satellite">
      <span className="type-satellite">Selecione o tipo de Satélite:</span>
      <img src={IconSatellite} alt="icon" className="icon-satellite" />
      <Select
        placeholder="Selecione um satélite"
        options={satelliteOptions}
        onChange={SatelliteType}
      />
    </div>
  );
}

const storeToProps = (store) => ({
  satellite_type: store.satelliteTypeState.satellite_type,
});
const dispatchToProps = (dispatch) =>
  bindActionCreators({ updateSatelliteType }, dispatch);

export default connect(storeToProps, dispatchToProps)(SelectSatellite);
