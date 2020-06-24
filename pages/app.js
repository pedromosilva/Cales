const blogtitle = document.querySelector(".blogtitle")
const blogheading = document.querySelector(".blogheading")

const tl = new TimelineMax({delay:0.2});
const tl2 = new TimelineMax();
//debugger;


//Title animation
tl.fromTo(blogtitle, 3, {width: "70%"},{width: "100%", ease:Power2.easeInOut});

//Heading animation
tl2.fromTo(blogheading, 1, {height: "15px"}, {height: "30px"})
tl2.fromTo(blogheading, 1, {y: "50", opacity: "0.1"}, {y: 0, opacity: 1})

