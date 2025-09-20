For single route website, you can add JSON-LD Markup to your root "layout.tsx" file for better SEO. This helps google understand you're a legitimate business with real location, hours, and contact info.

For this, you first need to create a structured data within your "lib" folder and export it. The structured data may look like;

```
export const restaurantStructuredData = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "Gurung BBQ", 
  "description": "Experience authentic Nepali BBQ at Gurung BBQ. Savor traditional grilled meats, momos, and Himalayan flavors in a warm, welcoming atmosphere. Fresh ingredients, bold spices, and time-honored recipes.", 
  "url": process.env.NEXT_PUBLIC_BASE_URL,
  
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Ganeshman Chowk",
    "addressLocality": "Dharan",
    "addressRegion": "Koshi",
    "postalCode": "12345",
    "addressCountry": "NP"
  },
  
  "telephone": "+977-25-570068",
  "email": "gurunghotkitchen123@gmail.com",
  
  "openingHours": [
    "Mo-Su 9:00-22:00",
  ],
  
  "servesCuisine": ["Italian", "Mediterranean"],
  "priceRange": "$$",
  
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.5",
    "ratingCount": "127"
  },
  
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "40.7128", 
    "longitude": "-74.0060"
  },
  
  "sameAs": [
    "https://www.facebook.com/profile.php?id=100063725191266",
    "https://www.tiktok.com/discover/gurung-bbq-dharan-menu"
  ],
  
  "potentialAction": {
    "@type": "ReserveAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": `${process.env.NEXT_PUBLIC_BASE_URL}#contact`
    },
    "result": {
      "@type": "Reservation",
      "name": "Dinner Reservation"
    }
  }
};
```

The "@context" field tells search engines what vocabulary/language you're using to describe your data. "https://schema.org" is the universal standard that all search engines recognize for structured data markup.
<br> We always need to use "PostalAddress" for business locations.
<br> According to Schema.org priceRange guidelines: $ = Inexpensive (under $25 USD equivalent), $$ = Moderate ($25-50 USD equivalent), $$$ = Expensive ($50-100 USD equivalent) and $$$$ = Very Expensive (over $100 USD equivalent)

Then import the structured data in your root "layout.tsx" file and add it as a script inside \<head\> tag with type "application/ld+json".
<br> The sample code is written below;

```
import { restaurantStructuredData } from "@/lib/structured-data";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(restaurantStructuredData),
          }}
        />
        <meta name="google-site-verification" content="your-verification-code" />
        <meta name="facebook-domain-verification" content="your-verification-code" />
      </head>

      <body>
        {children}
      </body>
    </html>
  );
}
```

The "dangerouslySetInnerHTML" is a React-specific way to inject raw HTML content into a component.
<br> There isn't any need to add meta tag for "google-site-verification" if you added DNS TXT record in the domain itself. But when using vercel sub-domains, we don't have control over adding DNS TXT record, so our only option would be to add meta tag for "google-site-verification".