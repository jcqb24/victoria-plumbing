import type { Meta, StoryObj } from "@storybook/react";
import { VPResultsHeader } from "./ResultsHeader";

const meta = {
  title: "Molecules/VPResultsHeader",
  component: VPResultsHeader,
  args: {
    resultCount: 716,
    sortValue: 1,
  },
} satisfies Meta<typeof VPResultsHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const ManyResults: Story = { args: { resultCount: 1243 } };
export const FewResults: Story = { args: { resultCount: 12 } };
export const DifferentSort: Story = { args: { sortValue: 2 } };
