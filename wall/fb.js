import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js';
import { getDatabase } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js';

// วางค่าจาก Firebase console > Project settings > Your apps > Web app
const config = {
  apiKey: 'AIzaSyAN2PsP2lCqLlZJMYyDwcCVcTTJI_8VF9g',
  authDomain: 'halloween-wall-d6a2f.firebaseapp.com',
  databaseURL: 'https://halloween-wall-d6a2f-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'halloween-wall-d6a2f',
  appId: '1:421466684827:web:a692f5d650b46b1992f53e',
};

export const ready = !!config.apiKey;
const app = ready ? initializeApp(config) : null;
export const db = ready ? getDatabase(app) : null;
export const auth = ready ? getAuth(app) : null;

// Staff and screen pages share one staff account; the form shows until signed in.
export function requireLogin(onReady) {
  if (!ready) return;
  const box = document.createElement('form');
  box.className = 'login';
  box.innerHTML = `
    <b>100 คืนหลอน</b>
    <input name="email" type="email" placeholder="อีเมล" autocomplete="username" required>
    <input name="pass" type="password" placeholder="รหัสผ่าน" autocomplete="current-password" required>
    <button>เข้าสู่ระบบ</button>
    <small></small>`;
  box.onsubmit = async (e) => {
    e.preventDefault();
    box.querySelector('small').textContent = '';
    try {
      await signInWithEmailAndPassword(auth, box.email.value.trim(), box.pass.value);
    } catch {
      box.querySelector('small').textContent = 'อีเมลหรือรหัสผ่านไม่ถูกต้อง';
    }
  };
  let started = false;
  onAuthStateChanged(auth, (user) => {
    if (user) {
      box.remove();
      if (!started) { started = true; onReady(user); }
    } else {
      document.body.append(box);
    }
  });
}
