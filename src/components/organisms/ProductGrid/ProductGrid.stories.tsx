import type { Meta, StoryObj } from "@storybook/react";
import { VPProductGrid } from "./ProductGrid";

const sample = new Array(6)
  .fill(0)
  .map((_, i) => ({
    title: `Product ${i + 1}`,
    price: `£${99 + i}`,
    rating: 4.1,
    badges: ["In Stock"],
  }));

const meta = {
  title: "Organisms/VPProductGrid",
  component: VPProductGrid,
  args: { items: sample, columns: 3 },
} satisfies Meta<typeof VPProductGrid>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
