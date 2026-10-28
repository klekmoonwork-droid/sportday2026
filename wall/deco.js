// Night backdrop: stars, moon, castle, fog and passing bats.
document.body.insertAdjacentHTML('afterbegin', `
  <div class="sky"></div>
  <div class="stars">${Array.from({ length: 90 }, () => `<i style="left:${Math.random() * 100}%;top:${Math.random() * 70}%;animation-delay:${-Math.random() * 3}s;scale:${.5 + Math.random() * 1.2}"></i>`).join('')}</div>
  <div class="moon"></div>
  <div class="castle"><svg viewBox="0 0 1000 400" preserveAspectRatio="xMidYMax slice"><path fill="#0b0618" d="M0 400V300l60-20 40 30 60-40 80 30V170l10-40 10 40v70h30V150l15-60 15 60v90h40V200l12-30 12 30v60l70-30 60 40 60-30V180l14-50 14 50v70h40V120l18-70 18 70v130h30V190l12-36 12 36v80l60-30 70 30 60-50 80 40 60-20 20 10v170z"/><g fill="#ffb84d"><rect x="350" y="200" width="8" height="14"/><rect x="580" y="170" width="8" height="14"/><rect x="608" y="220" width="8" height="14"/><rect x="455" y="230" width="8" height="14"/><rect x="278" y="250" width="8" height="12"/></g></svg></div>
  <div class="fog"></div>`);

function bat() {
  const b = document.createElement('div');
  b.className = 'bat';
  b.style.setProperty('--y0', `${10 + Math.random() * 40}vh`);
  b.style.setProperty('--y1', `${Math.random() * 50}vh`);
  b.innerHTML = '<svg viewBox="0 0 100 50"><path fill="currentColor" d="M50 18C46 10 42 10 40 16 34 8 22 6 10 12c8 4 10 12 8 20 8-6 16-4 20 2 4-6 8-6 12-2 4-4 8-4 12 2 4-6 12-8 20-2-2-8 0-16 8-20-12-6-24-4-30 4-2-6-6-6-10 2z"/></svg>';
  document.body.append(b);
  b.addEventListener('animationend', () => b.remove());
}
setInterval(bat, 4500);
