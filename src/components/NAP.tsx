interface NAPProps {
  variant?: "full" | "compact";
  className?: string;
}

const NAP = ({ variant = "full", className = "" }: NAPProps) => {
  if (variant === "compact") {
    return (
      <div className={className} itemScope itemType="https://schema.org/LocalBusiness">
        <meta itemProp="name" content="V & N Cleaning Services" />
        <address itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
          <span itemProp="addressLocality">Brooklyn</span>, <span itemProp="addressRegion">NY</span>
        </address>
        <div>
          <a href="tel:+13473571090" itemProp="telephone" className="hover:text-primary transition-colors">
            (347) 357-1090
          </a>
        </div>
        <div>
          <a href="mailto:email@vnprocleaning.com" itemProp="email" className="hover:text-primary transition-colors">
            email@vnprocleaning.com
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className={className} itemScope itemType="https://schema.org/LocalBusiness">
      <h3 className="font-semibold mb-4" itemProp="name">V & N Cleaning Services</h3>
      <address className="not-italic space-y-2 text-muted-foreground" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
        <p>
          Serving <span itemProp="addressLocality">Brooklyn</span>, Queens & <span itemProp="addressRegion">NYC</span>
        </p>
        <p>
          <a href="tel:+13473571090" itemProp="telephone" className="hover:text-primary transition-colors">
            Phone: (347) 357-1090
          </a>
        </p>
        <p>
          <a href="mailto:email@vnprocleaning.com" itemProp="email" className="hover:text-primary transition-colors">
            Email: email@vnprocleaning.com
          </a>
        </p>
        <p itemProp="openingHours" content="Mo-Fr 09:00-17:00">
          Hours: Mon–Fri 9:00 AM – 5:00 PM
        </p>
      </address>
    </div>
  );
};

export default NAP;
