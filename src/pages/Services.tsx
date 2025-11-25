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
      title: "Regular Home Cleaning in Brooklyn & NYC",
      description: "V & N Cleaning Services provides weekly and bi-weekly regular cleaning for apartments, condos, and houses throughout Brooklyn, Queens, and Manhattan. Our regular cleaning service is designed for busy NYC professionals, families with children, and anyone who wants to maintain a consistently clean home without the hassle. We serve Park Slope apartments, Williamsburg lofts, Astoria condos, Upper East Side co-ops, and homes across all five boroughs.\n\nRegular cleaning from V & N includes dusting all surfaces in your home, vacuuming carpets and area rugs, mopping hardwood and tile floors, deep cleaning bathrooms, sanitizing kitchen counters and sinks, and removing trash. Our Brooklyn-based cleaning team brings all professional-grade supplies and equipment to your property. Regular cleaning typically takes 2-4 hours depending on your home size and is available Monday through Friday throughout NYC.\n\nRegular cleaning is ideal for Brooklyn apartments (studios to 3-bedrooms), Queens townhouses, Manhattan condos, and multi-family homes. Whether you live in a 600 sq ft Williamsburg studio or a 2,000 sq ft Park Slope brownstone, V & N Cleaning Services creates a custom regular cleaning schedule that fits your property type and lifestyle.",
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
      title: "Deep Cleaning for Brooklyn Homes & NYC Apartments",
      description: "V & N Cleaning Services offers comprehensive deep cleaning for Brooklyn brownstones, NYC apartments, and homes throughout all five boroughs. Our deep cleaning service goes beyond regular cleaning to target built-up dirt, grime, and neglected areas in your property. Deep cleaning is perfect for seasonal home refreshes, before hosting guests, after renovations, or when your Brooklyn apartment needs intensive attention.\n\nDeep cleaning includes everything in our regular cleaning service plus baseboards and trim cleaning, inside oven cleaning, inside refrigerator cleaning, interior window washing, cabinet exterior cleaning, and detailed corner and crevice cleaning. Our Brooklyn cleaning professionals spend 4-6 hours thoroughly cleaning your property from top to bottom. We serve Park Slope brownstones, Williamsburg apartments, Astoria homes, and Manhattan condos with deep cleaning expertise.\n\nDeep cleaning is ideal for Brooklyn homes that haven't been professionally cleaned in months, before or after moving, spring cleaning in NYC apartments, or preparing your property for special occasions. V & N Cleaning Services brings specialized equipment and eco-friendly cleaning products to deliver exceptional deep cleaning results throughout Brooklyn, Queens, and Manhattan.",
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
      title: "NYC Apartment Cleaning Services - Brooklyn & Queens",
      description: "V & N Cleaning Services specializes in apartment cleaning throughout Brooklyn, Queens, and Manhattan. Our apartment cleaning team understands the unique challenges of NYC apartment living including limited space, building requirements, and tight schedules. We provide efficient apartment cleaning for studios, 1-bedroom, 2-bedroom, and 3-bedroom apartments in Park Slope, Williamsburg, Astoria, Upper East Side, and throughout NYC.\n\nApartment cleaning from V & N is designed for NYC renters and condo owners who need flexible, professional cleaning services. We work with building management, navigate service elevator schedules, and complete apartment cleaning efficiently without disrupting your neighbors. Our team specializes in small space optimization, vertical storage area cleaning, and compact appliance care specific to Brooklyn and Manhattan apartments.\n\nWhether you need weekly apartment cleaning in Williamsburg, bi-weekly cleaning for your Park Slope rental, or one-time deep cleaning for your Astoria condo, V & N Cleaning Services delivers reliable apartment cleaning throughout New York City. We serve co-op apartments, rental apartments, luxury condos, and walk-up buildings across all five boroughs.",
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
      title: "Move-Out Cleaning in Brooklyn & NYC - Get Your Deposit Back",
      description: "V & N Cleaning Services provides thorough move-in and move-out cleaning for Brooklyn apartments, Queens homes, and Manhattan condos. Our move-out cleaning service helps renters get their full security deposit back and prepares properties for new tenants. We serve landlords, property managers, and renters throughout Park Slope, Williamsburg, Astoria, and all NYC neighborhoods.\n\nMove-out cleaning includes empty home deep cleaning, all cabinets and closets, wall spot treatment, floor deep cleaning, appliance interior cleaning, light fixture cleaning, and landlord inspection preparation. Our Brooklyn cleaning team understands what landlords and property managers expect for move-out inspections. We clean to the highest standards, ensuring your Brooklyn or Queens apartment is rent-ready or deposit-return ready.\n\nMove-in cleaning from V & N prepares your new Brooklyn apartment or NYC home before you unpack. We deep clean the entire property so you can move into a fresh, sanitized space. Whether you're moving out of a Williamsburg loft, preparing a Park Slope brownstone for new tenants, or moving into an Astoria apartment, V & N Cleaning Services delivers professional move-in/move-out cleaning throughout New York City.",
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
      title: "Small Office Cleaning in Brooklyn & Manhattan",
      description: "V & N Cleaning Services provides professional office cleaning for small offices, co-working spaces, and commercial properties in Brooklyn, Manhattan, and Queens. Our office cleaning team delivers reliable workspace sanitization, common area maintenance, and professional cleaning for NYC businesses. We serve offices in Park Slope, Williamsburg, Midtown Manhattan, and throughout the five boroughs.\n\nOffice cleaning from V & N includes desk and workspace sanitization, common area cleaning, break room maintenance, restroom cleaning, trash and recycling, and floor care. We offer flexible scheduling including after-hours office cleaning and weekend services to minimize disruption to your Brooklyn or Manhattan business. Our team uses commercial-grade cleaning products and equipment suitable for professional workspaces.\n\nWhether you operate a small business in Brooklyn, a co-working space in Manhattan, or a professional office in Queens, V & N Cleaning Services delivers consistent office cleaning services. We work with office managers, business owners, and property managers throughout NYC to maintain clean, professional workspaces.",
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
                    V & N Cleaning Services serves Brooklyn neighborhoods including Park Slope, Williamsburg, Brooklyn Heights, DUMBO, Bushwick, Crown Heights, and Prospect Heights. In Queens, we provide cleaning in Astoria, Long Island City, Forest Hills, and Flushing. Our Manhattan service area includes the Upper East Side, Upper West Side, Midtown, and Chelsea. We also serve Riverdale and Fordham in The Bronx. V & N Cleaning Services is a Brooklyn-based residential cleaning company serving all five NYC boroughs. Call (347) 357-1090 to confirm we serve your specific Brooklyn or NYC neighborhood.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">What types of properties do you clean?</h3>
                  <p className="text-muted-foreground">
                    V & N Cleaning Services cleans Brooklyn apartments (studio to 3-bedroom), NYC condos and co-ops, brownstones and townhouses, single-family homes, and rental properties. We specialize in NYC apartment cleaning, understanding the unique needs of small spaces, building requirements, and city living. Whether you have a 500 sq ft Williamsburg studio or a 2,500 sq ft Park Slope brownstone, our cleaning team adapts to your property type.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Do you offer eco-friendly cleaning in Brooklyn?</h3>
                  <p className="text-muted-foreground">
                    Yes! V & N Cleaning Services offers green cleaning options for Brooklyn and NYC homes. Our eco-friendly cleaning service uses EPA-approved, non-toxic cleaning products that are safe for children, pets, and the environment. Brooklyn families in Park Slope, Prospect Heights, and Williamsburg frequently choose our green cleaning option for apartment and home cleaning. All eco-friendly products are available at no additional cost.
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
