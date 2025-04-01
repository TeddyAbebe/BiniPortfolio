import { motion, useScroll, useTransform } from "framer-motion";

const Promotion: React.FC = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 50]);

  return (
    <section
      id="promotion"
      className="relative bg-gray-900 text-white p-8 pt-24 text-center bg-cover bg-center"
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
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <h2 className="text-4xl font-bold">BINIYAM ABETU PROMOTIONS</h2>
        <p className="mt-2 cinematic text-yellow-400">
          Explore my resources for creating stunning video and photo content.
        </p>
        <motion.button
          whileHover={{
            scale: 1.1,
            boxShadow: "0 0 20px rgba(255, 215, 0, 0.8)",
            transition: { type: "spring", stiffness: 300 },
          }}
          className="mt-6 bg-yellow-400 text-gray-900 px-8 py-3 rounded-full text-lg font-semibold"
        >
          GET STARTED
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Promotion;
