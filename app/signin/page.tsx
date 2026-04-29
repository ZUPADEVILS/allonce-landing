"use client";
import { useEffect } from "react";

export default function SignInPage() {
  useEffect(() => {
    // Toggle Register / Login
    const toggleBtns = document.querySelectorAll('.auth-toggle-btn');
    const pill = document.querySelector('.auth-toggle-pill');
    const usernameField = document.querySelector('.auth-field[data-mode="register"]');
    const ctaText = document.querySelector('.auth-cta-text');

    function setMode(mode){
      toggleBtns.forEach((b) => {
        const on = b.dataset.mode === mode;
        b.classList.toggle('is-active', on);
        b.setAttribute('aria-selected', String(on));
      });
      const idx = mode === 'register' ? 0 : 1;
      if (pill) pill.style.transform = `translateX(${idx * 100}%)`;
      if (usernameField) usernameField.style.display = mode === 'register' ? '' : 'none';
      if (ctaText) ctaText.textContent = mode === 'register' ? 'Start your workspace' : 'Open my workspace';
    }
    toggleBtns.forEach((b) => b.addEventListener('click', () => setMode(b.dataset.mode)));
    setMode('login');

    const eye = document.querySelector('.auth-eye');
    const pwd = document.querySelector('input[name="password"]');
    if (eye && pwd) {
      eye.addEventListener('click', () => {
        pwd.type = pwd.type === 'password' ? 'text' : 'password';
        eye.classList.toggle('is-revealed');
      });
    }

    const fieldsForm = document.querySelector('.auth-fields');
    if (fieldsForm) fieldsForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const cta = document.querySelector('.auth-cta');
      if (cta) cta.disabled = true;
      if (ctaText) ctaText.textContent = 'Spawning your workspace…';
      setTimeout(() => { if (ctaText) ctaText.textContent = 'Demo build — backend not wired yet'; }, 1100);
    });

  }, []);

  return (
    <div className="auth-body min-h-screen">
      

<main className="auth-stage" role="main">

  {/* Floating mark, top-left */}
  <a href="/index.html" className="auth-mark" aria-label="AllOnce home">
    <svg width="20" height="20" viewBox="0 0 48 48" aria-hidden="true">
      <rect x="14" y="16" width="3.6" height="16" fill="#FFFFFF" />
      <rect x="22" y="10" width="3.6" height="28" fill="#FFFFFF" />
      <rect x="30" y="18" width="3.6" height="12" fill="#FFFFFF" />
    </svg>
  </a>

  {/* Floating mode toggle, top-right */}
  <div className="auth-toggle" role="tablist" aria-label="Auth mode">
    <button type="button" className="auth-toggle-btn" data-mode="register" role="tab" aria-selected="false">Register</button>
    <button type="button" className="auth-toggle-btn is-active" data-mode="login" role="tab" aria-selected="true">Login</button>
    <span className="auth-toggle-pill" aria-hidden="true"></span>
  </div>

  {/* Centered floating form */}
  <section className="auth-panel" aria-labelledby="auth-heading">

    <h1 id="auth-heading" className="auth-heading">Welcome to AllOnce</h1>
    <p className="auth-tagline">One window. One key. The whole company.</p>

    <form className="auth-fields" autoComplete="off" data-form-type="other" noValidate>

      <label className="auth-field" data-mode="register">
        <input type="text" name="username" placeholder="Username" autoComplete="off" data-1p-ignore />
      </label>

      <label className="auth-field">
        <input type="email" name="email" placeholder="Email" required autoComplete="off" data-1p-ignore />
      </label>

      <label className="auth-field auth-field-password">
        <input type="password" name="password" placeholder="Password" required minLength="8" autoComplete="new-password" data-1p-ignore />
        <button type="button" className="auth-eye" aria-label="Toggle password visibility">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z" /><circle cx="12" cy="12" r="3" /></svg>
        </button>
      </label>

      <button type="submit" className="auth-cta">
        <span className="auth-cta-text">Open my workspace</span>
        <svg className="auth-cta-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
      </button>

      <div className="auth-divider"><span>or</span></div>

      <div className="auth-social">
        <button type="button" className="auth-social-btn" aria-label="Continue with Google">
          <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
            <path fill="#FFFFFF" d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.45c-.28 1.45-1.13 2.68-2.4 3.5v2.91h3.88c2.27-2.09 3.56-5.17 3.56-8.65zM12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-2.91c-1.08.72-2.45 1.16-4.05 1.16-3.11 0-5.74-2.1-6.69-4.93H1.31v3.07A11.99 11.99 0 0 0 12 24zM5.31 14.41c-.24-.72-.38-1.49-.38-2.41s.14-1.69.38-2.41V6.52H1.31A11.99 11.99 0 0 0 0 12c0 1.94.47 3.78 1.31 5.48l4-3.07zM12 4.74c1.76 0 3.34.6 4.58 1.79l3.43-3.43C17.94 1.19 15.24 0 12 0A11.99 11.99 0 0 0 1.31 6.52l4 3.07C6.26 6.84 8.89 4.74 12 4.74z" />
          </svg>
          Google
        </button>
        <button type="button" className="auth-social-btn" aria-label="Continue with Apple">
          <svg width="14" height="16" viewBox="0 0 24 24" fill="#FFFFFF" aria-hidden="true"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.65 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" /></svg>
          Apple
        </button>
      </div>

      <p className="auth-foot">
        New here? <a href="#">Request access ↗</a>
      </p>

    </form>

  </section>

  {/* Bottom-center cue */}
  <p className="auth-cue">AllOnce greets you. Then asks one question.</p>

</main>




    </div>
  );
}
