import type { Meta, StoryObj } from "@storybook/react";
import { VPSelect } from "./Select";

const meta = {
  title: "Atoms/VPSelect",
  component: VPSelect,
  args: {
    options: [
      { value: 1, label: "Recommended" },
      { value: 2, label: "Price: Low to High" },
      { value: 3, label: "Price: High to Low" },
      { value: 4, label: "Largest Discount" },
    ],
    placeholder: "Sort by",
  },
} satisfies Meta<typeof VPSelect>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WithValue: Story = { args: { value: 1 } };
export const CustomPlaceholder: Story = {
  args: { placeholder: "Choose an option" },
};
