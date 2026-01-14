import type { Meta, StoryObj } from "@storybook/react";
import { VPIcon } from "./Icon";

const meta = {
  title: "Atoms/VPIcon",
  component: VPIcon,
  args: { name: "heart" },
} satisfies Meta<typeof VPIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Heart: Story = { args: { name: "heart" } };
export const HeartOutline: Story = { args: { name: "heart-outline" } };
export const HeartActive: Story = {
  args: { name: "heart-outline", active: true },
};
export const Star: Story = { args: { name: "star" } };
export const StarOutline: Story = { args: { name: "star-outline" } };
export const ChevronDown: Story = { args: { name: "chevron-down" } };
export const ChevronUp: Story = { args: { name: "chevron-up" } };
export const Small: Story = { args: { name: "heart", size: "sm" } };
export const Large: Story = { args: { name: "heart", size: "lg" } };
