'use strict';

window.onload = function () {

  //---------Elements-------------------------------------------------

  let burger = document.querySelector(".menu");
  
  let blackButton = document.querySelector(".linkButton");
  
  let formButtom = document.querySelector(".blockForm");

  let email = document.getElementsByName("email")[0];

  let subscribeForm = document.querySelector(".subscribe-form");
  
  let scrollItems = document.querySelectorAll('.scrollItem');
  
  let sectionGreen = document.querySelector('.topBlock');

  let buttonHelpAnimation = document.querySelector('.rigthButton')

  let green = document.getElementById('green');

  let leftTekst = document.querySelector('.leftTekst');

  let fourNum = document.querySelector('.buttomBlock');

  let colFull = document.querySelector('#thirstSection .topBlock');

  let animationFirstBlock = document.querySelector('.firstItem');

  let animationSecondBlock = document.querySelector('.secondItem')

  let animationThirdBlock = document.querySelector('.thirdItem');

  let animationFourthBlock = document.querySelector('.fourthItem');

  let animationFifthBlock = document.querySelector('.fifthItem');

  let animationSixthBlock = document.querySelector('.sixthItem');

  let service = document.querySelector('.servise')

  let worksTopBlock = document.querySelector('#works .topBlock')

  let worksSection = document.querySelector('#works')

  let itemsFirst = document.querySelectorAll('.item1, .item2')

  let itemsSecond = document.querySelectorAll('.item3, .item4')

  let itemPicture = document.querySelector('.item1')

  let itemsThird = document.querySelectorAll('.item5, .item6')

  let itemPictureFirst = document.querySelector('.item3')

  let itemPictureTwo = document.querySelector('.item6')

  let sliderTopBlock = document.querySelector('#slider-block .topBlock')

  let firstSlider = document.querySelector('.first-slider')

  let slider = document.querySelector('.slider')

  let blackTopBlock = document.querySelector('#blackBlock .topBlock')

  let contactMenu = document.querySelector('.contact')

  let blackBlock = document.querySelector('#blackBlock')

  
  let box = {};

  //------FirstAnimation---------------------------------------

  leftTekst.classList.remove('faded-out')


  //-------ScrollAnimations-------------------------------------

  window.onscroll = function () {
    if (pageYOffset > 80) {
      burger.style.backgroundColor = "#000";
      blackButton.style.opacity = "1"
      blackButton.style.transition = "1s"
    } else {
      blackButton.style.opacity = "0"
      burger.style.backgroundColor = ""
    };
    if (buttonHelpAnimation.getBoundingClientRect().top <= 0) {
      sectionGreen.classList.remove('faded-out')
    }
    if (green.getBoundingClientRect().top <= 0) {
      fourNum.classList.remove('faded-out')
    }

    if (fourNum.getBoundingClientRect().top <= 0) {
      colFull.classList.remove('faded-out')
      animationFirstBlock.classList.remove('faded-out')
      animationSecondBlock.classList.remove('faded-out')
    }

    if (service.getBoundingClientRect().top <= 0) {
      animationThirdBlock.classList.remove('faded-out')
      animationFourthBlock.classList.remove('faded-out')
    }

    if (animationFirstBlock.getBoundingClientRect().top <= 0) {
      animationFifthBlock.classList.remove('faded-out')
      animationSixthBlock.classList.remove('faded-out')
    }

    if (animationSixthBlock.getBoundingClientRect().top <= 0) {
      worksTopBlock.classList.remove('faded-out')
    }

    if (worksSection.getBoundingClientRect().top <= 0) {
      itemsFirst.forEach(item => item.classList.remove('faded-out')) 
    }

    if (itemPicture.getBoundingClientRect().top <= 0) {
      itemsSecond.forEach(item => item.classList.remove('faded-out'))
    }

    if (itemPictureFirst.getBoundingClientRect().top <= 0) {
      itemsThird.forEach(function(item) {
        item.classList.remove('faded-out')
      })
    }

    if (itemPictureTwo.getBoundingClientRect().top <= 0) {
      sliderTopBlock.classList.remove('faded-out')
    }

    if (sliderTopBlock.getBoundingClientRect().top <= 0) {
      firstSlider.classList.remove('faded-out')
    }

    if (firstSlider.getBoundingClientRect().top <= 0) {
      slider.classList.remove('faded-out')
    }

    if (slider.getBoundingClientRect().top <= 0) {
      blackTopBlock.classList.remove('faded-out')
    }

    if (blackBlock.getBoundingClientRect().top <= 0) {
      contactMenu.classList.remove('faded-out')
    }
  };
  
  //---------------------------------------------
  let bagroundChanch = document.getElementById('green');
  let section = document.querySelector('.manyColors');

  bagroundChanch.style.backgroundColor = section.value;

  section.onchange = function () {
    bagroundChanch.style.backgroundColor = section.value;
  }

  let form = document.querySelector(".form"),
    yourName = document.getElementById('text'),
    yourEmail = document.getElementById('gmail'),
    subject = document.querySelector('.subject'),
    yourMessaga = document.getElementById('message'),
    data = {};
  form.onsubmit = function (e) {
    e.preventDefault()

    data.yourName = text.value
    data.yourEmail = gmail.value
    data.subject = subject.value
    data.yourMessaga = message.value
  }





  formButtom.onsubmit = function (e) {
    e.preventDefault()
    box.email = email.value
  };

  // subscribeForm.onclick = function () {
  //   if (subscribeForm.onclick) {
  //     subscribeForm.style.background = "none"
  //   } else {
  //   }
  // }




};
const toggleMenu = document.querySelector('.menu');
const burgerMenu = document.querySelector('.burger-menu');
const menuItems = document.querySelectorAll('.burger-menu nav li');
const menuBtn = document.querySelector('.burger-menu__header .button');
const menuWrapper = document.querySelector('.burger-menu__wrapper');

