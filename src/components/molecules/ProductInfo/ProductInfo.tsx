import React from "react";
import "../../../tokens/tokens.css";

export type ProductInfoProps = {
  title: string;
  price: string;
  rating?: number;
  badges?: string[];
};

export const VPProductInfo = ({
  title,
  price,
  rating = 0,
  badges = [],
}: ProductInfoProps) => {
  return (
    <div style={{ fontFamily: "var(--font-sans)" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h3 style={{ margin: 0 }}>{title}</h3>
        <div style={{ color: "var(--color-primary)" }}>{price}</div>
      </div>
      <div
        style={{ display: "flex", gap: 8, marginTop: 8, alignItems: "center" }}
      >
        <div style={{ color: "var(--color-muted)" }}>⭐ {rating}</div>
        <div style={{ display: "flex", gap: 6 }}>
          {badges.map((b) => (
            <span
              key={b}
              style={{
                background: "var(--color-card)",
                padding: "2px 6px",
                borderRadius: 6,
              }}
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

VPProductInfo.displayName = "VPProductInfo";

export default VPProductInfo;
