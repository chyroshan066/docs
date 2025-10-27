"robots.txt" file tells search engines which parts of your website they can and cannot crawl. It prevents indexing of private, duplicate, or low-value content so that the search engine can focus on important pages. This helps reduce server load by preventing unnecessary crawling thus allowing for faster indexing of important content.

First of all inside your "app" directory create "robots.ts" file and import "MetadataRoute" as;
```
import { MetadataRoute } from 'next';
```

Then create a new function named "robots" and export it as a default function with return type "MetadataRoute.Robots". Then export the object with keys like "rules", "sitemap" etc.
<br> The sample code is written below;

```
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'],
    },
    sitemap: 'https://www.<your_domain>/sitemap.xml',
  };
}
```

"userAgent" targets the bots that are allowed to crawl our pages. "*" value means all bots can crawl our pages.
<br> "allow" gives permission to crawl the specific path of our website. '/' allows crawling of the entire root directory.
<br> "disallow" prevents search engines from wasting time on irrelevant pages.
<br> "sitemap" tells search engines where to find the sitemap.