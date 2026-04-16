import React from "react";

const Overlay: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="fixed inset-0 bg-black/40 backdrop-blur-[2px] z-40"
    />
  );
};

export default Overlay;
