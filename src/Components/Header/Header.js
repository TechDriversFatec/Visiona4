import React from 'react'
import SelectSatellite from '../Select-Satellite/Select-Satellite'
import {SelectDropdown} from '../SelectDropdown'
import './Header.scss'

const Header = (props) => (
  <div className="header">
    <SelectSatellite />
    {props.title}
    <SelectDropdown />
  </div>
)
export default Header
