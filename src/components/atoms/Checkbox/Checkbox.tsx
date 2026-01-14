import React from "react";
import "../../../tokens/tokens.css";
import "./checkbox.css";

export type CheckboxProps = {
  label: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
};

export const VPCheckbox = ({
  label,
  checked = false,
  onChange,
}: CheckboxProps) => {
  return (
    <label className="ui-checkbox">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange && onChange(e.target.checked)}
      />
      <span className="ui-checkbox__label">{label}</span>
    </label>
  );
};

VPCheckbox.displayName = "VPCheckbox";

export default VPCheckbox;
