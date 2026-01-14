import React, { useState } from "react";
import "../../../tokens/tokens.css";
import "./filtergroup.css";
import { VPIcon } from "../../atoms/Icon/Icon";

export type FilterGroupProps = {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  className?: string;
};

export const VPFilterGroup = ({
  title,
  children,
  defaultOpen = true,
  className = "",
}: FilterGroupProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={`vp-filter-group ${className}`}>
      <div
        className="vp-filter-group__header"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h4 className="vp-filter-group__title">{title}</h4>
        <span
          className={`vp-filter-group__icon ${
            !isOpen ? "vp-filter-group__icon--collapsed" : ""
          }`}
        >
          <VPIcon name="chevron-up" size="sm" />
        </span>
      </div>
      {isOpen && (
        <div className="vp-filter-group__content vp-filter-group__content--open">
          {children}
        </div>
      )}
    </div>
  );
};

VPFilterGroup.displayName = "VPFilterGroup";

export default VPFilterGroup;
