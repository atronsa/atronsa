import React from "react";

const MonoText: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => {
  return <span className={`tracking-[0.02em] ${className}`}>{children}</span>;
};

export default MonoText;
