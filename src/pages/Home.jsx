import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";
const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* รอเพิ่มรูปโปรไฟล์ */}
        <div className="flex items-center justify-center pb-8 ">
          <img
            className="min-w-[200px] min-h-[100px] w-1/3 h-auto rounded-lg object-cover"
            src={profile}
            alt="My local image"
          />
        </div>

        <h1 class="text-6xl font-bold text-blue-200 [text-shadow:_0_0_10px_#3b82f6,_0_0_20px_#3b82f6] pb-8">
          Kritsada Kawongsa
        </h1>
        <h2 className="text-3xl font-regular text-gray-900 dark:text-white mb-6">
          Welcome to My Portfolio
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          I'm proud to present my projects and experiences on my journey.
        </p>
      </div>
    </motion.div>
  );
};

export default Home;
