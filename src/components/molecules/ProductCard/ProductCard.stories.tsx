import type { Meta, StoryObj } from "@storybook/react";
import { VPProductCard } from "./ProductCard";

const meta = {
  title: "Molecules/VPProductCard",
  component: VPProductCard,
  args: {
    title: "Metro Rimless Close Coupled Modern Toilet + Soft Close Seat",
    price: "£189.95",
    rating: 4.2,
    reviewCount: 17,
  },
} satisfies Meta<typeof VPProductCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithBestSeller: Story = {
  args: {
    badges: [{ type: "bestseller", label: "Best Seller" }],
  },
};

export const WithSale: Story = {
  args: {
    badges: [{ type: "sale", label: "SALE" }],
    price: "£179.95",
    originalPrice: "£199.95",
  },
};

export const WithSpaceSaver: Story = {
  args: {
    badges: [
      { type: "sale", label: "SAVE 33%" },
      { type: "spacesaver", label: "SPACE SAVER" },
    ],
    price: "£159.95",
    originalPrice: "£239.95",
  },
};

export const WithInStock: Story = {
  args: {
    badges: [{ type: "instock", label: "In Stock" }],
    rating: 4.8,
    reviewCount: 69,
  },
};

export const Favorite: Story = {
  args: {
    isFavorite: true,
    badges: [{ type: "bestseller", label: "Best Seller" }],
  },
};

export const FullyLoaded: Story = {
  args: {
    badges: [
      { type: "sale", label: "SALE" },
      { type: "bestseller", label: "Best Seller" },
    ],
    price: "£189.95",
    originalPrice: "£249.95",
    rating: 4.5,
    reviewCount: 127,
    isFavorite: true,
  },
};
