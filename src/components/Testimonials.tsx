import { motion, useScroll, useTransform } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import { useState } from "react";

const Testimonials: React.FC = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 50]);

  const testimonials = [
    {
      name: "Cort Potter",
      role: "CEO & Founder",
      text: "Biniyam’s cinematography skills brought our brand story to life!",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    },
    {
      name: "Allison Brooks",
      role: "Event Planner",
      text: "The wedding video Biniyam created was absolutely stunning.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    },
    {
      name: "Zechariah Lewis",
      role: "Marketing Director",
      text: "His drone shots added a cinematic flair to our campaign.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: 90 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section
      id="testimonials"
      className="relative bg-gray-900 text-white p-8 pt-24 bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1519741497674-611481863552')`,
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
      }}
    >
      {/* Starfield Effect */}
      <div className="starfield"></div>

      {/* Blurred Background with Parallax */}
      <motion.div
        className="absolute inset-0 backdrop-blur-md bg-gradient-to-b from-black/70 to-gray-900/70"
        style={{ y }}
      ></motion.div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl font-bold text-center text-white"
        >
          WHAT CLIENTS SAY ABOUT BINIYAM
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-center mt-2 cinematic text-yellow-400 text-lg sm:text-xl"
        >
          Hear from those who’ve worked with me.
        </motion.p>

        {/* Carousel Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative mt-10 flex items-center justify-center"
        >
          {/* Previous Button */}
          <motion.button
            onClick={handlePrev}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="absolute left-0 sm:left-4 text-yellow-400 text-3xl z-20"
          >
            ←
          </motion.button>

          {/* Testimonial Card */}
          <motion.div
            key={activeIndex}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="relative w-full max-w-md sm:max-w-lg p-6 bg-gray-800/30 backdrop-blur-lg border border-gray-700/50 rounded-xl text-center group"
          >
            {/* Spotlight Effect */}
            <motion.div
              className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-yellow-400/50 transition-all duration-300"
              animate={{
                boxShadow: [
                  "0 0 20px rgba(255, 215, 0, 0.3)",
                  "0 0 40px rgba(255, 215, 0, 0.6)",
                  "0 0 20px rgba(255, 215, 0, 0.3)",
                ],
              }}
              transition={{ repeat: Infinity, duration: 3 }}
            ></motion.div>

            {/* Avatar */}
            <motion.img
              src={testimonials[activeIndex].avatar}
              alt={testimonials[activeIndex].name}
              className="w-16 h-16 rounded-full mx-auto mb-4 object-cover border-2 border-yellow-400"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            />

            {/* Quote Icon */}
            <motion.div
              className="text-yellow-400 text-2xl mb-4"
              whileHover={{ scale: 1.2, rotate: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaQuoteLeft />
            </motion.div>

            {/* Testimonial Text */}
            <p className="text-gray-200 text-sm sm:text-base">
              {testimonials[activeIndex].text}
            </p>

            {/* Name and Role */}
            <p className="mt-4 font-bold text-white">
              {testimonials[activeIndex].name}
            </p>
            <p className="text-yellow-400 cinematic text-sm">
              {testimonials[activeIndex].role}
            </p>
          </motion.div>

          {/* Next Button */}
          <motion.button
            onClick={handleNext}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="absolute right-0 sm:right-4 text-yellow-400 text-3xl z-20"
          >
            →
          </motion.button>
        </motion.div>

        {/* Dots for Navigation */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <motion.div
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                activeIndex === index ? "bg-yellow-400" : "bg-gray-500"
              }`}
              whileHover={{ scale: 1.3 }}
              transition={{ type: "spring", stiffness: 300 }}
            ></motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
