import { gsap } from "gsap";

import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(DrawSVGPlugin, MorphSVGPlugin, GSDevTools, MotionPathPlugin);
MorphSVGPlugin.convertToPath("#branch", "#leaf", "cherrybody1", "cherrybody2", "#leftleg", "#rightleg", "#cherisename", "#icecreamname");


const mainTL = gsap.timeline({id: "mainTL"});


function cherryBranch(){
    let tl = gsap.timeline();

    tl.from("#branch", {y: -30, duration: 1.5, fill: "#FCF3E3", drawSVG: 0}, "branch")
    .to("#branch", {duration:1, fill:"#fff"}, "branch+=2")
    .from("#leaf", {display: "none", scale: .2, duration:2, ease: "expo.out"}, "branch+=1.3")
    .from("#cherrybranch", {display: "none", scale: .1, duration:2, drawSVG:0, transformOrigin: "130px 10px", ease: "expo.out"}, "branch+=1.8")
    .from("#leaf", {duration:1, yoyo: true, rotate: 5, repeat: 3}, "branch+=1.3")
    .from("#cherrybranch", {duration:1, yoyo: true, transformOrigin: "130px 10px", rotate: 5, repeat: 3}, "branch+=1.3")
    .to("#branch", {duration:1, y:-400}, "branch+=4.5")
    .to("#leaf", {duration:1, y:-500}, "branch+=4.5")
    .to("#cherrybranch", {duration:1, y:200, rotate: 25, transformOrigin: "bottom center", ease: "bounce.out"}, "branch+=4.5")
    .to("#cherrybranch", {duration:1, rotate: -100, transformOrigin: "bottom center", ease: "back.out(1.8)"}, "branch+=5")
    .to("#cherrybranch", {duration:1, rotate: 0, transformOrigin: "bottom center", x:10, ease: "back.out(3)"}, "branch+=5")
    .to("#cherrystem", {duration:1, rotate: 30, x:-10, transformOrigin: "bottom", ease: "back.out(3)"}, "branch+=5")

    return tl;
    
}


function cherryLeg(){
    let tl = gsap.timeline();

    tl.to("cherrybranch", {duration: 0.75, rotate: 10, transformOrigin: "bottom center", yoyo: true}, "shoe")
    .to("#cherrybranch", {y:125, duration: 1, ease: "back.out"}, "shoe+=0.25")
    .from("#leftleg1", {visibility: "visible", duration: 1, delay: 0, fill: "#FCF3E3", drawSVG: 0}, "shoe+=0.5")
    .to("#leftleg1", {visibility: "visible", duration: 1, delay: 0, fill: "#fff"}, "shoe+=0.5")
    .from("#rightleg1", {visibility: "visible", duration: 1, delay: 0, fill: "#FCF3E3", drawSVG: 0}, "shoe+=0.5")
    .to("#rightleg1", {visibility: "visible", duration: 1, delay: 0, fill: "#fff"}, "shoe+=0.5")

    return tl;
}


function cherryArm(){
    let tl = gsap.timeline();

    tl.from("#leftarm1", {duration: 1, x: 30, delay: 0, fill: "#FCF3E3", drawSVG: "100% 100%"}, "arm")
    .to("#leftarm1", {duration: 1, delay: 0, fill: "#fff"}, "arm")
    .from("#rightarm1", {duration: 1, delay: 0, x: -30, fill: "#FCF3E3", drawSVG: 0}, "arm")
    .to("#rightarm1", {duration: 1, delay: 0, x: 7, fill: "#fff"}, "arm")

    return tl;
}


function cherryFace(){
    let tl = gsap.timeline();

    tl.to("#eye", {y:5, delay: 0}, "face")
    .from("#eye", {duration: 0.75, drawSVG: 0}, "face")
    .fromTo("#eye1", {opacity:0, y:5, duration: 0.5}, {y:5, duration: 3, ease: "power1.in", opacity: 100}, "face+=0.5")
    .to("#smile", {y:5, delay: 0}, "face")
    .from("#smile", {duration:0.5, fill: "none", drawSVG: 0}, "face")
    .from("#cheek", {duration: 0.5 , opacity: 0, ease: "none", drawSVG: 0}, "face")
    .to("#cheek", {duration:0.25, fill: "#fff"}, "face")

    return tl;
}


function icecreamMotion(){
    let tl = gsap.timeline();

    tl.to("#leftmotion", {duration:1, yoyo: true, rotate: 15, ease: "back.out", transformOrigin: "200px 100px"}, "smile")
    .to("#leftmotion", {duration:1, rotate: 0, ease: "back.out"}, "smile+=1")
    .to("#icecream", {duration: 1, rotate: 350, motionPath: {path: "#icecream-path", align: "self", start: 0, end: 1}}, "smile+=0.4")
    .from("#right", {duration: 1, delay: 0, rotate: 10, ease: "back.out"}, "smile+=0.7")
    .to("#right", {duration: 1, delay: 0, rotate: -2, ease: "back.out"}, "smile+=1")
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
    .from(".dot", {opacity: 0, transformOrigin: "center", scale: 2, delay: 0.5, ease: "power3.out", duration: 0.5})
    

    return tl;
}


mainTL
.add(cherryBranch())
.add(cherryLeg(), "bodyparts")
.add(cherryArm(), "bodyparts+=0.6")
.add(cherryFace(), "animate")
.add(icecreamMotion(), "animate+=1")
.add(logoName())




; 

// GSDevTools.create();
