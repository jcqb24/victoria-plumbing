import type { Meta, StoryObj } from "@storybook/react";
import { VPRating } from "./Rating";

const meta = {
  title: "Atoms/VPRating",
  component: VPRating,
  args: { value: 4.5, reviewCount: 17 },
} satisfies Meta<typeof VPRating>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const FullStars: Story = { args: { value: 5, reviewCount: 69 } };
export const PartialStars: Story = { args: { value: 3.5, reviewCount: 10 } };
export const WithoutCount: Story = { args: { value: 4, showCount: false } };
export const Small: Story = {
  args: { value: 4.5, reviewCount: 17, size: "sm" },
};
export const Large: Story = {
  args: { value: 4.5, reviewCount: 17, size: "lg" },
};
