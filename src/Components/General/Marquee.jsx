import React from "react";

const Marquee = (data) => {
  return (
    <div className="marquee-container inline-block gap-36">
      <div className="marquee-content">
        <span>{data.text} &nbsp; {data.text} &nbsp; {data.text} &nbsp; {data.text} &nbsp;</span>
      </div>
      <div className="marquee-content">
        <span>{data.text} &nbsp; {data.text} &nbsp; {data.text} &nbsp; {data.text} &nbsp;</span>
      </div>
    </div>
  );
};

export default Marquee;
