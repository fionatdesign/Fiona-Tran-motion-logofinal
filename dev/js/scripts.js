import { gsap } from "gsap";

import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { CustomBounce } from "gsap/CustomBounce";
import { CustomWiggle } from "gsap/CustomWiggle";

gsap.registerPlugin(GSDevTools);
gsap.registerPlugin(DrawSVGPlugin, MorphSVGPlugin);
gsap.registerPlugin(MotionPathPlugin, CustomBounce, CustomWiggle);
MorphSVGPlugin.convertToPath("#branch", "#leaf", "cherrybody1", "cherrybody2", "#leftleg", "#rightleg", "#cherisename", "#icecreamname");


const mainTL = gsap.timeline({id: "mainTL"});


// function buildCherry(){
//     let tl = gsap.timeline();

//     tl.from("#leftleg1", {visibility: "visible", duration: 1, delay: 0, fill: "#FCF3E3", drawSVG: 0}, "shoe")
//     .to("#leftleg1", {visibility: "visible", duration: 1, delay: 0, fill: "#fff"}, "shoe")
//     .from("#rightleg1", {visibility: "visible", duration: 1, delay: 0, fill: "#FCF3E3", drawSVG: 0}, "shoe")
//     .to("#rightleg1", {visibility: "visible", duration: 1, delay: 0, fill: "#fff"}, "shoe")
//     .from("#leftarm1", {visibility: "visible", duration: 1, delay: 0, fill: "#FCF3E3", drawSVG: 0}, "shoe+=1")
//     .to("#leftarm1", {visibility: "visible", duration: 1, delay: 0, fill: "#fff"}, "shoe+=1")
//     .to("#rightarm1", {x:5, delay: 0}, "shoe+=1")
//     .from("#rightarm1", {visibility: "visible", duration: 1, delay: 0, fill: "#FCF3E3", drawSVG: 0}, "shoe+=1")
//     .to("#rightarm1", {visibility: "visible", duration: 1, delay: 0, fill: "#fff"}, "shoe+=1")
//     .to("#eye", {y:5, delay: 0}, "shoe+=1")
//     .from("#eye", {duration:1, drawSVG: 0})
//     .fromTo("#eye1", {opacity:0, y:5, duration: 0.5}, {y:5, duration: 3, ease: "power1.in", opacity: 100})
//     .to("#smile", {y:5, delay: 0}, "shoe+=2")
//     .from("#smile", {duration:1, fill: "none", drawSVG: 0})
//     .from("#cheek", {duration: 1, opacity: 0, ease: "none", drawSVG: 0})
//     .to("#cheek", {duration:1, fill: "#fff", drawSVG: 0}, "shoe")

//     return tl;
// }

function cherryBranch(){
    let tl = gsap.timeline();

    tl.from("#branch", {y: -30, duration: 1.5, fill: "#FCF3E3", drawSVG: 0}, "animate")
    .to("#branch", {duration:1, fill:"#fff"}, "animate+=2")
    .from("#leaf", {display: "none", scale: .2, duration:2, ease: "expo.out"}, "animate+=1.3")
    .from("#cherrybranch", {display: "none", scale: .1, duration:2, drawSVG:0, transformOrigin: "130px 10px", ease: "expo.out"}, "animate+=1.8")
    .from("#leaf", {duration:1, yoyo: true, rotate: 5, repeat: 5}, "animate+=1.3")
    .from("#cherrybranch", {duration:1, yoyo: true, transformOrigin: "130px 10px", rotate: 5, repeat: 6}, "animate+=1.3")
    .to("#branch", {duration:1, y:-400}, "animate+=8")
    .to("#leaf", {duration:1, y:-500}, "animate+=8")
    .to("#cherrybranch", {duration:1, y:125, rotate: 25, transformOrigin: "bottom center", ease: "bounce.out"}, "animate+=8")
    .to("#cherrybranch", {duration:1, rotate: -100, transformOrigin: "bottom center", ease: "back.out(1.8)"}, "animate+=8.5")
    .to("#cherrybranch", {duration:1, rotate: 0, transformOrigin: "bottom center", x:10, ease: "back.out(3)"}, "animate+=8.5")
    .to("#cherrystem", {duration:1, rotate: 30, x:-10, transformOrigin: "bottom", ease: "back.out(3)"}, "animate+=8.5")

    return tl;
    
}


