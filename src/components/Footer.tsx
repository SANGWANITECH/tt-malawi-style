import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "./ui/custom-button";

const Footer = () => {
  return (
    <footer className="bg-brand-black text-white">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-16">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">
              T & T Collection
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Malawi's premier destination for elegant women's fashion. 
              We bring you the latest trends with quality, style, and affordability.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-primary hover:bg-white/10">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-primary hover:bg-white/10">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-primary hover:bg-white/10">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Our Story</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Returns</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Categories</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Dresses</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Tops & Blouses</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Skirts</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Accessories</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Sale Items</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  Area 49 Gulliver Side<br />
                  Lilongwe, Malawi
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-gray-300 text-sm">+265 99 868 160</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-gray-300 text-sm">winniecphiri@gmail.com</span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="pt-4">
              <h5 className="text-sm font-semibold text-white mb-2">Newsletter</h5>
              <p className="text-xs text-gray-300 mb-3">Get updates on new arrivals & exclusive offers</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 text-sm bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <Button variant="default" size="sm" className="bg-primary hover:bg-primary-hover">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-300">
              © 2024 T & T Collection. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-gray-300 hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-gray-300 hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-gray-300 hover:text-primary transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;