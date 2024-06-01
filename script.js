
var video = document.querySelector(".v video");


document.querySelector("button").addEventListener("mouseover",function(){
    gsap.to("video",{
        opacity:1,
        duration:.9,
    })
})


document.querySelector("button").addEventListener("mouseleave",function(){
    gsap.to("video",{
        opacity:0,
        duration:.9,
    })
})

