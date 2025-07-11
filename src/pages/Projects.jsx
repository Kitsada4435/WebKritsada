import { motion } from "framer-motion";
import { FiStar, FiExternalLink } from "react-icons/fi";

const Projects = () => {
  const projects = [
    // {
    //   img: null,
    //   title: "ProjectCoding",
    //   description:
    //     "A showcase of coding projects and experiments that demonstrate frontend development skills and problem-solving abilities. Explore various interfaces and interactive ideas crafted with passion",
    //   year: "Current",
    //   tags: ["Codeing"],
    //   Hilight:
    //     "https://drive.google.com/drive/folders/1nquL75G76QRhii2ZiqNFrmhTP0bZCb0v?usp=sharing",
    //   More: "https://drive.google.com/drive/folders/1nquL75G76QRhii2ZiqNFrmhTP0bZCb0v?usp=sharing",
    // },
    {
      img: null,
      title: "Personal Website",
      description:
        "It is an example work of developing a personal website and programming in java script using React+Vite.",
      year: "2025",
      tags: ["Codeing,React,Vite"],
      Hilight: "https://web-kritsada.vercel.app/",
      More: "https://github.com/Kitsada4435/WebKritsada",
    },
    {
      img: null,
      title: "Speaker",
      description:
        "A portfolio of public speaking experiences and presentations. Highlights sessions where ideas, creativity, and technical topics were shared with audiences in engaging and impactful ways.",
      year: "Current",
      tags: ["Speaker"],
      Hilight:
        "https://drive.google.com/drive/folders/1S2lzY0T-uX5EqNlGCDmQ3l07Y5EKkUed?usp=sharing",
      More: "https://drive.google.com/drive/folders/1S2lzY0T-uX5EqNlGCDmQ3l07Y5EKkUed?usp=sharing",
    },
    {
      img: null,
      title: "ShortVideo",
      description:
        "A collection of short-form video editing works, featuring creative cuts, storytelling, and visual rhythm. Ideal for social media formats and content with dynamic presentation styles.",
      year: "Current",
      tags: ["ShortVideo"],
      Hilight:
        "https://drive.google.com/drive/folders/1DHgDtReSilFunDfBkGozTebHe90lbYbO?usp=sharing",
      More: "https://drive.google.com/drive/folders/1DHgDtReSilFunDfBkGozTebHe90lbYbO?usp=sharing",
    },
    {
      img: null,
      title: "Infographic Design",
      description:
        "An album of infographic, banner, and logo designs used across various projects. These visuals reflect both informative clarity and aesthetic appeal, crafted with thoughtful design principles.",
      year: "NOW",
      tags: ["Infographic,Banner,Logo"],
      Hilight:
        "https://drive.google.com/drive/folders/1KOr_QQIWvBhsFn2-q8JhTL2ENBdTwUjk?usp=sharing",
      More: "https://drive.google.com/drive/folders/1KOr_QQIWvBhsFn2-q8JhTL2ENBdTwUjk?usp=sharing",
    },
    {
      img: null,
      title: "Vital TikTok Clip (CMC.cct)",
      description:
        "Contributed to ideation, production, and publishing strategy for a viral TikTok clip reaching 1.1M views and 22.8K likes. Managed editing and platform optimization as part of the content team under an organizational account.",
      year: "2023-2024",
      tags: ["Video Editing", "Content Strategy", "Viral Content"],
      Hilight: "https://www.tiktok.com/@cmc.cct/video/7418135753277852946",
      More: "https://www.tiktok.com/@cmc.cct",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          My Projects
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
            >
              {/* เพิ่มส่วนแสดงรูปภาพที่นี่ */}
              {project.img && (
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.img}
                    alt={project.title || "Project image"}
                    crossOrigin="anonymous"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {project.title}
                </h2>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {project.year}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.Hilight}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
                  >
                    <FiStar className="mr-1" /> Hilight
                  </a>
                  <a
                    href={project.More}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
                  >
                    <FiExternalLink className="mr-1" /> More
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
