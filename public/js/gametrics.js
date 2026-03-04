  (function () {
    function sendGAEvent(name, params){
      if (typeof gtag === 'function') {
        gtag('event', name, params || {});
      }
    }

    // Minden tel: link kattintás mérése
    document.addEventListener('click', function(e){
      const tel = e.target.closest('a[href^="tel:"]');
      if(tel){
        sendGAEvent('phone_click', {
          event_category: 'engagement',
          event_label: tel.getAttribute('href')
        });
      }

      // (opcionális, de hasznos) mailto kattintás mérése
      const mail = e.target.closest('a[href^="mailto:"]');
      if(mail){
        sendGAEvent('email_click', {
          event_category: 'engagement',
          event_label: mail.getAttribute('href')
        });
      }
    });
  })();