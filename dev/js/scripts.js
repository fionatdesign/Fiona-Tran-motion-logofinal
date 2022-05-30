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
MorphSVGPlugin.convertToPath("#branch", "#leaf", "cherrybody1", "cherrybody2");


const mainTL = gsap.timeline({id: "mainTL"});


function cherryBranch(){
    let tl = gsap.timeline();

    tl.from("#branch", {y: -30, duration: 2, drawSVG: 0}, "animate")
    .from("#leaf", {display: "none", scale: .2, duration:2, ease: "expo.out"}, "animate+=1.3")
    .from("#cherrybranch", {display: "none", scale: .1, duration:2, drawSVG:0, transformOrigin: "top right", ease: "expo.out"}, "animate+=1.8")
    .from("#leaf", {duration:1, yoyo: true, rotate: 5, repeat: 10}, "animate+=1.3")
    .from("#cherrybranch", {duration:1, yoyo: true, rotate: 5, repeat: 6}, "animate+=1.3")
    .to("#branch", {duration:1, y:-400}, "animate+=8")
    .to("#leaf", {duration:1, y:-500}, "animate+=8")
    .to("#cherrybranch", {duration:1, y:125, rotate: 25, transformOrigin: "bottom center", ease: "bounce.out"}, "animate+=8")
    .to("#cherrybranch", {duration:1, rotate: -100, transformOrigin: "bottom center", ease: "back.out(1.8)"}, "animate+=8.5")
    .to("#cherrybranch", {duration:1, rotate: 0, transformOrigin: "bottom center", ease: "back.out(1.8)"}, "animate+=8.5")
    // .to("#cerise-logo", {visibility: "visible"})
    // .to("#cherrystem", {duration:1, morphSVG: "#stem"})

    return tl;
    
}

mainTL
.add(cherryBranch())

;