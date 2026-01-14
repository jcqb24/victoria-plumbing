import React, { useState } from "react";
import "../../../tokens/tokens.css";
import "./productcard.css";
import { VPProductInfo } from "../ProductInfo/ProductInfo";
import { VPBadge } from "../../atoms/Badge/Badge";
import { VPIcon } from "../../atoms/Icon/Icon";
import { VPRating } from "../../atoms/Rating/Rating";

export type ProductCardProps = {
  id?: string;
  imageSrc?: string;
  title: string;
  price: string;
  originalPrice?: string;
  badges?: Array<{
    type: "sale" | "bestseller" | "spacesaver" | "instock";
    label: string;
  }>;
  rating?: number;
  reviewCount?: number;
  onAddToCart?: () => void;
  onFavoriteToggle?: (isFavorite: boolean) => void;
  isFavorite?: boolean;
};

export const VPProductCard = ({
  imageSrc,
  title,
  price,
  originalPrice,
  badges = [],
  rating = 0,
  reviewCount,
  onAddToCart,
  onFavoriteToggle,
  isFavorite: initialFavorite = false,
}: ProductCardProps) => {
  const [isFavorite, setIsFavorite] = useState(initialFavorite);

  const handleFavoriteClick = () => {
    const newFavorite = !isFavorite;
    setIsFavorite(newFavorite);
    onFavoriteToggle?.(newFavorite);
  };

  return (
    <article className="pc-card">
      <div className="pc-image-container">
        {badges.length > 0 && (
          <div className="pc-badges">
            {badges.map((badge, index) => (
              <VPBadge key={index} variant={badge.type}>
                {badge.label}
              </VPBadge>
            ))}
          </div>
        )}
        <button className="pc-favorite" onClick={handleFavoriteClick}>
          <VPIcon
            name={isFavorite ? "heart" : "heart-outline"}
            active={isFavorite}
          />
        </button>
        <div className="pc-image">
          {imageSrc ? (
            <img src={imageSrc} alt={title} />
          ) : (
            <div className="pc-image--placeholder">No image</div>
          )}
        </div>
      </div>
      <div className="pc-body">
        <h3 className="pc-title">{title}</h3>
        <div className="pc-price-section">
          <span className="pc-price">{price}</span>
          {originalPrice && (
            <span className="pc-original-price">{originalPrice}</span>
          )}
        </div>
        {rating > 0 && (
          <div className="pc-rating">
            <VPRating value={rating} reviewCount={reviewCount} size="sm" />
          </div>
        )}
      </div>
    </article>
  );
};

VPProductCard.displayName = "VPProductCard";

export default VPProductCard;
