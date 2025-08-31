import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Logo and About */}
          <div>
            <h2 className="text-2xl font-bold text-[#a7800a] mb-4">
              GodrejShine Paints
            </h2>
            <p className="text-gray-400 mb-4">
              Our products are designed to give your walls lasting strength,
              smooth finish, and vibrant colors that stand the test of time.
              From wall putty to emulsions, distempers, and primers — we bring
              quality and durability together to beautify every space.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-[#a7800a]" />
                <span>Kanak White India Pvt. Ltd. , Ghaziabad.</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-[#a7800a]" />
                <span>+91 8423843523</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-[#a7800a]" />
                <span>godrejshinepaints.com</span>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="mt-6 flex space-x-4">
              <a href="#" className="hover:text-[#a7800a] transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-[#a7800a] transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/godrejshine.paints/"
                className="hover:text-[#a7800a] transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        {/* <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} GodrejShine Paints. All Rights Reserved
            ®
          </p>
        </div> */}
      </div>
    </footer>
  );
}
