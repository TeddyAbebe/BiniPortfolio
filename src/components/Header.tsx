import { motion, useScroll } from "framer-motion";
import { FaCamera, FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";

const Header: React.FC = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(scrollY.get() > 50);

      const sections = [
        "home",
        "portfolio",
        "about",
        "skills",
        "testimonials",
        "services",
        "contact",
      ];
      let currentSection = "home";
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentSection = section;
          }
        }
      });
      setActiveSection(currentSection);
      window.history.replaceState(null, "", `/#${currentSection}`);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`text-white px-6 md:px-14 py-5 flex justify-between items-center fixed w-full z-50 transition-colors duration-300 ${
        isScrolled ? "bg-gray-900" : "bg-transparent"
      }`}
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
          BINI STUDIO
        </motion.div>
      </motion.div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-6 relative">
        {[
          "home",
          "portfolio",
          "about",
          "skills",
          "testimonials",
          "services",
          "contact",
        ].map((section, index) => (
          <a
            key={index}
            href={`#${section}`}
            className={`relative cursor-pointer hover:text-yellow-400 ${
              activeSection === section ? "text-yellow-400" : "text-white"
            }`}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
            {activeSection === section && (
              <motion.div
                layoutId="underline"
                className="absolute left-0 bottom-0 h-0.5 mt-1 w-full bg-yellow-400"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            )}
          </a>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white text-2xl"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 100 }}
          className="fixed top-16 right-0 w-64 h-1/2 bg-gray-900 shadow-lg flex flex-col items-center py-10 space-y-2 rounded-bl-[100px] md:hidden"
        >
          {[
            "home",
            "portfolio",
            "about",
            "skills",
            "testimonials",
            "services",
            "contact",
          ].map((section, index) => (
            <a
              key={index}
              href={`#${section}`}
              className={`text-lg cursor-pointer hover:text-yellow-400 ${
                activeSection === section ? "text-yellow-400" : "text-white"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
