import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center relative justify-center z-20 gap-2 whitespace-nowrap text-sm ring-offset-white transition-colors focus-visible:outline-hidden focus-visible:ring-0 focus-visible:ring-offset-0 group disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-neutral-900 relative !rounded-none text-neutral-300 shadow-[0_0_0_2px_rgba(103,104,106,255)] before:absolute before:pointer-events-none before:border-2 before:border-[#353536] hover:before:border-[#A4D4E4] before:w-full before:h-full border-2 border-[#131415]",
        destructive: "bg-red-500 text-neutral-50 hover:bg-red-500/90",
        outline: "border bg-transparent text-neutral-900",
        outline_primary: "border border-primary bg-transparent text-primary",
        secondary: "text-neutral-300 relative ",
        ghost: "",
        link: "text-neutral-900 underline-offset-4 hover:underline dark:text-neutral-50",
      },
      size: {
        default: "px-15 h-8",
        secondary: "px-8",
        none: "p-0",
        sm: "h-8 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
      font: {
        default: "text-2xl font-trajan",
        secondary: "uppercase ",
        normal: "font-normal",
        medium: "font-medium",
        semibold: "font-semibold",
        bold: "font-bold",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      font: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, font, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className, font }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
