//Video Thumbnail
const VIDEO_THUMBNAIL = document.querySelector('.video-thumbnail');
function thumbClose(){
    const IFRAME = document.querySelector('.iframe-js');

    IFRAME.setAttribute('src', 'https://www.youtube.com/embed/C0DPdy98e4c?si=wqePiQclld33BjU1&autoplay=1');
    VIDEO_THUMBNAIL.classList.add('video-thumbnail-active');
}
VIDEO_THUMBNAIL.addEventListener('click', thumbClose);
