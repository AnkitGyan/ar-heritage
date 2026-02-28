import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import logo from "../../assets/logo.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-cream shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Dharohar Logo"
            className="h-16 w-auto object-contain"
          />
        </div>

        {/* Desktop Menu */}
        <div
          className={`hidden md:flex items-center gap-8 font-medium ${
            isScrolled ? "text-primary" : "text-white"
          }`}
        >
          <Link to="/" className="hover:text-accent transition-colors">
            Home
          </Link>
          <Link to="/monuments" className="hover:text-accent transition-colors">
            Monuments
          </Link>
          <a href="#ar-viewer" className="hover:text-accent transition-colors">
            WebAR
          </a>
          <a href="#awareness" className="hover:text-accent transition-colors">
            Culture
          </a>

          <button className="bg-accent text-primary px-6 py-2 rounded-full font-bold hover:opacity-90 transition-all">
            Explore Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden ${
            isScrolled ? "text-primary" : "text-white"
          }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-cream shadow-xl p-6 flex flex-col gap-4 md:hidden"
          >
            <a href="#" className="text-primary font-medium">
              Home
            </a>
            <a href="#monuments" className="text-primary font-medium">
              Monuments
            </a>
            <a href="#ar-viewer" className="text-primary font-medium">
              WebAR
            </a>
            <a href="#awareness" className="text-primary font-medium">
              Awareness
            </a>

            <button className="bg-primary text-white px-6 py-3 rounded-xl font-bold">
              Explore Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;