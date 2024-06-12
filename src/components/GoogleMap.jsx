// in this component google map integration is done

import React from "react";

const GoogleMap = () => {
  return (
    <div className="map-area">
      <div className="maps">
        {/* code from google maps  */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15000.258133313993!2d73.75955284004114!3d19.96378813528839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb013af2e733%3A0xf9a146b2f1ffe4b0!2sGuru%20Gobind%20Singh%20College%20Of%20Engineering%20And%20Research%20Centre%2C%20Nashik!5e0!3m2!1sen!2sin!4v1718174165855!5m2!1sen!2sin"
          width="600"
          height="450"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default GoogleMap;
