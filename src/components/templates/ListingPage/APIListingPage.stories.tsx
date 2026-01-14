import type { Meta, StoryObj } from "@storybook/react";
import { VPAPIListingPage } from "./APIListingPage";

const meta = {
  title: "Templates/VPAPIListingPage",
  component: VPAPIListingPage,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `
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
        `,
      },
    },
  },
} satisfies Meta<typeof VPAPIListingPage>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * Default listing page showing toilets with 15 products per page.
 * Fetches live data from the API and displays product cards in a grid.
 */
export const Default: Story = {
  args: {
    query: "toilets",
    pageSize: 15,
  },
  parameters: {
    docs: {
      source: {
        code: `<VPAPIListingPage
  query="toilets"
  pageSize={15}
/>`,
      },
    },
  },
};

/**
 * Listing page configured to show baths instead of toilets.
 * Demonstrates how to switch product categories using the query prop.
 */
export const Baths: Story = {
  args: {
    query: "baths",
    pageSize: 15,
  },
  parameters: {
    docs: {
      source: {
        code: `<VPAPIListingPage
  query="baths"
  pageSize={15}
/>`,
      },
    },
  },
};

/**
 * Larger grid showing 30 products at once.
 * Useful for users who want to see more products without pagination.
 */
export const LargeGrid: Story = {
  args: {
    query: "toilets",
    pageSize: 30,
  },
  parameters: {
    docs: {
      source: {
        code: `<VPAPIListingPage
  query="toilets"
  pageSize={30}
/>`,
      },
    },
  },
};

/**
 * Corner baths category with default page size.
 * Shows nested category support in the API query parameter.
 */
export const CornerBaths: Story = {
  args: {
    query: "baths/corner-baths",
    pageSize: 15,
  },
  parameters: {
    docs: {
      source: {
        code: `<VPAPIListingPage
  query="baths/corner-baths"
  pageSize={15}
/>`,
      },
    },
  },
};
