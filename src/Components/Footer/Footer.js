import React from "react";
import "./Footer.scss";
import GeojsonUploadModal from "../GeojsonUploadModal";

const Footer = props => (
  <div className="footer">
    {props.title}
    <GeojsonUploadModal />
  </div>
);

export default Footer
