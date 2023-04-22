// After the DOM is loaded
window.addEventListener("load", function (e) {

  // Hamburger or X
  let navham = document.getElementById('nav-ham');
  // 1st level (only one)
  let navul = document.querySelector('nav > ul');
  // 2nd level (many)
  let navulliuls = document.querySelectorAll('nav > ul > li > ul');
  // 1st level links that have a 2nd level dropdown (many)
  let navullis = document.querySelectorAll('nav > ul > li a:not(:only-child)');

  // Toggle 2nd level visibility
  let toggle2nd = function (e) {
    // Make 2nd level visible
    let thisul = this.parentNode.querySelector('ul');
    thisul.classList.toggle('active');
    // Hide other dropdowns
    for (let item of navulliuls) {
      if (item !== thisul) {
        item.classList.remove('active');
      }
    }
    // Do not execute this link or hidenav
    e.stopPropagation();
  }

  // Toggle mobile navigation bar
  let togglenav = function (e) {
    // Hamburger to X toggle
    navham.classList.toggle('active');
    // 1st level visible toggle
    navul.classList.toggle('active');
    // Do not execute hidenav
    e.stopPropagation();
  }

  // Hide mobile navigation bar
  let hidenav = function (e) {
    // Hamburger
    navham.classList.remove('active');
    // 1st level visible toggle
    navul.classList.remove('active');
    e.stopPropagation();
    // Hide 2nd level
    for (let item of navulliuls) {
      item.classList.remove('active');
    }
  }

  // Toggle 2nd level visibility on click on any link that has a 2nd level dropdown
  for (let item of navullis) {
    item.addEventListener("click", toggle2nd, false);
  }

  // Hamburger or X click
  navham.addEventListener("click", togglenav, false);

  // Clicking away from dropdown will remove the dropdown class
  document.documentElement.addEventListener("click", hidenav, false);


  let dropdownLink = document.querySelector('.dropdown-link');
  let dropdownItems = document.querySelectorAll('.dropdown-item');
  let dropdownLinkImg = document.querySelector('.dropdown-link img');
  let dropdownCountryName = document.querySelector('.dropdown-link .country-name');

  let currentLinkName = dropdownCountryName.textContent


  const countryObj = {
    'nigeria': {
      'name': 'Nigeria',
      'image': 'https://uploads-ssl.webflow.com/6194b7fcf08b5fb4a89cf648/6194b7fcf08b5f0e1d9cf688_Image%2048.svg'
    },
    'kenya': {
      'name': 'Kenya',
      'image': 'https://getcarbon.co.ke/images/Kenya-logo.svg'
    },
    'ghana': {
      'name': 'Ghana',
      'image': 'https://gh.getcarbon.co/images/GHANA-L.svg'
    }

  }

  dropdownLink.addEventListener('click', function (e) {
    e.preventDefault();

    const dropdownMenu = document.querySelector('.dropdown-menu');

    dropdownMenu.classList.toggle('show')
  })

  dropdownItems.forEach((dropdownItem) => {

    dropdownItem.addEventListener('click', function (e) {
      e.preventDefault();

      let countryName = this.getAttribute('data-country')

      // console.log(countryName);


      dropdownCountryName.textContent = countryObj[countryName].name;
      dropdownLinkImg.setAttribute('src', countryObj[countryName].image)


      this.setAttribute('data-country', currentLinkName.toLowerCase());
      this.textContent = currentLinkName

      // console.log('before: ', currentLinkName);

      currentLinkName = dropdownCountryName.textContent;

      // console.log('after: ', currentLinkName);

    })

  })





}, false);

let textWrapper = document.querySelector('.hiw')


window.addEventListener('scroll', function () {

  const selectImgRegister = document.querySelector('.col-4 .register');
  const selectImgHome = document.querySelector('.col-4 .home');
  const selectImgDownload = document.querySelector('.col-4 .download');

  let scrollTop = textWrapper.pageYOffset || document.documentElement.scrollTop;


  if (scrollTop > 5388 && scrollTop <= 5788) {
    selectImgDownload.style.position = 'fixed'
  } else {
    selectImgDownload.style.position = 'absolute'
    // selectImgDownload.style.opacity = 0
    // selectImgDownload.style.zIndex = 0
  }

  if (scrollTop < 5388) {
    selectImgDownload.style.position = 'absolute'
  }

  if (scrollTop >= 5788 && scrollTop <= 6000) {
    selectImgRegister.style.position = 'fixed'
    selectImgRegister.style.opacity = 1
    selectImgRegister.style.zIndex = 1
  } else {

    selectImgRegister.style.position = 'absolute'
    selectImgRegister.style.opacity = 0
    selectImgRegister.style.zIndex = 0

  }

  if (scrollTop >= 6000 && scrollTop <= 6300) {

    selectImgHome.style.position = 'fixed'
    selectImgHome.style.opacity = 1
    selectImgHome.style.zIndex = 1
  } else {
    selectImgHome.style.position = 'absolute'
    selectImgHome.style.opacity = 0
    selectImgHome.style.zIndex = 0
  }

  console.log(scrollTop)

});



$(document).ready(function() {
  $("#news-slider").owlCarousel({
      items : 4,
      itemsDesktop:[1199,3],
      itemsDesktopSmall:[980,2],
      itemsMobile : [600,1],
      navigation:true,
      navigationText:["",""],
      pagination:true,
      autoPlay:true
  });
});