import React from 'react'
import GeojsonUploadModal from "../GeojsonUploadModal";
import CloudCoverage from '../CloudCoverage/CloudCoverage'
import './Footer.scss'

const Footer = props => (
  <div className="footer">
    {props.title}
    <CloudCoverage />
    <GeojsonUploadModal />
  </div>
);

export default Footer
