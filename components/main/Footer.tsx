import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#020408] py-8 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Company Info */}
          <div>
            <h3 className="mb-4 text-xl font-bold">
              Công ty sẽ xuất hiện trong tương lai
            </h3>
            <p className="text-gray-400">2027</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-xl font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Projects
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-xl font-bold">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Hẹn gặp bạn ở tương lai và vẫn còn đam mê với lập trình</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="mb-4 text-xl font-bold">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-2xl text-gray-400 hover:text-white">
                <FaFacebook />
              </a>
              <a href="#" className="text-2xl text-gray-400 hover:text-white">
                <FaTwitter />
              </a>
              <a href="#" className="text-2xl text-gray-400 hover:text-white">
                <FaInstagram />
              </a>
              <a href="#" className="text-2xl text-gray-400 hover:text-white">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; Tương lai phía trước cùng cố gắng</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
