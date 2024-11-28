//Video Thumbnail
const VIDEO_THUMBNAIL = document.querySelector('.video-thumbnail');
function thumbClose(){
    const IFRAME = document.querySelector('.iframe-js');

    IFRAME.setAttribute('src', 'https://www.youtube.com/embed/C0DPdy98e4c?si=wqePiQclld33BjU1&autoplay=1');
    VIDEO_THUMBNAIL.classList.add('video-thumbnail-active');
}
VIDEO_THUMBNAIL.addEventListener('click', thumbClose);

//Slider Section 03
const SLIDER_SEC_03 = document.querySelector('.section-03-slider');

new Glider(SLIDER_SEC_03, {
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    scrollLock: true,
    arrows: {
      prev: '.section-03-slider-prev-button',
      next: '.section-03-slider-next-button'
    },
    responsive: [
        {
          breakpoint: 550,
          settings: {
            slidesToShow: 2
          }
        },
        {
            breakpoint: 900,
            settings: {
              slidesToShow: 3
            }
          }
    ],
  });

//Slider Section 05
const SLIDER_SEC_05 = document.querySelector('.section-05-slider');

new Glider(SLIDER_SEC_05, {
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    scrollLock: true,
    arrows: {
      prev: '.section-05-slider-prev-button',
      next: '.section-05-slider-next-button'
    },
    responsive: [
        {
          breakpoint: 550,
          settings: {
            slidesToShow: 2
          }
        },
        {
            breakpoint: 900,
            settings: {
              slidesToShow: 3
            }
          }
    ],
  });

//Accordion
const ACCORDION_TITLE = [...document.querySelectorAll('.section-08-accordion-title')];

ACCORDION_TITLE.map((el)=>{
  el.addEventListener('click', (event)=>{
    const ACCORDION_TEXT_TARGET = event.target.nextElementSibling;
    const ACCORDION_ICON = event.target.lastElementChild.children[0];
    
    ACCORDION_TITLE.map((el)=>{
      const ACCORDION_TEXT = el.nextElementSibling;

      if(ACCORDION_TEXT !== ACCORDION_TEXT_TARGET){
        ACCORDION_TEXT.classList.remove('section-08-accordion-title-active');
        ACCORDION_TEXT.style.maxHeight = '0';
        el.lastElementChild.children[0].setAttribute('src','images/svg/add.svg');
      };
    });

    ACCORDION_TEXT_TARGET.classList.toggle('section-08-accordion-title-active');

    if(ACCORDION_TEXT_TARGET.className.includes('section-08-accordion-title-active')){
      ACCORDION_TEXT_TARGET.style.maxHeight = ACCORDION_TEXT_TARGET.children[0].scrollHeight + 'px';
      ACCORDION_ICON.setAttribute('src','images/svg/remove.svg');
    }else{
      ACCORDION_TEXT_TARGET.style.maxHeight = '0';
      ACCORDION_ICON.setAttribute('src','images/svg/add.svg');
    };
  });
});
