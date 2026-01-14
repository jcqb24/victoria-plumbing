import type { Meta, StoryObj } from "@storybook/react";
import { VPProductInfo } from "./ProductInfo";

const meta = {
  title: "Molecules/VPProductInfo",
  component: VPProductInfo,
  args: {
    title: "Metro Rimless Close Coupled",
    price: "£189.95",
    rating: 4.5,
    badges: ["In Stock"],
  },
} satisfies Meta<typeof VPProductInfo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
