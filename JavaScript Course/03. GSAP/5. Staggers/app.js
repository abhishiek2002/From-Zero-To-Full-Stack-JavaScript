// gsap.set(".box", {
//     borderRadius: 0,
// });

// gsap.to(".box", {
//     borderRadius: 100,
//     duration:1,
//     y:-100,
//     ease: "power1",
//     yoyo:true,
//     repeat:-1,
//     stagger:{
//         amount:1,
//         ease:0.5,
//         from:0,
//         repeat:-1,
//         yoyo:true,
//     }
// });


gsap.from(".box", {
    y: -100,
    duration: 1,
    stagger: {
        each: .1,
        ease: "bounce",
        yoyo: true,
        repeat: -1,
    }
})