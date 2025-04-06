import React from "react";

const FeatureItem = ({ iconUrl, title, textColor }) => {
  return (
    <div className="flex align-center gap-x-2 py-1 text-sm">
        <img alt="icon" src={iconUrl} className="w-[px] h-[16px]" />
        <p className={`${textColor ? textColor : "text-zinc-400"} text-start`}>
          {title}
        </p>
    </div>
  );
}

export default FeatureItem;