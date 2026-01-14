import{j as a}from"./jsx-runtime-DF2Pcvd1.js";import{r as u}from"./index-B2-qRKKC.js";/* empty css               */import{V as b}from"./Checkbox-cVbpXxPA.js";const l=({priceRanges:s=[{min:0,max:100,label:"£0 - £100",count:2},{min:100,max:150,label:"£100 - £150",count:20},{min:150,max:200,label:"£150 - £200",count:78},{min:200,max:300,label:"£200 - £300",count:177},{min:300,max:400,label:"£300 - £400",count:138},{min:400,max:600,label:"£400 - £600",count:197}],onApplyCustomRange:r,onSelectRange:t,className:c=""})=>{const[i,o]=u.useState(""),[m,p]=u.useState(""),d=()=>{const e=parseFloat(i)||0,n=parseFloat(m)||0;(e>0||n>0)&&(r==null||r(e,n))};return a.jsxs("div",{className:`vp-price-filter ${c}`,children:[a.jsxs("div",{className:"vp-price-filter__inputs",children:[a.jsx("input",{type:"number",placeholder:"Min",className:"vp-price-filter__input",value:i,onChange:e=>o(e.target.value)}),a.jsx("span",{className:"vp-price-filter__separator",children:"to"}),a.jsx("input",{type:"number",placeholder:"Max",className:"vp-price-filter__input",value:m,onChange:e=>p(e.target.value)}),a.jsx("button",{className:"vp-price-filter__button",onClick:d,children:"GO"})]}),a.jsx("div",{className:"vp-price-filter__options",children:s.map((e,n)=>a.jsx("div",{className:"vp-price-filter__option",children:a.jsx(b,{label:`${e.label} (${e.count})`,onChange:()=>t==null?void 0:t(e)})},n))})]})};l.displayName="VPPriceFilter";l.__docgenInfo={description:"",methods:[],displayName:"VPPriceFilter",props:{priceRanges:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  min: number;
  max: number;
  label: string;
  count: number;
}`,signature:{properties:[{key:"min",value:{name:"number",required:!0}},{key:"max",value:{name:"number",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"count",value:{name:"number",required:!0}}]}}],raw:"PriceRange[]"},description:"",defaultValue:{value:`[
  { min: 0, max: 100, label: "£0 - £100", count: 2 },
  { min: 100, max: 150, label: "£100 - £150", count: 20 },
  { min: 150, max: 200, label: "£150 - £200", count: 78 },
  { min: 200, max: 300, label: "£200 - £300", count: 177 },
  { min: 300, max: 400, label: "£300 - £400", count: 138 },
  { min: 400, max: 600, label: "£400 - £600", count: 197 },
]`,computed:!1}},onApplyCustomRange:{required:!1,tsType:{name:"signature",type:"function",raw:"(min: number, max: number) => void",signature:{arguments:[{type:{name:"number"},name:"min"},{type:{name:"number"},name:"max"}],return:{name:"void"}}},description:""},onSelectRange:{required:!1,tsType:{name:"signature",type:"function",raw:"(range: PriceRange) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  min: number;
  max: number;
  label: string;
  count: number;
}`,signature:{properties:[{key:"min",value:{name:"number",required:!0}},{key:"max",value:{name:"number",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"count",value:{name:"number",required:!0}}]}},name:"range"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};export{l as V};
