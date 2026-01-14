import{j as a}from"./jsx-runtime-DF2Pcvd1.js";/* empty css               */import{V as t}from"./Checkbox-cVbpXxPA.js";import{V as l}from"./FilterGroup-CrafHuuh.js";import{V as b}from"./PriceFilter-CG1RUVz4.js";const s=({priceRanges:i,styleOptions:c=[{label:"Modern",count:491,checked:!1},{label:"Traditional",count:149,checked:!1}],typeOptions:m=[{label:"Floor Standing",count:86,checked:!1},{label:"Wall Hung",count:64,checked:!1}],colourOptions:u=[],onPriceChange:d,onFilterChange:r,className:o=""})=>a.jsxs("aside",{className:`vp-filter-sidebar ${o}`,children:[a.jsx("h2",{className:"vp-filter-sidebar__title",children:"Filter By"}),a.jsx(l,{title:"Price",defaultOpen:!0,children:a.jsx(b,{priceRanges:i,onApplyCustomRange:d})}),a.jsx(l,{title:"Style",defaultOpen:!0,children:c.map((e,n)=>a.jsx(t,{label:`${e.label} (${e.count})`,checked:e.checked,onChange:()=>r==null?void 0:r("style",e.label)},n))}),a.jsx(l,{title:"Type",defaultOpen:!0,children:m.map((e,n)=>a.jsx(t,{label:`${e.label} (${e.count})`,checked:e.checked,onChange:()=>r==null?void 0:r("type",e.label)},n))}),u.length>0&&a.jsx(l,{title:"Colour",defaultOpen:!1,children:u.map((e,n)=>a.jsx(t,{label:`${e.label} (${e.count})`,checked:e.checked,onChange:()=>r==null?void 0:r("colour",e.label)},n))})]});s.displayName="VPFilterSidebar";s.__docgenInfo={description:"",methods:[],displayName:"VPFilterSidebar",props:{priceRanges:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  min: number;
  max: number;
  label: string;
  count: number;
}`,signature:{properties:[{key:"min",value:{name:"number",required:!0}},{key:"max",value:{name:"number",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"count",value:{name:"number",required:!0}}]}}],raw:`Array<{
  min: number;
  max: number;
  label: string;
  count: number;
}>`},description:""},styleOptions:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  count: number;
  checked?: boolean;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"count",value:{name:"number",required:!0}},{key:"checked",value:{name:"boolean",required:!1}}]}}],raw:"FilterOption[]"},description:"",defaultValue:{value:`[
  { label: "Modern", count: 491, checked: false },
  { label: "Traditional", count: 149, checked: false },
]`,computed:!1}},typeOptions:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  count: number;
  checked?: boolean;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"count",value:{name:"number",required:!0}},{key:"checked",value:{name:"boolean",required:!1}}]}}],raw:"FilterOption[]"},description:"",defaultValue:{value:`[
  { label: "Floor Standing", count: 86, checked: false },
  { label: "Wall Hung", count: 64, checked: false },
]`,computed:!1}},colourOptions:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  count: number;
  checked?: boolean;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"count",value:{name:"number",required:!0}},{key:"checked",value:{name:"boolean",required:!1}}]}}],raw:"FilterOption[]"},description:"",defaultValue:{value:"[]",computed:!1}},onPriceChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(min: number, max: number) => void",signature:{arguments:[{type:{name:"number"},name:"min"},{type:{name:"number"},name:"max"}],return:{name:"void"}}},description:""},onFilterChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(category: string, value: string) => void",signature:{arguments:[{type:{name:"string"},name:"category"},{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};export{s as V};
