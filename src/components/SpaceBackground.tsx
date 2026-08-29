"use client";

import {useEffect,useRef} from "react";

type Star={x:number;y:number;r:number;phase:number;speed:number;driftX:number;driftY:number;tone:number};

export default function SpaceBackground() {
 const canvasRef=useRef<HTMLCanvasElement>(null);
 useEffect(()=>{
  const canvas=canvasRef.current;
  const context=canvas?.getContext("2d");
  if(!canvas||!context)return;
  const reduced=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let frame=0,last=0,dark=document.documentElement.classList.contains("dark"),stars:Star[]=[];
  const makeStars=()=>{
   const count=Math.min(420,Math.max(260,Math.round(innerWidth*innerHeight/4300)));
   stars=Array.from({length:count},(_,index)=>({x:(index*173.3+index*index*2.17+41)%innerWidth,y:(index*97.7+index*index*.91+19)%innerHeight,r:index%29===0?1.45:index%9===0?.9:index%3===0?.62:.46,phase:index*.73,speed:.00038+(index%7)*.00007,driftX:.012+(index%4)*.009,driftY:.035+(index%5)*.018,tone:index%47===0?4:index%31===0?3:index%17===0?2:index%6===0?1:0}));
  };
  const resize=()=>{const ratio=Math.min(devicePixelRatio||1,1.5);canvas.width=innerWidth*ratio;canvas.height=innerHeight*ratio;canvas.style.width=`${innerWidth}px`;canvas.style.height=`${innerHeight}px`;context.setTransform(ratio,0,0,ratio,0,0);makeStars()};
  const draw=(time=0)=>{
   if(time-last<32&&!reduced){frame=requestAnimationFrame(draw);return}
   last=time;context.clearRect(0,0,innerWidth,innerHeight);
   for(const star of stars){
    if(!reduced){star.x+=star.driftX;star.y+=star.driftY;if(star.x>innerWidth+3)star.x=-3;if(star.y>innerHeight+3)star.y=-3}
    const pulse=.5+Math.sin(time*star.speed+star.phase)*.2;
    context.beginPath();context.arc(star.x,star.y,star.r,0,Math.PI*2);
    const darkColor=star.tone===4?`rgba(255,226,122,${pulse*.9})`:star.tone===3?`rgba(255,100,82,${pulse*.82})`:star.tone===2?`rgba(255,164,92,${pulse*.84})`:star.tone===1?`rgba(117,229,223,${pulse})`:`rgba(210,220,230,${pulse*.72})`;
    context.fillStyle=dark?darkColor:`rgba(28,45,52,${Math.max(.055,pulse*.2)})`;context.fill();
   }
   if(!reduced)frame=requestAnimationFrame(draw);
  };
  const themeObserver=new MutationObserver(()=>{dark=document.documentElement.classList.contains("dark")});
  resize();draw();themeObserver.observe(document.documentElement,{attributes:true,attributeFilter:["class"]});window.addEventListener("resize",resize);
  return()=>{cancelAnimationFrame(frame);themeObserver.disconnect();window.removeEventListener("resize",resize)};
 },[]);
 return <div className="space-field" aria-hidden="true"><canvas ref={canvasRef} className="space-canvas"/></div>;
}
