// Fancy-dress contestants 1–10, stored as vote/racers/r1..r10 = { name, img }.
export const NUMS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export function racerList(val) {
  return NUMS.map((n) => ({ n, name: val?.[`r${n}`]?.name || '', img: val?.[`r${n}`]?.img || '' }));
}

// Sum ballots ({ n, w }) into a score per contestant number.
export function tally(ballots) {
  const score = Object.fromEntries(NUMS.map((n) => [n, 0]));
  for (const b of Object.values(ballots || {})) if (score[b.n] !== undefined) score[b.n] += b.w;
  return score;
}

// Round avatar: the contestant's photo, or their number when there is none.
export function avatar(el, r) {
  el.replaceChildren();
  if (r.img) {
    const img = document.createElement('img');
    img.src = r.img;
    img.alt = '';
    el.append(img);
  } else {
    el.textContent = r.n;
  }
}
