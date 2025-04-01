import { motion, useScroll, useTransform } from "framer-motion";
import { FaVideo, FaCamera, FaFilm } from "react-icons/fa";
import { GiDeliveryDrone } from "react-icons/gi";

const Services: React.FC = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 50]);

  const services = [
    {
      name: "Event Videography",
      icon: <FaVideo />,
      description:
        "Capture every moment of your event with stunning clarity and emotion.",
    },
    {
      name: "Wedding Films",
      icon: <FaCamera />,
      description: "Create a timeless cinematic memory of your special day.",
    },
    {
      name: "Branding Videos",
      icon: <FaFilm />,
      description: "Elevate your brand with high-impact, story-driven videos.",
    },
    {
      name: "Aerial Drone Shots",
      icon: <GiDeliveryDrone />,
      description:
        "Add a breathtaking perspective with professional drone footage.",
    },
  ];

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
    hidden: { opacity: 0, y: 50, rotateX: 45 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  return (
    <section
      id="services"
      className="relative bg-gray-900 text-white p-8 pt-24 bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c')`,
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
      }}
    >
      {/* Particle Effect */}
      <div className="particles"></div>

      {/* Blurred Background with Parallax */}
      <motion.div
        className="absolute inset-0 backdrop-blur-md bg-gradient-to-b from-black/70 to-gray-900/70"
        style={{ y }}
      ></motion.div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl font-bold text-center text-white"
        >
          BINIYAM'S SERVICES
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-center mt-2 cinematic text-yellow-400 text-lg sm:text-xl"
        >
          High-quality video and photography services tailored to your needs.
        </motion.p>

        {/* Services Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                rotateX: 10,
                rotateY: 10,
                boxShadow: "0 0 30px rgba(255, 215, 0, 0.7)",
                transition: { type: "spring", stiffness: 300 },
              }}
              className="relative p-6 bg-gray-800/30 backdrop-blur-lg border border-gray-700/50 rounded-xl text-center flex flex-col items-center justify-center group"
            >
              {/* Glowing Icon */}
              <motion.div
                className="text-yellow-400 text-4xl mb-4"
                whileHover={{
                  scale: 1.2,
                  rotate: 360,
                  transition: { duration: 0.5 },
                }}
              >
                {service.icon}
              </motion.div>

              {/* Service Name */}
              <h3 className="text-lg font-semibold text-white">
                {service.name}
              </h3>

              {/* Description (Visible on Hover) */}
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                whileHover={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.3 }}
                className="mt-2 text-gray-300 text-sm overflow-hidden"
              >
                {service.description}
              </motion.div>

              {/* Glowing Border Effect */}
              <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-yellow-400/50 transition-all duration-300"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* View Services Button */}
        <motion.button
          whileHover={{
            scale: 1.1,
            boxShadow: "0 0 30px rgba(255, 215, 0, 0.8)",
          }}
          animate={{
            boxShadow: [
              "0 0 10px rgba(255, 215, 0, 0.5)",
              "0 0 20px rgba(255, 215, 0, 0.8)",
              "0 0 10px rgba(255, 215, 0, 0.5)",
            ],
          }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="mt-10 bg-yellow-400 text-gray-900 px-8 py-3 rounded-full text-lg font-semibold block mx-auto"
        >
          VIEW SERVICES
        </motion.button>
      </div>
    </section>
  );
};

export default Services;
