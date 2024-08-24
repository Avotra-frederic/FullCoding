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
        return [
          {
            source:'/(.*)',
            headers:[
              {
                key: 'X-Frame-Options',
                value: 'SAMEORIGIN'
                
              },
              {
                key:"X-Content-Type-Options",
                value:"nosniff"
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
