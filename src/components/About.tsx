import { motion, useScroll, useTransform } from "framer-motion";

const About: React.FC = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 50]);

  return (
    <section
      id="about"
      className="relative bg-gray-900 text-white flex flex-col md:flex-row items-center p-8 pt-24 bg-cover bg-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1534447677768-be436bb09401')`,
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
      }}
    >
      <motion.div
        className="absolute inset-0 backdrop-blur-md bg-black/50"
        style={{ y }}
      ></motion.div>
      <motion.div
        initial={{ x: -100 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.8 }}
        className="md:w-1/2 relative z-10"
      >
        <h2 className="text-4xl font-bold">HELLO, I'M BINIYAM ABETU</h2>
        <p className="mt-4 cinematic text-yellow-400">
          Videographer, Cinematographer, Photographer
        </p>
        <p className="mt-4">
          I’m a passionate visual storyteller with over 8 years of experience in
          creating stunning videos and photographs. From cinematic wedding films
          to high-impact branding videos, I bring creativity and technical
          expertise to every project.
        </p>
        <p className="mt-2">
          My work has been recognized with a "Best Cinematography" award at a
          local film festival, and I’ve produced over 200 event videos with a
          100% client satisfaction rate.
        </p>
      </motion.div>
      <motion.div
        initial={{ y: 100 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.8 }}
        className="md:w-1/2 mt-6 md:mt-0 relative z-10"
      >
        <motion.img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
          alt="Biniyam Abetu"
          className="w-full max-w-md mx-auto h-96 object-cover rounded-lg shadow-lg"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
};

export default About;
