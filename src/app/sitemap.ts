import type {MetadataRoute} from "next";

const baseUrl="https://miritai.com";
const locales=["en","es","de","ru"] as const;
const pages=[
 {path:"",priority:1,changeFrequency:"weekly" as const},
 {path:"/services",priority:.9,changeFrequency:"monthly" as const},
 {path:"/about",priority:.8,changeFrequency:"monthly" as const},
 {path:"/cases",priority:.8,changeFrequency:"monthly" as const},
 {path:"/work",priority:.7,changeFrequency:"monthly" as const},
 {path:"/contact",priority:.7,changeFrequency:"yearly" as const}
];

export default function sitemap():MetadataRoute.Sitemap {
 return pages.flatMap(page=>locales.map(locale=>({
  url:`${baseUrl}/${locale}${page.path}`,
  lastModified:new Date("2026-09-01"),
  changeFrequency:page.changeFrequency,
  priority:page.priority,
  alternates:{languages:Object.fromEntries([
   ...locales.map(alternate=>[alternate,`${baseUrl}/${alternate}${page.path}`]),
   ["x-default",`${baseUrl}/en${page.path}`]
  ])}
 })));
}
