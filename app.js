setInterval( function() {
const heartBtn = document.querySelector('button.wpO6b');
const heartSvg = heartBtn.querySelector('svg');
if (heartSvg.getAttribute('aria-label') === 'Like') {
    heartBtn.click();
}
const nextArrow = document.querySelector('a.coreSpriteRightPaginationArrow');
}, 3000)
