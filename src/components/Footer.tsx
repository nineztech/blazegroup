import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Instagram, Sun, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Sun className="h-8 w-8 text-yellow-500" />
              <span className="text-xl font-bold">Blaze Group</span>
            </div>
            <p className="text-gray-400">
            Powering the future with clean, renewable solar energy solutions that empower homes and businesses to embrace a brighter, sustainable tomorrow.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/blazegroups" className="text-gray-400 hover:text-yellow-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/blazegroup" className="text-gray-400 hover:text-yellow-500 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/blazegroups" className="text-gray-400 hover:text-yellow-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about-us" className="text-gray-400 hover:text-yellow-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-yellow-500 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-400 hover:text-yellow-500 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contactUs" className="text-gray-400 hover:text-yellow-500 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  407, Elite Business Hub, Opp. Kargil Petrol Pump, SG Highway, Ahmedabad - 380060, Gujarat
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                <span className="text-gray-400">+91 9824999898</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                <span className="text-gray-400">blazegroup.lights@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Lottie Animation */}
          <div className="flex justify-center md:justify-end">
            <iframe
              src="https://lottie.host/embed/ebf1de65-b4e7-4937-86ec-73124e342a61/5SoowMfq3W.lottie"
              style={{ width: '100%', height: '200px', border: 'none' }}
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-gray-400">
  <div className="grid grid-cols-1 md:grid-cols-2 text-center md:text-left gap-4">
    {/* Left Side */}
    <div>
      <p>&copy; {new Date().getFullYear()} Blaze Group. All rights reserved.</p>
    </div>

    {/* Right Side */}
    <div className="md:text-right">
      <p>
        Managed and maintained by{' '}
        <a
          href="https://www.nineztech.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          Ninez IT Tech Solutions Pvt. Ltd.
        </a>
      </p>
    </div>
  </div>
</div>
      </div>


    </footer>
  );
};

export default Footer;
