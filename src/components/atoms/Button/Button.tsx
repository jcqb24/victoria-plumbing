import React from "react";
import "../../../tokens/tokens.css";
import "./button.css";

export type ButtonProps = {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
};

export const VPButton = ({
  variant = "primary",
  size = "md",
  disabled = false,
  onClick,
  children,
}: ButtonProps) => {
  const cls = `btn btn--${variant} btn--${size}`;
  return (
    <button className={cls} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};

VPButton.displayName = "VPButton";

export default VPButton;
