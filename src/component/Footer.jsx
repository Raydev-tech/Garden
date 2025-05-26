import { useEffect } from "react";
import { Leaf, Phone, Mail, MapPin, Instagram, Facebook, Twitter, Linkedin } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div
          className="grid md:grid-cols-4 gap-8"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-green-400" />
              <span className="text-2xl font-bold">GreenThumb Gardens</span>
            </div>
            <p className="text-gray-400">
              Creating beautiful, sustainable gardens that bring joy and tranquility to your outdoor spaces.
            </p>
          </div>

          <div data-aos="fade-up" data-aos-delay="200">
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              {["Garden Design", "Maintenance", "Tree Care", "Planting"].map((service) => (
                <li key={service}>
                  <a href="#" className="hover:text-green-400 transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div data-aos="fade-up" data-aos-delay="300">
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              {["About Us", "Our Team", "Portfolio", "Blog"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-green-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div data-aos="fade-up" data-aos-delay="400">
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-400">
              <p className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>(555) 123-GROW</span>
              </p>
              <p className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>hello@greenthumbgardens.com</span>
              </p>
              <p className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>123 Garden Lane, Green Valley, CA</span>
              </p>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-6 justify-center md:justify-start">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-green-400 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-green-400 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-green-400 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-green-400 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} GreenThumb Gardens. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
export default Footer; 