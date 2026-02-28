import { ExternalLink } from "lucide-react";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#0B1C3A] text-white py-20">
      <div className="container mx-auto px-6">

        <div className="grid md:grid-cols-4 gap-12 mb-16">

          {/* Branding */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <img
                src={logo}
                alt="Dharohar Logo"
                className="h-24 w-auto object-contain"
              />
            </div>

            <p className="text-gray-300 max-w-sm mb-8 leading-relaxed">
              Empowering tourism through immersive WebAR experiences.
              Preserving India’s heritage for generations to come.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-accent">
              Quick Links
            </h4>

            <ul className="space-y-4 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Monuments</a></li>
              <li><a href="#" className="hover:text-white transition-colors">AR Technology</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-accent">
              Resources
            </h4>

            <ul className="space-y-4 text-gray-300">
              <li>
                <a
                  href="#"
                  className="hover:text-white flex items-center gap-2 transition-colors"
                >
                  Government Portal
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li><a href="#" className="hover:text-white transition-colors">Tourism Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Heritage Laws</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2026 Dharohar Platform. All rights reserved.</p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;