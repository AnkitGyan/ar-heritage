import { useState } from "react";
import { motion } from "motion/react";
import { Camera, RotateCw, ZoomIn, Volume2, X, Globe } from "lucide-react";

const WebARViewer = () => {
  const [isCameraEnabled, setIsCameraEnabled] = useState(false);

  return (
    <section id="ar-viewer" className="py-24 bg-white">
      <div className="container mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            WebAR Experience
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Bring history to your living room. Enable your camera to project
            3D models of ancient monuments in your physical space.
          </p>
        </div>

        {/* Viewer Container */}
        <div className="relative max-w-5xl mx-auto aspect-video bg-gray-900 rounded-[2rem] overflow-hidden shadow-2xl border-8 border-gray-800">

          {!isCameraEnabled ? (
            /* Camera Permission Screen */
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 text-center">
              <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mb-6 animate-pulse">
                <Camera className="w-10 h-10 text-accent" />
              </div>

              <h3 className="text-2xl font-bold mb-2">
                Ready to explore?
              </h3>

              <p className="text-gray-400 mb-8 max-w-md">
                We need camera access to provide the augmented reality experience.
              </p>

              <button
                onClick={() => setIsCameraEnabled(true)}
                className="bg-accent text-primary px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform"
              >
                Launch WebAR
              </button>
            </div>

          ) : (

            /* Simulated AR View */
            <div className="absolute inset-0">

              <img
                src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1200&q=80"
                alt="Camera Feed"
                className="w-full h-full object-cover opacity-50"
              />

              {/* Rotating 3D Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ rotateY: 360 }}
                  transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                  className="w-64 h-64 bg-accent/20 border-2 border-accent rounded-xl flex items-center justify-center backdrop-blur-sm"
                >
                  <Globe className="w-32 h-32 text-accent" />
                </motion.div>
              </div>

              {/* Controls */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4 bg-black/40 backdrop-blur-xl p-4 rounded-2xl border border-white/10">

                <button className="p-3 bg-white/10 rounded-xl hover:bg-white/20 text-white transition-all">
                  <RotateCw className="w-6 h-6" />
                </button>

                <button className="p-3 bg-white/10 rounded-xl hover:bg-white/20 text-white transition-all">
                  <ZoomIn className="w-6 h-6" />
                </button>

                <button className="p-3 bg-white/10 rounded-xl hover:bg-white/20 text-white transition-all">
                  <Volume2 className="w-6 h-6" />
                </button>

                <div className="w-px bg-white/20 mx-2"></div>

                <button
                  onClick={() => setIsCameraEnabled(false)}
                  className="p-3 bg-red-500/20 text-red-400 rounded-xl hover:bg-red-500/30 transition-all"
                >
                  <X className="w-6 h-6" />
                </button>

              </div>

              {/* Live Tag */}
              <div className="absolute top-8 left-8 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-white text-xs font-bold flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                LIVE AR VIEW: TAJ MAHAL
              </div>

            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default WebARViewer;