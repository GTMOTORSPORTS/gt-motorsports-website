import assert from 'node:assert/strict';
const base = process.argv[2] || 'http://localhost:3000';
const path = '/services/walnut-blasting-intake-cleaning-clyde-north';
const canonical = `https://www.gtmotorsports.com.au${path}`;
const expectedPrices = [
 ['3-cylinder petrol',699], ['4-cylinder petrol',699], ['4-cylinder turbo / direct injection',749],
 ['5-cylinder petrol',899], ['6-cylinder inline petrol',999], ['V6 petrol',1099], ['V8 petrol',1399],
 ['4-cylinder diesel intake cleaning',899], ['6-cylinder diesel intake cleaning',1199], ['V8 diesel intake cleaning',1599],
 ['Complex European performance engines',null], ['VW Golf GTI / Golf R, selected EA888',799],
 ['Audi A3 / S3 2.0 TFSI',799], ['BMW selected 4-cylinder petrol',799], ['BMW N54 / N55 six-cylinder',999],
 ['BMW 320d diesel',949], ['BMW 330d diesel',1199], ['BMW X5 / X6',1499],
 ['Mercedes-Benz selected 4-cylinder petrol',899], ['Mercedes-Benz selected V6 petrol',1199], ['Mercedes-AMG V8',2199],
 ['MINI Cooper selected 4-cylinder',799], ['Holden Commodore SIDI V6',999], ['Mazda selected 4-cylinder petrol',799],
 ['Toyota LandCruiser V8 diesel',1599],
];
const pages = {};
for (const route of ['/', '/services', path, '/contact?service=walnut-blasting', '/book-online?service=walnut-blasting', '/sitemap.xml', '/engine-diagnostics', '/services/engine-repairs', '/mercedes-benz-service']) {
 const response = await fetch(base + route);
 assert.equal(response.status, 200, `${route} HTTP status`);
 pages[route] = await response.text(); console.log(`PASS HTTP 200 ${route}`);
}
for (const route of ['/', '/services', '/engine-diagnostics', '/services/engine-repairs', '/mercedes-benz-service']) assert.ok(pages[route].includes(`href="${path}"`), `${route} service link`);
const html = pages[path];
const visible = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '');
assert.ok(html.includes('<title>Walnut Blasting &amp; Intake Cleaning Clyde North | G&amp;T Motorsports</title>'));
assert.ok(html.includes(`rel="canonical" href="${canonical}"`));
assert.ok(html.includes('name="description" content="Walnut blasting and intake valve carbon cleaning in Clyde North. Engine-specific pricing from $699 incl. GST. Request a quote from G&amp;T Motorsports."'));
assert.ok(html.includes('property="og:url" content="' + canonical + '"'));
assert.match(html, /name="robots" content="index, follow"/);
assert.match(html, /name="twitter:card" content="summary_large_image"/);
assert.equal((visible.match(/<h1\b/g) || []).length, 1);
for (const target of ['/contact?service=walnut-blasting', '/book-online?service=walnut-blasting', 'tel:+61414901666']) assert.ok(visible.includes(`href="${target}"`), target);
const disclaimer = 'All prices are starting prices in AUD including GST. Final pricing depends on vehicle model, engine code, intake manifold access, carbon buildup, replacement gaskets and seals, and additional work required. Vehicle suitability must be confirmed before booking. Additional repairs and parts are quoted separately.';
assert.ok(visible.includes(disclaimer));
assert.match(visible, /instead of adding it to the general engine price/);
assert.match(visible, /diesel intake cleaning is not automatically petrol-style valve walnut blasting/i);
assert.match(visible, /AI-generated educational illustration/);
const schemas = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(match => JSON.parse(match[1]));
for (const type of ['Service', 'BreadcrumbList', 'AutoRepair']) assert.equal(schemas.filter(s => s['@type'] === type).length, 1, type);
assert.ok(!schemas.some(s => s['@type'] === 'FAQPage'));
assert.equal([...visible.matchAll(/<summary\b[^>]*>([\s\S]*?)<\/summary>/g)].filter(match => match[1].includes('?')).length, 15);
const catalog = schemas.find(s => s['@type'] === 'Service').hasOfferCatalog;
assert.equal(catalog['@type'], 'OfferCatalog');
const offers = catalog.itemListElement.flatMap(group => group.itemListElement);
assert.equal(offers.length, 25);
const rows = [...visible.matchAll(/<tr\b[^>]*>([\s\S]*?)<\/tr>/g)].map(m => m[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim());
for (const [name, price] of expectedPrices) {
 const offer = offers.find(o => o.name === name); assert.ok(offer, name);
 const row = rows.find(row => row.startsWith(name + ' ')); assert.ok(row, `${name} visible row`);
 if (price === null) { assert.ok(!offer.priceSpecification); assert.ok(row.includes('Custom quote')); }
 else {
  assert.equal(offer.priceSpecification.minPrice, price, name);
  assert.equal(offer.priceSpecification.priceCurrency, 'AUD');
  assert.equal(offer.priceSpecification.valueAddedTaxIncluded, true);
  assert.ok(row.includes('From $' + price.toLocaleString('en-AU')), `${name} displayed price`);
 }
}
const enquiry = pages['/contact?service=walnut-blasting'];
for (const field of ['registration', 'make', 'model', 'engine']) assert.ok(enquiry.includes(`name="${field}"`), field);
assert.ok(enquiry.includes('value="Walnut Blasting / Intake Carbon Cleaning"'));
assert.ok(pages['/book-online?service=walnut-blasting'].includes('Walnut Blasting / Intake Carbon Cleaning Inspection'));
assert.ok(pages['/sitemap.xml'].includes(canonical));
assert.ok(!pages['/sitemap.xml'].includes('<loc>https://www.gtmotorsports.com.au/walnut-blasting-clyde-north</loc>'));
for (const old of ['/services/walnut-blasting', '/walnut-blasting-clyde-north']) {
 const redirect = await fetch(base + old, { redirect: 'manual' }); assert.equal(redirect.status, 308);
 assert.ok(redirect.headers.get('location')?.endsWith(path));
}
const asset = await fetch(base + '/images/walnut-cleaning-process.webp'); assert.equal(asset.status, 200);
assert.match(asset.headers.get('content-type'), /image\/webp/);
console.log('PASS all 25 approved prices, GST, conditions, 15 FAQs, structured data, metadata, internal links, quote/booking context, image, sitemap and redirects');