console.log(toggleMenu)


function deleteClass(parrentEl, removeClass) {
  parrentEl.classList.remove(`${removeClass}`)
}

function addClass(parrentEl, addClass) {
  parrentEl.classList.add(`${addClass}`)
}

function toggleClass(parrentEl, toggleClass) {
  parrentEl.classList.toggle(`${toggleClass}`)
}


toggleMenu.onclick = (e) => {
  e.preventDefault()
  toggleClass(burgerMenu, 'closed');
}

menuBtn.onclick = () => {
  addClass(burgerMenu, 'closed')
}


const closedMenu = () => {
  for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].onclick = () => {
      addClass(burgerMenu, 'closed');
    }
  }
}
closedMenu();

//--------Slider-----------------------------------------------------------------------------------------------------------------------------

const firstSlide = document.querySelector('.slider .item')
const btnClickLeft = document.querySelector('.slide-btn-left')
const btnClickRigth = document.querySelector('.slide-btn-rigth')
const elementsSlider = document.querySelectorAll('.slider .item')


showFirstElem()

function showFirstElem() {
  firstSlide.classList.add('active')
}


btnClickLeft.addEventListener('click', showPrev)

btnClickRigth.addEventListener('click', showNext)

function showPrev() {
  for (let i = 0; i < elementsSlider.length; i++) {
    if (elementsSlider[i].classList.contains('active')) {
      elementsSlider[i].classList.remove('active')
      if (i === 0) {
        i = elementsSlider.length - 1
        elementsSlider[i].classList.add('active')
      } else {
        elementsSlider[i - 1].classList.add('active')
      }
      break
    }
  }
}


function showNext() {
  for (let i = 0; i < elementsSlider.length; i++) {
    if (elementsSlider[i].classList.contains('active')) {
      elementsSlider[i].classList.remove('active')
      if (i === elementsSlider.length - 1) {
        elementsSlider[i = 0].classList.add('active')
      } else {
        elementsSlider[i + 1].classList.add('active')
      }
      break
    }
  }
}

$('.first-slider').slick({
  infinite: true,
  dots: true,
  slidesToShow: 6,
  slidesToScroll: 2
});

