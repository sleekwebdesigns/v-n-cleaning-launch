import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Heart, Users, Award } from "lucide-react";

import { BreadcrumbSchema, useBreadcrumbs } from "@/components/StructuredData";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Helmet } from "react-helmet";

const About = () => {
  const breadcrumbs = useBreadcrumbs();

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>About V & N Cleaning Services | Professional Brooklyn & NYC Cleaners</title>
        <meta name="description" content="Trusted Brooklyn-based cleaning company serving NYC. Professional, reliable cleaners for homes and apartments. Learn about our mission and values. Call (347) 357-1090" />
        <link rel="canonical" href="https://vnprocleaning.com/about" />
      </Helmet>
      <BreadcrumbSchema items={breadcrumbs} />
      
      <Header />
      
      <main className="flex-1">
        <div className="container">
          <Breadcrumbs items={breadcrumbs} />
        </div>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-primary text-primary-foreground">
          <div className="container text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About V & N Cleaning Services - Serving Brooklyn & NYC</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Your trusted partner for professional cleaning services in NYC
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-8">
                V & N Cleaning Services is a trusted NYC-based cleaning company providing professional 
                home, apartment, deep cleaning, and move-in/move-out services. We proudly serve Brooklyn 
                and the surrounding areas with consistency, reliability, and attention to detail.
              </p>
              <p className="text-lg text-muted-foreground">
                Our mission is to make life easier for busy New Yorkers by delivering high-quality 
                cleaning you can trust. We understand that your home is your sanctuary, and we treat 
                it with the respect and care it deserves.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-muted">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Values</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                These core values guide everything we do
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary-light mx-auto mb-4 flex items-center justify-center">
                  <CheckCircle2 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Reliability</h3>
                <p className="text-sm text-muted-foreground">
                  We show up on time, every time, and deliver consistent results
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary-light mx-auto mb-4 flex items-center justify-center">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Care</h3>
                <p className="text-sm text-muted-foreground">
                  We treat every home with the care and respect it deserves
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary-light mx-auto mb-4 flex items-center justify-center">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Excellence</h3>
                <p className="text-sm text-muted-foreground">
                  We're committed to the highest standards of cleaning quality
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary-light mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Trust</h3>
                <p className="text-sm text-muted-foreground">
                  We build lasting relationships through honesty and integrity
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What Makes Us Different */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">What Makes Us Different</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="mt-1">
                      <CheckCircle2 className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Trained & Vetted Team</h3>
                      <p className="text-sm text-muted-foreground">
                        All our cleaners are professionally trained, background-checked, and insured
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="mt-1">
                      <CheckCircle2 className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Eco-Friendly Options</h3>
                      <p className="text-sm text-muted-foreground">
                        We offer green cleaning solutions that are safe for your family and pets
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="mt-1">
                      <CheckCircle2 className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Attention to Detail</h3>
                      <p className="text-sm text-muted-foreground">
                        We don't cut corners - every surface, every corner gets the attention it needs
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="mt-1">
                      <CheckCircle2 className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Flexible Scheduling</h3>
                      <p className="text-sm text-muted-foreground">
                        We work around your schedule, with same-day and weekend availability
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="mt-1">
                      <CheckCircle2 className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Transparent Pricing</h3>
                      <p className="text-sm text-muted-foreground">
                        No hidden fees - you'll know exactly what you're paying upfront
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="mt-1">
                      <CheckCircle2 className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Satisfaction Guarantee</h3>
                      <p className="text-sm text-muted-foreground">
                        If you're not happy, we'll make it right - no questions asked
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Cleaning Standards */}
        <section className="py-16 bg-muted">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">Our Cleaning Standards</h2>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  We use professional-grade cleaning products and equipment to ensure the best results. 
                  Our cleaning protocols are designed to be thorough, efficient, and safe for all surfaces.
                </p>
                <p className="text-muted-foreground">
                  <strong>Quality Products:</strong> We use EPA-approved cleaning solutions that are 
                  effective yet gentle. Green cleaning options are available upon request.
                </p>
                <p className="text-muted-foreground">
                  <strong>Professional Equipment:</strong> From HEPA-filter vacuums to microfiber cloths, 
                  we use the right tools for every job.
                </p>
                <p className="text-muted-foreground">
                  <strong>Detailed Checklists:</strong> Every cleaning follows a comprehensive checklist 
                  to ensure nothing is missed.
                </p>
                <p className="text-muted-foreground">
                  <strong>Continuous Training:</strong> Our team stays updated on the latest cleaning 
                  techniques and best practices.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-accent text-accent-foreground">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience the V & N Difference</h2>
            <p className="text-xl mb-8 opacity-90">
              Join hundreds of satisfied customers who trust us with their homes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild className="text-lg px-8">
                <a href="https://bookings.vnprocleaning.com/booknow" target="_blank" rel="noopener noreferrer">
                  Book Now
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg px-8 bg-transparent border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent">
                <a href="/contact">Contact Us</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
