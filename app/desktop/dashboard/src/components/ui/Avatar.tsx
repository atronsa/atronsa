import React from "react";

const Avatar: React.FC<{ initial: string; size?: number }> = ({
  initial,
  size = 32,
}) => {
  return (
    <div
      className="bg-[#E8E8E8] flex items-center justify-center rounded-full font-semibold text-[#555] shrink-0 tracking-tight"
      style={{
        width: size,
        height: size,
        fontSize: size * 0.35,
      }}
    >
      {initial}
    </div>
  );
};

export default Avatar;
