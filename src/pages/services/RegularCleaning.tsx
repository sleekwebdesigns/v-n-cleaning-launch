import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Breadcrumbs from "@/components/Breadcrumbs";
import { ServiceSchema, SEOHead, useBreadcrumbs } from "@/components/StructuredData";
import { Sparkles, Home, Calendar, Clock, CheckCircle2, MapPin } from "lucide-react";

const RegularCleaning = () => {
  const breadcrumbs = useBreadcrumbs();

  return (
    <>
      <Helmet>
        <title>Regular Home Cleaning Brooklyn & NYC | Weekly Cleaning Service</title>
        <meta 
          name="description" 
          content="Weekly & bi-weekly home cleaning in Brooklyn, Queens, NYC. Park Slope, Williamsburg, Astoria cleaning. V & N Cleaning: (347) 357-1090" 
        />
        <link rel="canonical" href="https://vnprocleaning.com/services/regular-cleaning" />
      </Helmet>

      <SEOHead
        title="Regular Home Cleaning Brooklyn & NYC | Weekly Cleaning Service"
        description="Weekly & bi-weekly home cleaning in Brooklyn, Queens, NYC. Park Slope, Williamsburg, Astoria cleaning. V & N Cleaning: (347) 357-1090"
        canonicalUrl="https://vnprocleaning.com/services/regular-cleaning"
      />

      <ServiceSchema
        serviceName="Regular Home Cleaning in Brooklyn & NYC"
        serviceType="Residential Cleaning"
        description="V & N Cleaning Services provides professional regular home cleaning for Brooklyn apartments, Queens houses, and Manhattan condos. Our weekly and bi-weekly regular cleaning service maintains a consistently clean home for busy NYC professionals, families with children, and residents throughout all five boroughs."
        areaServed={["Brooklyn", "Queens", "Manhattan", "The Bronx"]}
        neighborhoods={["Park Slope", "Williamsburg", "Astoria", "Upper East Side", "Brooklyn Heights", "DUMBO", "Bushwick", "Crown Heights", "Forest Hills", "Long Island City"]}
        url="https://vnprocleaning.com/services/regular-cleaning"
        priceRange="$$"
      />

      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-grow">
          {/* Breadcrumbs */}
          <div className="container mx-auto px-4 py-4">
            <Breadcrumbs items={breadcrumbs} />
          </div>

          {/* Hero Section */}
          <section className="py-12 md:py-20 bg-gradient-subtle">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <Sparkles className="w-8 h-8 text-primary" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                  Regular Home Cleaning in Brooklyn & NYC
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                  V & N Cleaning Services provides professional regular home cleaning for Brooklyn apartments, Queens houses, and Manhattan condos. Our weekly and bi-weekly regular cleaning service maintains a consistently clean home for busy NYC professionals, families with children, and residents throughout all five boroughs. We serve Park Slope brownstones, Williamsburg lofts, Astoria condos, Upper East Side co-ops, and over 20 Brooklyn neighborhoods with reliable regular cleaning.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-gradient-primary">
                    <a href="https://bookings.vnprocleaning.com/booknow" target="_blank" rel="noopener noreferrer">
                      Book Now
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <a href="/contact">Get Free Quote</a>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* What is Regular Cleaning */}
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">What is Regular Cleaning?</h2>
                
                <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
                  <p>
                    Regular cleaning from V & N Cleaning Services is scheduled residential cleaning that occurs weekly, bi-weekly, or monthly depending on your needs. Our regular cleaning service focuses on maintaining cleanliness in your Brooklyn or NYC home through consistent, professional cleaning. Regular cleaning is designed for homeowners and renters who want to keep their property clean without dedicating hours to cleaning tasks.
                  </p>
                  
                  <p>
                    Our Brooklyn-based regular cleaning team brings professional-grade cleaning supplies and equipment to your property. Each regular cleaning visit includes dusting all surfaces, vacuuming carpets and area rugs, mopping hardwood and tile floors, bathroom deep cleaning and sanitization, kitchen countertop and sink sanitization, trash removal, and bed making. Regular cleaning takes 2-4 hours depending on your home size and is available Monday through Friday throughout NYC.
                  </p>
                </div>

                <div className="mt-12 grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CheckCircle2 className="w-10 h-10 text-accent mb-4" />
                      <CardTitle>What's Included</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <span className="text-accent mr-2 mt-1">✓</span>
                          <span className="text-muted-foreground">Dusting all accessible surfaces in living areas, bedrooms, and common spaces</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent mr-2 mt-1">✓</span>
                          <span className="text-muted-foreground">Vacuuming all carpeted areas and area rugs</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent mr-2 mt-1">✓</span>
                          <span className="text-muted-foreground">Mopping hardwood, tile, and laminate floors</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent mr-2 mt-1">✓</span>
                          <span className="text-muted-foreground">Bathroom cleaning: toilets, sinks, tubs/showers, mirrors, fixtures</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent mr-2 mt-1">✓</span>
                          <span className="text-muted-foreground">Kitchen cleaning: countertops, sinks, stovetop, exterior appliances</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent mr-2 mt-1">✓</span>
                          <span className="text-muted-foreground">Trash and recycling removal from all rooms</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent mr-2 mt-1">✓</span>
                          <span className="text-muted-foreground">Bed making (sheets provided by client)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent mr-2 mt-1">✓</span>
                          <span className="text-muted-foreground">Light organization and tidying</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <Clock className="w-10 h-10 text-accent mb-4" />
                      <CardTitle>Scheduling Options</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-4">
                        <li>
                          <div className="font-semibold text-foreground mb-1">Weekly Cleaning</div>
                          <p className="text-sm text-muted-foreground">Same day, same time every week for consistent cleanliness</p>
                        </li>
                        <li>
                          <div className="font-semibold text-foreground mb-1">Bi-Weekly Cleaning</div>
                          <p className="text-sm text-muted-foreground">Every other week, perfect for balanced maintenance</p>
                        </li>
                        <li>
                          <div className="font-semibold text-foreground mb-1">Monthly Cleaning</div>
                          <p className="text-sm text-muted-foreground">Once per month for larger homes or lighter cleaning needs</p>
                        </li>
                        <li>
                          <div className="font-semibold text-foreground mb-1">Custom Schedules</div>
                          <p className="text-sm text-muted-foreground">Flexible options for unique situations</p>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Where We Provide Regular Cleaning */}
          <section className="py-16 md:py-24 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Where We Provide Regular Cleaning</h2>
                  <p className="text-lg text-muted-foreground">
                    Professional regular cleaning throughout Brooklyn, Queens, Manhattan, and The Bronx
                  </p>
                </div>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Brooklyn Regular Cleaning</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      V & N Cleaning Services provides weekly and bi-weekly regular cleaning throughout Brooklyn including Park Slope, Williamsburg, Brooklyn Heights, DUMBO, Bushwick, Crown Heights, Prospect Heights, Fort Greene, and Carroll Gardens. Our Brooklyn regular cleaning team serves brownstones, walk-up apartments, co-op buildings, and rental properties. Park Slope families trust us for weekly brownstone cleaning, Williamsburg renters book bi-weekly apartment cleaning, and Brooklyn Heights homeowners rely on our flexible regular cleaning schedule.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-4">Queens Regular Cleaning</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      From Astoria to Forest Hills, V & N Cleaning Services delivers regular cleaning for Queens homes, condos, and apartments. Our Queens regular cleaning team serves Astoria, Long Island City, Forest Hills, Flushing, Sunnyside, and Woodside with professional residential cleaning. Astoria condo owners schedule weekly regular cleaning, Forest Hills families choose bi-weekly house cleaning, and Long Island City professionals book monthly maintenance cleaning.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-4">Manhattan Regular Cleaning</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      V & N Cleaning Services provides regular cleaning for Manhattan apartments and condos from the Upper East Side to Chelsea. Our Manhattan cleaning team serves Upper East Side co-ops, Upper West Side apartments, Midtown condos, Chelsea lofts, and surrounding neighborhoods with professional regular cleaning. Manhattan professionals book weekly apartment cleaning, families schedule bi-weekly condo cleaning, and busy residents choose monthly maintenance cleaning throughout NYC.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Who Needs Regular Cleaning */}
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <Home className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Who Needs Regular Cleaning?</h2>
                </div>

                <div className="space-y-6 text-muted-foreground prose prose-lg max-w-none">
                  <p>
                    Regular cleaning is ideal for busy NYC professionals who work long hours and want to come home to a clean apartment or house without spending weekends cleaning. V & N Cleaning Services serves Manhattan professionals, Brooklyn creatives, and Queens commuters with weekly or bi-weekly regular cleaning that maintains a consistently clean home. Our clients include lawyers, doctors, financial professionals, entrepreneurs, and tech workers throughout NYC who value their time and prefer professional cleaning.
                  </p>

                  <p>
                    Families with children in Brooklyn, Queens, and Manhattan trust V & N for regular cleaning services. Parents juggling work, childcare, and household responsibilities rely on our team to handle cleaning tasks efficiently. Our regular cleaning is safe for homes with children and pets, using family-friendly cleaning products approved for NYC residences.
                  </p>

                  <p>
                    Property owners, landlords, and Airbnb hosts in Brooklyn and NYC use our regular cleaning service to maintain rental properties between tenants. Short-term rental owners in Williamsburg, Park Slope, and Astoria schedule weekly turnovers, while landlords book monthly maintenance cleaning for vacant units. V & N Cleaning Services provides flexible scheduling for property management clients throughout the five boroughs.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing & Scheduling */}
          <section className="py-16 md:py-24 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Pricing & Scheduling</h2>
                
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle>Transparent Pricing for Brooklyn & NYC</CardTitle>
                    <CardDescription>
                      Regular cleaning pricing varies based on home size, cleaning frequency, and specific requirements
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      V & N Cleaning Services offers competitive rates for regular cleaning in Brooklyn, Queens, Manhattan, and The Bronx. We provide discounted rates for weekly and bi-weekly regular cleaning schedules compared to one-time cleaning services.
                    </p>
                    <p className="text-muted-foreground">
                      Contact us at <a href="tel:+13473571090" className="text-primary font-semibold hover:underline">(347) 357-1090</a> for a free quote customized to your Park Slope brownstone, Williamsburg apartment, or Astoria condo. We'll provide transparent pricing based on your specific needs and home size.
                    </p>
                    <div className="pt-4">
                      <Button asChild className="w-full sm:w-auto bg-gradient-primary">
                        <a href="/contact">Get Your Free Quote</a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
                
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl">How often should I schedule regular cleaning for my Brooklyn apartment?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Most Brooklyn apartment dwellers choose bi-weekly regular cleaning for 1-2 bedroom apartments. Weekly cleaning is recommended for families with children, homes with pets, or busy professionals who want maximum cleanliness. Studio apartments in Williamsburg or Park Slope often need monthly regular cleaning. V & N Cleaning Services customizes cleaning frequency based on your Brooklyn or NYC lifestyle.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl">What's the difference between regular cleaning and deep cleaning?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Regular cleaning maintains cleanliness with dusting, vacuuming, mopping, and surface cleaning. Deep cleaning is a more intensive service that includes baseboards, inside ovens, inside refrigerators, and detailed crevice cleaning. V & N recommends deep cleaning 2-4 times per year, with regular cleaning in between to maintain your Brooklyn or NYC home.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl">Do you bring your own cleaning supplies?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Yes! V & N Cleaning Services brings all professional-grade cleaning supplies and equipment to your Brooklyn, Queens, or Manhattan property. Our regular cleaning team uses high-quality, effective cleaning products. We also offer eco-friendly cleaning options at no additional cost for clients who prefer green cleaning products.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl">Can I schedule regular cleaning for the same day and time each week?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Absolutely! V & N Cleaning Services schedules regular cleaning clients for the same day and time each week or bi-weekly period. This consistency means you can plan your schedule knowing your Park Slope apartment or Williamsburg loft will be professionally cleaned on your preferred day. We work with your building's requirements and schedules in Brooklyn and NYC.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Related Services */}
          <section className="py-16 md:py-24 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Related Cleaning Services</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle>Deep Cleaning</CardTitle>
                      <CardDescription>
                        Comprehensive cleaning for Brooklyn homes and NYC apartments including baseboards, ovens, and detailed cleaning
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button asChild variant="outline" className="w-full">
                        <a href="/services/deep-cleaning">Learn More</a>
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle>Apartment Cleaning</CardTitle>
                      <CardDescription>
                        Specialized cleaning for NYC apartments, understanding building requirements and city living challenges
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button asChild variant="outline" className="w-full">
                        <a href="/services/apartment-cleaning">Learn More</a>
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                <div className="text-center mt-8">
                  <Button asChild variant="outline" size="lg">
                    <a href="/services">View All Services</a>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-16 md:py-24 bg-gradient-primary text-white">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to Book Your Regular Cleaning in Brooklyn?
                </h2>
                <p className="text-lg mb-8 opacity-90">
                  Join hundreds of satisfied Brooklyn and NYC residents who trust V & N Cleaning Services for regular home cleaning
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" variant="secondary">
                    <a href="https://bookings.vnprocleaning.com/booknow" target="_blank" rel="noopener noreferrer">
                      Book Online Now
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary">
                    <a href="tel:+13473571090">(347) 357-1090</a>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default RegularCleaning;
