import { NextResponse } from 'next/server';

export async function GET() {

    const productsResponse  = await fetch('https://jsonplaceholder.typicode.com/photos')
    const products: { id: string, url: string, title: string, thumbnailUrl: string }[] = await productsResponse.json();

    // Costruisci l'XML manualmente
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    
    ${products.map(product => {
                return `
      <url>
        <loc>${product.thumbnailUrl}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
      </url>
    `;

            })
            .join('')}
  </urlset>`;

    // Imposta l'intestazione della risposta come XML
    return new NextResponse(sitemap, {
        headers: {
            'Content-Type': 'application/xml',
        },
    });
}
