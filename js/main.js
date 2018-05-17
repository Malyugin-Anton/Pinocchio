var tabs = document.querySelectorAll('.tabbed-pane__tab'),
    panels = document.querySelectorAll('.tabbed-pane__panel');

tabs[0].classList.add('tabbed-pane__tab_active');
panels[0].classList.add('tabbed-pane__panel_active');
function clickMe(e) {
  var tabKey = this.getAttribute('key-tab');

  for (var i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove('tabbed-pane__tab_active');
    panels[i].classList.remove('tabbed-pane__panel_active');
    if( panels[i].getAttribute('key-panel') == tabKey) {
        panels[i].classList.add('tabbed-pane__panel_active');
    }
  }

  this.classList.add('tabbed-pane__tab_active');

}

tabs.forEach(function(item) {
  item.addEventListener("click", clickMe);
})
