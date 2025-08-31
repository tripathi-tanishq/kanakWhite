import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "../../src/assets/logo/main_logo_webp.webp";

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
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* <div className="text-2xl font-bold text-[#a7800a]">Kanak White</div> */}
          <div>
            <img
              src={logo}
              alt="GodrejShine Paints Logo"
              // srcSet="/src/assets/main_logo@2x.png 2x, /src/assets/main_logo@3x.png 3x"
              className="h-12 w-auto object-contain"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-[#a7800a]">
              Home
            </a>
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
                        <button
                          className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center justify-between"
                          onMouseEnter={() => setActiveSubmenu(category)}
                        >
                          {category}
                          {subMenu && <ChevronDown className="w-4 h-4" />}
                        </button>

                        {/* Submenu (only if it exists and is an object) */}
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

                                    {/* Products under subcategory (only if products is an array) */}
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
            <a href="#gallery" className="hover:text-[#a7800a]">
              Gallery
            </a>
            <a href="#faq" className="hover:text-[#a7800a]">
              FAQ's
            </a>
            <a href="#contact" className="hover:text-[#a7800a]">
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="hover:text-[#a7800a]">
                Home
              </a>
              <div className="space-y-2">
                <button className="flex items-center hover:text-[#a7800a]">
                  Products <ChevronDown className="ml-1 w-4 h-4" />
                </button>
                {/* Mobile product menu implementation here */}
              </div>
              <a href="#gallery" className="hover:text-[#a7800a]">
                Gallery
              </a>
              <a href="#faq" className="hover:text-[#a7800a]">
                FAQ's
              </a>
              <a href="#contact" className="hover:text-[#a7800a]">
                Contact Us
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
