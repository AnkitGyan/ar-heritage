import { MONUMENTS } from "../../data/monuments";
import MonumentCard from "../ui/MonumentCard";
import { ChevronRight } from "lucide-react";

const MonumentsSection = () => {
  return (
    <section id="monuments" className="py-24 bg-cream">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="text-accent font-bold uppercase text-sm">
              Curated Collection
            </span>
            <h2 className="text-4xl font-bold text-primary mt-2">
              Explore Iconic Monuments
            </h2>
          </div>

          <button className="flex items-center gap-2 text-primary font-bold group">
            View All Monuments
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {MONUMENTS.map((monument) => (
            <MonumentCard key={monument.id} monument={monument} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MonumentsSection;