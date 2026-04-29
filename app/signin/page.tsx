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
      

<div className="auth-shell">

  {/* Floating top bar above the card */}
  <header className="auth-topbar">
    <div className="auth-topbar-left">
      <a href="/index.html" className="auth-back" aria-label="Back to landing">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
      </a>
      <button className="auth-menu" type="button">
        <span className="auth-menu-grid"><i></i><i></i><i></i><i></i><i></i><i></i></span>
        Menu
      </button>
    </div>
    <div className="auth-topbar-right">
      <span className="auth-locator">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
        Tbilisi · GE
      </span>
    </div>
  </header>

  {/* Two-column auth card */}
  <main className="auth-card">

    {/* LEFT — form */}
    <section className="auth-form">

      <a href="/index.html" className="auth-mark" aria-label="AllOnce">
        <svg width="28" height="28" viewBox="0 0 48 48" aria-hidden="true">
          <rect x="14" y="16" width="3.6" height="16" fill="#FFFFFF" />
          <rect x="22" y="10" width="3.6" height="28" fill="#FFFFFF" />
          <rect x="30" y="18" width="3.6" height="12" fill="#FFFFFF" />
        </svg>
      </a>

      <h1 className="auth-heading">Welcome to AllOnce</h1>
      <p className="auth-tagline">Run your business — all at once.</p>

      {/* Register / Login toggle */}
      <div className="auth-toggle" role="tablist" aria-label="Auth mode">
        <button type="button" className="auth-toggle-btn" data-mode="register" role="tab" aria-selected="false">Register</button>
        <button type="button" className="auth-toggle-btn is-active" data-mode="login" role="tab" aria-selected="true">Login</button>
        <span className="auth-toggle-pill" aria-hidden="true"></span>
      </div>

      {/* Social row */}
      <div className="auth-social">
        <button type="button" className="auth-social-btn" aria-label="Continue with Google">
          <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
            <path fill="#4285F4" d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.45c-.28 1.45-1.13 2.68-2.4 3.5v2.91h3.88c2.27-2.09 3.56-5.17 3.56-8.65z" />
            <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-2.91c-1.08.72-2.45 1.16-4.05 1.16-3.11 0-5.74-2.1-6.69-4.93H1.31v3.07A11.99 11.99 0 0 0 12 24z" />
            <path fill="#FBBC05" d="M5.31 14.41c-.24-.72-.38-1.49-.38-2.41s.14-1.69.38-2.41V6.52H1.31A11.99 11.99 0 0 0 0 12c0 1.94.47 3.78 1.31 5.48l4-3.07z" />
            <path fill="#EA4335" d="M12 4.74c1.76 0 3.34.6 4.58 1.79l3.43-3.43C17.94 1.19 15.24 0 12 0A11.99 11.99 0 0 0 1.31 6.52l4 3.07C6.26 6.84 8.89 4.74 12 4.74z" />
          </svg>
        </button>
        <button type="button" className="auth-social-btn" aria-label="Continue with Apple">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#0E0E0E" aria-hidden="true"><path d="M16.36 1.43c.06 1.21-.43 2.4-1.18 3.27-.79.92-2.07 1.62-3.31 1.52-.07-1.18.49-2.39 1.21-3.18.81-.91 2.16-1.59 3.28-1.61zM20.4 17.6c-.59 1.36-.87 1.97-1.62 3.16-1.06 1.66-2.55 3.73-4.4 3.74-1.65.02-2.07-1.07-4.31-1.06-2.24.01-2.7 1.08-4.35 1.07-1.85-.02-3.27-1.88-4.33-3.55-2.97-4.65-3.28-10.1-1.45-13 1.3-2.06 3.36-3.27 5.29-3.27 1.96 0 3.2 1.07 4.82 1.07 1.57 0 2.53-1.07 4.8-1.07 1.72 0 3.55.94 4.85 2.55-4.27 2.34-3.57 8.45.7 10.36z" /></svg>
        </button>
        <button type="button" className="auth-social-btn" aria-label="Continue with email link">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0E0E0E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>
        </button>
      </div>

      <div className="auth-divider"><span>or</span></div>

      <form className="auth-fields" autoComplete="off" data-form-type="other" noValidate>

        <label className="auth-field" data-mode="register">
          <span className="auth-field-label">Username</span>
          <input type="text" name="username" placeholder="Robert Fox" autoComplete="off" data-1p-ignore />
        </label>

        <label className="auth-field">
          <span className="auth-field-label">Email</span>
          <input type="email" name="email" placeholder="robert.fox@gmail.com" required autoComplete="off" data-1p-ignore />
        </label>

        <label className="auth-field auth-field-password">
          <span className="auth-field-label">Password</span>
          <input type="password" name="password" placeholder="••••••••••••" required minLength="8" autoComplete="new-password" data-1p-ignore />
          <span className="auth-strength" data-strength="strong">Strong <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6L9 17l-5-5" /></svg></span>
          <button type="button" className="auth-eye" aria-label="Toggle password visibility">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z" /><circle cx="12" cy="12" r="3" /></svg>
          </button>
        </label>

        <label className="auth-remember">
          <input type="checkbox" name="remember" />
          <span>Remember me</span>
        </label>

        <button type="submit" className="auth-cta">
          <span className="auth-cta-text">Open my workspace</span>
        </button>

      </form>

    </section>

    {/* RIGHT — visual showcase */}
    <aside className="auth-visual" aria-hidden="true">

      {/* background pattern */}
      <svg className="auth-visual-bg" viewBox="0 0 600 800" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <defs>
          <pattern id="auth-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M40 0H0V40" fill="none" stroke="#FFFFFF" strokeOpacity="0.08" strokeWidth="1" />
          </pattern>
          <radialGradient id="auth-glow" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="600" height="800" fill="url(#auth-grid)" />
        <rect width="600" height="800" fill="url(#auth-glow)" />
        {/* subtle ribbon accents */}
        <path d="M-40 660 C 120 600, 220 700, 340 640 S 540 600, 700 680" fill="none" stroke="#FFFFFF" strokeOpacity="0.10" strokeWidth="60" strokeLinecap="round" />
        <path d="M-60 720 C 140 680, 260 760, 380 720 S 580 680, 720 740" fill="none" stroke="#FFFFFF" strokeOpacity="0.07" strokeWidth="80" strokeLinecap="round" />
      </svg>

      {/* top-right locator chip */}
      <div className="auth-visual-tag auth-visual-tag-tr">
        <div className="auth-tag-row">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0000FF" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20" /><circle cx="12" cy="12" r="10" /></svg>
          <span>Allone Labs · One Backend</span>
        </div>
        <div className="auth-tag-row auth-tag-row-soft">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0E0E0E" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
          <span>Tbilisi, Georgia</span>
        </div>
      </div>

      {/* top-left polaroid stack of module tiles */}
      <div className="auth-polaroids">
        <div className="auth-polaroid auth-polaroid-1">
          <span className="auth-poly-eyebrow">INBOX</span>
          <span className="auth-poly-value">12</span>
          <span className="auth-poly-sub">unread</span>
        </div>
        <div className="auth-polaroid auth-polaroid-2">
          <span className="auth-poly-eyebrow">BOOKS</span>
          <span className="auth-poly-value">$48k</span>
          <span className="auth-poly-sub">monthly</span>
        </div>
        <div className="auth-polaroid auth-polaroid-3">
          <span className="auth-poly-eyebrow">SALES</span>
          <span className="auth-poly-value">$23k</span>
          <span className="auth-poly-sub">MRR</span>
        </div>
        <div className="auth-polaroid-label">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12l2 2 4-4" /><circle cx="12" cy="12" r="10" /></svg>
          Wired in 11.4 seconds
        </div>
      </div>

      {/* bottom headline + tags */}
      <div className="auth-visual-foot">
        <h2 className="auth-visual-headline">
          Your business<br />
          runs <span className="auth-visual-here">here</span>
        </h2>
        <p className="auth-visual-sub">One window for every customer, every dollar, every team member, every decision.</p>

        <div className="auth-visual-tags">
          <div className="auth-vtag-head">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3 7h7l-5.5 4 2 7-6.5-4.5L5.5 20l2-7L2 9h7z" /></svg>
            Connected
          </div>
          <span className="auth-vtag"><i style={{background: "#635BFF"}}></i>Stripe</span>
          <span className="auth-vtag"><i style={{background: "#EA4335"}}></i>Gmail</span>
          <span className="auth-vtag"><i style={{background: "#4A154B"}}></i>Slack</span>
          <span className="auth-vtag"><i style={{background: "#0E0E0E"}}></i>Notion</span>
        </div>
      </div>

    </aside>

  </main>

</div>




    </div>
  );
}
