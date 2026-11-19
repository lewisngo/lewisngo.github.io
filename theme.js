/* Saves the chosen theme, including when navigating between pages. */
(function () {
  const button = document.getElementById('theme-toggle');
  if (!button) return;
  function updateButton() {
    const light = document.documentElement.dataset.theme === 'light';
    const label = light ? 'Switch to dark mode' : 'Switch to light mode';
    button.setAttribute('aria-label', label);
    button.setAttribute('title', label);
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = light ? '#fafaf9' : '#121416';
  }
  button.addEventListener('click', function () {
    const next = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem('site-theme', next); } catch (error) { /* local storage blocked */ }
    updateButton();
  });
  updateButton();
}());
