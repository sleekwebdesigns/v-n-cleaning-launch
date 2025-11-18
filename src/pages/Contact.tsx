import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { BreadcrumbSchema, useBreadcrumbs } from "@/components/StructuredData";
import Breadcrumbs from "@/components/Breadcrumbs";
import NAP from "@/components/NAP";
import { Helmet } from "react-helmet";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const breadcrumbs = useBreadcrumbs();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Quote Request Received!",
      description: "We'll contact you within 24 hours to discuss your cleaning needs.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      service: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Contact V & N Cleaning Services | Free Quote Brooklyn & NYC | (347) 357-1090</title>
        <meta name="description" content="Get a free cleaning quote for Brooklyn, Queens, Manhattan. Professional home & apartment cleaning. Call now (347) 357-1090 or book online" />
        <link rel="canonical" href="https://vnprocleaning.com/contact" />
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact V & N Cleaning Services - Brooklyn & NYC</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Get a free quote or reach out with any questions
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Get Your Free Cleaning Quote</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(555) 123-4567"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service">Service Needed</Label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        <option value="">Select a service</option>
                        <option value="regular">Regular Cleaning</option>
                        <option value="deep">Deep Cleaning</option>
                        <option value="apartment">Apartment Cleaning</option>
                        <option value="move">Move-In/Move-Out</option>
                        <option value="office">Office Cleaning</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Property Address</Label>
                    <Input
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="123 Main St, Brooklyn, NY"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Additional Details</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your cleaning needs..."
                      rows={4}
                    />
                  </div>

                  <Button type="submit" className="w-full bg-gradient-primary">
                    Request Quote
                  </Button>
                </form>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Contact Information</h2>
                <NAP className="mb-8" />
                
                <h3 className="font-semibold text-lg mb-4 mt-8">Service Areas</h3>
                <p className="text-muted-foreground mb-6">
                  We proudly serve the following areas:
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                  <div>• Brooklyn Heights</div>
                  <div>• Park Slope</div>
                  <div>• Williamsburg</div>
                  <div>• Astoria</div>
                  <div>• Long Island City</div>
                  <div>• Upper East Side</div>
                  <div>• Upper West Side</div>
                  <div>• Midtown Manhattan</div>
                  <div>• And more!</div>
                </div>

                <div className="mt-8">
                  <Button asChild className="w-full bg-gradient-primary">
                    <a href="https://bookings.vnprocleaning.com/booknow" target="_blank" rel="noopener noreferrer">
                      Book Now
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Note */}
        <section className="py-16 bg-muted">
          <div className="container text-center">
            <h2 className="text-2xl font-bold mb-4">Serving Brooklyn & All of NYC</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              As a service-area business, we come to you! Whether you're in Brooklyn, Queens, Manhattan, 
              or The Bronx, V & N Cleaning Services is ready to make your space spotless.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
