import React from "react";
import { cn } from "./lib/utils";

const Button = React.forwardRef(({ className, variant, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
        variant === "outline" && "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
        variant === "ghost" && "bg-transparent hover:bg-accent hover:text-accent-foreground",
        !variant && "bg-primary text-white hover:bg-primary/90",
        className
      )}
      {...props}
    />
  );
});
Button.displayName = "Button";

export { Button };
