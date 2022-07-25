import React from 'react';
import './industries.css';

function IndustriesGraphic({ graphicTitle, graphicSubtitle ,graphicImgUrl,bgColor}) {
  return (
    <div className="secondSection">
      <div className="container">
        <div className="indGraphicBox" style={{backgroundColor:bgColor}}>
          <div className="leftSection">
            <h2>{graphicTitle}</h2>
            <p>{graphicSubtitle}</p>
          </div>
          <div className="rightSection">
            <div className="graphicsImage">
              <img src={graphicImgUrl}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndustriesGraphic;