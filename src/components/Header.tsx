import { useState } from "react";
import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <NavLink to="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            V & N Cleaning Services
          </span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <NavLink
            to="/"
            className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            activeClassName="text-primary"
          >
            Home
          </NavLink>
          <NavLink
            to="/services"
            className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            activeClassName="text-primary"
          >
            Services
          </NavLink>
          <NavLink
            to="/about"
            className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            activeClassName="text-primary"
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            activeClassName="text-primary"
          >
            Contact
          </NavLink>
          <a href="tel:3473571090" className="flex items-center text-sm font-medium text-foreground/80 hover:text-primary">
            <Phone className="h-4 w-4 mr-1" />
            (347) 357-1090
          </a>
          <Button asChild className="bg-gradient-primary">
            <a href="https://bookings.vnprocleaning.com/booknow" target="_blank" rel="noopener noreferrer">
              Book Now
            </a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <nav className="container flex flex-col space-y-4 py-4">
            <NavLink
              to="/"
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
              activeClassName="text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/services"
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
              activeClassName="text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </NavLink>
            <NavLink
              to="/about"
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
              activeClassName="text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
              activeClassName="text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </NavLink>
            <a href="tel:3473571090" className="flex items-center text-sm font-medium text-foreground/80">
              <Phone className="h-4 w-4 mr-1" />
              (347) 357-1090
            </a>
            <Button asChild className="bg-gradient-primary w-full">
              <a href="https://bookings.vnprocleaning.com/booknow" target="_blank" rel="noopener noreferrer">
                Book Now
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
