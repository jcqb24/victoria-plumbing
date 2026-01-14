import React from "react";
import "../../../tokens/tokens.css";
import "./filtersidebar.css";
import { VPCheckbox } from "../../atoms/Checkbox/Checkbox";
import { VPFilterGroup } from "../../molecules/FilterGroup/FilterGroup";
import { VPPriceFilter } from "../../molecules/PriceFilter/PriceFilter";

export type FilterOption = {
  label: string;
  count: number;
  checked?: boolean;
};

export type FilterSidebarProps = {
  priceRanges?: Array<{
    min: number;
    max: number;
    label: string;
    count: number;
  }>;
  styleOptions?: FilterOption[];
  typeOptions?: FilterOption[];
  colourOptions?: FilterOption[];
  onPriceChange?: (min: number, max: number) => void;
  onFilterChange?: (category: string, value: string) => void;
  className?: string;
};

export const VPFilterSidebar = ({
  priceRanges,
  styleOptions = [
    { label: "Modern", count: 491, checked: false },
    { label: "Traditional", count: 149, checked: false },
  ],
  typeOptions = [
    { label: "Floor Standing", count: 86, checked: false },
    { label: "Wall Hung", count: 64, checked: false },
  ],
  colourOptions = [],
  onPriceChange,
  onFilterChange,
  className = "",
}: FilterSidebarProps) => {
  return (
    <aside className={`vp-filter-sidebar ${className}`}>
      <h2 className="vp-filter-sidebar__title">Filter By</h2>

      <VPFilterGroup title="Price" defaultOpen={true}>
        <VPPriceFilter
          priceRanges={priceRanges}
          onApplyCustomRange={onPriceChange}
        />
      </VPFilterGroup>

      <VPFilterGroup title="Style" defaultOpen={true}>
        {styleOptions.map((option, index) => (
          <VPCheckbox
            key={index}
            label={`${option.label} (${option.count})`}
            checked={option.checked}
            onChange={() => onFilterChange?.("style", option.label)}
          />
        ))}
      </VPFilterGroup>

      <VPFilterGroup title="Type" defaultOpen={true}>
        {typeOptions.map((option, index) => (
          <VPCheckbox
            key={index}
            label={`${option.label} (${option.count})`}
            checked={option.checked}
            onChange={() => onFilterChange?.("type", option.label)}
          />
        ))}
      </VPFilterGroup>

      {colourOptions.length > 0 && (
        <VPFilterGroup title="Colour" defaultOpen={false}>
          {colourOptions.map((option, index) => (
            <VPCheckbox
              key={index}
              label={`${option.label} (${option.count})`}
              checked={option.checked}
              onChange={() => onFilterChange?.("colour", option.label)}
            />
          ))}
        </VPFilterGroup>
      )}
    </aside>
  );
};

VPFilterSidebar.displayName = "VPFilterSidebar";

export default VPFilterSidebar;
