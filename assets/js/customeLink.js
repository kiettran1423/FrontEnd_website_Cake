const options = ["home-page", "shop-page", "product-page", "blog-page", "contact-page", "about-page"]
const homeNav = [
    {
        id: "home-page",
        hrefLink: "index.html",
    },
    {
        id: "shop-page",
        hrefLink: "shop-category-slider.html",
    },
    {
        id: "product-page",
        hrefLink: "product-sticky.html",
    },
    {
        id: "blog-page",
        hrefLink: 'blog-grid.html'
    },
    {
        id: "contact-page",
        hrefLink:  'contact-us.html'
    },
    {
        id: "about-page",
        hrefLink: "about-us.html",
    }
]


function changeHref(options, homeNav) {
    homeNav.forEach((element) => {
      var hrefLink = element.hrefLink;
      var elementId = document.querySelector(`#${element.id}`);

  
      for (var i = 0; i < options.length; i++) {
        if (options[i] === elementId.id) {
          elementId.href = hrefLink;
        }
      }
    });
  }

changeHref(options ,homeNav)