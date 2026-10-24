import assert from 'node:assert/strict';
const base=process.argv[2]||'http://localhost:3001';
const production='https://www.gtmotorsports.com.au';
async function get(path){const r=await fetch(base+path,{signal:AbortSignal.timeout(20000)});assert.equal(r.status,200,path);return r.text();}
const clean=html=>html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g,'');
const main=html=>clean(html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/)?.[1]||'');
const section=(html,id)=>{const escaped=id.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');return html.match(new RegExp('<section[^>]*id="'+escaped+'"[^>]*>([\\s\\S]*?)</section>'))?.[1]||'';};
const home=await get('/'); const body=main(home);
assert.equal((body.match(/<h1\b/g)||[]).length,1);
assert.equal((body.match(/<section\b/g)||[]).length,8,'Eight homepage sections');
assert.equal((section(body,'featured-services').match(/<article\b/g)||[]).length,6,'Six featured cards');
assert.equal((section(body,'service-pricing').match(/<article\b/g)||[]).length,3,'Three homepage offers');
assert.equal((section(body,'home-reviews').match(/<article\b/g)||[]).length,3,'Three reviews');
assert.equal((section(body,'home-faq').match(/<details\b/g)||[]).length,3,'Three homepage FAQs');
assert.equal((body.match(/<img\b/g)||[]).length,4,'Three genuine gallery photos and Integrity logo');
assert.equal((body.match(/<form\b/g)||[]).length,0,'Enquiry remains on contact page');
assert.equal((body.match(/<iframe\b/g)||[]).length,0,'No home calendar/map frame');
for(const term of ['Common Vehicle Problems We Fix','Secure a service, inspection or repair appointment today.','Add the founder'])assert.ok(!body.includes(term),term);
for(const price of ['From $149 including GST','From $299 including GST','From $699 including GST'])assert.ok(body.includes(price),price);
for(const path of ['/services/general-car-servicing','/mercedes-benz-service']){
 const content=main(await get(path));
 assert.equal((content.match(/id="starting-package"/g)||[]).length,1,'One approved package '+path);
 for(const term of ['up to 5 litres','parts and labour','Wash and vacuum','Additional oil','before work begins'])assert.ok(content.includes(term),path+' '+term);
}
assert.ok(section(body,'book-and-find-us').includes('47B Palladium Circuit'));
const header=clean(home.match(/<header\b[\s\S]*?<\/header>/)?.[0]||'');
assert.ok(!header.includes('href="/roadworthy-certificate"')&&!header.includes('href="/performance-upgrades"'));
for(const href of ['/','/about','/reviews','/contact','/book-online'])assert.ok(header.includes('href="'+href+'"'),href);
const pages={};
for(const path of ['/services','/reviews','/gallery','/contact','/book-online','/privacy-policy','/about','/roadworthy-certificate']){
 const html=await get(path);pages[path]=html;
 assert.equal((main(html).match(/<h1\b/g)||[]).length,1,path+' one H1');
 assert.ok(html.includes('rel="canonical" href="'+production+path+'"'),path+' canonical');
 console.log('PASS '+path+': HTTP 200, H1 and canonical');
}
for(const text of ['founder','placeholder','as they are confirmed'])assert.ok(!main(pages['/about']).toLowerCase().includes(text));
assert.equal((main(pages['/about']).match(/<img\b/g)||[]).length,3,'Two About workshop photos and Integrity logo');
const services=main(pages['/services']);
for(const price of ['$149','$220','$249','$599','$299','$549'])assert.ok(services.includes(price),'retained '+price);
assert.ok(services.includes('id="mechanical-repairs"'));
assert.ok(services.includes('href="/performance-upgrades"'));
assert.ok(services.includes('independent licensed vehicle tester'));
const rwc=pages['/roadworthy-certificate'];
assert.match(main(rwc),/independent licensed vehicle tester/);
assert.ok(main(rwc).includes('the independent licensed vehicle tester performs'));
assert.ok(!main(rwc).includes('Book an RWC'));
const schemas=[...rwc.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(m=>JSON.parse(m[1]));
const service=schemas.find(s=>s['@type']==='Service');assert.equal(service.name,'Roadworthy inspection arrangement service');assert.match(service.description,/arranged through an independent licensed vehicle tester/);
const reviewHtml=main(pages['/reviews']);
const readLink=reviewHtml.match(/href="([^"]+)"[^>]*>Read Our Google Reviews/);const writeLink=reviewHtml.match(/href="([^"]+)"[^>]*>Leave a Google Review/);
assert.ok(readLink&&writeLink,'Read and write links');assert.notEqual(readLink[1],writeLink[1]);
for(const name of ['Dinesh Athukorala','Amanpreet Gill','gurinder singh mangat'])assert.ok(reviewHtml.includes(name));
const sitemap=await get('/sitemap.xml');const paths=[...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(m=>new URL(m[1]).pathname);assert.equal(paths.length,33);
for(const path of paths){const html=await get(path);assert.equal((main(html).match(/<h1\b/g)||[]).length,1,path+' site-wide H1');assert.ok(!main(html).includes('G&T Motorsports provides Roadworthy Certificate inspections'))}
console.log('PASS homepage counts, compact booking/contact, all prices retained, factual About, independent RWC scope, attributed review excerpts, distinct Google links, 33 routes and site-wide H1s');
