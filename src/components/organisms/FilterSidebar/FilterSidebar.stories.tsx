import type { Meta, StoryObj } from "@storybook/react";
import { VPFilterSidebar } from "./FilterSidebar";

const meta = {
  title: "Organisms/VPFilterSidebar",
  component: VPFilterSidebar,
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof VPFilterSidebar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithColours: Story = {
  args: {
    colourOptions: [
      { label: "White", count: 234, checked: false },
      { label: "Grey", count: 45, checked: false },
      { label: "Black", count: 12, checked: false },
    ],
  },
};

export const WithChecked: Story = {
  args: {
    styleOptions: [
      { label: "Modern", count: 491, checked: true },
      { label: "Traditional", count: 149, checked: false },
    ],
  },
};
