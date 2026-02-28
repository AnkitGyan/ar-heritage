import { motion } from "motion/react";
import { Camera, MapPin } from "lucide-react";

const MonumentCard = ({ monument }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={monument.image}
          alt={monument.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
          <MapPin className="w-3 h-3 text-primary" />
          <span className="text-[10px] font-bold text-primary uppercase tracking-wider">
            {monument.location}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-primary mb-2">
          {monument.name}
        </h3>
        <p className="text-gray-600 text-sm mb-6 leading-relaxed">
          {monument.description}
        </p>

        <div className="flex gap-3">
          <button className="flex-1 bg-primary text-white py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2">
           <a href={monument.arLink} target="_blank" rel="noopener noreferrer"> WebAR</a>
          </button>
          <button className="flex-1 border border-gray-200 text-gray-700 py-3 rounded-xl text-sm font-bold">
            Location
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default MonumentCard;