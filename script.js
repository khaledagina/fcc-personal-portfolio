document.getElementById('year').textContent=new Date().getFullYear();
const els=document.querySelectorAll('.project-tile,.cert,main h2');
els.forEach(e=>e.classList.add('reveal'));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
els.forEach(e=>io.observe(e));
const links=[...document.querySelectorAll('.nav-link')];
const so=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)links.forEach(l=>l.classList.toggle('active',l.getAttribute('href')==='#'+e.target.id))}),{rootMargin:'-40% 0px -55% 0px'});
document.querySelectorAll('main>section').forEach(s=>so.observe(s));
