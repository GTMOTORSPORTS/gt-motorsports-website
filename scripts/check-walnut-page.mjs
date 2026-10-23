import assert from 'node:assert/strict';

const base = process.argv[2] || 'http://localhost:3000';
const path = '/walnut-blasting-clyde-north';
const canonical = `https://www.gtmotorsports.com.au${path}`;
const pages = {};
for (const route of ['/', '/services', path, '/contact', '/book-online', '/sitemap.xml']) {
  const response = await fetch(base + route);
  assert.equal(response.status, 200, `${route} HTTP status`);
  pages[route] = await response.text();
  console.log(`PASS HTTP 200 ${route}`);
}
for (const route of ['/', '/services']) {
  assert.ok(pages[route].includes(`href="${path}"`), `${route} service link`);
  assert.ok(pages[route].includes('699'), `${route} starting price`);
}
const html = pages[path];
assert.match(html, /<title>Walnut Blasting Clyde North/);
assert.ok(html.includes(`rel="canonical" href="${canonical}"`));
assert.match(html, /name="description" content="[^"]*699[^"]*eligible/);
assert.ok(html.includes('property="og:url" content="' + canonical + '"'));
assert.equal((html.match(/<h1\b/g) || []).length, 1);
for (const target of ['/contact', '/book-online', 'tel:+61414901666']) assert.ok(html.includes(`href="${target}"`), target);
assert.match(html, /AUD \$699 including GST/);
assert.match(html, /not every engine is eligible/i);
assert.match(html, /extra work requires approval/i);
const schemas = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(match => JSON.parse(match[1]));
for (const type of ['Service', 'FAQPage', 'BreadcrumbList']) assert.ok(schemas.some(s => s['@type'] === type), type);
const faq = schemas.find(s => s['@type'] === 'FAQPage');
assert.equal(faq.mainEntity.length, 7);
for (const item of faq.mainEntity) assert.ok(html.includes(item.name.replaceAll('&', '&amp;')), 'visible FAQ');
assert.ok(pages['/sitemap.xml'].includes(canonical));
const redirect = await fetch(base + '/services/walnut-blasting', { redirect: 'manual' });
assert.equal(redirect.status, 308);
assert.ok(redirect.headers.get('location')?.endsWith(path));
console.log('PASS navigation, price conditions, quote/booking/call CTAs, metadata, canonical, JSON-LD, FAQs, sitemap and legacy redirect');
