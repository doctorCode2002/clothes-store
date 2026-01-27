import Container from "./Container";

export default function Footer() {
  return (
    <footer className="bg-primary-400 border-t py-8">
      <Container>
        <div className="text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider mb-6">
                HELP & INFORMATION
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="/help"
                    className="hover:text-black text-sm transition-colors"
                  >
                    Help Us
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="hover:text-black text-sm transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="/help-center"
                    className="hover:text-black text-sm transition-colors"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="/terms"
                    className="hover:text-black text-sm transition-colors"
                  >
                    Terms & Condition
                  </a>
                </li>
                <li>
                  <a
                    href="/privacy"
                    className="hover:text-black text-sm transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider mb-6">
                ABOUT SUPRO
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="/about"
                    className="hover:text-black text-sm transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/about-supro"
                    className="hover:text-black text-sm transition-colors"
                  >
                    About Supro
                  </a>
                </li>
                <li>
                  <a
                    href="/shipping"
                    className="hover:text-black text-sm transition-colors"
                  >
                    Shipping & Return
                  </a>
                </li>
                <li>
                  <a
                    href="/terms-of-use"
                    className="hover:text-black text-sm transition-colors"
                  >
                    Terms of Use
                  </a>
                </li>
                <li>
                  <a
                    href="/privacy-policy"
                    className="hover:text-black text-sm transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/contact-us"
                    className="hover:text-black text-sm transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider mb-6">
                ONLINE SHOP
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="/shop"
                    className="hover:text-black text-sm transition-colors"
                  >
                    Shop
                  </a>
                </li>
                <li>
                  <a
                    href="/collection"
                    className="hover:text-black text-sm transition-colors"
                  >
                    Collection
                  </a>
                </li>
                <li>
                  <a
                    href="/search"
                    className="hover:text-black text-sm transition-colors"
                  >
                    Search
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider mb-6">
                LANGUAGE
              </h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center justify-between">
                  <a
                    href="/language"
                    className="hover:text-black text-sm transition-colors"
                  >
                    English
                  </a>
                  <span className="text-white text-xs">▼</span>
                </li>
              </ul>

              <h3 className="text-sm font-bold uppercase tracking-wider mb-6">
                CURRENCY
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center justify-between">
                  <a
                    href="/currency"
                    className="hover:text-black text-sm transition-colors"
                  >
                    USD/$
                  </a>
                  <span className="text-white text-xs">▼</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-300 mt-10 pt-6 text-center">
            <p className="text-white text-sm">
              &copy; {new Date().getFullYear()} Supro. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
