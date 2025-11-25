import { useLocation } from "react-router-dom";

interface LocalBusinessSchemaProps {
  includeReviews?: boolean;
}

export const LocalBusinessSchema = ({ includeReviews = false }: LocalBusinessSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://vnprocleaning.com/#business",
    "name": "V & N Cleaning Services",
    "image": "https://vnprocleaning.com/hero-cleaning.jpg",
    "logo": "https://vnprocleaning.com/VN.svg",
    "description": "Professional residential and commercial cleaning services in Brooklyn, Queens, Manhattan, and NYC. Trusted, reliable cleaners for homes, apartments, and offices.",
    "priceRange": "$$",
    "telephone": "+13473571090",
    "email": "email@vnprocleaning.com",
    "url": "https://vnprocleaning.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Brooklyn",
      "addressRegion": "NY",
      "addressCountry": "US",
      "areaServed": [
        {
          "@type": "City",
          "name": "Brooklyn",
          "containedIn": {
            "@type": "State",
            "name": "New York"
          }
        },
        {
          "@type": "City",
          "name": "Queens",
          "containedIn": {
            "@type": "State",
            "name": "New York"
          }
        },
        {
          "@type": "City",
          "name": "Manhattan",
          "containedIn": {
            "@type": "State",
            "name": "New York"
          }
        },
        {
          "@type": "City",
          "name": "The Bronx",
          "containedIn": {
            "@type": "State",
            "name": "New York"
          }
        }
      ]
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "40.6782",
      "longitude": "-73.9442"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "17:00"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Cleaning Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Regular Cleaning",
            "description": "Weekly and bi-weekly home cleaning services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Deep Cleaning",
            "description": "Thorough cleaning for homes needing extra attention"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Apartment Cleaning",
            "description": "Specialized cleaning for NYC apartments and condos"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Move-In/Move-Out Cleaning",
            "description": "Comprehensive cleaning for moving transitions"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Office Cleaning",
            "description": "Professional workspace cleaning services"
          }
        }
      ]
    }
  };

  if (includeReviews) {
    schema["aggregateRating"] = {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "3",
      "bestRating": "5",
      "worstRating": "1"
    };

    schema["review"] = [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Sarah M."
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "V & N transformed my apartment! They were thorough, professional, and respectful of my space. I'll definitely be booking them regularly.",
        "datePublished": "2024-01-15"
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Michael R."
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Best cleaning service I've used in Brooklyn. Reliable, punctual, and they pay attention to every detail. Highly recommend!",
        "datePublished": "2024-02-03"
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Jennifer K."
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Used them for a move-out cleaning. Got my full security deposit back! They're efficient, trustworthy, and their pricing is fair.",
        "datePublished": "2024-02-20"
      }
    ];
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

interface BreadcrumbSchemaProps {
  items: Array<{ name: string; url: string }>;
}

export const BreadcrumbSchema = ({ items }: BreadcrumbSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://vnprocleaning.com${item.url}`
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

interface ServiceSchemaProps {
  serviceName: string;
  serviceType: string;
  description: string;
  areaServed: string[];
  neighborhoods: string[];
  provider?: string;
  priceRange?: string;
  url: string;
}

export const ServiceSchema = ({ 
  serviceName, 
  serviceType, 
  description, 
  areaServed, 
  neighborhoods,
  provider = "V & N Cleaning Services",
  priceRange = "$$",
  url
}: ServiceSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": serviceType,
    "name": serviceName,
    "description": description,
    "provider": {
      "@type": "LocalBusiness",
      "name": provider,
      "telephone": "+13473571090",
      "email": "email@vnprocleaning.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Brooklyn",
        "addressRegion": "NY",
        "addressCountry": "US"
      }
    },
    "areaServed": [
      ...areaServed.map(city => ({
        "@type": "City",
        "name": city
      })),
      ...neighborhoods.map(neighborhood => ({
        "@type": "Neighborhood",
        "name": neighborhood
      }))
    ],
    "url": url,
    "priceRange": priceRange
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(schema)}
    </script>
  );
};

export const FAQSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What areas do you serve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We serve Brooklyn, Queens, Manhattan, The Bronx, and surrounding NYC areas. Contact us to confirm service availability in your specific neighborhood."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to provide cleaning supplies?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, we bring all necessary cleaning supplies and equipment. If you prefer specific products or have eco-friendly preferences, we're happy to accommodate."
        }
      },
      {
        "@type": "Question",
        "name": "How long does a cleaning take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Cleaning time varies based on home size and service type. Typical regular cleanings take 2-4 hours, while deep cleanings may take 4-6 hours."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to be home during the cleaning?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, many clients provide access and aren't home. We're fully insured and trustworthy. However, you're welcome to be home if you prefer."
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogImage?: string;
}

export const SEOHead = ({ title, description, canonicalUrl, ogImage = "https://lovable.dev/opengraph-image-p98pqg.png" }: SEOHeadProps) => {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:locality" content="Brooklyn" />
      <meta property="og:region" content="NY" />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </>
  );
};

export const useBreadcrumbs = () => {
  const location = useLocation();
  const path = location.pathname;
  
  const breadcrumbs: Array<{ name: string; url: string }> = [
    { name: "Home", url: "/" }
  ];
  
  if (path === "/services") {
    breadcrumbs.push({ name: "Services", url: "/services" });
  } else if (path.startsWith("/services/")) {
    breadcrumbs.push({ name: "Services", url: "/services" });
    const serviceName = path.split("/")[2];
    const serviceNames: Record<string, string> = {
      "regular-cleaning": "Regular Cleaning",
      "deep-cleaning": "Deep Cleaning",
      "apartment-cleaning": "Apartment Cleaning",
      "move-in-out-cleaning": "Move-In/Out Cleaning",
      "office-cleaning": "Office Cleaning"
    };
    breadcrumbs.push({ 
      name: serviceNames[serviceName] || "Service", 
      url: path 
    });
  } else if (path === "/about") {
    breadcrumbs.push({ name: "About", url: "/about" });
  } else if (path === "/contact") {
    breadcrumbs.push({ name: "Contact", url: "/contact" });
  }
  
  return breadcrumbs;
};
