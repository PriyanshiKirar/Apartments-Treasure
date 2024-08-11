const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


function page1Animation() {

  var t1 = gsap.timeline();

  t1.from(" .img img", {
    scale: 0,
    duration: 1,
    delay: 1,
    stagger: 0.4,
    opacity: 0,
    ease: "power1.inOut"
  })
  t1.from("#page1 h1", {
    opacity: 0,
  })



  var t12 = gsap.timeline({
    scrollTrigger: {
      trigger: "#page1",
      scroller: "body",
      start: "top top",
      end: "+=" + (window.innerHeight * 10),
      scrub: .01,
      pin: true,
      // markers:true,
    }
  });


  t12.to(".img1-div", {
    left: "3vw",
    top: "-17vw",
    duration:1,
  }, "same")
  t12.to(".img2-div", {
    top: "-20vw",
    duration:1,
  }, "same")
  t12.to(".img3-div", {
    left: "75vw",
    top: "-12vw",
    duration:1,

  }, "same")
  t12.to(".img4-div", {
    left: "72vw",
    top: "-6vw",
    duration:1,

  }, "same")

  t12.to(".img5-div", {
    left: "60vw",
    top: "12vw",
    duration:1,

  }, "same")

  t12.to(".img6-div", {
    left: "5vw",
    top: "13vw",
    duration:1,

  }, "same")
  t12.to(".img7-div", {
    left: "20vw",
    top: "20vw",
    duration:1,

  }, "same")




  t12.to(".img1-div", {
    left: "1vw",
    top: "-19vw",
    opacity: 0.5,
    duration:1,

  }, "agn")
  t12.to(".img2-div", {
    top: "-25vw",
    opacity: 0.5,
    duration:1,

  }, "agn")
  t12.to(".img3-div", {
    left: "80vw",
    top: "-23vw",
    opacity: 0.5,
    duration:1,

  }, "agn")
  t12.to(".img4-div", {
    left: "80vw",
    top: "-6vw",
    opacity: 0.5,
    duration:1,

  }, "agn")

  t12.to(".img5-div", {
    left: "69vw",
    top: "13vw",
    opacity: 0.5,
    duration:1,

  }, "agn")

  t12.to(".img6-div", {
    left: "5.5vw",
    top: "12vw",
    opacity: 0.5,
    duration:1,

  }, "agn")
  t12.to(".img7-div", {
    left: "21vw",
    top: "22vw",
    opacity: 0.5,
    duration:1,

  }, "agn")

  t12.to(".img", {
    opacity: 0,
    duration:1,

  })

}



function page2Animation() {


  var t13 = gsap.timeline({
    scrollTrigger: {
      trigger: ".page2-largeimg",
      scroller: "body",
      start: "top top",
      end: "+=" + (window.innerHeight * 2),
      scrub: 1,
      pin: true,
      // markers: true,
      pinSpacing: true,
    }
  });


  t13.to(".large-div img", {
    scale: 3,
    duration: 2,
    ease: "power1.inOut"
  });
}



function page3Animation() {
  var t14=gsap.timeline();
var h15=document.querySelector(".flex #h15");
var h25=document.querySelector(".flex #h25");
var h35=document.querySelector(".flex #h35");

h15.addEventListener("click",function(){
  console.log("hey")
  t14.to(".img-right1",{
    opacity:1,
    duration:0.2,
  },"a")
})
h25.addEventListener("click",function(){
  console.log("hey")
  t14.to(".img-right2",{
    opacity:1,
    duration:0.2,
  },"a")
})
h35.addEventListener("click",function(){
  console.log("hey")
  t14.to(".img-right3",{
    opacity:1,
    duration:0.2,
  },"a")
})
 }







 page1Animation()
page2Animation()
page3Animation();



function page4animation(){
  gsap.to('#page4 #page4-img',{
    height:'100%',
    width:'100%',
    duration:1,
    scrollTrigger:{
      trigger:'#page4',
      scrub:true,

    }
  })
}

page4animation();