import React, { useState, useRef, useEffect } from "react";
import "../../../tokens/tokens.css";
import "./select.css";
import { VPIcon } from "../Icon/Icon";

export type SelectOption = {
  value: string | number;
  label: string;
};

export type SelectProps = {
  options: SelectOption[];
  value?: string | number;
  onChange?: (value: string | number) => void;
  placeholder?: string;
  className?: string;
};

export const VPSelect = ({
  options,
  value,
  onChange,
  placeholder = "Select an option",
  className = "",
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((opt) => opt.value === value);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (optionValue: string | number) => {
    onChange?.(optionValue);
    setIsOpen(false);
  };

  return (
    <div className={`vp-select ${className}`} ref={selectRef}>
      <div
        className={`vp-select__control ${
          isOpen ? "vp-select__control--open" : ""
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="vp-select__label">
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <span
          className={`vp-select__icon ${isOpen ? "vp-select__icon--open" : ""}`}
        >
          <VPIcon name="chevron-down" size="sm" />
        </span>
      </div>

      {isOpen && (
        <div className="vp-select__dropdown">
          {options.map((option) => (
            <div
              key={option.value}
              className={`vp-select__option ${
                value === option.value ? "vp-select__option--selected" : ""
              }`}
              onClick={() => handleSelect(option.value)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

VPSelect.displayName = "VPSelect";

export default VPSelect;
