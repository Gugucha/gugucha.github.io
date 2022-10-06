const b = document.querySelector('button.button--NO');
b.addEventListener("click", mouseHover)
function mouseHover() {
    const i = Math.floor(Math.random() * 500) + 1;
    const j = Math.floor(Math.random() * 500) + 1;
    b.style.left = i + "px"
    b.style.top=j+"px"
}
const c = document.querySelector('button.button--YES')
c.addEventListener("click", mouseclick)
function mouseclick() {
    confirm("I Love You Too ❤️");

}