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
