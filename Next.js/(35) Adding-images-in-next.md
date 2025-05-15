Next.js doesn't allow to add images directly from the external sites. To add images in next.js, you first need to configure your "next.config.ts" file and provide the "protocol" and "hostname" of the site from which you added image under the "images" key.
<br> On configuration "next.config.ts" file looks-like;

```
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn-icons-png.flaticon.com"
      }
    ]
  }
};

export default nextConfig;
```

Then you can add images in your app. You first need to import "Image" component form " next/image" and then use it.
<br> The sample code is written below;

```
import Image from "next/image";

<Image src="https://cdn-icons-png.flaticon.com/128/4060/4060233.png" width={20} height={20} alt="flag" />
```

**Note:**  Next.js "Image" component always expects four attributes "src", "width", "height" and "alt".