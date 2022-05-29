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
MorphSVGPlugin.convertToPath("#branch");


const mainTL = gsap.timeline({id: "mainTL"});


function cherryBranch(){
    let tl = gsap.timeline();

    tl.from("#branch", {y: -30, duration: 2, drawSVG: 0}, "animate")
    .from("#leaf", {display: "none", scale: .2, duration:2, drawSVG: 0, ease: "expo.out"}, "animate+=1.3")
    .from("#Vector_44", {display: "none", scale: .2, duration:2, ease: "expo.out"}, "animate+=1.3")
    .from("#cherrybody1", {display: "none", scale: .2, duration:2, transformOrigin: "top", ease: "expo.out"}, "animate+=1.8")

    return tl;
    
}

mainTL
.add(cherryBranch())

;