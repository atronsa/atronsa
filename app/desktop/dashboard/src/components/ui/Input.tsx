import React, { useState } from "react";

const Input: React.FC<{
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  rightElement?: React.ReactNode;
}> = ({ label, placeholder, value, onChange, type = "text", rightElement }) => {
  const [focused, setFocused] = useState(false);
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label className="text-[10px] font-medium tracking-[0.08em] text-[#888] uppercase">
          {label}
        </label>
      )}

      <div className="relative flex items-center">
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={`
            w-full h-10 px-3
            ${rightElement ? "pr-11" : "pr-3"}
            bg-[#F5F5F5] text-black text-[13px]
            rounded-lg outline-none transition-all duration-150
            ${
              focused
                ? "border border-black"
                : "border border-[rgba(198,198,198,0.4)]"
            }
          `}
        />

        {rightElement && (
          <div className="absolute right-2 flex items-center">
            {rightElement}
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;
