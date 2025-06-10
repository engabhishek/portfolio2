import emailjs from "emailjs-com";
import React, { useState } from "react";
import H1 from "./General/H1";

const GetInTuch = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Inside your component
const handleSubmit = (e) => {
  e.preventDefault();
  if (!formData.consent) {
    alert("Please give consent before submitting.");
    return;
  }

  emailjs
    .send(
      "service_mail",     // e.g. "service_abc123"
      "template_mail",    // e.g. "template_xyz456"
      formData,
      "VO-qHz2jQt9w7Fl0f"      // e.g. "user_d8r17a8sd9f"
    )
    .then(
      (result) => {
        alert("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          message: "",
          consent: false,
        });
      },
      (error) => {
        console.error("Failed to send message:", error.text);
        alert("Something went wrong. Please try again.");
      }
    );
};

  return (
    <>
      <section className="GetInTuch px-2">
        <div className="tuch">
          <div className="flex-col gap-4">
            <div>
              <H1 text={"Get In Touch"} />
              <p className="text-white font-mono my-4 text-xl">
                Let's build something amazing together! 🚀 Whether you have a
                project idea 💡, want to collaborate 🤝, or just want to say
                hello 👋, I'd love to hear from you. Drop me a message ✉️, and
                let's make things happen! 🎯
              </p>
            </div>
            <div className="flex justify-center w-full">
              <img
                className="rounded-4xl w-70"
                src="src/assets/get in tuch.webp"
                alt=""
              />
            </div>
          </div>
          <div className="w-full bg-black m-3 rounded-2xl">
            <form onSubmit={handleSubmit} className="mx-4 mt-2">
              <input
                className="border rounded-xl p-4 mt-2 w-full border-gray-700 bg-gray-800 text-white outline-none"
                type="text"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                className="border rounded-xl p-4 mt-2 w-full border-gray-700 bg-gray-800 text-white outline-none"
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                className="w-full p-4 mt-2 bg-gray-800 border border-gray-700 rounded-xl text-white h-55 outline-none"
                value={formData.message}
                onChange={handleChange}
                required
              />
              <div className="flex items-start mt-2 text-white font-mono">
                <input
                  className="m-1 bg-gray-800 rounded-xl"
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                />
                <p>
                  By clicking "Submit", you give me permission to store your
                  data and contact you. Your information will never be shared
                  with others.
                </p>
              </div>
              <button
                className="bg-green-500 p-2 rounded-xl mt-2 w-full text-black font-bold text-lg"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default GetInTuch;