function cherryLeg(){
    let tl = gsap.timeline();

    tl.from("#leftleg1", {visibility: "visible", duration: 1, delay: 0, fill: "#FCF3E3", drawSVG: 0}, "shoe")
    .to("#leftleg1", {visibility: "visible", duration: 1, delay: 0, fill: "#fff"}, "shoe")
    .from("#rightleg1", {visibility: "visible", duration: 1, delay: 0, fill: "#FCF3E3", drawSVG: 0}, "shoe")
    .to("#rightleg1", {visibility: "visible", duration: 1, delay: 0, fill: "#fff"}, "shoe")

    return tl;
}


function cherryArm(){
    let tl = gsap.timeline();

    tl.from("#leftarm1", {visibility: "visible", duration: 1, delay: 0, fill: "#FCF3E3", drawSVG: 0})
    .to("#leftarm1", {visibility: "visible", duration: 1, delay: 0, fill: "#fff"})
    .to("#rightarm1", {x:5, delay: 0})
    .from("#rightarm1", {visibility: "visible", duration: 1, delay: 0, fill: "#FCF3E3", drawSVG: 0})
    .to("#rightarm1", {visibility: "visible", duration: 1, delay: 0, fill: "#fff"})

    return tl;
}


function cherryFace(){
    let tl = gsap.timeline();

    tl.to("#eye", {y:5, delay: 0})
    .from("#eye", {duration: 0.75, drawSVG: 0})
    .fromTo("#eye1", {opacity:0, y:5, duration: 0.5}, {y:5, duration: 3, ease: "power1.in", opacity: 100}, "face")
    .to("#smile", {y:5, delay: 0}, "face")
    .from("#smile", {duration:0.5, fill: "none", drawSVG: 0}, "face")
    .from("#cheek", {duration: 0.5 , opacity: 0, ease: "none", drawSVG: 0}, "face+=0.75")
    .to("#cheek", {duration:0.25, fill: "#fff"}, "face+=0.75")
    .from("#cherryshine", {duration: 1, opacity: 0, ease: "none", drawSVG: 0}, "face+=1.5")
    .to("#cherryshine", {duration:1, fill: "#fff"}, "face+=1.5")

    return tl;
}


function icecreamMotion(){
    let tl = gsap.timeline();

    tl.to("#leftmotion", {duration:1, yoyo: true, rotate: 15, ease: "back.out", transformOrigin: "200px 100px"}, "smile")
    .to("#leftmotion", {duration:1, rotate: 0, ease: "back.out"}, "smile+=1")
    .to("#icecream", {duration: 1, rotate: 360, motionPath: {path: "#icecream-path", align: "self", alignOrigin: [0.5 , 0.3], start: 0, end: 0.99}}, "smile+=0.4")
    .fromTo(".cherry", {duration: 0.5, rotate:3, yoyo: true, ease: "back.out(2)"}, {duration: 0.5, rotate:0, yoyo: true, ease: "back.out(2)"}, "smile+=1")
    .to(".righteye", {duration: 0.25, fill: "none", shapeIndex: 6, morphSVG: "#wink"}, "smile+=1.5")
    .to("#smile", {duration:0.25, morphSVG: "#mouthopen"}, "smile+=1.5")

    return tl;
}

function logoName(){
    let tl = gsap.timeline();

    tl.from("#c", {duration: 0.5, drawSVG: 0}, "cherise")
    .from("#heri", {duration: 0.5, delay: 0, drawSVG: "100% 100%"}, "cherise")
    .from("#s", {duration: 0.5, drawSVG: 0}, "cherise")
    .from("#e", {duration: 0.5, drawSVG: 0}, "cherise")
    .from("#apostrophe", {duration: 0.5, drawSVG: 0}, "cherise")
    .from("#second-s", {duration: 0.5, drawSVG: 0}, "cherise")
    .from("#icecreamname", {duration: 0.5, drawSVG: 0})
    .from(".dot", {opacity: 0, delay: 1, ease: "power3.out", duration: 0.5})
    

    return tl;
}


mainTL
.add(cherryBranch())
// .add(buildCherry({visibility:"visible"}))
.add(cherryLeg())
.add(cherryArm())
.add(cherryFace())
.add(icecreamMotion())
.add(logoName())




; 

GSDevTools.create();
