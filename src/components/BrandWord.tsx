export default function BrandWord({hero=false}:{hero?:boolean}){
  return <span className={`brand-word${hero?" brand-word-hero":""}`} aria-label="MIRITAI">{"MIRITAI".split("").map((letter,index)=><span key={`${letter}-${index}`} aria-hidden="true">{letter}</span>)}</span>;
}
