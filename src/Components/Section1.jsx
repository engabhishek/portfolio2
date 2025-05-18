import React from "react";
import NavBar from "./General/NavBar";
import H1 from "./General/H1";

const Section1 = () => {
  return (
    <>
      <section className="section1 px-2">
        <NavBar />
        <div className="flex flex-col gap-8 section-1 my-8 ">
        <div>
          <div className="bg-green-500 w-65 flex justify-center text-black rounded-sm p-2 my-4 ">
            <p>Hi there! I'm Abhishek Sharma!👋</p>
          </div>
          <H1 text="A Software Engineering" />
          <p className="text-white font-mono my-4 text-xl ">
            I'm a passionate
            <b className="text-green-500"> "frontend developer"</b> with a strong
            grip on <b className="text-green-500">"React.js" </b>
            and a foundation in JavaScript, C, Python, and Java (basics). As a self-driven
            learner, I love exploring new technologies and building interactive
            web applications. <br /> <br /> Beyond coding, you'll often find me
            on the cricket field 🏏 or enjoying classic old songs 🎶. I'm always
            eager to learn, grow, and collaborate on exciting projects. <br />
            Let's connect and build something amazing together! 🚀
          </p>
        </div>
        <div className="profilePhoto mt-2 flex justify-center">
          <img className="rounded-[50%] " src="src\assets\abhi.jpg" alt="" />
        </div>
        </div>
      </section>
    </>
  );
};

export default Section1;
