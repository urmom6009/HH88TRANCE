# Admin Portal

The static admin portal is rendered when the site is loaded from:

```text
admin.hh88trance.com
```

## Vercel Setup

1. Deploy this repository as the main HH88TRANCE Vercel project.
2. In the Vercel project dashboard, add `admin.hh88trance.com` under **Settings > Domains**.
3. Point the DNS record for `admin.hh88trance.com` to Vercel using the value Vercel provides.
4. Keep `vercel.json` as-is. The existing SPA rewrite sends the admin hostname to `index.html`, and the React app switches to the admin portal by hostname.

## Security Boundary

The current portal is a static shell only. It is suitable for launch status, content workflow placeholders, and future admin module framing, but it must not store or expose customer data, payment data, commission details, credentials, or private files.

Before using it for real operations, add server-side authentication and a private backend. Do not rely on client-side passwords or hidden routes for production access control.
