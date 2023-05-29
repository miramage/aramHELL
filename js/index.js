const scrollToElement = (elementId, offset) => {
  $("html, body").animate({
    scrollTop: $(`${elementId}`).offset().top + (offset || 0)
  }, 800);
};


$('#header').load('./template/header.html', () => {
  if (window.location.pathname === '/') {
    $('.nav-link').click(e => {
      if (e.currentTarget.hash) {
        e.preventDefault();
        scrollToElement(e.currentTarget.hash, -80);
      }
    });
  }
});

$('#footer').load('./template/footer.html');

// Set sticky navbar
$(window).scroll(function(e) {
  if ($(this).scrollTop() > 60) {
    $('#header > .navbar').addClass('compact');
  } else {
    $('#header > .navbar').removeClass('compact');
  }
});

// cookie consent banner
const bottomLimit = document.body.offsetHeight - window.innerHeight - 100;
if (window.cookieconsent) {
  console.log('inizi cookie banner')
  window.cookieconsent.initialise({
    "palette": {
      "popup": {
        "background": "#edeff5",
        "text": "#071e3d"
      },
      "button": {
        "background": "#e96a63",
        "text": "#ffffff"
      }
    },
    "position": "bottom",
    "theme": "classic",
    "dismissOnScroll": bottomLimit,
    "dismissOnWindowClick": true,
    "content": {
      "message": "Ciao! Questo sito utilizza i cookie di Google Analytics esclusivamente per scopi statistici, non finalizzati a scopi commerciali.",
      "dismiss": "Capito!",
      "link": "Scopri di più",
      "href": "./cookie-policy"
    }
  });
}
