import type { Meta, StoryObj } from "@storybook/react";
import { VPInput } from "./Input";

const meta = {
  title: "Atoms/VPInput",
  component: VPInput,
  args: { placeholder: "Search products" },
} satisfies Meta<typeof VPInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
