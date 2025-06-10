import React from "react";
import H1 from "./General/H1";
import Box from "./General/Box";

const Skills = () => {
  return (
    <>
      <section className="Skills">
      <div className=" p-6 text-center">
        <H1 text={"MY Skills"} />
        <div className="mt-2 my-4">
          <div className="boxItems flex justify-center gap-3 mt-2">
            <Box text={"JavaScript"} />
            <Box text={"React.js"} />
            <Box text={"Git & GitHub"} />
          </div>
          <div className="boxItems flex justify-center gap-3 mt-2">
            <Box text={"CSS"} />
            <Box text={"HTML"} />
          </div>
          <div className="boxItems flex justify-center gap-3 mt-2">
            <Box text={"C"} />
            <Box text={"Python"} />
            <Box text={"Java"} />
          </div>
        </div>
      </div>
      </section>
    </>
  );
};

export default Skills;
