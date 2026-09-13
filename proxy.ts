// Maintenance mode. Every route answers 503 rather than 404: 404 tells search
// engines the pages are permanently gone and gets the site deindexed, while
// 503 plus Retry-After says "temporarily down, come back", which preserves
// rankings. Delete this file to bring the site back.

const RETRY_AFTER_SECONDS = 3600;

// Inline so the page needs no CSS, font or image request — every one of those
// would itself return 503.
const page = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex">
<title>Service Center UAE — Back shortly</title>
<style>
  :root { color-scheme: light; }
  * { box-sizing: border-box; }
  body {
    margin: 0; min-height: 100vh; display: grid; place-items: center;
    padding: 24px; background: #FDFAF6; color: #111827;
    font: 400 16px/1.6 system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  }
  .card {
    width: 100%; max-width: 520px; background: #fff; border: 1px solid #F5E9DA;
    border-radius: 20px; padding: 40px 32px;
    box-shadow: 0 18px 50px rgba(0,0,0,.08);
  }
  .brand { font-size: 22px; font-weight: 700; letter-spacing: -.01em; }
  .brand span { color: #A8650E; }
  .kicker {
    margin-top: 8px; font-size: 10px; font-weight: 600; letter-spacing: .22em;
    text-transform: uppercase; color: #40536b;
  }
  h1 { margin: 28px 0 0; font-size: 28px; line-height: 1.2; letter-spacing: -.01em; }
  p { margin: 14px 0 0; color: #40536b; }
  .actions { margin-top: 28px; display: flex; flex-direction: column; gap: 12px; }
  a {
    display: flex; align-items: center; justify-content: center;
    padding: 14px 20px; border-radius: 999px;
    font-weight: 600; text-decoration: none; white-space: nowrap;
  }
  .primary { background: #A8650E; color: #fff; }
  .secondary { border: 1px solid #F5E9DA; color: #111827; }
  @media (min-width: 520px) { .actions { flex-direction: row; } a { flex: 1; } }
</style>
</head>
<body>
  <main class="card">
    <div class="brand">Service Center <span>UAE</span></div>
    <div class="kicker">Appliance Repair</div>
    <h1>We are back shortly</h1>
    <p>The site is down for maintenance. Our technicians are still working, so
       call or message us and we will book your repair as usual.</p>
    <div class="actions">
      <a class="primary" href="https://wa.me/971527315207">Message on WhatsApp</a>
      <a class="secondary" href="tel:+971527315207">Call 052 731 5207</a>
    </div>
  </main>
</body>
</html>`;

export function proxy() {
  return new Response(page, {
    status: 503,
    headers: {
      'content-type': 'text/html; charset=utf-8',
      'retry-after': String(RETRY_AFTER_SECONDS),
      // Without this a CDN could hold the 503 after the site is restored.
      'cache-control': 'no-store, must-revalidate',
    },
  });
}

// Every path, including assets, so nothing loads a half-rendered page.
export const config = {
  matcher: '/:path*',
};
