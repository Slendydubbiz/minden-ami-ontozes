  (function(){ const nav = document.getElementById('mainNav'); const spacer =
  document.getElementById('nav-spacer'); if(!nav || !spacer) return; const
  navTop = nav.getBoundingClientRect().top + window.scrollY; function
  setSpacerHeight(px){ spacer.style.height = px + 'px'; } function onScroll(){
  const shouldFix = window.scrollY >= navTop; if(shouldFix){
  if(!nav.classList.contains('is-fixed')){ nav.classList.add('is-fixed');
  setSpacerHeight(nav.offsetHeight); } } else {
  if(nav.classList.contains('is-fixed')){ nav.classList.remove('is-fixed');
  setSpacerHeight(0); } } } window.addEventListener('scroll', onScroll, {
  passive: true }); window.addEventListener('resize', function(){
  if(nav.classList.contains('is-fixed')){ setSpacerHeight(nav.offsetHeight); }
  }); onScroll(); })();