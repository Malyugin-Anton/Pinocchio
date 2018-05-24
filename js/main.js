// accordion
(function() {

  var btn = document.querySelectorAll('.accordion__item');

  function toggleItem(e) {
    e.preventDefault();
    btn.forEach(function(item) {
      item.classList.remove('accordion__item_active');
    })
    this.classList.toggle('accordion__item_active');
  }

  btn.forEach(function(item) {
    item.addEventListener("click", toggleItem);
  })

})();

// mobile-menu
(function() {

  var btn = document.querySelector('a.btn-open'),
      navMobile = document.querySelector('.nav__mobile')

  function toggleMenu(e) {
    e.preventDefault();
    this.classList.toggle('open')
    navMobile.classList.toggle('nav__mobile_open')
  }

  btn.addEventListener("click", toggleMenu);

})();

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
  var maskPhone1 = new IMask(phone1, maskOptions);
  var maskPhone2 = new IMask(phone2, maskOptions);

})();

//яндекс карты
(function() {

  ymaps.ready(init);

  function init(){

    var myMap = new ymaps.Map("map", {
        center: [50, 30],
        zoom: 5,
        controls: []
    });

    myPlacemark = new ymaps.Placemark(
      [50, 30],
      {
        hintContent: 'Город',
        balloonContent: 'ПИНОКИО!!!!'
      },
      {
        iconLayout: 'default#image',
        // iconImageHref: 'img/icon/marker.png',
        iconImageSize: [42, 59],
        iconImageOffset: [-3, -59]
    });

    // myMap.behaviors.disable(['scrollZoom']);

    myMap.geoObjects.add(myPlacemark);
  }
})()
