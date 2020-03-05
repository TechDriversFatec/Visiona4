import React from 'react'
import SelectSatellite from '../Select-Satellite/Select-Satellite'
import {SelectDropdown} from '../SelectDropdown'
import './Header.scss'

const Header = () => (
  <div className="header">
    <h1 className="title">Talhões</h1>
    <SelectSatellite />
    <SelectDropdown />
  </div>
)
export default Header
