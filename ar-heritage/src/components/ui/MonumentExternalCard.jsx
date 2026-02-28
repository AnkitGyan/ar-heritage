const MonumentExternalCard = ({ monument }) => {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">

      {/* Image Section */}
      <div className="relative h-64 overflow-hidden">

        <img
          src={monument.image}
          alt={monument.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />

        {/* Category Badge */}
        <div className="absolute top-4 left-4 bg-accent text-primary text-xs font-bold px-4 py-1 rounded-full shadow">
          {monument.category}
        </div>

      </div>

      {/* Content Section */}
      <div className="p-6">

        <h3 className="text-2xl font-bold text-primary mb-2">
          {monument.name}
        </h3>

        <p className="text-gray-600 text-sm mb-2">
          {monument.location}
        </p>

        <p className="text-gray-500 text-sm mb-2">
          Built in {monument.year}
        </p>

        <p className="text-gray-500 text-sm mb-6">
          {monument.architecturalStyle}
        </p>

        <button
          onClick={() => window.open(monument.arLink, "_blank")}
          className="w-full bg-primary text-white py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all"
        >
          View in AR →
        </button>

      </div>

    </div>
  );
};

export default MonumentExternalCard;