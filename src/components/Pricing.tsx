import { motion, useScroll, useTransform } from "framer-motion";

const Pricing: React.FC = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 50]);

  const plans = [
    {
      name: "PRO",
      price: "$125.00",
      features: ["Event Videography", "Basic Editing", "1-Hour Shoot"],
    },
    {
      name: "AGENCY",
      price: "$425.00",
      features: ["Cinematic Video", "Drone Shots", "Full-Day Shoot"],
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
    <section
      id="pricing"
      className="relative bg-gray-900 text-white p-8 pt-24 bg-cover bg-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1511795409834-ef04bbd61622')`,
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
      }}
    >
      <motion.div
        className="absolute inset-0 backdrop-blur-md bg-black/50"
        style={{ y }}
      ></motion.div>
      <div className="relative z-10">
        <h2 className="text-4xl font-bold text-center">
          BEST PLAN PRICE FOR YOU
        </h2>
        <p className="text-center mt-2 cinematic text-yellow-400">
          Choose a plan that suits your needs.
        </p>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(255, 215, 0, 0.5)",
                transition: { type: "spring", stiffness: 300 },
              }}
              className="p-4 border border-gray-700 rounded text-center"
            >
              <h3 className="text-xl font-bold">{plan.name}</h3>
              <p className="text-2xl mt-2">{plan.price}</p>
              <ul className="mt-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="text-sm">
                    {feature}
                  </li>
                ))}
              </ul>
              <motion.button
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 0 20px rgba(255, 215, 0, 0.8)",
                  transition: { type: "spring", stiffness: 300 },
                }}
                className="mt-4 bg-yellow-400 text-gray-900 px-4 py-2 rounded-full"
              >
                VIEW MORE
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
