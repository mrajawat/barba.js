function pageTransition()
{
  var t1 = gsap.timeline();

  t1.to('ul.transition li',{ duration: .5, scaleY: 1, transformOrigin: "bottom left", stagger: .2 })
  t1.to('ul.transition li',{ duration: .5, scaleY: 0, transformOrigin: "bottom left", stagger: .1, delay: .1 })
}

function contentAnimation()
{
  var t1 = gsap.timeline();
  t1.from('.left',{duration:1.5,translateY:50,opacity:0})
  t1.to('img',{clipPath:"polygon(0 0,100% 0,100% 100%,0 100%)"},"-=1.1")
}

function delay(n){
n = n || 2000;
return new Promise(done =>{
  setTimeout(()=>{
    done();
  },n); 
});
}


barba.init({
  sync:true,

  transitions: [{
    async leave(data){
      const done = this.async();

      pageTransition();
      await delay(1500);
      done();
    },

    async enter(data){
      contentAnimation();
    },

    async once(data){
      contentAnimation();
    }
  }]
})