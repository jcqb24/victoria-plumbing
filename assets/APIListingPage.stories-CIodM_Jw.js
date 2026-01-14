import{j as r}from"./jsx-runtime-DF2Pcvd1.js";import{r as i}from"./index-B2-qRKKC.js";/* empty css               */import{V as Z}from"./FilterSidebar-IamVxbSg.js";import{V as Y}from"./ProductGrid-BhbSxQer.js";import{V as Q}from"./ResultsHeader-CgYjJTm9.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Checkbox-cVbpXxPA.js";import"./FilterGroup-CrafHuuh.js";import"./Icon-DPSXimoF.js";import"./PriceFilter-CG1RUVz4.js";import"./ProductCard-Cyu3SlNR.js";import"./Badge-Z0s9hWF3.js";import"./Rating-Cu0S3bqW.js";import"./Select-B8y1fM75.js";const W="https://spanishinquisition.victorianplumbing.co.uk/interviews/listings",X="yj2bV48J40KsBpIMLvrZZ1j1KwxN4u3A83H8IBvI",ee=async(e={})=>{const a={query:"toilets",pageNumber:0,size:15,additionalPages:0,sort:1,...e};try{const s=await fetch(`${W}?apikey=${X}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});if(!s.ok)throw new Error(`HTTP error! status: ${s.status}`);return await s.json()}catch(s){throw console.error("Error fetching products:",s),s}},se=e=>{var o,d,g;const a=[];if((o=e.attributes)!=null&&o.isBestSeller&&a.push({type:"bestseller",label:"Best Seller"}),e.price.wasPriceIncTax&&e.price.wasPriceIncTax>e.price.priceIncTax){const m=Math.round((e.price.wasPriceIncTax-e.price.priceIncTax)/e.price.wasPriceIncTax*100);a.push({type:"sale",label:`SAVE ${m}%`})}(d=e.attributes)!=null&&d.isSpaceSaver&&a.push({type:"spacesaver",label:"SPACE SAVER"}),e.stockStatus==="G"&&a.push({type:"instock",label:"In Stock"});const s=e.price.currencySymbol||"£";return{id:e.id,imageSrc:(g=e.image)==null?void 0:g.url,title:e.productName,price:`${s}${e.price.priceIncTax.toFixed(2)}`,originalPrice:e.price.wasPriceIncTax?`${s}${e.price.wasPriceIncTax.toFixed(2)}`:void 0,badges:a,rating:e.averageRating||0,reviewCount:e.reviewCount||0}},y=({query:e="toilets",pageSize:a=15,className:s=""})=>{const[o,d]=i.useState([]),[g,m]=i.useState(0),[G,f]=i.useState(!0),[S,b]=i.useState(),[h,H]=i.useState(1),[u,I]=i.useState({});i.useEffect(()=>{K()},[h,u,e]);const K=async()=>{f(!0),b(void 0);try{const t=await ee({query:e,size:a,sort:h,facets:M(u)}),P=t.products.map(se);d(P),m(t.pagination.total)}catch(t){b(t instanceof Error?t.message:"An error occurred")}finally{f(!1)}},M=t=>{},O=t=>{H(Number(t))},J=t=>{I({...u,...t})},U=(t,P)=>{I({...u,price:{min:t,max:P}})};return G?r.jsx("div",{className:`vp-api-listing-page ${s}`,children:r.jsx("div",{className:"vp-api-listing-page__loading",children:"Loading products..."})}):S?r.jsx("div",{className:`vp-api-listing-page ${s}`,children:r.jsxs("div",{className:"vp-api-listing-page__error",children:["Error: ",S]})}):r.jsxs("div",{className:`vp-api-listing-page ${s}`,children:[r.jsx("aside",{className:"vp-api-listing-page__sidebar",children:r.jsx(Z,{onFilterChange:J,onPriceChange:U})}),r.jsxs("main",{className:"vp-api-listing-page__content",children:[r.jsx(Q,{resultCount:g,sortValue:h,onSortChange:O}),r.jsx(Y,{items:o})]})]})};y.displayName="VPAPIListingPage";y.__docgenInfo={description:"",methods:[],displayName:"VPAPIListingPage",props:{query:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"toilets"',computed:!1}},pageSize:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"15",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const ye={title:"Templates/VPAPIListingPage",component:y,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:`
# VP API Listing Page

A complete e-commerce product listing page template that fetches live data from the Victorian Plumbing API.

## Features
- 🔄 Live API data fetching
- 🎨 Product cards with images, badges, ratings
- 📊 Sort by (Recommended, Price, Discount)
- 🔍 Sidebar filters (Price, Style, Type)
- 💝 Favorite products
- 📱 Responsive layout

## API Integration
Connects to: \`https://spanishinquisition.victorianplumbing.co.uk/interviews/listings\`

Supports:
- Multiple product categories (toilets, baths, etc.)
- Sorting options (1-4)
- Dynamic page sizes
- Filter facets
        `}}}},n={args:{query:"toilets",pageSize:15},parameters:{docs:{source:{code:`<VPAPIListingPage
  query="toilets"
  pageSize={15}
/>`}}}},c={args:{query:"baths",pageSize:15},parameters:{docs:{source:{code:`<VPAPIListingPage
  query="baths"
  pageSize={15}
/>`}}}},p={args:{query:"toilets",pageSize:30},parameters:{docs:{source:{code:`<VPAPIListingPage
  query="toilets"
  pageSize={30}
/>`}}}},l={args:{query:"baths/corner-baths",pageSize:15},parameters:{docs:{source:{code:`<VPAPIListingPage
  query="baths/corner-baths"
  pageSize={15}
/>`}}}};var v,w,V,x,A;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    query: "toilets",
    pageSize: 15
  },
  parameters: {
    docs: {
      source: {
        code: \`<VPAPIListingPage
  query="toilets"
  pageSize={15}
/>\`
      }
    }
  }
}`,...(V=(w=n.parameters)==null?void 0:w.docs)==null?void 0:V.source},description:{story:`Default listing page showing toilets with 15 products per page.
Fetches live data from the API and displays product cards in a grid.`,...(A=(x=n.parameters)==null?void 0:x.docs)==null?void 0:A.description}}};var q,L,z,T,j;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    query: "baths",
    pageSize: 15
  },
  parameters: {
    docs: {
      source: {
        code: \`<VPAPIListingPage
  query="baths"
  pageSize={15}
/>\`
      }
    }
  }
}`,...(z=(L=c.parameters)==null?void 0:L.docs)==null?void 0:z.source},description:{story:`Listing page configured to show baths instead of toilets.
Demonstrates how to switch product categories using the query prop.`,...(j=(T=c.parameters)==null?void 0:T.docs)==null?void 0:j.description}}};var C,_,E,N,F;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    query: "toilets",
    pageSize: 30
  },
  parameters: {
    docs: {
      source: {
        code: \`<VPAPIListingPage
  query="toilets"
  pageSize={30}
/>\`
      }
    }
  }
}`,...(E=(_=p.parameters)==null?void 0:_.docs)==null?void 0:E.source},description:{story:`Larger grid showing 30 products at once.
Useful for users who want to see more products without pagination.`,...(F=(N=p.parameters)==null?void 0:N.docs)==null?void 0:F.description}}};var $,R,B,k,D;l.parameters={...l.parameters,docs:{...($=l.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    query: "baths/corner-baths",
    pageSize: 15
  },
  parameters: {
    docs: {
      source: {
        code: \`<VPAPIListingPage
  query="baths/corner-baths"
  pageSize={15}
/>\`
      }
    }
  }
}`,...(B=(R=l.parameters)==null?void 0:R.docs)==null?void 0:B.source},description:{story:`Corner baths category with default page size.
Shows nested category support in the API query parameter.`,...(D=(k=l.parameters)==null?void 0:k.docs)==null?void 0:D.description}}};const fe=["Default","Baths","LargeGrid","CornerBaths"];export{c as Baths,l as CornerBaths,n as Default,p as LargeGrid,fe as __namedExportsOrder,ye as default};
