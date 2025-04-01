import { motion, useScroll, useTransform } from "framer-motion";
import { FaVideo, FaEdit, FaLightbulb, FaFilm, FaCamera } from "react-icons/fa";
import { GiDeliveryDrone } from "react-icons/gi";

const Skills: React.FC = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 50]);

  const skills = [
    {
      name: "4K Video Production",
      icon: <FaVideo />,
      description: "Producing high-definition videos with stunning clarity.",
    },
    {
      name: "Aerial Drone Cinematography",
      icon: <GiDeliveryDrone />,
      description: "Capturing breathtaking aerial footage with drones.",
    },
    {
      name: "Advanced Editing (Premiere Pro, Final Cut Pro)",
      icon: <FaEdit />,
      description: "Expert editing for seamless, cinematic results.",
    },
    {
      name: "Lighting & Shot Composition",
      icon: <FaLightbulb />,
      description: "Mastering light and framing for perfect shots.",
    },
    {
      name: "Visual Storytelling",
      icon: <FaFilm />,
      description: "Crafting compelling narratives through visuals.",
    },
    {
      name: "Event & Wedding Photography",
      icon: <FaCamera />,
      description: "Capturing life’s special moments with precision.",
    },
  ];

  // Variants for the container to stagger the card animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger the animation of each card by 0.2 seconds
      },
    },
  };

  // Variants for each card
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="skills"
      className="relative bg-gray-900 text-white p-8 pt-24 bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1538370965046-79c0d6907d47')`,
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
      }}
    >
      {/* Nebula Effect */}
      <div className="nebula"></div>

      {/* Blurred Background with Parallax */}
      <motion.div
        className="absolute inset-0 backdrop-blur-md bg-gradient-to-b from-black/70 to-gray-900/70"
        style={{ y }}
      ></motion.div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Title with Animation */}
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl font-bold text-center text-white"
        >
          MY SKILLS
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-center mt-2 cinematic text-yellow-400 text-lg sm:text-xl"
        >
          A glimpse into my expertise as a videographer, cinematographer, and
          photographer.
        </motion.p>

        {/* Skills Container with Animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-10 p-6 w-full"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="w-48 sm:w-56 h-48 sm:h-56 flex flex-col justify-between items-center bg-gray-800/30 backdrop-blur-lg border border-gray-700/50 rounded-xl text-center py-4 px-1 cursor-pointer hover:bg-yellow-100/30 hover:scale-105 transition-transform duration-300 ease-in-out shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              {/* Icon */}
              <div className="text-yellow-400 text-4xl sm:text-5xl mb-4">
                {skill.icon}
              </div>

              {/* Skill Name */}
              <h3 className="text-sm sm:text-base font-semibold text-white">
                {skill.name}
              </h3>

              {/* Description */}
              <div className="mt-4 text-gray-300 text-xs sm:text-sm">
                {skill.description}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
