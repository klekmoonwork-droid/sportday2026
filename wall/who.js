const IG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none"/></svg>';
const FB = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.5-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.2H7.8v3h2.6V21z"/></svg>';

// Fill a box with pills for nickname-branch, IG and Facebook (whichever were given).
export function who(box, v) {
  box.replaceChildren();
  for (const [cls, icon, text] of [['nick', '', v.nick], ['ig', IG, v.ig], ['fb', FB, v.fb]]) {
    if (!text) continue;
    const s = document.createElement('span');
    s.className = cls;
    s.innerHTML = icon;
    s.append(text);
    box.append(s);
  }
}
