import { NextResponse } from 'next/server';

export async function GET() {
  // Creiamo l'XML per il sitemap index
  const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
    <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <sitemap>
        <loc>${process.env.NEXT_PUBLIC_APP_URL}/api/sitemap/products.xml</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
      </sitemap>
    </sitemapindex>`;

  // Imposta l'intestazione della risposta come XML
  return new NextResponse(sitemapIndex, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
