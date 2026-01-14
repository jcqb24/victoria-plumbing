import React from "react";
import "../../../tokens/tokens.css";
import "./badge.css";

export type BadgeProps = {
  variant?: "sale" | "bestseller" | "spacesaver" | "instock" | "default";
  children: React.ReactNode;
  className?: string;
};

export const VPBadge = ({
  variant = "default",
  children,
  className = "",
}: BadgeProps) => {
  return (
    <span className={`vp-badge vp-badge--${variant} ${className}`}>
      {children}
    </span>
  );
};

VPBadge.displayName = "VPBadge";

export default VPBadge;
