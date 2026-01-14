import { ProductCardProps } from '../components/molecules/ProductCard/ProductCard';

// Mock product data for Storybook
export const mockProducts: ProductCardProps[] = [
  {
    id: '1',
    imageSrc: 'https://via.placeholder.com/280x240?text=Toilet',
    title: 'Metro Rimless Close Coupled Modern Toilet + Soft Close Seat',
    price: '£189.95',
    badges: [
      { type: 'bestseller', label: 'Best Seller' },
      { type: 'instock', label: 'In Stock' }
    ],
    rating: 4.5,
    reviewCount: 17
  },
  {
    id: '2',
    imageSrc: 'https://via.placeholder.com/280x240?text=Toilet',
    title: 'Back To Wall Toilet with Soft Close Seat + Concealed Cistern',
    price: '£159.95',
    badges: [
      { type: 'instock', label: 'In Stock' }
    ],
    rating: 4.8,
    reviewCount: 69
  },
  {
    id: '3',
    imageSrc: 'https://via.placeholder.com/280x240?text=Toilet',
    title: 'Venice Modern Toilet + Soft Close Seat',
    price: '£179.95',
    originalPrice: '£199.95',
    badges: [
      { type: 'sale', label: 'SALE' },
      { type: 'instock', label: 'In Stock' }
    ],
    rating: 4.2,
    reviewCount: 10
  },
  {
    id: '4',
    imageSrc: 'https://via.placeholder.com/280x240?text=Toilet',
    title: 'Arezzo Rimless Close Coupled Toilet',
    price: '£149.95',
    originalPrice: '£224.95',
    badges: [
      { type: 'sale', label: 'SAVE 33%' },
      { type: 'spacesaver', label: 'SPACE SAVER' }
    ],
    rating: 4.6,
    reviewCount: 45
  },
  {
    id: '5',
    imageSrc: 'https://via.placeholder.com/280x240?text=Toilet',
    title: 'Grohe Rimless Wall Hung Toilet',
    price: '£299.95',
    originalPrice: '£449.95',
    badges: [
      { type: 'sale', label: 'SAVE 33%' },
      { type: 'spacesaver', label: 'SPACE SAVER' }
    ],
    rating: 4.9,
    reviewCount: 128
  },
  {
    id: '6',
    imageSrc: 'https://via.placeholder.com/280x240?text=Toilet',
    title: 'Modern Square Toilet with Soft Close Seat',
    price: '£219.95',
    badges: [
      { type: 'bestseller', label: 'Best Seller' },
      { type: 'instock', label: 'In Stock' }
    ],
    rating: 4.4,
    reviewCount: 92
  }
];

export const mockProductsLarge = Array.from({ length: 15 }, (_, i) => ({
  ...mockProducts[i % mockProducts.length],
  id: `${i + 1}`,
  title: `${mockProducts[i % mockProducts.length].title} - ${i + 1}`
}));
