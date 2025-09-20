First of all, create a variable named "NEXT_PUBLIC_BASE_URL" in your .env file and assign your website baseURL to it.

Then create a new file named "sitemap.ts" inside "app" directory and import the baseURL for use.

```
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
```

Then create a new function named "sitemap" and export it as a default function with return type "MetadataRoute.Sitemap". But before setting the return type of the sitemap function you first need to import "MetadataRoute" from "next". Then export all the array of objects having "url", "lastModified", "changeFrequency" and "priority" in each of the object.
<br> The sample code is written below;

```
export default function sitemap(): MetadataRoute.Sitemap {
  // Core restaurant pages
  const staticRoutes = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1.0, // Homepage gets highest priority
    },
  ];

  // Legal and policy pages (important for SEO and trust)
  const legalRoutes = [
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ];

  return [
    ...staticRoutes,
    ...legalRoutes,
  ];
}
```

Note that hash (#) navigation fragments do NOT work in sitemaps.