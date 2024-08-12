/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'my-blob-store.public.blob.vercel-storage.com',
            port: '',
          },
        ],
      },
      async headers(){
        rerturn [
          {
            source:'/(.*)',
            headers:[
              {
                key: 'X-Frame-Options',
                value: 'DENY'
              },
              {
                key:"X-Content-Type-Options",
                value:"nosniff"
              },
              {
                key: 'Content-Security-Policy',
                value:
                  "default-src 'self' 'https://full-conding.vercel.app'; image-src 'https://unsplash.com'; script-src 'self' https://www.google-analytics.com; font-src 'self' 'https://fonts.googleapis.com'",
              },
              {
                key: 'Permissions-Policy',
                value: "camera=(); battery=(self); geolocation=(); microphone=('https://full-conding.vercel.app');",
              },
              {
                key: 'Referrer-Policy',
                value: 'origin-when-cross-origin',
              },
            ]
          }
        ]
      }
};

export default nextConfig;
