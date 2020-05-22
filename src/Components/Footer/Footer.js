import React from 'react'
import GeojsonUploadModal from "../GeojsonUploadModal";
import CloudCoverage from '../CloudCoverage/CloudCoverage'
import AOImodal from '../AOImodal/AOImodal'
import './Footer.scss'

const Footer = () => (
  <div className="footer">
    <GeojsonUploadModal />
    <CloudCoverage />
    <AOImodal />
  </div>
);

export default Footer
