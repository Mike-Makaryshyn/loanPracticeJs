export default class VideoPlayer {
   constructor(triggers,overlay) {
      this.btns = document.querySelectorAll(triggers);
      this.overlay = document.querySelector(overlay);
      this.close = this.overley.querySelector('.close');
   }

   play() {
      this.btns.forEach(btn => {
         btn.addEventListener('click',() => {
            console.log('hello');
         });
      });
   }
}