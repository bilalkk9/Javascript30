console.log("Bismillah");


window.addEventListener('keydown',function(e){

    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(!audio) return;

    key.classList.add("playing");
    audio.currentTime = 0;
    audio.play();
});
function removeTransition(e){
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}
const keys = document.querySelectorAll(".key");
keys.forEach(key=>key.addEventListener('transitionend',removeTransition));