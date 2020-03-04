import React from 'react'
import './Header.scss'

const Header = (props) => (
  <div className="header">
    {props.title}
  </div>
)

export default Header
