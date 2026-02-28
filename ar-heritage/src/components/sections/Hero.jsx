import { motion } from "motion/react";
import { Camera, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1920&q=80"
          alt="Indian Heritage"
          className="w-full h-full object-cover"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Gradient overlay (from your custom CSS) */}
        <div className="absolute inset-0 gradient-overlay"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-white">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
            DHAROHAR – <br />
            <span className="text-accent">
              Explore. Experience. Preserve.
            </span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-gray-200 font-light">
            Experience the grandeur of Indian heritage through immersive WebAR.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-accent text-primary px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:scale-105 transition-transform shadow-lg">
              <Camera className="w-5 h-5" />
              View in AR
            </button>

            <button className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-white/30 transition-all">
              <MapPin className="w-5 h-5" />
              Explore on Map
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white flex flex-col items-center gap-2"
      >
        <span className="text-sm uppercase tracking-widest opacity-70">
          Scroll to explore
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-white to-transparent"></div>
      </motion.div>

    </section>
  );
};

export default Hero;