import { motion } from "framer-motion";

const Portfolio: React.FC = () => {
  const projects = [
    {
      image: "https://images.unsplash.com/photo-1519741497674-611481863552",
      title: "Wedding Video",
      link: "#project1",
    },
    {
      image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
      title: "Drone Shot",
      link: "#project2",
    },
    {
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622",
      title: "Event Photography",
      link: "#project3",
    },
    {
      image: "https://images.unsplash.com/photo-1534447677768-be436bb09401",
      title: "Cinematic Film",
      link: "#project4",
    },
  ];

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
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="portfolio" className="bg-gray-900 text-white p-8 pt-24">
      <h2 className="text-4xl font-bold text-center">PORTFOLIO</h2>
      <p className="text-center mt-2 cinematic text-yellow-400">
        A collection of my best work in videography, cinematography, and
        photography.
      </p>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 mt-6"
      >
        {projects.map((project, index) => (
          <motion.a
            key={index}
            href={project.link}
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px rgba(255, 215, 0, 0.5)",
              rotate: 2,
              transition: { type: "spring", stiffness: 300 },
            }}
            className="relative group mb-4 block"
          >
            <img
              src={project.image}
              alt={project.title}
              className={`w-full h-64 object-cover rounded`}
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="text-white font-semibold">{project.title}</p>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
};

export default Portfolio;
