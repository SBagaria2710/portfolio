(function () {
  var h = location.hostname;
  if (h === 'localhost' || h === '127.0.0.1' || h.endsWith('.local')) return;
  var s = document.createElement('script');
  s.async = true;
  s.src = '/ga/script?id=G-GRGQQQQJTV';
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', 'G-GRGQQQQJTV', { transport_url: location.origin + '/ga' });
})();
