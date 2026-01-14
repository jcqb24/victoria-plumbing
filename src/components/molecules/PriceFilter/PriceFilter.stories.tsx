import type { Meta, StoryObj } from "@storybook/react";
import { VPPriceFilter } from "./PriceFilter";

const meta = {
  title: "Molecules/VPPriceFilter",
  component: VPPriceFilter,
  args: {},
} satisfies Meta<typeof VPPriceFilter>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const CustomRanges: Story = {
  args: {
    priceRanges: [
      { min: 0, max: 50, label: "£0 - £50", count: 5 },
      { min: 50, max: 100, label: "£50 - £100", count: 15 },
      { min: 100, max: 200, label: "£100 - £200", count: 45 },
    ],
  },
};
