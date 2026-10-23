# PeepHoLez — Model Home

Public-facing, single-page digital pamphlet for PeepHoLez. Static HTML, CSS and JavaScript; no build step required.

## Images

Place these exact filenames in `public/`:
- `PPHLZ Transparent Logo.png`
- `Gorgeous.jpeg`

The website references them as `public/PPHLZ%20Transparent%20Logo.png` and `public/Gorgeous.jpeg`.

## Form

The Broadcaster Interest form submits to Formspree endpoint `https://formspree.io/f/xbgdvopl`. Test a real submission after publishing, and configure Formspree's email notifications, spam controls and privacy practices.

## Publish with GitHub Pages

Repository → Settings → Pages → Build and deployment → Deploy from a branch → `main` → `/ (root)` → Save.

The expected default site URL is `https://peepholez69.github.io/peepholez/` once GitHub Pages finishes deployment.

## Custom domain

Configure the desired custom domain in Settings → Pages and add DNS records at the domain registrar according to GitHub's instructions. Do not add a `CNAME` file until the actual domain is known. Enable **Enforce HTTPS** once DNS and the certificate are ready.

## Scope

This page is a concept introduction and interest form. It is not the PeepHoLez PWA, does not verify age/identity, and does not process payments. All pricing and product features shown are proposed and subject to final product decisions.
