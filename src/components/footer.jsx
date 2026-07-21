function Footer() {
  return (
    <footer className="bg-[#0B3A63] px-4 py-8 text-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Section 1 - Logo & Brand */}
        <div className="text-center md:text-left">
          <img
            src="/logo.jpg"
            alt="Debonair Stores Logo"
            className="w-20 h-10 mb-4 mx-auto md:mx-0"
          />
          <h3 className="text-xl font-bold">Debonair Stores</h3>
           <p className="text-slate-300 max-w-3xl mx-auto leading-8">
          Debonair Stores is your destination for premium fashion, footwear,
          handbags, backpacks and accessories designed for every occasion.
        </p>
        </div>

        {/* Section 2 - Contact Info */}
        <div className="text-center md:text-left">
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-3 text-slate-300 text-sm">
            <li>Solid Star Plaza, Uyo, Nigeria</li>
            <li>
              <a href="tel:08022426752" className="hover:text-orange-400">
                08022426752
              </a>
            </li>
           <li>
  <a href="mailto:info@debonairstores.com" className="hover:text-orange-400">
    info@debonairstores.com
  </a>
</li>

          </ul>
        </div>

        {/* Section 3 - Quick Links */}
        <div className="text-center md:text-left">
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-slate-300 text-sm">
            <li>
              <a href="/about" className="hover:text-orange-400">
                About Us
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-orange-400">
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-orange-400">
                Contact
              </a>
            </li>
            <li>
              <a href="/shop" className="hover:text-orange-400">
                Shop
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 border-t border-slate-600 pt-4 text-center">
        <p className="text-slate-300 text-sm">
          © 2026 Debonair Stores. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;