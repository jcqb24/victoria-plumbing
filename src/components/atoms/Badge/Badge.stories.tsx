import type { Meta, StoryObj } from "@storybook/react";
import { VPBadge } from "./Badge";

const meta = {
  title: "Atoms/VPBadge",
  component: VPBadge,
  args: { children: "Badge" },
} satisfies Meta<typeof VPBadge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Sale: Story = { args: { variant: "sale", children: "SALE" } };
export const BestSeller: Story = {
  args: { variant: "bestseller", children: "Best Seller" },
};
export const SpaceSaver: Story = {
  args: { variant: "spacesaver", children: "SPACE SAVER" },
};
export const InStock: Story = {
  args: { variant: "instock", children: "In Stock" },
};
export const Default: Story = {
  args: { variant: "default", children: "Default" },
};
