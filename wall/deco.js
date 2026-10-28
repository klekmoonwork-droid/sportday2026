// Night backdrop: stars, moon, castle, fog, bobbing pumpkins/ghosts.
const PUMPKIN = '<rect x="46" y="2" width="8" height="16" rx="3" fill="#3d7a2a"/><ellipse cx="30" cy="54" rx="24" ry="33" fill="#e8610c"/><ellipse cx="70" cy="54" rx="24" ry="33" fill="#e8610c"/><ellipse cx="50" cy="54" rx="24" ry="35" fill="#ff7f1f"/><path d="M30 42l10 10H22zM70 42l8 10H60zM28 64q22 18 44 0l-6 8-6-6-6 8-6-8-6 8-6-6z" fill="#3a1a05"/>';
const GHOST = '<path d="M8 48Q8 6 40 6t32 42v38l-8-8-8 8-8-8-8 8-8-8-8 8-8-8-8 8z" fill="#fff" stroke="#2a1640" stroke-width="3"/><ellipse cx="29" cy="40" rx="5" ry="8" fill="#2a1640"/><ellipse cx="51" cy="40" rx="5" ry="8" fill="#2a1640"/><ellipse cx="40" cy="58" rx="6" ry="5" fill="#2a1640"/>';
document.body.insertAdjacentHTML('afterbegin', `
  <div class="sky"></div>
  <div class="stars">${Array.from({ length: 90 }, () => `<i style="left:${Math.random() * 100}%;top:${Math.random() * 70}%;animation-delay:${-Math.random() * 3}s;scale:${.5 + Math.random() * 1.2}"></i>`).join('')}</div>
  <div class="moon"></div>
  <div class="castle"><svg viewBox="0 0 1000 400" preserveAspectRatio="xMidYMax slice"><path fill="#0b0618" d="M0 400V300l60-20 40 30 60-40 80 30V170l10-40 10 40v70h30V150l15-60 15 60v90h40V200l12-30 12 30v60l70-30 60 40 60-30V180l14-50 14 50v70h40V120l18-70 18 70v130h30V190l12-36 12 36v80l60-30 70 30 60-50 80 40 60-20 20 10v170z"/><g fill="#ffb84d"><rect x="350" y="200" width="8" height="14"/><rect x="580" y="170" width="8" height="14"/><rect x="608" y="220" width="8" height="14"/><rect x="455" y="230" width="8" height="14"/><rect x="278" y="250" width="8" height="12"/></g></svg></div>
  <div class="fog"></div>
  <svg class="critter c1" viewBox="0 0 100 90">${PUMPKIN}</svg>
  <svg class="critter c2" viewBox="0 0 100 90">${PUMPKIN}</svg>
  <svg class="critter c3" viewBox="0 0 80 90">${GHOST}</svg>
  <svg class="critter c4" viewBox="0 0 80 90">${GHOST}</svg>`);

// Bouncy titles: one span per letter (grapheme, so Thai vowels stay attached).
const seg = new Intl.Segmenter('th', { granularity: 'grapheme' });
document.querySelectorAll('.wave').forEach((el) => {
  el.innerHTML = [...seg.segment(el.textContent)]
    .map((g, i) => (g.segment === ' ' ? ' ' : `<span style="--i:${i}">${g.segment}</span>`)).join('');
});
