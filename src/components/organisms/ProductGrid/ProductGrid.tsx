import React from "react";
import "../../../tokens/tokens.css";
import {
  VPProductCard,
  ProductCardProps,
} from "../../molecules/ProductCard/ProductCard";
import "./productgrid.css";

export type ProductGridProps = {
  items: ProductCardProps[];
  columns?: number;
};

export const VPProductGrid = ({ items, columns = 3 }: ProductGridProps) => {
  return (
    <div className={`pg-grid pg-cols-${columns}`}>
      {items.map((it, i) => (
        <div key={i} className="pg-item">
          <VPProductCard {...it} />
        </div>
      ))}
    </div>
  );
};

VPProductGrid.displayName = "VPProductGrid";

export default VPProductGrid;
