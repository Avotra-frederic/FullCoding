import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://full-conding.vercel.app/',
      lastModified: new Date(),
      changeFrequency: 'yearly',
    },
    {
      url: 'https://full-conding.vercel.app/#about',
      lastModified: new Date(),
      changeFrequency: 'yearly',
    },
    {
      url: 'https://full-conding.vercel.app/#services',
      lastModified: new Date(),
      changeFrequency: 'yearly',
    },
    {
      url: 'https://full-conding.vercel.app/#pricing',
      lastModified: new Date(),
      changeFrequency: 'yearly',
    },
    {
      url: 'https://full-conding.vercel.app/#contact',
      lastModified: new Date(),
      changeFrequency: 'yearly',
    },
    {
      url: 'https://jssi.jssi-madagascar.mg/',
      lastModified: new Date(),
      changeFrequency: 'monthly',
    },
    {
      url: 'https://espic.jssi-madagascar.mg/',
      lastModified: new Date(),
      changeFrequency: 'monthly',
    },
  ]
}