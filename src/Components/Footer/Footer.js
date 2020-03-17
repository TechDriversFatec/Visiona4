import React from 'react'
import GeojsonUploadModal from "../GeojsonUploadModal";
import CloudCoverage from '../CloudCoverage/CloudCoverage'
import './Footer.scss'

const Footer = () => (
  <div className="footer">
    <GeojsonUploadModal />
    <CloudCoverage />
  </div>
);

export default Footer
