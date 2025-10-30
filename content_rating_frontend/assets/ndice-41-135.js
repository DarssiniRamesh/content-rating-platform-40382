/**
 * Screen: Índice (screen_41:135)
 * Interactions: none defined in JSON. This file remains minimal.
 * We add basic keyboard focus styling and no-op click handlers for CTAs.
 */

// PUBLIC_INTERFACE
function initIndiceScreen() {
  /** Initialize minimal behaviors for demo buttons. */
  const buttons = document.querySelectorAll('.cta-button');
  buttons.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
      // No-op per spec (no interactions defined). Log for visibility.
      // Replace with navigation if interactions are later specified.
      console.log(`CTA ${idx + 1} clicked (no-op).`);
    });

    // Accessibility: strong focus ring
    btn.addEventListener('focus', () => {
      btn.style.outline = `12px solid rgba(37,99,235,0.65)`; // Ocean primary
      btn.style.outlineOffset = '6px';
    });
    btn.addEventListener('blur', () => {
      btn.style.outline = 'none';
      btn.style.outlineOffset = '';
    });
    btn.setAttribute('aria-label', btn.textContent.trim());
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initIndiceScreen);
} else {
  initIndiceScreen();
}
