import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What we do — AllOnce © One Backend",
  description: "Five capabilities. One window. Evolve, Orchestrate, Spawn, Bridges, Matrix — the five things AllOnce does for the operator behind a real business.",
};

export default function WhatWeDoPage() {
  return (
    <div className="page-body">
      

<header className="page-nav">
  <a href="/index.html" className="page-nav-mark" aria-label="AllOnce home">
    <img src="/images/mark.svg" alt="AllOnce" />
  </a>
  <nav className="page-nav-links" aria-label="Primary">
    <a href="/what-we-do/index.html" className="is-active">What it does</a>
    <a href="/how-it-works/index.html">How it works</a>
  </nav>
  <a href="/signin/index.html" className="page-nav-cta">Sign in</a>
</header>

<main>

  <section className="page-hero">
    <p className="page-hero-kicker">Five capabilities · One window</p>
    <h1>What we do.</h1>
    <p className="page-hero-lede">
      AllOnce replaces the fourteen-tab commute with a single workspace, assembled specifically for the business it serves.
      Five capabilities — one for every motion an operator runs every day.
    </p>
  </section>

  {/* 01 — Evolve */}
  <section className="page-section" id="evolve">
    <div className="page-section-content">
      <div className="page-section-meta">
        <span className="page-section-num">01</span>
        <span className="page-section-tag">Evolve</span>
      </div>
      <h2>Your stack adapts. Your business compounds.</h2>
      <p>
        AllOnce learns what matters this week and reorders your workspace around it.
        The numbers you watched yesterday surface where you'll look next; the ones that stopped moving fade.
      </p>
      <p>
        Twelve months of revenue, retention, cohort behaviour and anomaly detection — kept live, kept honest, kept yours.
      </p>
      <ul className="page-section-points">
        <li><strong>Trailing 12 months</strong> revenue, MRR, monthly cohort tracking</li>
        <li><strong>Anomalies</strong> auto-promoted into Decisions when they break trend</li>
        <li><strong>Layout adapts</strong> to what you actually look at, week over week</li>
      </ul>
    </div>
    <div className="page-section-visual">
      <img src="/images/card-evolve.svg" alt="Evolve — revenue and metrics chart" />
    </div>
  </section>

  {/* 02 — Orchestrate */}
  <section className="page-section is-flipped" id="orchestrate">
    <div className="page-section-content">
      <div className="page-section-meta">
        <span className="page-section-num">02</span>
        <span className="page-section-tag">Orchestrate</span>
      </div>
      <h2>Six teams, one tempo. Conducted, not chased.</h2>
      <p>
        Sales, Ops, Support, Marketing, Finance, Product — six lanes, one playhead, zero collisions.
        Tasks queue and clear in cadence; you watch the music, not the metronome.
      </p>
      <p>
        236 tasks across six teams this week. 92% on cadence. Nothing dropped, nothing chased twice.
      </p>
      <ul className="page-section-points">
        <li><strong>Six lanes</strong>, one timeline, one playhead</li>
        <li><strong>Done · Active · Queued</strong> states for every task</li>
        <li><strong>Collision detection</strong> before a handoff misfires</li>
      </ul>
    </div>
    <div className="page-section-visual">
      <img src="/images/card-orchestrate.svg" alt="Orchestrate — six-lane task timeline" />
    </div>
  </section>

  {/* 03 — Spawn */}
  <section className="page-section" id="spawn">
    <div className="page-section-content">
      <div className="page-section-meta">
        <span className="page-section-num">03</span>
        <span className="page-section-tag">Spawn</span>
      </div>
      <h2>A paragraph in. A whole company out.</h2>
      <p>
        Tell AllOnce about your business in one paragraph.
        Eleven seconds later: customers imported, inbox triaged, books opened, tasks queued, sales pipeline live, workspaces cut, brand book v1 in your hands.
      </p>
      <p>
        No setup wizard, no kickoff call, no integration project. Seven modules, provisioned together.
      </p>
      <ul className="page-section-points">
        <li><strong>11.4 seconds</strong> from prompt to working workspace</li>
        <li><strong>7 modules</strong> — customers, inbox, books, tasks, sales, spaces, brand</li>
        <li><strong>One paragraph</strong> is the whole brief</li>
      </ul>
    </div>
    <div className="page-section-visual">
      <img src="/images/card-spawn.svg" alt="Spawn — module provisioning" />
    </div>
  </section>

  {/* 04 — Bridges */}
  <section className="page-section is-flipped" id="bridges">
    <div className="page-section-content">
      <div className="page-section-meta">
        <span className="page-section-num">04</span>
        <span className="page-section-tag">Bridges</span>
      </div>
      <h2>Bridges to every tool you already pay for.</h2>
      <p>
        Stripe, Gmail, Slack, QuickBooks, Notion, Webflow, Linear, HubSpot — wired in once, kept in sync forever.
        Eight keys for the lock you already carry.
      </p>
      <p>
        Zero new logins. Zero new dashboards. The window stays the window.
      </p>
      <ul className="page-section-points">
        <li><strong>8 / 8 wired</strong> — the tools an operator actually pays for</li>
        <li><strong>0 new logins</strong> — bring your existing accounts</li>
        <li><strong>Bidirectional sync</strong> — push and pull, with audit history</li>
      </ul>
    </div>
    <div className="page-section-visual">
      <img src="/images/card-bridges.svg" alt="Bridges — eight tool integrations around a central hub" />
    </div>
  </section>

  {/* 05 — Matrix */}
  <section className="page-section" id="matrix">
    <div className="page-section-content">
      <div className="page-section-meta">
        <span className="page-section-num">05</span>
        <span className="page-section-tag">Matrix</span>
      </div>
      <h2>Nine signals, one view.</h2>
      <p>
        Customers, inbox, books, tasks, sales, spaces, support, ops, brand — each a sparkline, each a heart-rate.
        The matrix is the dashboard you actually keep open all day.
      </p>
      <p>
        Glance once: what's healthy, what's drifting, what needs you. Every signal stays current; nothing demands a refresh.
      </p>
      <ul className="page-section-points">
        <li><strong>3 × 3 grid</strong> of the nine signals every operator tracks</li>
        <li><strong>Live sync row</strong> — every signal stamped with last-update time</li>
        <li><strong>Drift detection</strong> — anything off-trend is highlighted</li>
      </ul>
    </div>
    <div className="page-section-visual">
      <img src="/images/card-matrix.svg" alt="Matrix — nine-signal grid" />
    </div>
  </section>

  <section className="page-cta">
    <h2>One window. The whole company.</h2>
    <a href="/signin/index.html" className="page-cta-btn">
      Open my workspace
      <svg className="page-cta-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
    </a>
    <p className="page-cta-meta">11.4 seconds from prompt to running business. No credit card.</p>
  </section>

</main>

<footer className="page-foot">
  <span>AllOnce<sup>©</sup> · 2026</span>
  <span><a href="/index.html">Back to home</a> · <a href="/how-it-works/index.html">How it works</a></span>
</footer>



    </div>
  );
}
