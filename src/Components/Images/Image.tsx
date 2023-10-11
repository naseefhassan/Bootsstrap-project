import React from "react";

function Image() {
  return (
    <div className="image">
      <div className="img-item">
        <div className="img">
          <img className="img-icon" src="src/assets/images/Rose.jpeg" alt="" />
        </div>
        <p>popular</p>
      </div>
      <div className="img-item">
        <div className="img">
          <img className="img-icon" src="src/assets/images/flower2.jpeg" alt="" />
        </div>
        <p>Exotic</p>
      </div>
      <div className="img-item">
        <div className="img">
          <img className="img-icon" src="src/assets/images/catus.jpeg" alt="" />
        </div>
        <p>Cactus</p>
      </div>
      <div className="img-item">
        <div className="img">
          <img className="img-icon" src="src/assets/images/flower4.jpeg" alt="" />
        </div>
        <p>Winter</p>
      </div>
      <div className="img-item">
        <div className="img">
          <img className="img-icon" src="src/assets/images/flower6.jpeg" alt="" />
        </div>
        <p>Daily</p>
      </div>
      <div className="img-item">
        <div className="img">
          <img className="img-icon" src="src/assets/images/flower7.jpeg" alt="" />
        </div>
        <p>Various</p>
      </div>
    </div>
  );
}

export default Image;
