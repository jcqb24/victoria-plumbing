import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as i}from"./index-qdalL59a.js";/* empty css               */import{V as Z}from"./FilterSidebar-CxydzvvL.js";import{V as Y}from"./ProductGrid-BvU2yZCi.js";import{V as Q}from"./ResultsHeader-BAjn6UBc.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Checkbox-DU6RsqiJ.js";import"./FilterGroup-BoMz6t2a.js";import"./Icon-Czb0xoOH.js";import"./PriceFilter-ClpA1Eld.js";import"./ProductCard-C45EHnzF.js";import"./Badge-BW1_BIGZ.js";import"./Rating-DfXjlnaY.js";import"./Select-Cpt7xr_l.js";const W="https://spanishinquisition.victorianplumbing.co.uk/interviews/listings",X="yj2bV48J40KsBpIMLvrZZ1j1KwxN4u3A83H8IBvI",ee=async(e={})=>{const a={query:"toilets",pageNumber:0,size:15,additionalPages:0,sort:1,...e};try{const s=await fetch(`${W}?apikey=${X}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});if(!s.ok)throw new Error(`HTTP error! status: ${s.status}`);return await s.json()}catch(s){throw console.error("Error fetching products:",s),s}},se=e=>{var s,o,d;const a=[];if((s=e.attributes)!=null&&s.isBestSeller&&a.push({type:"bestseller",label:"Best Seller"}),e.price.wasPriceIncTax&&e.price.wasPriceIncTax>e.price.priceIncTax){const u=Math.round((e.price.wasPriceIncTax-e.price.priceIncTax)/e.price.wasPriceIncTax*100);a.push({type:"sale",label:`SAVE ${u}%`})}return(o=e.attributes)!=null&&o.isSpaceSaver&&a.push({type:"spacesaver",label:"SPACE SAVER"}),e.stockStatus==="G"&&a.push({type:"instock",label:"In Stock"}),{id:e.id,imageSrc:(d=e.image)==null?void 0:d.url,title:e.productName,price:`${e.price.currencySymbol}${e.price.priceIncTax.toFixed(2)}`,originalPrice:e.price.wasPriceIncTax?`${e.price.currencySymbol}${e.price.wasPriceIncTax.toFixed(2)}`:void 0,badges:a,rating:e.averageRating||0,reviewCount:e.reviewCount||0}},P=({query:e="toilets",pageSize:a=15,className:s=""})=>{const[o,d]=i.useState([]),[u,D]=i.useState(0),[G,y]=i.useState(!0),[f,S]=i.useState(),[m,H]=i.useState(1),[g,b]=i.useState({});i.useEffect(()=>{K()},[m,g,e]);const K=async()=>{y(!0),S(void 0);try{const t=await ee({query:e,size:a,sort:m,facets:M(g)}),h=t.products.map(se);d(h),D(t.pagination.total)}catch(t){S(t instanceof Error?t.message:"An error occurred")}finally{y(!1)}},M=t=>{},O=t=>{H(Number(t))},J=t=>{b({...g,...t})},U=(t,h)=>{b({...g,price:{min:t,max:h}})};return G?r.jsx("div",{className:`vp-api-listing-page ${s}`,children:r.jsx("div",{className:"vp-api-listing-page__loading",children:"Loading products..."})}):f?r.jsx("div",{className:`vp-api-listing-page ${s}`,children:r.jsxs("div",{className:"vp-api-listing-page__error",children:["Error: ",f]})}):r.jsxs("div",{className:`vp-api-listing-page ${s}`,children:[r.jsx("aside",{className:"vp-api-listing-page__sidebar",children:r.jsx(Z,{onFilterChange:J,onPriceChange:U})}),r.jsxs("main",{className:"vp-api-listing-page__content",children:[r.jsx(Q,{resultCount:u,sortValue:m,onSortChange:O}),r.jsx(Y,{items:o})]})]})};P.displayName="VPAPIListingPage";P.__docgenInfo={description:"",methods:[],displayName:"VPAPIListingPage",props:{query:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"toilets"',computed:!1}},pageSize:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"15",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const ye={title:"Templates/VPAPIListingPage",component:P,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:`
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
/>`}}}};var I,v,w,V,x;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(w=(v=n.parameters)==null?void 0:v.docs)==null?void 0:w.source},description:{story:`Default listing page showing toilets with 15 products per page.
Fetches live data from the API and displays product cards in a grid.`,...(x=(V=n.parameters)==null?void 0:V.docs)==null?void 0:x.description}}};var A,q,L,z,T;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(L=(q=c.parameters)==null?void 0:q.docs)==null?void 0:L.source},description:{story:`Listing page configured to show baths instead of toilets.
Demonstrates how to switch product categories using the query prop.`,...(T=(z=c.parameters)==null?void 0:z.docs)==null?void 0:T.description}}};var j,C,_,E,N;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(_=(C=p.parameters)==null?void 0:C.docs)==null?void 0:_.source},description:{story:`Larger grid showing 30 products at once.
Useful for users who want to see more products without pagination.`,...(N=(E=p.parameters)==null?void 0:E.docs)==null?void 0:N.description}}};var F,$,R,B,k;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(R=($=l.parameters)==null?void 0:$.docs)==null?void 0:R.source},description:{story:`Corner baths category with default page size.
Shows nested category support in the API query parameter.`,...(k=(B=l.parameters)==null?void 0:B.docs)==null?void 0:k.description}}};const fe=["Default","Baths","LargeGrid","CornerBaths"];export{c as Baths,l as CornerBaths,n as Default,p as LargeGrid,fe as __namedExportsOrder,ye as default};
