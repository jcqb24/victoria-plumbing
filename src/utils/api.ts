// API Configuration
const API_BASE_URL = 'https://spanishinquisition.victorianplumbing.co.uk/interviews/listings';
const API_KEY = 'yj2bV48J40KsBpIMLvrZZ1j1KwxN4u3A83H8IBvI';

export type SortOption = 1 | 2 | 3 | 4;

export interface ListingRequest {
  query: string;
  pageNumber: number;
  size: number;
  additionalPages: number;
  sort: SortOption;
  facets?: {
    prices?: Array<{
      identifier: string;
      value: {
        gte: number;
        lte: number;
      };
    }>;
    toiletStyle?: Array<{
      identifier: string;
      value: string;
    }>;
  };
}

export interface Product {
  id: string;
  productName: string;
  image: {
    url: string;
  };
  price: {
    currencySymbol: string;
    priceIncTax: number;
    wasPriceIncTax?: number;
  };
  averageRating?: number;
  reviewCount?: number;
  stockStatus?: string;
  attributes?: {
    isBestSeller?: boolean;
    isSpaceSaver?: boolean;
  };
}

export interface ListingResponse {
  products: Product[];
  pagination: {
    total: number;
    count: number;
    from: number;
    to: number;
  };
  facets?: any;
}

// Fetch products from the API
export const fetchProducts = async (request: Partial<ListingRequest> = {}): Promise<ListingResponse> => {
  const defaultRequest: ListingRequest = {
    query: 'toilets',
    pageNumber: 0,
    size: 15,
    additionalPages: 0,
    sort: 1,
    ...request
  };

  try {
    const response = await fetch(`${API_BASE_URL}?apikey=${API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(defaultRequest),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

// Transform API product to ProductCard props
export const transformProduct = (product: Product): any => {
  const badges: Array<{ type: 'sale' | 'bestseller' | 'spacesaver' | 'instock'; label: string }> = [];
  
  if (product.attributes?.isBestSeller) {
    badges.push({ type: 'bestseller', label: 'Best Seller' });
  }
  
  if (product.price.wasPriceIncTax && product.price.wasPriceIncTax > product.price.priceIncTax) {
    const discount = Math.round(((product.price.wasPriceIncTax - product.price.priceIncTax) / product.price.wasPriceIncTax) * 100);
    badges.push({ type: 'sale', label: `SAVE ${discount}%` });
  }
  
  if (product.attributes?.isSpaceSaver) {
    badges.push({ type: 'spacesaver', label: 'SPACE SAVER' });
  }
  
  if (product.stockStatus === 'G') {
    badges.push({ type: 'instock', label: 'In Stock' });
  }

  const currencySymbol = product.price.currencySymbol || '£';
  
  return {
    id: product.id,
    imageSrc: product.image?.url,
    title: product.productName,
    price: `${currencySymbol}${product.price.priceIncTax.toFixed(2)}`,
    originalPrice: product.price.wasPriceIncTax
      ? `${currencySymbol}${product.price.wasPriceIncTax.toFixed(2)}`
      : undefined,
    badges,
    rating: product.averageRating || 0,
    reviewCount: product.reviewCount || 0,
  };
};
