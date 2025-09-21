import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "../../src/assets/logo/main_logo_webp.webp";
import mainLogo from "../../src/assets/logo/mainLogo.jpeg";
import { Link } from "react-router-dom";

// Product menu with nested structure
const productMenu = {
  Emulsions: {
    Interior: ["20L", "10L", "4L", "1L"],
    Exterior: ["20L", "10L", "4L", "1L"],
  },
  Distempers: {
    "Acrylic Distemper": ["20Kg", "10Kg", "5Kg"],
    "Emulsion Finish Distemper": ["20Kg", "10Kg", "5Kg"],
  },
  Enamel: null,
  Primer: null,
  "Wall Putty": null,
  "Other Products": {
    "Universal Stainers": null,
  },
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Left Logo */}
        <div className="flex items-center space-x-4">
          <Link to="/">
            <img
              src={logo}
              alt="Main Logo"
              className="h-12 w-auto object-contain"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {/* Home */}
          <Link to="/" className="hover:text-[#a7800a]">
            Home
          </Link>

          {/* Products Menu */}
          <div className="relative group">
            <button
              className="flex items-center hover:text-[#a7800a]"
              onMouseEnter={() => setActiveMenu("products")}
            >
              Products <ChevronDown className="ml-1 w-4 h-4" />
            </button>
            {activeMenu === "products" && (
              <div
                className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2"
                onMouseLeave={() => {
                  setActiveMenu(null);
                  setActiveSubmenu(null);
                }}
              >
                {Object.keys(productMenu).map((category) => {
                  const subMenu =
                    productMenu[category as keyof typeof productMenu];

                  return (
                    <div key={category} className="relative group/sub">
                      {/* Category Button */}
                      <button
                        className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center justify-between"
                        onMouseEnter={() => setActiveSubmenu(category)}
                      >
                        {category}
                        {subMenu && <ChevronDown className="w-4 h-4" />}
                      </button>

                      {/* Submenu */}
                      {activeSubmenu === category &&
                        subMenu &&
                        typeof subMenu === "object" && (
                          <div className="absolute left-full top-0 w-48 bg-white shadow-lg rounded-md py-2">
                            {Object.entries(subMenu).map(
                              ([subCategory, products]) => (
                                <div
                                  key={subCategory}
                                  className="relative group/subsub"
                                >
                                  <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
                                    {subCategory}
                                  </button>

                                  {/* Sizes */}
                                  {Array.isArray(products) && (
                                    <div className="absolute left-full top-0 w-48 bg-white shadow-lg rounded-md py-2 hidden group-hover/subsub:block">
                                      {products.map((product) => (
                                        <a
                                          key={product}
                                          href={`#${product
                                            .toLowerCase()
                                            .replace(" ", "-")}`}
                                          className="block px-4 py-2 hover:bg-gray-100"
                                        >
                                          {product}
                                        </a>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              )
                            )}
                          </div>
                        )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* About Us Menu */}
          <div className="relative group">
            <button
              className="flex items-center hover:text-[#a7800a]"
              onMouseEnter={() => setActiveMenu("about")}
            >
              About Us <ChevronDown className="ml-1 w-4 h-4" />
            </button>
            {activeMenu === "about" && (
              <div
                className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md py-2"
                onMouseLeave={() => setActiveMenu(null)}
              >
                <Link
                  to="/introduction"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Introduction
                </Link>
                <Link
                  to="/mission-vision"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Mission & Vision
                </Link>
              </div>
            )}
          </div>

          {/* Other Section Links */}
          <Link to="/#gallery" className="hover:text-[#a7800a]">
            Gallery
          </Link>
          <Link to="/#faq" className="hover:text-[#a7800a]">
            FAQ's
          </Link>
          <Link to="/#contact" className="hover:text-[#a7800a]">
            Contact Us
          </Link>
        </div>

        {/* Right Secondary Logo */}
        <div className="hidden md:flex items-center">
          <img
            src={mainLogo}
            alt="Main Logo"
            className="h-20 w-auto object-contain"
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 px-4">
          <div className="flex flex-col space-y-4">
            <Link to="/" className="hover:text-[#a7800a]">
              Home
            </Link>

            {/* Mobile Products */}
            <div className="space-y-2">
              <button
                className="flex items-center justify-between w-full hover:text-[#a7800a]"
                onClick={() =>
                  setActiveMenu(activeMenu === "products" ? null : "products")
                }
              >
                Products <ChevronDown className="ml-1 w-4 h-4" />
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ${
                  activeMenu === "products" ? "max-h-[1000px]" : "max-h-0"
                }`}
              >
                <div className="pl-4 space-y-2 mt-2">
                  {Object.keys(productMenu).map((category) => {
                    const subMenu =
                      productMenu[category as keyof typeof productMenu];
                    return (
                      <div key={category}>
                        <button
                          className="flex items-center justify-between w-full py-1 hover:text-[#a7800a]"
                          onClick={() =>
                            setActiveSubmenu(
                              activeSubmenu === category ? null : category
                            )
                          }
                        >
                          {category}
                          {subMenu && <ChevronDown className="ml-1 w-4 h-4" />}
                        </button>

                        <div
                          className={`overflow-hidden transition-all duration-500 ${
                            activeSubmenu === category
                              ? "max-h-[1000px]"
                              : "max-h-0"
                          }`}
                        >
                          {subMenu && typeof subMenu === "object" && (
                            <div className="pl-4 space-y-1 mt-1">
                              {Object.entries(subMenu).map(
                                ([subCategory, products]) => (
                                  <div key={subCategory}>
                                    <span className="block py-1 font-medium text-gray-700">
                                      {subCategory}
                                    </span>
                                    {Array.isArray(products) && (
                                      <div className="pl-4">
                                        {products.map((product) => (
                                          <a
                                            key={product}
                                            href={`#${product
                                              .toLowerCase()
                                              .replace(" ", "-")}`}
                                            className="block py-1 text-sm hover:text-[#a7800a]"
                                          >
                                            {product}
                                          </a>
                                        ))}
                                      </div>
                                    )}
                                  </div>
                                )
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Mobile About Us */}
            <div className="space-y-2">
              <button
                className="flex items-center justify-between w-full hover:text-[#a7800a]"
                onClick={() =>
                  setActiveMenu(activeMenu === "about" ? null : "about")
                }
              >
                About Us <ChevronDown className="ml-1 w-4 h-4" />
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ${
                  activeMenu === "about" ? "max-h-[500px]" : "max-h-0"
                }`}
              >
                <div className="pl-4 mt-2">
                  <Link
                    to="/introduction"
                    className="block py-1 hover:text-[#a7800a]"
                  >
                    Introduction
                  </Link>
                  <Link
                    to="/mission-vision"
                    className="block py-1 hover:text-[#a7800a]"
                  >
                    Mission & Vision
                  </Link>
                </div>
              </div>
            </div>

            <Link to="/#gallery" className="hover:text-[#a7800a]">
              Gallery
            </Link>
            <Link to="/#faq" className="hover:text-[#a7800a]">
              FAQ's
            </Link>
            <Link to="/#contact" className="hover:text-[#a7800a]">
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
