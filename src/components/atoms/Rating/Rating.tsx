import React from "react";
import "../../../tokens/tokens.css";
import "./rating.css";
import { VPIcon } from "../Icon/Icon";

export type RatingProps = {
  value: number;
  reviewCount?: number;
  size?: "sm" | "md" | "lg";
  showCount?: boolean;
  className?: string;
};

export const VPRating = ({
  value,
  reviewCount,
  size = "md",
  showCount = true,
  className = "",
}: RatingProps) => {
  const fullStars = Math.floor(value);
  const hasHalfStar = value % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className={`vp-rating vp-rating--${size} ${className}`}>
      <div className="vp-rating__stars">
        {[...Array(fullStars)].map((_, i) => (
          <VPIcon key={`full-${i}`} name="star" size="sm" />
        ))}
        {hasHalfStar && <VPIcon name="star" size="sm" />}
        {[...Array(emptyStars)].map((_, i) => (
          <VPIcon key={`empty-${i}`} name="star-outline" size="sm" />
        ))}
      </div>
      {showCount && reviewCount !== undefined && (
        <span className="vp-rating__count">{reviewCount}</span>
      )}
    </div>
  );
};

VPRating.displayName = "VPRating";

export default VPRating;
