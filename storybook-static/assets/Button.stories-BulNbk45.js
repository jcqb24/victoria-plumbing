import{j as q}from"./jsx-runtime-D_zvdyIk.js";/* empty css               */const t=({variant:f="primary",size:h="md",disabled:V=!1,onClick:b,children:P})=>{const S=`btn btn--${f} btn--${h}`;return q.jsx("button",{className:S,disabled:V,onClick:b,children:P})};t.displayName="VPButton";t.__docgenInfo={description:"",methods:[],displayName:"VPButton",props:{variant:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary" | "ghost"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"ghost"'}]},description:"",defaultValue:{value:'"primary"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const R={title:"Atoms/VPButton",component:t,args:{children:"Click me"}},e={args:{variant:"primary"}},a={args:{variant:"secondary"}},r={args:{variant:"ghost"}},s={args:{size:"lg",variant:"primary"}};var n,o,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    variant: "primary"
  }
}`,...(i=(o=e.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var m,c,l;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variant: "secondary"
  }
}`,...(l=(c=a.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var d,u,p;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    variant: "ghost"
  }
}`,...(p=(u=r.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var g,y,v;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    size: "lg",
    variant: "primary"
  }
}`,...(v=(y=s.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};const T=["Primary","Secondary","Ghost","Large"];export{r as Ghost,s as Large,e as Primary,a as Secondary,T as __namedExportsOrder,R as default};
