import React from "react";

const StatusDot: React.FC<{ status: string }> = ({ status }) => {
  if (status === "active")
    return (
      <span className="inline-flex items-center gap-1.5 text-[10px] text-black">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-700" />
        Active
      </span>
    );

  if (status === "inactive")
    return (
      <span className="inline-flex items-center gap-1.5 text-[10px] text-black">
        <span className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
        Inactive
      </span>
    );

  if (status === "suspended")
    return (
      <span className="inline-flex items-center gap-1.5 text-[10px] text-black">
        <span className="w-1.5 h-1.5 rounded-full bg-amber-700" />
        Suspended
      </span>
    );

  if (status === "frozen")
    return (
      <span className="inline-flex items-center gap-1.5 text-[10px] text-black">
        <span className="w-1.5 h-1.5 rounded-full bg-sky-700" />
        Frozen
      </span>
    );

  if (status === "banned")
    return (
      <span className="inline-flex items-center gap-1.5 text-[10px] text-black">
        <span className="w-1.5 h-1.5 rounded-full bg-red-700" />
        Banned
      </span>
    );

  return null;
};

export default StatusDot;
