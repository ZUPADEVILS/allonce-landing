import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How it works — AllOnce © One Backend",
  description: "From a paragraph about your business to a running operator workspace — in less time than it takes to make coffee. Seven steps, eleven seconds.",
};

export default function HowItWorksPage() {
  return (
    <div className="page-body">
      

<header className="page-nav">
  <a href="/index.html" className="page-nav-mark" aria-label="AllOnce home">
    <img src="/images/mark.svg" alt="AllOnce" />
  </a>
  <nav className="page-nav-links" aria-label="Primary">
    <a href="/what-we-do/index.html">What it does</a>
    <a href="/how-it-works/index.html" className="is-active">How it works</a>
  </nav>
  <a href="/signin/index.html" className="page-nav-cta">Sign in</a>
</header>

<main>

  <section className="page-hero">
    <p className="page-hero-kicker">Seven steps · Eleven seconds</p>
    <h1>How it<br /><span className="accent">works.</span></h1>
    <p className="page-hero-lede">
      From a paragraph about your business to a running operator workspace — in less time than it takes to make coffee.
      You write one sentence; AllOnce does the rest.
    </p>
  </section>

  {/* 01 — Welcome */}
  <article className="page-step" id="welcome">
    <div className="page-step-num">01</div>
    <div className="page-step-content">
      <h2>Welcome.</h2>
      <p>
        AllOnce greets you. Then asks one question: <em>tell me about your business in one paragraph.</em>
        No multi-step form, no checklist. One question.
      </p>
      <div className="meta">00:00 · The chat opens</div>
    </div>
  </article>

  {/* 02 — Brief */}
  <article className="page-step" id="brief">
    <div className="page-step-num">02</div>
    <div className="page-step-content">
      <h2>Brief.</h2>
      <p>
        You write a paragraph: what the business does, who it serves, roughly how many customers.
        Plain English. No jargon required, no jargon allowed.
      </p>
      <div className="meta">00:08 · You hit send</div>
    </div>
  </article>

  {/* 03 — Spawn */}
  <article className="page-step" id="spawn">
    <div className="page-step-num">03</div>
    <div className="page-step-content">
      <h2>Spawn.</h2>
      <p>
        Seven modules provision in parallel: customers, inbox, books, tasks, sales, spaces, brand.
        Schemas, defaults, sample data — all sized to the business you described.
      </p>
      <div className="meta">00:11.4 · Workspace ready</div>
    </div>
  </article>

  {/* 04 — Bridges */}
  <article className="page-step" id="bridges">
    <div className="page-step-num">04</div>
    <div className="page-step-content">
      <h2>Bridges.</h2>
      <p>
        AllOnce maps your existing tools — Stripe, Gmail, Slack, QuickBooks, Notion, Webflow, Linear, HubSpot — and offers them up as one-click connections.
        Eight keys, one lock. The window you already opened, finally connected.
      </p>
      <div className="meta">Click each tile · Approve OAuth · Done</div>
    </div>
  </article>

  {/* 05 — Brandbook */}
  <article className="page-step" id="brandbook">
    <div className="page-step-num">05</div>
    <div className="page-step-content">
      <h2>Brandbook.</h2>
      <p>
        AllOnce generates a v1 brand book from your brief: typography, palette, tone-of-voice, logo lockups, sample copy.
        Ready to be pulled into Webflow, Notion, Figma, decks. Editable, exportable, yours.
      </p>
      <div className="meta">Editable · Exportable · Yours</div>
    </div>
  </article>

  {/* 06 — Matrix */}
  <article className="page-step" id="matrix">
    <div className="page-step-num">06</div>
    <div className="page-step-content">
      <h2>Matrix.</h2>
      <p>
        Nine signals, one view: customers, inbox, books, tasks, sales, spaces, support, ops, brand.
        Each a sparkline; each a heart-rate. The dashboard you actually keep open all day.
      </p>
      <div className="meta">9 signals · 1 view · Live</div>
    </div>
  </article>

  {/* 07 — Decisions */}
  <article className="page-step" id="decisions">
    <div className="page-step-num">07</div>
    <div className="page-step-content">
      <h2>Decisions.</h2>
      <p>
        AllOnce surfaces the four or five things that actually need you today, written as decisions you can approve, defer, or rewrite.
        The rest stays out of your way until it doesn't.
      </p>
      <div className="meta">Approve · Defer · Rewrite</div>
    </div>
  </article>

  <section className="page-cta">
    <h2>Eleven seconds from now.</h2>
    <a href="/signin/index.html" className="page-cta-btn">
      Start my workspace
      <svg className="page-cta-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
    </a>
    <p className="page-cta-meta">No setup wizard. No kickoff call. No credit card.</p>
  </section>

</main>

<footer className="page-foot">
  <span>AllOnce<sup>©</sup> · 2026</span>
  <span><a href="/index.html">Back to home</a> · <a href="/what-we-do/index.html">What we do</a></span>
</footer>



    </div>
  );
}
