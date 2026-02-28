import { MapPin, RotateCw } from "lucide-react";

const MapSection = () => {
  return (
    <section className="py-24 bg-cream">
      <div className="container mx-auto px-6">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">

          <div>
            <span className="text-accent font-bold tracking-widest uppercase text-sm">
              Geospatial View
            </span>

            <h2 className="text-4xl font-bold text-primary mt-2">
              Map & Street View
            </h2>
          </div>

          <div className="bg-white px-6 py-3 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-3">
            <span className="text-gray-500 text-sm">
              Currently viewing:
            </span>
            <span className="text-primary font-bold">
              Taj Mahal, Agra
            </span>
          </div>

        </div>

        {/* Map Grid */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* Map View */}
          <div className="h-[500px] bg-gray-200 rounded-[2rem] overflow-hidden shadow-lg relative group">

            <img
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1000&q=80"
              alt="Map View"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-2xl animate-bounce">
                <MapPin className="text-accent w-6 h-6" />
              </div>
            </div>

            <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/90 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg">
              <h4 className="font-bold text-primary">
                Interactive Map
              </h4>
              <p className="text-xs text-gray-600">
                Explore nearby amenities and historical sites.
              </p>
            </div>
          </div>

          {/* Street View */}
          <div className="h-[500px] bg-gray-200 rounded-[2rem] overflow-hidden shadow-lg relative group">

            <img
              src="https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1000&q=80"
              alt="Street View"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all"></div>

            <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/90 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg">
              <h4 className="font-bold text-primary">
                360° Street View
              </h4>
              <p className="text-xs text-gray-600">
                Walk through the monument gates virtually.
              </p>
            </div>

            <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/20 backdrop-blur-xl border border-white/30 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform">
              <RotateCw className="w-8 h-8" />
            </button>

          </div>

        </div>
      </div>
    </section>
  );
};

export default MapSection;