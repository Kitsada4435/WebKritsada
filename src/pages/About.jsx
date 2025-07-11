import { motion } from "framer-motion";
import { FiUser, FiAward, FiBriefcase } from "react-icons/fi";
import { BiSolidGraduation } from "react-icons/bi";

const About = () => {
  const skills = [
    { name: "Infographic,Banner & Logo", level: "90%" },
    { name: "Slide Presentation", level: "85%" },
    { name: "Frontend Dev (React Vite & tailwind)", level: "80%" },
    { name: "Node.js", level: "80%" },
  ];
const education = [
  {
    degree: "Master of Engineering (Computer Engineering)",
    status: "Currently Studying",
    university: "Chiang Mai University",
    year: null,
    gpa: null // สามารถเพิ่ม GPA ได้ถ้ามี
  },
  {
    degree: "Bachelor of Education (Computer Education)",
    status: "Graduated",
    university: "Rajabhat Chiang Mai University",
    year: 2023,
    gpa: 3.98 // สามารถเพิ่ม GPA ได้ถ้ามี
  }
];

  const experiences = [
    {
      role: "Coach",
      company: "IDEKTEP CO., LTD.",
      period: "2023 - present",
      description:
        "Teaching and practicing basic electrical circuit construction. Create an atmosphere in the classroom and preparation of the venue",
    },
    {
      role: "Spacial teacher",
      company: "Chiangmai Christian School",
      period: "2023 - 2025",
      description:
        "Create a technology curriculum for elementary and middle school levels. Content creator, takes photos, videos, and creates multimedia such as Youtube, tiktok, facebook and other.",
    },
    {
      role: "Procurement Manager",
      company: "R.K.Y Supply limited partnership",
      period: "2022 - 2023",
      description:
        "Coordinate, purchase and sell, source products, compare product prices, create a database, design website pages for viewing inventory.",
    },
    {
      role: "Inturn teacher",
      company: "Kawilawittayalai school",
      period: "2021 - 2022",
      description:
        "Information Technology Department, organizes live broadcasts, takes photos and designs for social media posts.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen py-8 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 text-center">
          About Me
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 sm:mb-12">
          {/* Personal Info */}
          <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-3 sm:mb-4">
              <FiUser
                className="text-blue-600 dark:text-blue-400 mr-2"
                size={20}
              />
              <h2 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-200">
                Personal Info
              </h2>
            </div>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-3 sm:mb-4">
              "Hello, I'm Kritsada Khawongsa (Digital Designer and Web) <br />
              Developer specializing in infographic design, video editing,
              presentation development, and front-end website implementation."{" "}
            </p>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-3 sm:mb-4">
              "สวัสดีครับ ผมกฤษฎา คะวงษา (นักออกแบบสื่อดิจิทัลและพัฒนาเว็บไซต์){" "}
              <br />
              รับออกแบบอินโฟกราฟิก ตัดต่อวิดีโอ สร้างงานนำเสนอ และพัฒนาเว็บไซต์
              Front-end"
            </p>
            <ul className="space-y-2">
              <li className="flex flex-col sm:flex-row">
                <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300 font-medium sm:w-24">
                  Email:
                </span>
                <span className="text-sm sm:text-base text-gray-600 dark:text-gray-400 break-all">
                  kritsada.kawongsa@gmail.com
                </span>
              </li>
              <li className="flex flex-col sm:flex-row">
                <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300 font-medium sm:w-24">
                  Line ID:
                </span>
                <span className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                  kitsada44351
                </span>
              </li>
              <li className="flex flex-col sm:flex-row">
                <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300 font-medium sm:w-24">
                  TEL:
                </span>
                <span className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                  0909407505
                </span>
              </li>{" "}
              <li className="flex flex-col sm:flex-row">
                <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300 font-medium sm:w-24">
                  Location:
                </span>
                <span className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                  Chiangmai, Thailand
                </span>
              </li>
            </ul>
          </div>

          {/* Skills */}
          <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow-md">
            
            <div className="space-y-3">
              {/* Skills */}
            <div className="flex items-center mb-3 sm:mb-4">
              <FiAward
                className="text-blue-600 dark:text-blue-400 mr-2"
                size={20}
              />
              <h2 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-200">
                Experience and Expertise.
              </h2>
            </div>
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300 font-medium">
                      {skill.name}
                    </span>
                    <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                      {skill.level}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-blue-600 dark:bg-blue-400 h-2 rounded-full"
                      style={{ width: skill.level }}
                    ></div>
                  </div>
                </div>
              ))}
              <div className="flex items-center mb-3 sm:mb-4">
                <BiSolidGraduation
                  className="text-blue-600 dark:text-blue-400 mr-2"
                  size={20}
                />
                <h2 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-200">
                  Education.
                </h2>
              </div>
              {/*degree */}
              {education.map((edu, index) => (
        <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <div className="flex justify-between items-start mb-1">
            <div>
              <h3 className="text-lg font-medium text-gray-800 dark:text-white">
                {edu.degree}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {edu.university}
              </p>
            </div>
            <div className="text-right">
              {edu.year && (
                <span className="text-sm text-gray-600 dark:text-gray-300">
                  {edu.year}
                </span>
              )}
              {edu.status && (
                <span className={`block text-xs ${edu.status === "Graduated" ? "text-green-600 dark:text-green-400" : "text-blue-600 dark:text-blue-400"}`}>
                  {edu.status}
                </span>
              )}
            </div>
          </div>
          
          {edu.gpa && (
            <div className="mt-2">
              <span className="text-sm text-gray-700 dark:text-gray-200">
                GPA: <strong>{edu.gpa}</strong>
              </span>
            </div>
          )}
        </div>
      ))}
            </div>
          </div>
        </div>

        {/* Work Experience */}
        <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4 sm:mb-6">
            <FiBriefcase
              className="text-blue-600 dark:text-blue-400 mr-2"
              size={20}
            />
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-200">
              Work Experience
            </h2>
          </div>
          <div className="space-y-4 sm:space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="border-l-2 sm:border-l-4 border-blue-600 dark:border-blue-400 pl-3 sm:pl-4"
              >
                <h3 className="text-base sm:text-lg font-medium text-gray-800 dark:text-gray-200">
                  {exp.role} at {exp.company}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-1 sm:mb-2">
                  {exp.period}
                </p>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
