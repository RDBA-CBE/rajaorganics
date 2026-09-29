import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://rajaorganicfarms.com';
  return [
    { url: `${baseUrl}/`, changeFrequency: 'monthly', priority: 1 },
    { url: `${baseUrl}/about`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/products`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/nature-care`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/contact`, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${baseUrl}/privacy-policy`, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/terms-and-conditions`, changeFrequency: 'yearly', priority: 0.3 },
  ];
}
