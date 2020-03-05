import React, {useState} from 'react'
import { Select } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import './Select-Satellite.scss'


const satelliteOptions = [
  {
    key: 'sentinel',
    value: 'sentinel',
    text: 'Sentinel - 2'
  },
  {
    key: 'blank',
    value: 'blank',
    text: 'Nenhum'
  }
]

function SatelliteType(e, {value}) {
  const satellite = value;
  console.log(satellite)
  return satellite
}

function SelectSatellite () {
  return(
    <div>
      <span className="type-satellite">Selecione o tipo de Satélite</span>
      <Select placeholder='Selecione um satélite' options={satelliteOptions} onChange={SatelliteType}  />
    </div>
  )
}



export default SelectSatellite
