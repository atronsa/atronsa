import React from "react";

const PageHeader: React.FC<{
  title: string;
  action?: React.ReactNode;
}> = ({ title, action }) => {
  return (
    <div className="h-14 w-full flex items-center justify-between px-8 border-b border-black/5 shrink-0">
      <h1 className="text-sm font-medium text-black">{title}</h1>
      {action}
    </div>
  );
};

export default PageHeader;
