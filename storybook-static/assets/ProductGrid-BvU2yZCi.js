import{j as e}from"./jsx-runtime-D_zvdyIk.js";/* empty css               */import{V as t}from"./ProductCard-C45EHnzF.js";const r=({items:a,columns:n=3})=>e.jsx("div",{className:`pg-grid pg-cols-${n}`,children:a.map((i,s)=>e.jsx("div",{className:"pg-item",children:e.jsx(t,{...i})},s))});r.displayName="VPProductGrid";r.__docgenInfo={description:"",methods:[],displayName:"VPProductGrid",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id?: string;
  imageSrc?: string;
  title: string;
  price: string;
  originalPrice?: string;
  badges?: Array<{
    type: "sale" | "bestseller" | "spacesaver" | "instock";
    label: string;
  }>;
  rating?: number;
  reviewCount?: number;
  onAddToCart?: () => void;
  onFavoriteToggle?: (isFavorite: boolean) => void;
  isFavorite?: boolean;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!1}},{key:"imageSrc",value:{name:"string",required:!1}},{key:"title",value:{name:"string",required:!0}},{key:"price",value:{name:"string",required:!0}},{key:"originalPrice",value:{name:"string",required:!1}},{key:"badges",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  type: "sale" | "bestseller" | "spacesaver" | "instock";
  label: string;
}`,signature:{properties:[{key:"type",value:{name:"union",raw:'"sale" | "bestseller" | "spacesaver" | "instock"',elements:[{name:"literal",value:'"sale"'},{name:"literal",value:'"bestseller"'},{name:"literal",value:'"spacesaver"'},{name:"literal",value:'"instock"'}],required:!0}},{key:"label",value:{name:"string",required:!0}}]}}],raw:`Array<{
  type: "sale" | "bestseller" | "spacesaver" | "instock";
  label: string;
}>`,required:!1}},{key:"rating",value:{name:"number",required:!1}},{key:"reviewCount",value:{name:"number",required:!1}},{key:"onAddToCart",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"onFavoriteToggle",value:{name:"signature",type:"function",raw:"(isFavorite: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isFavorite"}],return:{name:"void"}},required:!1}},{key:"isFavorite",value:{name:"boolean",required:!1}}]}}],raw:"ProductCardProps[]"},description:""},columns:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"3",computed:!1}}}};export{r as V};
