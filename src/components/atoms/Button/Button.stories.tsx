import type { Meta, StoryObj } from "@storybook/react";
import { VPButton } from "./Button";

const meta = {
  title: "Atoms/VPButton",
  component: VPButton,
  args: { children: "Click me" },
} satisfies Meta<typeof VPButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = { args: { variant: "primary" } };
export const Secondary: Story = { args: { variant: "secondary" } };
export const Ghost: Story = { args: { variant: "ghost" } };
export const Large: Story = { args: { size: "lg", variant: "primary" } };
