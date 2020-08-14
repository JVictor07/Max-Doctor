import React from "react";
import LogoImage from '../../../assets/logo_maxi_doctor.png'

import "./Logo.scss";

const UILogo = ({ description }) => (
  <div className="logo">
    <h1>Max doctor</h1>
    <img src={LogoImage} alt="Max Doctor" />
    {description && (
      <strong className="logo__description">
        {description}
      </strong>
    )}
  </div>
);

export default UILogo;
