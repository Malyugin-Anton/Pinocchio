// materials TABS
(function() {
  var tabs = document.querySelectorAll('.materials .tabbed-pane__tab'),
    panels = document.querySelectorAll('.materials .tabbed-pane__panel');

  tabs[0].classList.add('tabbed-pane__tab_active');
  panels[0].classList.add('tabbed-pane__panel_active');

  function clickMe(e) {
    var tabKey = this.getAttribute('key-tab');

    for (var i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove('tabbed-pane__tab_active');
      panels[i].classList.remove('tabbed-pane__panel_active');
      if (panels[i].getAttribute('key-panel') == tabKey) {
        panels[i].classList.add('tabbed-pane__panel_active');
      }
    }

    this.classList.add('tabbed-pane__tab_active');

  }

  tabs.forEach(function(item) {
    item.addEventListener("click", clickMe);
  })
})();

// gallery TABS
(function() {
  var tabs = document.querySelectorAll('.gallery .tabbed-pane__tab'),
    panels = document.querySelectorAll('.gallery .tabbed-pane__panel');

  tabs[0].classList.add('tabbed-pane__tab_active');
  panels[0].classList.add('tabbed-pane__panel_active');

  function clickMe(e) {
    var tabKey = this.getAttribute('key-tab');

    for (var i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove('tabbed-pane__tab_active');
      panels[i].classList.remove('tabbed-pane__panel_active');
      if (panels[i].getAttribute('key-panel') == tabKey) {
        panels[i].classList.add('tabbed-pane__panel_active');
      }
    }

    this.classList.add('tabbed-pane__tab_active');

  }

  tabs.forEach(function(item) {
    item.addEventListener("click", clickMe);
  })
})();

(function() {

  var phone1 = document.getElementById('phone-1'),
      phone2 = document.getElementById('phone-2');

  var maskOptions = {
    mask: '+{7}(000)000-00-00'
  };
  var maskPhone1 = new IMask(phone1, maskOptions),
      maskPhone2 = new IMask(phone2, maskOptions);

})()
