import React from "react";

type BtnProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost" | "danger";
  size?: "xs" | "sm" | "md";
  fullWidth?: boolean;
  disabled?: boolean;
  className?: string;
};

const sizeMap: Record<NonNullable<BtnProps["size"]>, string> = {
  xs: "text-[12px] h-9 px-3",
  sm: "text-sm h-8 px-3",
  md: "text-base h-10 px-4",
};

const variantMap: Record<NonNullable<BtnProps["variant"]>, string> = {
  primary: "bg-black text-white hover:bg-black/90 active:scale-[0.98]",
  secondary: "bg-[#E2E2E2] text-black hover:bg-[#d5d5d5]",
  ghost: "bg-transparent text-[#888] hover:bg-black/5",
  danger:
    "bg-transparent text-[#CC0000] border border-[#CC0000] hover:bg-red-50",
};

const Btn: React.FC<BtnProps> = ({
  children,
  onClick,
  variant = "primary",
  size = "md",
  fullWidth = false,
  disabled = false,
  className = "",
}) => {
  const base =
    "inline-flex items-center justify-center gap-1.5 rounded font-medium tracking-tight transition-all duration-150";

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        ${base}
        ${sizeMap[size]}
        ${variantMap[variant]}
        ${fullWidth ? "w-full" : ""}
        ${disabled ? "opacity-40 cursor-not-allowed" : "cursor-pointer"}
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Btn;
