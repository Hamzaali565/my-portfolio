import React from "react";
import Imgs from "../../../../Assets/Images/hamza.jpg";
const Avatar = () => {
  return (
    <div className="w-16">
      <img src={Imgs} alt="" className="rounded-3xl" />
    </div>
  );
};

export default Avatar;
