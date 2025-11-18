import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Home, Sparkles, Building2, Package, Briefcase, Droplets } from "lucide-react";

import { BreadcrumbSchema, useBreadcrumbs, FAQSchema } from "@/components/StructuredData";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Helmet } from "react-helmet";

const Services = () => {
  const breadcrumbs = useBreadcrumbs();
  const services = [
    {
      icon: Home,
      title: "Regular Cleaning",
      description: "Keep your home consistently clean and fresh with our regular cleaning services. Perfect for busy professionals and families.",
      features: [
        "Dusting all surfaces",
        "Vacuuming and mopping floors",
        "Bathroom deep clean and sanitization",
        "Kitchen cleaning and appliance wiping",
        "Trash removal",
        "Bed making"
      ]
    },
    {
      icon: Sparkles,
      title: "Deep Cleaning",
      description: "Our most thorough cleaning service for when your home needs extra attention. Ideal for seasonal cleaning or special occasions.",
      features: [
        "Everything in regular cleaning",
        "Baseboards and trim cleaning",
        "Inside oven cleaning",
        "Inside refrigerator cleaning",
        "Window washing (interior)",
        "Cabinet exterior cleaning",
        "Detailed corner and crevice cleaning"
      ]
    },
    {
      icon: Building2,
      title: "Apartment Cleaning",
      description: "Specialized cleaning for NYC apartments, condos, and small spaces. We understand the unique needs of city living.",
      features: [
        "Efficient cleaning for smaller spaces",
        "Quick turnaround available",
        "Building-friendly scheduling",
        "Compact space optimization",
        "Vertical storage area cleaning",
        "Small appliance care"
      ]
    },
    {
      icon: Package,
      title: "Move-In/Move-Out Cleaning",
      description: "Comprehensive cleaning for moving transitions. Get your security deposit back or move into a pristine new home.",
      features: [
        "Empty home deep cleaning",
        "All cabinets and closets",
        "Wall spot treatment",
        "Floor deep cleaning",
        "Appliance interior cleaning",
        "Light fixture cleaning",
        "Landlord inspection ready"
      ]
    },
    {
      icon: Briefcase,
      title: "Office Cleaning",
      description: "Professional workspace cleaning for small offices, co-working spaces, and commercial properties.",
      features: [
        "Desk and workspace sanitization",
        "Common area cleaning",
        "Break room maintenance",
        "Restroom cleaning",
        "Trash and recycling",
        "Floor care",
        "Flexible scheduling (after hours available)"
      ]
    },
    {
      icon: Droplets,
      title: "Add-On Services",
      description: "Enhance your cleaning with these additional services. Can be added to any cleaning package.",
      features: [
        "Laundry service (wash, dry, fold)",
        "Inside refrigerator deep clean",
        "Inside oven deep clean",
        "Inside cabinets cleaning",
        "Basement or storage area",
        "Garage cleaning",
        "Custom special requests"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Professional Cleaning Services Brooklyn & NYC | V & N Cleaning</title>
        <meta name="description" content="Full range of cleaning services in Brooklyn, Queens & NYC. Regular, deep, apartment, move-in/move-out cleaning. Book now: (347) 357-1090" />
        <link rel="canonical" href="https://vnprocleaning.com/services" />
      </Helmet>
      <BreadcrumbSchema items={breadcrumbs} />
      <FAQSchema />
      
      <Header />
      
      <main className="flex-1">
        <div className="container">
          <Breadcrumbs items={breadcrumbs} />
        </div>
        {/* Page Header */}
        <section className="py-16 bg-gradient-primary text-primary-foreground">
          <div className="container text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Cleaning Services</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Professional cleaning solutions tailored to your home or office. Every service backed by our satisfaction guarantee.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} headingLevel="h2" />
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Info */}
        <section className="py-16 bg-muted">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Custom Pricing for Your Needs</h2>
              <p className="text-muted-foreground mb-8">
                Every home is unique, so we provide customized quotes based on your specific needs, 
                home size, and service frequency. Contact us for a free, no-obligation quote.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="bg-gradient-primary">
                  <a href="https://bookings.vnprocleaning.com/booknow" target="_blank" rel="noopener noreferrer">
                    Book Now
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="/contact">Request a Quote</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">What areas do you serve?</h3>
                  <p className="text-muted-foreground">
                    We serve Brooklyn, Queens, Manhattan, The Bronx, and surrounding NYC areas. 
                    Contact us to confirm service availability in your specific neighborhood.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Do I need to provide cleaning supplies?</h3>
                  <p className="text-muted-foreground">
                    No, we bring all necessary cleaning supplies and equipment. If you prefer specific products 
                    or have eco-friendly preferences, we're happy to accommodate.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">How long does a cleaning take?</h3>
                  <p className="text-muted-foreground">
                    Cleaning time varies based on home size and service type. Typical regular cleanings 
                    take 2-4 hours, while deep cleanings may take 4-6 hours.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Do I need to be home during the cleaning?</h3>
                  <p className="text-muted-foreground">
                    No, many clients provide access and aren't home. We're fully insured and trustworthy. 
                    However, you're welcome to be home if you prefer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-accent text-accent-foreground">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8 opacity-90">
              Book your cleaning service today or contact us for a custom quote
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild className="text-lg px-8">
                <a href="https://bookings.vnprocleaning.com/booknow" target="_blank" rel="noopener noreferrer">
                  Book Now
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg px-8 bg-transparent border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent">
                <a href="tel:3473571090">Call Us</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
