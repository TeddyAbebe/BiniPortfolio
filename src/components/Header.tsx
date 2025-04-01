import { motion } from "framer-motion";
import { FaCamera } from "react-icons/fa";
import { Link } from "react-scroll";

const Header: React.FC = () => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900 text-white p-4 flex justify-between items-center fixed w-full z-50"
    >
      <motion.div
        className="flex items-center space-x-2"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <FaCamera className="text-yellow-400 text-2xl" />
        <motion.div
          className="text-xl font-bold"
          whileHover={{ textShadow: "0 0 10px rgba(255, 215, 0, 0.8)" }}
        >
          BINIYAM ABETU STUDIO
        </motion.div>
      </motion.div>
      <nav className="space-x-4">
        {[
          "home",
          "portfolio",
          "about",
          "skills",
          "testimonials",
          "services",
          "pricing",
          "promotion",
          "footer",
        ].map((section, index) => (
          <Link
            key={index}
            to={section}
            smooth={true}
            duration={500}
            className="hover:text-yellow-400 cursor-pointer"
            activeClass="text-yellow-400"
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </Link>
        ))}
      </nav>
    </motion.header>
  );
};

export default Header;
