// navbar.js (versi jQuery)
$(function () {
    const hash = window.location.hash.replace('#', '') || 'landing';
    $(`#${hash}`).addClass('active');

  const $btn = $('.hamburger');
  const $panel = $('#mobile-panel');

  if ($btn.length === 0 || $panel.length === 0) return;

  function openMenu() {
    $panel.show().attr('aria-hidden', 'false');
    $btn.attr('aria-expanded', 'true');
  }

  function closeMenu() {
    $panel.hide().attr('aria-hidden', 'true');
    $btn.attr('aria-expanded', 'false');
  }

  // toggle on click
  $btn.on('click', function (e) {
    e.stopPropagation(); // biar gak langsung ketutup oleh event di document
    const expanded = $btn.attr('aria-expanded') === 'true';
    expanded ? closeMenu() : openMenu();
  });

  // close when clicking outside
  $(document).on('click', function (e) {
    if (!$panel.is(e.target) && $panel.has(e.target).length === 0 && !$btn.is(e.target) && $btn.has(e.target).length === 0) {
      closeMenu();
    }
  });

  // close on Escape
  $(document).on('keydown', function (e) {
    if (e.key === 'Escape') closeMenu();
  });

  // close when resizing to desktop
  $(window).on('resize', function () {
    if ($(window).width() > 720) closeMenu();
  });
});
