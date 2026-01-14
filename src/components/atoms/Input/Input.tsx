import React from "react";
import "../../../tokens/tokens.css";
import "./input.css";

export type InputProps = {
  placeholder?: string;
  value?: string;
  onChange?: (v: string) => void;
};

export const VPInput = ({ placeholder, value, onChange }: InputProps) => {
  return (
    <input
      className="ui-input"
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange && onChange(e.target.value)}
    />
  );
};

VPInput.displayName = "VPInput";

export default VPInput;
