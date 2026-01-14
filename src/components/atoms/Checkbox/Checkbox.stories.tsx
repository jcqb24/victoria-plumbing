import type { Meta, StoryObj } from "@storybook/react";
import { VPCheckbox } from "./Checkbox";

const meta = {
  title: "Atoms/VPCheckbox",
  component: VPCheckbox,
  args: { label: "Option 1" },
} satisfies Meta<typeof VPCheckbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
