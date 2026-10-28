// Night backdrop: twinkling stars, drifting clouds, moon, castle and fog.
document.body.insertAdjacentHTML('afterbegin', `
  <div class="sky"></div>
  <div class="stars">${Array.from({ length: 220 }, () => `<i style="left:${Math.random() * 100}%;top:${Math.random() * 75}%;animation-delay:${-Math.random() * 3}s;animation-duration:${2 + Math.random() * 3}s;scale:${.5 + Math.random() * 1.3}"></i>`).join('')}${Array.from({ length: 34 }, () => `<svg class="spark" viewBox="0 0 20 20" style="left:${Math.random() * 100}%;top:${Math.random() * 70}%;width:${12 + Math.random() * 20}px;animation-delay:${-Math.random() * 4}s;animation-duration:${2.5 + Math.random() * 2.5}s"><path d="M10 0C11 7 13 9 20 10 13 11 11 13 10 20 9 13 7 11 0 10 7 9 9 7 10 0z"/></svg>`).join('')}</div>
  <div class="moon"></div>
  <div class="clouds">${Array.from({ length: 7 }, (_, i) => `<i style="top:${4 + Math.random() * 50}%;--h:${40 + Math.random() * 70}px;animation-duration:${70 + Math.random() * 80}s;animation-delay:${-Math.random() * 150}s;opacity:${.12 + Math.random() * .16}"></i>`).join('')}</div>
  <div class="castle"><svg viewBox="0 0 1000 400" preserveAspectRatio="xMidYMax slice"><path fill="#0b0618" d="M0 400V300l60-20 40 30 60-40 80 30V170l10-40 10 40v70h30V150l15-60 15 60v90h40V200l12-30 12 30v60l70-30 60 40 60-30V180l14-50 14 50v70h40V120l18-70 18 70v130h30V190l12-36 12 36v80l60-30 70 30 60-50 80 40 60-20 20 10v170z"/><g fill="#ffb84d"><rect x="350" y="200" width="8" height="14"/><rect x="580" y="170" width="8" height="14"/><rect x="608" y="220" width="8" height="14"/><rect x="455" y="230" width="8" height="14"/><rect x="278" y="250" width="8" height="12"/></g></svg></div>
  <div class="fog"></div>`);

// Bouncy titles: one span per letter (grapheme, so Thai vowels stay attached).
const seg = new Intl.Segmenter('th', { granularity: 'grapheme' });
document.querySelectorAll('.wave').forEach((el) => {
  el.innerHTML = [...seg.segment(el.textContent)]
    .map((g, i) => (g.segment === ' ' ? ' ' : `<span style="--i:${i}">${g.segment}</span>`)).join('');
});
