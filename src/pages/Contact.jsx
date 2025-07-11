import { motion } from "framer-motion";
import { useState } from "react";
import profile from "../assets/profile.jpg";
import { FiMail, FiMapPin, FiPhone, FiSend } from "react-icons/fi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Message sent successfully!");
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Contact Me
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">
              Get In Touch
            </h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <FiMail
                  className="text-blue-600 dark:text-blue-400 mt-1 mr-3"
                  size={20}
                />
                <div>
                  <h3 className="font-medium text-gray-700 dark:text-gray-300">
                    Mr.Kritsada Kawongsa
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    You can call me 'First'.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <FiMail
                  className="text-blue-600 dark:text-blue-400 mt-1 mr-3"
                  size={20}
                />
                <div>
                  <h3 className="font-medium text-gray-700 dark:text-gray-300">
                    Email
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    kritsada.kawongsa@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <FiPhone
                  className="text-blue-600 dark:text-blue-400 mt-1 mr-3"
                  size={20}
                />
                <div>
                  <h3 className="font-medium text-gray-700 dark:text-gray-300">
                    Phone
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    +66 90 940 7505
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <FiMapPin
                  className="text-blue-600 dark:text-blue-400 mt-1 mr-3"
                  size={20}
                />
                <div>
                  <h3 className="font-medium text-gray-700 dark:text-gray-300">
                    Location
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    70/43 Chiangmai 50200, Thailand
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">
              Send a Message
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 dark:text-gray-300 mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 dark:text-gray-300 mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-gray-700 dark:text-gray-300 mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition"
              >
                <FiSend className="mr-2" />
                Send Message
              </button>
            </form>
          </div> */}

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-center">
              <img
                className="w-full h-auto max-h-[500px] rounded-lg object-cover border border-gray-200 dark:border-gray-700"
                src={profile}
                alt="My local image"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
