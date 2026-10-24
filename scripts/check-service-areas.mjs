import assert from 'node:assert/strict';

const base=process.argv[2]||'http://localhost:3001';
const production='https://www.gtmotorsports.com.au';
const areas=[['cranbourne','Cranbourne'],['berwick','Berwick'],['narre-warren','Narre Warren'],['officer','Officer'],['pakenham','Pakenham'],['lynbrook','Lynbrook'],['hampton-park','Hampton Park'],['hallam','Hallam']];
async function page(path){const r=await fetch(base+path,{signal:AbortSignal.timeout(20000)});assert.equal(r.status,200,path);return r.text();}
const home=await page('/');
assert.ok(home.includes('One Workshop in Clyde North'));
assert.ok(home.includes('href="/locations"'));
const hub=await page('/locations');
assert.ok(hub.includes('Areas We Serve from Our Clyde North Workshop'));
assert.ok(hub.includes('has one workshop at 47B Palladium Circuit, Clyde North'));
assert.ok(hub.includes(`rel="canonical" href="${production}/locations"`));
const sitemap=await page('/sitemap.xml');
const urls=[...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(m=>m[1]);
assert.equal(urls.length,33,'Existing sitemap page count');
assert.equal(new Set(urls).size,33,'Unique sitemap URLs');
for(const [slug,suburb] of areas){
 const path='/locations/'+slug;const html=await page(path);
 assert.ok(hub.includes(`href="${path}"`),path+' hub link');
 assert.ok(html.includes(`Car Servicing for ${suburb} Drivers`),path+' H1');
 assert.ok(html.includes(`Car Service for ${suburb} Drivers | G&amp;T Motorsports`),path+' title');
 assert.ok(html.includes(`rel="canonical" href="${production}${path}"`),path+' canonical');
 const main=html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/)?.[1]||'';
 assert.equal((main.match(/<h1\b/g)||[]).length,1,path+' one H1');
 assert.ok(main.includes('Our only workshop is at'),path+' single workshop notice');
 assert.ok(main.includes('47B Palladium Circuit, Clyde North VIC 3978, Australia'),path+' true address');
 assert.ok(main.includes('all servicing and repairs take place in Clyde North'),path+' service area clarity');
 const header=html.match(/<header\b[\s\S]*?<\/header>/)?.[0]||'';
 assert.ok(!header.includes('locations-dropdown')&&!header.includes('locations-mobile-panel'),path+' no suburb dropdown');
 const footer=html.match(/<footer\b[\s\S]*?<\/footer>/)?.[0]||'';
 assert.ok(footer.includes('Areas We Serve'),path+' footer discovery');
 for(const target of ['/book-online','tel:+61414901666','https://www.google.com/maps/dir/']) assert.ok(main.includes(target),path+' CTA '+target);
 const schemas=[...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(m=>JSON.parse(m[1]));
 const businesses=schemas.filter(s=>s['@type']==='AutoRepair');assert.equal(businesses.length,1,path+' one business');
 assert.equal(businesses[0].address.addressLocality,'Clyde North',path+' business locality');
 const crumb=schemas.find(s=>s['@type']==='BreadcrumbList');assert.equal(crumb.itemListElement[1].name,'Areas We Serve');
 assert.ok(urls.includes(production+path),path+' remains in sitemap');
 console.log('PASS '+path+': status, headings, canonical, address, breadcrumb, navigation and CTAs');
}
for(const [source,target] of [['/mechanic-clyde-north','/'],['/mechanic-cranbourne','/locations/cranbourne'],['/mechanic-berwick','/locations/berwick']]){
 const r=await fetch(base+source,{redirect:'manual',signal:AbortSignal.timeout(20000)});assert.equal(r.status,308,source);assert.equal(new URL(r.headers.get('location'),base).pathname,target,source);
}
const robots=await page('/robots.txt');assert.ok(!robots.includes('Disallow: /_next/'));assert.ok(robots.includes('Disallow: /api/'));
assert.ok(robots.includes('Sitemap: '+production+'/sitemap.xml'));
console.log('PASS homepage/hub links, all 8 service areas, existing redirects, 33 sitemap URLs and public render-resource crawlability');
