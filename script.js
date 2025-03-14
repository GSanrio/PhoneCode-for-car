document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.scroll-section');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, {
    threshold: 0.5
  });

  sections.forEach((section, index) => {
    observer.observe(section);
    section.style.transitionDelay = `${index * 0.3}s`;
  });

  // 添加点击复制功能
  const phoneElement = document.querySelector('.animate-6');
  let isCooldown = false;
  
  phoneElement.style.cursor = 'pointer';
  phoneElement.addEventListener('click', () => {
    if (isCooldown) return;
    
    navigator.clipboard.writeText(phoneElement.textContent)
      .then(() => {
        phoneElement.classList.add('copied');
        setTimeout(() => phoneElement.classList.remove('copied'), 2000);
        isCooldown = true;
        setTimeout(() => isCooldown = false, 3000);
      })
      .catch(err => console.error('复制失败:', err));
  });
});