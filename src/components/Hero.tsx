import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-scroll";

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 50]); // Parallax effect

  const text = "BINIYAM ABETU";
  const subText = "Videographer | Cinematographer | Photographer";

  return (
    <section
      className="relative h-screen bg-gray-900 text-white flex items-center justify-center p-8 bg-cover bg-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1516035069371-29a1b244cc32')`,
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
      }}
    >
      <motion.div
        className="absolute inset-0 backdrop-blur-md bg-black/50"
        style={{ y }}
      ></motion.div>
      <motion.div
        className="relative z-10 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold">
          {text.split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </h1>
        <motion.p
          className="mt-4 text-xl cinematic text-yellow-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          {subText}
        </motion.p>
      </motion.div>

      {/* Scrolling Mouse Icon Positioned Near the Bottom */}
      <Link
        to="portfolio" // ID of the next section (adjust if different)
        smooth={true}
        duration={500}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer z-10"
      >
        <motion.div
          className="relative w-12 h-20 mx-auto border-2 border-yellow-400 rounded-full flex items-center justify-center"
          animate={{
            y: [0, 10, 0], // Gentle up-and-down animation
            transition: {
              repeat: Infinity,
              duration: 1.5,
              ease: "easeInOut",
            },
          }}
        >
          {/* Scroll Wheel */}
          <motion.div
            className="w-2 h-4 bg-yellow-400 rounded-full"
            animate={{
              y: [0, 4, 0], // Smaller up-and-down movement for the wheel
              transition: {
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut",
              },
            }}
          ></motion.div>
          {/* Glowing Effect */}
          <div className="absolute inset-0 rounded-full shadow-[0_0_20px_rgba(255,215,0,0.8)]"></div>
        </motion.div>
      </Link>
    </section>
  );
};

export default Hero;
