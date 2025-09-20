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
        <meta name="geo.region" content="US-NY" /> 
        <meta name="geo.placename" content="Dharan" /> 
        <meta name="geo.position" content="40.7128;-74.0060" /> 
        <meta name="ICBM" content="40.7128, -74.0060" />
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