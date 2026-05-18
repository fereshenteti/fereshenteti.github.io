import TestimonialsCarousel from './TestimonialsCarousel';

type Recommendation = {
  id: string;
  fullName: string;
  company: string;
  text: string;
  rating: number;
  createdAt: string;
};

async function fetchRecommendations(): Promise<Recommendation[]> {
  const apiKey = process.env.KINDWO_API_KEY;
  if (!apiKey) return [];

  try {
    const res = await fetch('https://kindwo.com/api/recommendations/fares', {
      headers: { Authorization: `Bearer ${apiKey}` },
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    const data = await res.json();
    return Array.isArray(data.approved) ? data.approved : [];
  } catch {
    return [];
  }
}

export default async function TestimonialsSection() {
  const recommendations = await fetchRecommendations();
  return <TestimonialsCarousel recommendations={recommendations} />;
}
