import { motion } from "motion/react";

const CTASection = () => {
  return (
    <section className="relative py-28 bg-cream overflow-hidden">

      {/* Soft Accent Glow */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight"
        >
          Ready to Explore India’s
          <span className="text-accent"> Timeless Heritage?</span>
        </motion.h2>

        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
          Discover monuments in immersive WebAR, experience history
          from your own space, and become part of the preservation movement.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-primary text-white px-12 py-5 rounded-full font-bold text-lg shadow-xl hover:bg-opacity-90 transition-all"
        >
          Begin Your Journey
        </motion.button>

      </div>

    </section>
  );
};

export default CTASection;