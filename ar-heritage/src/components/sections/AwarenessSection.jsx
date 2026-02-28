import { motion } from "motion/react";
import { History, ShieldCheck, Globe } from "lucide-react";

const AwarenessSection = () => {
  const cards = [
    {
      icon: <History className="w-8 h-8 text-accent" />,
      title: "Historical Importance",
      desc: "Each monument tells a story of an era gone by, reflecting architectural brilliance and cultural depth.",
      bg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZLP-AJKKb9-XeTMhiYBaI-QrkY4kK1eU18A&s"
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-accent" />,
      title: "Cultural Value",
      desc: "Our heritage structures represent the living identity of our diverse and united nation.",
      bg: "https://lh7-us.googleusercontent.com/0ok5LCBmiioUwTpavyKDguR4QoTnyVLOFmoXAgfUjveBxNWgPXQ4aSMyLdzJsuRpryUakHdWOEOnzx3dH2cmapaXxOOWjbPAuh_dG4NBOtYcwinKhXQmThJfsoD5bwF3HxH5yekfXo9c-0jhpoCH1g"
    },
    {
      icon: <Globe className="w-8 h-8 text-accent" />,
      title: "Preservation Mission",
      desc: "Using modern technology to protect and preserve monuments for future generations.",
      bg: "https://lh7-us.googleusercontent.com/Zq8aA7_x30fRzR3xi4qu9LDYfscJYVTwFIljun2FeMZUtnj1HOJtx4PNLNPL4_SwyAKekp2zZeE9uImgAgxgTtkBhGIf4AVpnlRK-Ly1BrVtFxQxacJcFhrglg2E7-L0YI1BbYVKEOfVVXdQxsQXQw"
    }
  ];

  return (
    <section id="awareness" className="py-28 bg-cream">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Preserving Our Legacy
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            Dharohar is a digital initiative dedicated to safeguarding
            India’s heritage while making it accessible to the world.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">

          {cards.map((card, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="relative h-[420px] rounded-[2rem] overflow-hidden shadow-lg group"
            >
              {/* Background Image */}
              <motion.img
                src={card.bg}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover filter group-hover:scale-105 transition-transform duration-700"
              />

              {/* Warm Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-cream/70 via-cream/80 to-cream/95"></div>

              {/* Content */}
              <div className="relative z-10 p-10 flex flex-col justify-end h-full">

                <div className="w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center mb-6">
                  {card.icon}
                </div>

                <h3 className="text-2xl font-bold text-primary mb-3">
                  {card.title}
                </h3>

                <p className="text-gray-700 leading-relaxed">
                  {card.desc}
                </p>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default AwarenessSection;