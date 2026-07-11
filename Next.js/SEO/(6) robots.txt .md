Create a "robots.txt" file inside the "public" folder and add the following text:

```
User-agent: *
Allow: /

# Block Next.js static assets from indexing
Disallow: /_next/static/
Disallow: /_next/image/

# Block font files
Disallow: /*.woff2$
Disallow: /*.woff$
Disallow: /*.ttf$
Disallow: /*.eot$

Sitemap: https://<your_domain>/sitemap.xml
```

It provides the sitemap URL and allow every crawleres to perform indexing of the pages.