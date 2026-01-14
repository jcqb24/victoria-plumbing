import React, { useState } from "react";
import "../../../tokens/tokens.css";
import "./pricefilter.css";
import { VPCheckbox } from "../../atoms/Checkbox/Checkbox";

export type PriceRange = {
  min: number;
  max: number;
  label: string;
  count: number;
};

export type PriceFilterProps = {
  priceRanges?: PriceRange[];
  onApplyCustomRange?: (min: number, max: number) => void;
  onSelectRange?: (range: PriceRange) => void;
  className?: string;
};

export const VPPriceFilter = ({
  priceRanges = [
    { min: 0, max: 100, label: "£0 - £100", count: 2 },
    { min: 100, max: 150, label: "£100 - £150", count: 20 },
    { min: 150, max: 200, label: "£150 - £200", count: 78 },
    { min: 200, max: 300, label: "£200 - £300", count: 177 },
    { min: 300, max: 400, label: "£300 - £400", count: 138 },
    { min: 400, max: 600, label: "£400 - £600", count: 197 },
  ],
  onApplyCustomRange,
  onSelectRange,
  className = "",
}: PriceFilterProps) => {
  const [minValue, setMinValue] = useState("");
  const [maxValue, setMaxValue] = useState("");

  const handleApply = () => {
    const min = parseFloat(minValue) || 0;
    const max = parseFloat(maxValue) || 0;
    if (min > 0 || max > 0) {
      onApplyCustomRange?.(min, max);
    }
  };

  return (
    <div className={`vp-price-filter ${className}`}>
      <div className="vp-price-filter__inputs">
        <input
          type="number"
          placeholder="Min"
          className="vp-price-filter__input"
          value={minValue}
          onChange={(e) => setMinValue(e.target.value)}
        />
        <span className="vp-price-filter__separator">to</span>
        <input
          type="number"
          placeholder="Max"
          className="vp-price-filter__input"
          value={maxValue}
          onChange={(e) => setMaxValue(e.target.value)}
        />
        <button className="vp-price-filter__button" onClick={handleApply}>
          GO
        </button>
      </div>

      <div className="vp-price-filter__options">
        {priceRanges.map((range, index) => (
          <div key={index} className="vp-price-filter__option">
            <VPCheckbox
              label={`${range.label} (${range.count})`}
              onChange={() => onSelectRange?.(range)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

VPPriceFilter.displayName = "VPPriceFilter";

export default VPPriceFilter;
