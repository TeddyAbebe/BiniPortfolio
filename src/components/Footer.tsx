import { motion, useScroll, useTransform } from "framer-motion";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer: React.FC = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 50]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer
      id="footer"
      className="relative text-white pt-24 pb-8 bg-cover bg-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')`,
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
      }}
    >
      <motion.div
        className="absolute inset-0 backdrop-blur-md bg-black/50"
        style={{ y }}
      ></motion.div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        {/* Studio Name */}
        <motion.div
          variants={itemVariants}
          className="text-2xl sm:text-3xl font-bold text-white"
        >
          BINIYAM ABETU STUDIO
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="mt-2 text-sm sm:text-base cinematic text-yellow-400"
        >
          Videographer | Cinematographer | Photographer
        </motion.p>

        {/* Navigation Links */}
        <motion.div
          variants={containerVariants}
          className="mt-6 flex flex-wrap justify-center gap-4 sm:gap-6"
        >
          {["Home", "About", "Services", "Portfolio", "Contact"].map(
            (item, index) => (
              <motion.a
                key={index}
                href={`#${item.toLowerCase()}`}
                variants={itemVariants}
                className="text-gray-300 hover:text-yellow-400 text-sm sm:text-base"
                whileHover={{
                  scale: 1.1,
                  textShadow: "0 0 10px rgba(255, 215, 0, 0.8)",
                  transition: { type: "spring", stiffness: 300 },
                }}
              >
                {item}
              </motion.a>
            )
          )}
        </motion.div>

        {/* Social Icons */}
        <motion.div
          variants={containerVariants}
          className="mt-6 flex justify-center gap-4 sm:gap-6"
        >
          {[
            { icon: <FaFacebook size={24} />, link: "#" },
            { icon: <FaInstagram size={24} />, link: "#" },
            { icon: <FaTwitter size={24} />, link: "#" },
            { icon: <FaYoutube size={24} />, link: "#" },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.link}
              variants={itemVariants}
              className="text-yellow-400 hover:text-yellow-300"
              whileHover={{
                scale: 1.2,
                boxShadow: "0 0 15px rgba(255, 215, 0, 0.6)",
                transition: { type: "spring", stiffness: 300 },
              }}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Copyright */}
        <motion.p
          variants={itemVariants}
          className="mt-6 text-gray-400 text-xs sm:text-sm"
        >
          © 2025 Biniyam Abetu. All Rights Reserved.
        </motion.p>
      </motion.div>
    </footer>
  );
};

export default Footer;
