import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import { Sparkles, Home, Building2, Package, Briefcase, CheckCircle2, Users, Clock, Shield, Leaf } from "lucide-react";
import heroImage from "@/assets/hero-cleaning.jpg";

import { LocalBusinessSchema, BreadcrumbSchema, useBreadcrumbs } from "@/components/StructuredData";
import { Helmet } from "react-helmet";

const Index = () => {
  const breadcrumbs = useBreadcrumbs();
  const services = [
    {
      icon: Home,
      title: "Regular Cleaning",
      description: "Consistent, reliable cleaning to keep your home fresh",
      features: ["Dusting & vacuuming", "Bathroom & kitchen cleaning", "Floor mopping", "Trash removal"]
    },
    {
      icon: Sparkles,
      title: "Deep Cleaning",
      description: "Thorough, detailed cleaning for a spotless home",
      features: ["Baseboards & trim", "Inside appliances", "Window cleaning", "Detailed sanitization"]
    },
    {
      icon: Building2,
      title: "Apartment Cleaning",
      description: "Specialized cleaning for NYC apartments & condos",
      features: ["Small space optimization", "Quick turnaround", "Flexible scheduling", "Move-in ready"]
    },
    {
      icon: Package,
      title: "Move-In/Move-Out",
      description: "Complete cleaning for transitions",
      features: ["Empty home cleaning", "Cabinet & closet cleaning", "Wall spot cleaning", "Landlord-ready"]
    },
    {
      icon: Briefcase,
      title: "Office Cleaning",
      description: "Professional workspace cleaning",
      features: ["Desk & surface cleaning", "Common area maintenance", "Trash & recycling", "Flexible hours"]
    },
    {
      icon: Sparkles,
      title: "Add-On Services",
      description: "Extra services for your convenience",
      features: ["Laundry service", "Inside fridge cleaning", "Inside oven cleaning", "Custom requests"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      location: "Brooklyn, NY",
      rating: 5,
      text: "V & N Cleaning has been a lifesaver! Their team is professional, thorough, and always on time. My apartment has never looked better."
    },
    {
      name: "James T.",
      location: "Queens, NY",
      rating: 5,
      text: "Outstanding service! They did an amazing job on my move-out cleaning. The landlord was impressed and I got my full deposit back."
    },
    {
      name: "Maria L.",
      location: "Manhattan, NY",
      rating: 5,
      text: "Reliable and trustworthy. I've been using their regular cleaning service for months and couldn't be happier. Highly recommend!"
    }
  ];

  const neighborhoods = [
    "Brooklyn Heights", "Park Slope", "Williamsburg", "DUMBO", "Bushwick",
    "Astoria", "Long Island City", "Forest Hills", "Flushing",
    "Upper East Side", "Upper West Side", "Midtown", "Chelsea",
    "Riverdale", "Fordham"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Professional Home & Apartment Cleaning Brooklyn & NYC | V & N Cleaning Services</title>
        <meta name="description" content="Reliable, detailed, professional cleaning services in Brooklyn, Queens, Manhattan & NYC. Regular cleaning, deep cleaning, move-in/move-out. Book now: (347) 357-1090" />
        <link rel="canonical" href="https://vnprocleaning.com/" />
      </Helmet>
      <LocalBusinessSchema includeReviews={true} />
      <BreadcrumbSchema items={breadcrumbs} />
      
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src={heroImage} 
              alt="Professional cleaning service" 
              className="w-full h-full object-cover opacity-10"
            />
          </div>
          <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Professional Home Cleaning Services in{" "}
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  Brooklyn & NYC
                </span>
              </h1>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                V & N Cleaning Services is a professional residential cleaning company serving Brooklyn, Queens, Manhattan, and The Bronx. We specialize in regular home cleaning, deep cleaning, apartment cleaning, and move-in/move-out cleaning for NYC residents. Our trained cleaning professionals serve Park Slope, Williamsburg, Astoria, Upper East Side, and over 15 Brooklyn neighborhoods.
              </p>
              <p className="text-xl text-muted-foreground mb-8">
                Whether you need weekly apartment cleaning in Williamsburg, deep cleaning for your Park Slope townhouse, or move-out cleaning in Astoria, V & N Cleaning Services provides reliable residential cleaning throughout New York City.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="bg-gradient-primary text-lg px-8">
                  <a href="https://bookings.vnprocleaning.com/booknow" target="_blank" rel="noopener noreferrer">
                    Book Now
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild className="text-lg px-8">
                  <a href="/contact">Get a Free Quote</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-muted">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Brooklyn Residents Choose V & N Cleaning Services</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto mb-6">
                Brooklyn homeowners and renters trust V & N Cleaning Services because we understand NYC living. Our cleaning team is trained specifically for Brooklyn apartments, brownstones, and condos. We navigate building requirements in Park Slope co-ops, work efficiently in Williamsburg lofts, and adapt to the unique needs of NYC properties. Every cleaner on our team is background-checked, insured, and experienced with New York City homes.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary-light mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Trained Professionals</h3>
                <p className="text-sm text-muted-foreground">Experienced, reliable cleaners you can trust</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary-light mx-auto mb-4 flex items-center justify-center">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Flexible Scheduling</h3>
                <p className="text-sm text-muted-foreground">Book at your convenience, even last minute</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-accent-light mx-auto mb-4 flex items-center justify-center">
                  <Leaf className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">Eco-Friendly Options</h3>
                <p className="text-sm text-muted-foreground">Green cleaning products available</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary-light mx-auto mb-4 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">100% Satisfaction</h3>
                <p className="text-sm text-muted-foreground">We're not happy until you're happy</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Cleaning Services</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Professional cleaning solutions tailored to your needs
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} headingLevel="h3" />
              ))}
            </div>
          </div>
        </section>

        {/* Neighborhood-Specific Content */}
        <section className="py-16 bg-muted">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Brooklyn & NYC Cleaning Services - Neighborhoods We Serve</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                V & N Cleaning Services proudly serves over 20 Brooklyn neighborhoods, Queens communities, Manhattan areas, and Bronx districts. Our cleaning professionals live and work in New York City, understand the unique needs of NYC apartments and homes, and provide same-day and next-day cleaning throughout the five boroughs.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Brooklyn Cleaning Services</h3>
                <p className="text-muted-foreground mb-4">
                  Our Brooklyn cleaning team serves Park Slope, Williamsburg, Brooklyn Heights, DUMBO, Bushwick, Crown Heights, and Prospect Heights. We provide regular cleaning for Brooklyn brownstones, deep cleaning for co-op apartments, and move-out cleaning for rental properties. Whether you need apartment cleaning in Williamsburg or townhouse cleaning in Park Slope, V & N Cleaning Services delivers professional results. Brooklyn residents can book weekly cleaning, bi-weekly cleaning, or one-time deep cleaning services.
                </p>
                <div className="flex flex-wrap gap-3 mt-4">
                  {["Brooklyn Heights", "Park Slope", "Williamsburg", "DUMBO", "Bushwick"].map((neighborhood, index) => (
                    <span key={index} className="px-4 py-2 bg-background rounded-full text-sm font-medium shadow-sm">
                      {neighborhood}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4">Queens Cleaning Services</h3>
                <p className="text-muted-foreground mb-4">
                  V & N Cleaning Services provides home and apartment cleaning in Astoria, Long Island City, Forest Hills, Flushing, and surrounding Queens neighborhoods. Our Queens cleaning team specializes in condo cleaning, apartment deep cleaning, and move-in cleaning for renters and homeowners. Astoria residents trust us for weekly apartment cleaning, while Forest Hills homeowners rely on our deep cleaning services for larger homes.
                </p>
                <div className="flex flex-wrap gap-3 mt-4">
                  {["Astoria", "Long Island City", "Forest Hills", "Flushing"].map((neighborhood, index) => (
                    <span key={index} className="px-4 py-2 bg-background rounded-full text-sm font-medium shadow-sm">
                      {neighborhood}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4">Manhattan Cleaning Services</h3>
                <p className="text-muted-foreground mb-4">
                  From the Upper East Side to Midtown and Chelsea, V & N Cleaning Services offers professional cleaning for Manhattan apartments, condos, and co-ops. Our Manhattan cleaning team navigates building requirements, works with doormen and concierges, and provides efficient cleaning for studio apartments to multi-bedroom units. Upper West Side families use our regular cleaning service, while Chelsea professionals book our flexible one-time cleaning.
                </p>
                <div className="flex flex-wrap gap-3 mt-4">
                  {["Upper East Side", "Upper West Side", "Midtown", "Chelsea"].map((neighborhood, index) => (
                    <span key={index} className="px-4 py-2 bg-background rounded-full text-sm font-medium shadow-sm">
                      {neighborhood}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4">Bronx Cleaning Services</h3>
                <p className="text-muted-foreground mb-4">
                  V & N Cleaning Services serves Riverdale, Fordham, and surrounding Bronx neighborhoods with reliable residential cleaning. Our Bronx cleaning team provides apartment cleaning, house cleaning, and move-out cleaning for renters and homeowners throughout the borough.
                </p>
                <div className="flex flex-wrap gap-3 mt-4">
                  {["Riverdale", "Fordham"].map((neighborhood, index) => (
                    <span key={index} className="px-4 py-2 bg-background rounded-full text-sm font-medium shadow-sm">
                      {neighborhood}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Don't just take our word for it - hear from our satisfied customers
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-primary text-primary-foreground">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for a Spotless Home?</h2>
            <p className="text-xl mb-8 opacity-90">
              Book your cleaning service today and experience the V & N difference
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild className="text-lg px-8">
                <a href="https://bookings.vnprocleaning.com/booknow" target="_blank" rel="noopener noreferrer">
                  Book Now
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg px-8 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <a href="tel:3473571090">Call (347) 357-1090</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
