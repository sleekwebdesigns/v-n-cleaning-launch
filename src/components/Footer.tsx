import { NavLink } from "@/components/NavLink";
import NAP from "./NAP";

const Footer = () => {
  return (
    <footer className="bg-muted border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              V & N Cleaning Services
            </h3>
            <p className="text-sm text-muted-foreground">
              Reliable, detailed, and professional cleaning for homes & apartments in NYC.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <NavLink to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Regular Cleaning</li>
              <li>Deep Cleaning</li>
              <li>Apartment Cleaning</li>
              <li>Move-In/Move-Out</li>
              <li>Office Cleaning</li>
            </ul>
          </div>

          {/* Contact Info */}
          <NAP />
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} V & N Cleaning Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
