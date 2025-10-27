The redirect issue may cause our website pages not to be indexed or ranked in google. So, to fix this issue we need to make sure that there is only one redirect (i.e; 301 moved permanently). In order to do so; 
1. We first need to go to our projects in Vercel dashboard. 
2. Under projects, we need to go to the "Settings" tab and choose "Domain" from the left sidebar. 
3. Then we need to click "Edit" button of the URL which we want to move permanently. 
4. There we get the option for "Redirect to Another Domain" where we can select "301 Moved Permanently" from the dropdown menu. 
5. And finally we need to save the changes.

This configures our redirect issue for the "https" but the issue for "http" still exists which can be fixed by creating "vercel.json" file inside your root directory of the project and adding the following code segments inside it.
```
{
  "redirects": [
    {
      "source": "/:path*",
      "has": [
        {
          "type": "host",
          "value": "<your_domain>"
        }
      ],
      "destination": "https://www.<your_domain>/:path*",
      "permanent": true
    },
    {
      "source": "/:path*",
      "has": [
        {
          "type": "host",
          "value": "www.<your_domain>"
        },
        {
          "type": "header",
          "key": "x-forwarded-proto",
          "value": "http"
        }
      ],
      "destination": "https://www.<your_domain>/:path*",
      "permanent": true
    }
  ]
}
```