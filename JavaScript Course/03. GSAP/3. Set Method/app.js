gsap.set(".box", {
    opacity:0,
    backgroundColor:"yellow"
});

gsap.to(".box", {
    opacity:1,
    backgroundColor:"crimson",
    duration:5,
    y:100,
    repeat:5,
    yoyo:true  // come to start position from start-end-start
});