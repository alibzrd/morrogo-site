// Header solid background on scroll
  try {
    const header = document.getElementById('siteHeader');
    const onScroll = () => { header.classList.toggle('solid', window.scrollY > window.innerHeight * 0.7); };
    document.addEventListener('scroll', onScroll);
    onScroll();
  } catch(err) { console.error('header scroll error', err); }

  // Contact form (mailto)
  try {
    const contactForm = document.getElementById('contact-form');
    if(contactForm){
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = contactForm.name.value.trim();
        const email = contactForm.email.value.trim();
        const message = contactForm.message.value.trim();
        const subject = encodeURIComponent('New inquiry from ' + name);
        const body = encodeURIComponent(message + '\n\n---\nFrom: ' + name + ' (' + email + ')');
        window.location.href = 'mailto:hello@morrogo.com?subject=' + subject + '&body=' + body;
      });
    }
  } catch(err) { console.error('contact form error', err); }

  // Mobile burger menu
  try {
    const burgerBtn = document.getElementById('burgerBtn');
    const mobileNav = document.getElementById('mobileNav');
    if(burgerBtn && mobileNav){
      burgerBtn.addEventListener('click', () => {
        burgerBtn.classList.toggle('open');
        mobileNav.classList.toggle('open');
      });
      mobileNav.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
          burgerBtn.classList.remove('open');
          mobileNav.classList.remove('open');
        });
      });
    }
  } catch(err) { console.error('burger menu error', err); }

  // Scroll-reveal animation (progressive enhancement — content is visible by default via CSS)
  try {
    const els = document.querySelectorAll('.reveal');
    if('IntersectionObserver' in window){
      els.forEach(el => el.classList.add('pending'));
      const io = new IntersectionObserver((entries)=>{
        entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
      }, { threshold:0.12 });
      els.forEach(el=>io.observe(el));
    }
  } catch(err) { console.error('reveal animation error', err); }
