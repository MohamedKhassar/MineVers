import { motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";
import { BsArrowLeft } from "react-icons/bs";

const NotFound = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-slate-950 text-white px-4 text-center relative overflow-hidden">
      <motion.h1
        className="text-6xl md:text-8xl font-extrabold mb-6 bg-gradient-to-r from-[#0092ff] via-[#7447ff] to-[#0029a5] bg-clip-text text-transparent"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        404
      </motion.h1>

      <motion.h2
        className="text-3xl md:text-4xl font-semibold mb-4"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Page Not Found
      </motion.h2>

      <motion.p
        className="text-gray-400 max-w-md mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        Sorry, the page you’re looking for doesn’t exist or has been moved.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
      >
        <HashLink
          to="/#"
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all"
        >
          <BsArrowLeft />
          Go Home
        </HashLink>
      </motion.div>
    </section>
  );
};

export default NotFound;
