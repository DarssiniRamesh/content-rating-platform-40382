/**
 * Screen: Instrucciones (screen_41:206)
 * Interactions defined in JSON: none. Keep JS minimal.
 * We add basic focus styling hook and no-op click logging for CTA.
 */

// PUBLIC_INTERFACE
function initInstruccionesScreen() {
  const cta = document.querySelector('.cta-btn');
  if (cta) {
    cta.addEventListener('click', () => {
      // No navigation specified in JSON for this screen; keep as no-op.
      console.log('CTA prototipo 1 clicked (no-op).');
    });
    // Accessibility: ensure ARIA label is set from content
    cta.setAttribute('aria-label', cta.textContent.trim());
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initInstruccionesScreen);
} else {
  initInstruccionesScreen();
}
