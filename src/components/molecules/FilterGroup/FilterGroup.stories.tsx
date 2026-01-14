import type { Meta, StoryObj } from "@storybook/react";
import { VPFilterGroup } from "./FilterGroup";
import { VPCheckbox } from "../../atoms/Checkbox/Checkbox";

const meta = {
  title: "Molecules/VPFilterGroup",
  component: VPFilterGroup,
  args: {
    title: "Style",
    children: (
      <>
        <VPCheckbox label="Modern (491)" />
        <VPCheckbox label="Traditional (149)" />
      </>
    ),
  },
} satisfies Meta<typeof VPFilterGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Collapsed: Story = { args: { defaultOpen: false } };
export const WithMultipleOptions: Story = {
  args: {
    title: "Type",
    children: (
      <>
        <VPCheckbox label="Floor Standing (86)" />
        <VPCheckbox label="Wall Hung (64)" />
      </>
    ),
  },
};
