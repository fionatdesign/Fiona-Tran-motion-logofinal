import { gsap } from "gsap";

import { CustomEase } from "gsap/CustomEase";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { MotionPathHelper } from "gsap/MotionPathHelper";
import { CustomBounce } from "gsap/CustomBounce";
import { CustomWiggle } from "gsap/CustomWiggle";

gsap.registerPlugin(GSDevTools);
gsap.registerPlugin(DrawSVGPlugin, MorphSVGPlugin);
gsap.registerPlugin(CustomEase, MotionPathHelper, CustomBounce, CustomWiggle);
MorphSVGPlugin.convertToPath("#branch", "#leaf", "cherrybody1", "cherrybody2", "#leftleg", "#rightleg");


const mainTL = gsap.timeline({id: "mainTL"});


// function hideCherry(){
//     let tl = gsap.timeline();

//     tl.to("#cherisename", {visibility: "hidden"})
//     .to("#icecreamname", {visibility: "hidden"})
    
//     return tl;
// }

function cherryBranch(){
    let tl = gsap.timeline();

    tl.from("#branch", {y: -30, duration: 1.5, fill: "#FCF3E3", drawSVG: 0}, "animate")
    .to("#branch", {duration:1, fill:"#fff"}, "animate+=2")
    .from("#leaf", {display: "none", scale: .2, duration:2, ease: "expo.out"}, "animate+=1.3")
    .from("#cherrybranch", {display: "none", scale: .1, duration:2, drawSVG:0, transformOrigin: "top right", ease: "expo.out"}, "animate+=1.8")
    .from("#leaf", {duration:1, yoyo: true, rotate: 5, repeat: 10}, "animate+=1.3")
    .from("#cherrybranch", {duration:1, yoyo: true, rotate: 5, repeat: 6}, "animate+=1.3")
    .to("#branch", {duration:1, y:-400}, "animate+=8")
    .to("#leaf", {duration:1, y:-500}, "animate+=8")
    .to("#cherrybranch", {duration:1, y:125, rotate: 25, transformOrigin: "bottom center", ease: "bounce.out"}, "animate+=8")
    .to("#cherrybranch", {duration:1, rotate: -100, transformOrigin: "bottom center", ease: "back.out(1.8)"}, "animate+=8.5")
    .to("#cherrybranch", {duration:1, rotate: 0, transformOrigin: "bottom center", x:10, ease: "back.out(3)"}, "animate+=8.5")
    .to("#cherrystem", {duration:1, rotate: 30, x:-10, transformOrigin: "bottom", ease: "back.out(3)"}, "animate+=8.5")

    return tl;
    
}

function buildCherry(){
    let tl = gsap.timeline();

    tl.from("#leftleg1", {visibility: "visible", duration: 1, delay: 0, fill: "#FCF3E3", drawSVG: 0}, "shoe")
    .from("#rightleg1", {visibility: "visible", duration: 1, delay: 0, fill: "#FCF3E3", drawSVG: 0}, "shoe")
    .from("#leftarm1", {visibility: "visible", duration: 2, delay: 0, fill: "#FCF3E3", drawSVG: 0}, "shoe+=1")
    .to("#rightarm1", {x:5, delay: 0}, "shoe+=1")
    .from("#rightarm1", {visibility: "visible", duration: 2, delay: 0, fill: "#FCF3E3", drawSVG: 0}, "shoe+=1")
    .to("#eye", {y:5, delay: 0}, "shoe+=1")
    .from("#eye", {duration:1, drawSVG: 0})
    .fromTo("#eye1", {opacity:0, y:5, duration: 0.5}, {y:5, duration: 3, opacity: 100})
    .to("#smile", {y:5, delay: 0}, "shoe+=2")
    .from("#smile", {duration:1, drawSVG: 0})
    
    return tl;
}

mainTL
// .add(hideCherry())
.add(cherryBranch())
.add(buildCherry({visibility:"visible"}))
;