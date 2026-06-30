
  function toggleFaq(btn) {
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(el => el.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  }

  function handleHeroStart() {
    const val = document.getElementById('heroInput').value.trim();
    if (!val) { document.getElementById('heroInput').focus(); return; }
    document.getElementById('heroStep1').style.display = 'none';
    document.getElementById('heroStep2').style.display = '';
    document.getElementById('heroNote').textContent = 'Enter your email and MOE will analyze ' + val;
    setTimeout(() => document.getElementById('heroEmail').focus(), 50);
  }

  function handleCtaStart() {
    const val = document.getElementById('ctaInput').value.trim();
    if (!val) { document.getElementById('ctaInput').focus(); return; }
    document.getElementById('ctaStep1').style.display = 'none';
    document.getElementById('ctaStep2').style.display = '';
    setTimeout(() => document.getElementById('ctaEmail').focus(), 50);
  }

  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    });
  });
