import React from 'react';
import mail from '../../src/assets/mail_icon.svg';
import phone from '../../src/assets/call_icon.svg';
import location from '../../src/assets/location_icon.svg';
import { Link, Navigate } from 'react-router-dom';
const Contactus = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    // formData.append("access_key", "c19e3dd4-ff3e-4480-a2c5-cd1040093f11");
    formData.append("access_key", "4df43386-fd83-4601-ba4a-0ef36bb8c495");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
      event.target.reset();
    }
  };

  return (
    <div id="contact" className="py-10 px-4 md:px-12 bg-gray-600 min-h-screen text-black">
      <h1 className="text-3xl md:text-5xl font-bold text-center text-white mb-10">
        Get in touch
      </h1>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Contact Info */}
        <div className="flex flex-col gap-5 lg:w-1/2 text-white">
          <h2 className="text-2xl font-semibold">Let's Talk</h2>
          <p className="text-sm md:text-base">
            Open to exciting opportunities — ready to contribute and grow in a dynamic team or project.
          </p>

          <div className="flex items-center gap-3">
            <img src={mail} alt="Mail" className="w-6" />
            <a
              className="underline hover:text-pink-300"
              href="mailto:arpitaingh134@gmail.com"
            >
              arpitaingh134@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-3">
            <img src={phone} alt="Phone" className="w-6" />
            <a
              href="tel:+918081252342"
              className="underline hover:text-pink-300"
            >
              8081252342
            </a>
          </div>

          <div className="flex items-center gap-3">
            <img
              className="rounded-full w-10 h-10"
              src="https://i.pinimg.com/736x/8f/94/c6/8f94c616ec0a60bafb4de4e0260719da.jpg"
              alt="Instagram"
            />
            <a
              className="underline hover:text-pink-300"
              href="https://www.instagram.com/arpit_singh1524/"
              target="_blank"
              rel="noopener noreferrer"
            >
              arpit_singh1524
            </a>
          </div>

          <div className="flex items-center gap-3">
            <img src={location} alt="Location" className="w-6" />
            <p>Lucknow, India</p>
          </div>
        </div>

        {/* Form */}
        <div className="lg:w-1/2 bg-white p-6 rounded-lg shadow-lg">
          <form onSubmit={onSubmit} className="flex flex-col gap-5">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Enter your name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700 font-medium mb-1">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="4"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-pink-700 hover:bg-pink-500 text-white font-semibold py-2 rounded transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <Link to='/'>
            <button className="btn bg-pink-700 hover:bg-pink-400 px-6 text-lg">Back</button>
          </Link>
    </div>
  );
};

export default Contactus;
