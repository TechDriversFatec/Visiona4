import React from 'react'
import SelectSatellite from '../Select-Satellite/Select-Satellite'
import {SelectDropdown} from '../SelectDropdown'
import './Header.scss'

const Header = () => (
  <div className="header">
    <SelectSatellite />
    <SelectDropdown />
  </div>
)
export default Header
