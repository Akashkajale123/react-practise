import React from "react";
import "./Description.css";
const Description = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box" >Description</div>
        <div className="descriptionbox-nav-box fade" >
          Reviews {122}
        </div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
          accusamus culpa obcaecati architecto exercitationem, dignissimos
          asperiores perferendis atque laboriosam iure, odio quidem, totam
          dolorem veritatis amet. Porro facilis soluta eius.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi sequi
          ducimus quis odio quae similique sint deleniti laborum consequuntur
          minus.
        </p>
      </div>
    </div>
  );
};

export default Description;
