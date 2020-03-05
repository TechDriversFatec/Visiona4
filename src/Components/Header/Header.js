import React from 'react'
import './Header.scss'
import {SelectDropdown} from '../SelectDropdown'

const Header = (props) => (
  <div className="header">
    {props.title}
    <SelectDropdown />
  </div>
)
export default Header
