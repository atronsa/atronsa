import React, { useState } from "react";
import { Search } from "lucide-react";

const SearchInput: React.FC<{
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}> = ({ value, onChange, placeholder = "Search..." }) => {
  const [focused, setFocused] = useState(false);

  return (
    <div className="relative flex-1">
      <div className="absolute left-4 top-4.5 -translate-y-1/2 opacity-35">
        <Search size={11} />
      </div>

      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder={placeholder}
        className={`
          w-full h-9 pl-8 pr-3
          text-[11px] text-black
          rounded-lg outline-none transition-all duration-150
          ${
            focused
              ? "bg-white border border-[#CCCCCC]"
              : "bg-[#F5F5F5] border border-transparent"
          }
        `}
      />
    </div>
  );
};

export default SearchInput;
