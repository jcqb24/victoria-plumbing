# Victoria Plumbing E-Commerce Listing Page Components

This implementation provides a complete component library for building an e-commerce product listing page, built with Storybook and following the VP (Victoria Plumbing) naming convention.

## 📦 Components Created

### Atoms (7 new components)
- **VPBadge** - Badges for sale, bestseller, space saver, in stock
- **VPIcon** - SVG icons (heart, star, chevrons)
- **VPSelect** - Dropdown select component
- **VPRating** - Star rating display with review count
- VPButton (existing, updated)
- VPInput (existing)
- VPCheckbox (existing)

### Molecules (5 new components)
- **VPFilterGroup** - Collapsible filter section
- **VPPriceFilter** - Price range filter with checkboxes
- **VPResultsHeader** - Sort dropdown + results count
- VPProductCard (existing, completely redesigned)
- VPProductInfo (existing)

### Organisms (2 updated)
- **VPFilterSidebar** - Complete sidebar with all filters
- **VPProductGrid** - Grid layout for products

### Templates (2 new)
- **VPListingPage** - Full listing page template with mock data
- **VPAPIListingPage** - API-connected version that fetches live data

## 🎨 Features Implemented

### 1. Product Cards
- ✅ Image display with placeholder
- ✅ Multiple badge support (Sale, Bestseller, Space Saver, In Stock)
- ✅ Favorite/heart icon with toggle
- ✅ Star ratings with review count
- ✅ Original price with strikethrough for sales
- ✅ Hover effects

### 2. Filter Sidebar
- ✅ Collapsible filter groups
- ✅ Price range filter (min/max inputs + preset ranges)
- ✅ Style filters (Modern, Traditional)
- ✅ Type filters (Floor Standing, Wall Hung)
- ✅ Colour filters (expandable)

### 3. Results Header
- ✅ Sort by dropdown (Recommended, Price Low-High, Price High-Low, Largest Discount)
- ✅ Results count display
- ✅ Clean, professional styling

### 4. API Integration
- ✅ Victorian Plumbing API utility (`utils/api.ts`)
- ✅ Product data transformation
- ✅ Support for sorting (1-4)
- ✅ Support for facets/filters
- ✅ Error handling
- ✅ Loading states

## 🚀 Quick Start

### View in Storybook
```bash
cd packages/ui
npm run dev:storybook
```

Then navigate to:
- `Templates/VPListingPage` - Static mock version
- `Templates/VPAPIListingPage` - Live API version

### Using Components

```tsx
import { 
  VPListingPage,
  VPAPIListingPage,
  VPProductCard,
  VPFilterSidebar 
} from '@vic/ui';

// Mock version with your own data
<VPListingPage
  products={myProducts}
  totalResults={100}
  onSortChange={(sort) => console.log(sort)}
  onFilterChange={(filters) => console.log(filters)}
/>

// API version (fetches live data)
<VPAPIListingPage
  query="toilets"
  pageSize={15}
/>
```

## 📁 File Structure

```
packages/ui/src/
├── components/
│   ├── atoms/
│   │   ├── Badge/
│   │   ├── Button/
│   │   ├── Checkbox/
│   │   ├── Icon/
│   │   ├── Input/
│   │   ├── Rating/
│   │   └── Select/
│   ├── molecules/
│   │   ├── FilterGroup/
│   │   ├── PriceFilter/
│   │   ├── ProductCard/
│   │   ├── ProductInfo/
│   │   └── ResultsHeader/
│   ├── organisms/
│   │   ├── FilterSidebar/
│   │   └── ProductGrid/
│   └── templates/
│       └── ListingPage/
│           ├── ListingPage.tsx (mock)
│           ├── APIListingPage.tsx (live)
│           └── *.stories.tsx
└── utils/
    ├── api.ts (API integration)
    └── mockData.ts (sample data)
```

## 🔌 API Integration

### Endpoint
```
POST https://spanishinquisition.victorianplumbing.co.uk/interviews/listings?apikey=...
```

### Request Format
```typescript
{
  query: "toilets",
  pageNumber: 0,
  size: 15,
  additionalPages: 0,
  sort: 1, // 1=Recommended, 2=PriceLowToHigh, 3=PriceHighToLow, 4=LargestDiscount
  facets: {
    prices: [...],
    toiletStyle: [...]
  }
}
```

### Usage
```typescript
import { fetchProducts, transformProduct } from '@vic/ui';

const response = await fetchProducts({
  query: 'toilets',
  sort: 2, // Price Low to High
  size: 20
});

const products = response.products.map(transformProduct);
```

## 🎯 Component Matching Screenshot

Based on the provided screenshot:
- ✅ Filter sidebar with "Filter By" title
- ✅ Price range inputs (Min/Max with GO button)
- ✅ Price checkboxes with counts
- ✅ Style filters (Modern, Traditional)
- ✅ Type filters (Floor Standing, Wall Hung)
- ✅ Sort dropdown ("Sort By")
- ✅ Results count display ("716 results")
- ✅ Product cards with:
  - ✅ Product images
  - ✅ Sale badges (red)
  - ✅ Bestseller badges (blue)
  - ✅ Space Saver badges (grey)
  - ✅ Favorite heart icons
  - ✅ Star ratings with counts
  - ✅ Prices with strikethrough for sales
  - ✅ "In Stock" indicators

## 📝 All Components Have:
- ✅ TypeScript types
- ✅ displayName property
- ✅ Storybook stories with multiple variants
- ✅ CSS styling
- ✅ VP prefix naming convention

## 🧪 Testing in Storybook

Each component has multiple story variants:
- Default state
- With various props
- Different sizes/variants
- Edge cases

Example stories to explore:
- `Atoms/VPBadge` - All badge variants
- `Atoms/VPRating` - Different star ratings
- `Molecules/VPProductCard` - Various product states
- `Templates/VPListingPage` - Full page composition
- `Templates/VPAPIListingPage` - Live API data

## 🚧 Future Enhancements

Potential additions:
- Pagination component
- Loading skeletons
- Filter chips (applied filters)
- Product quick view modal
- Add to cart functionality
- Infinite scroll
- Mobile responsive adjustments
- Accessibility improvements

## 📄 Exports

All components are exported from `@vic/ui`:

```typescript
// Use any component
import {
  VPBadge,
  VPIcon,
  VPSelect,
  VPRating,
  VPFilterGroup,
  VPPriceFilter,
  VPResultsHeader,
  VPProductCard,
  VPFilterSidebar,
  VPProductGrid,
  VPListingPage,
  VPAPIListingPage,
  fetchProducts,
  transformProduct
} from '@vic/ui';
```
