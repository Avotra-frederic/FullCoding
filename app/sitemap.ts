import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://full-conding.vercel.app',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://jssi.jssi-madagascar.mg/',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 2,
    },
    {
      url: 'https://espic.jssi-madagascar.mg/',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 2,
    },
  ]
}