setInterval( function() {
const heartBtn = document.querySelector('body > div._2dDPU.CkGkG > div.zZYga > div > article > div.eo2As > section.ltpMr.Slqrh > span.fr66n > button');
const heartSvg = heartBtn.querySelector('svg');
if (heartSvg.getAttribute('aria-label') === 'Like') {
    heartBtn.click();
}
const nextArrow = document.querySelector('a.coreSpriteRightPaginationArrow');
nextArrow.click();    
}, 3000)
