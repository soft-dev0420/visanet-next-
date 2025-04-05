import React from "react";

const FeatureItem = ({ iconUrl, title }) => {
  return (
    <div className="flex align-center gap-x-2 py-1 text-sm">
        <img alt="icon" src={iconUrl} className="w-[px] h-[16px]" />
        <p className="text-zinc-400">{title}</p>
    </div>
  );
}

export default FeatureItem;