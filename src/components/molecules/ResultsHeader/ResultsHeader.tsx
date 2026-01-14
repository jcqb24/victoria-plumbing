import React from "react";
import "../../../tokens/tokens.css";
import "./resultsheader.css";
import { VPSelect, SelectOption } from "../../atoms/Select/Select";

export type ResultsHeaderProps = {
  resultCount: number;
  sortValue?: string | number;
  onSortChange?: (value: string | number) => void;
  sortOptions?: SelectOption[];
  className?: string;
};

const defaultSortOptions: SelectOption[] = [
  { value: 1, label: "Recommended" },
  { value: 2, label: "Price: Low to High" },
  { value: 3, label: "Price: High to Low" },
  { value: 4, label: "Largest Discount" },
];

export const VPResultsHeader = ({
  resultCount,
  sortValue = 1,
  onSortChange,
  sortOptions = defaultSortOptions,
  className = "",
}: ResultsHeaderProps) => {
  return (
    <div className={`vp-results-header ${className}`}>
      <div className="vp-results-header__sort">
        <span className="vp-results-header__label">Sort By</span>
        <VPSelect
          options={sortOptions}
          value={sortValue}
          onChange={onSortChange}
          className="vp-results-header__select"
        />
      </div>
      <div className="vp-results-header__count">{resultCount} results</div>
    </div>
  );
};

VPResultsHeader.displayName = "VPResultsHeader";

export default VPResultsHeader;
