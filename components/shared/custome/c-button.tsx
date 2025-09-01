import { VariantProps } from "class-variance-authority";
import { Button, buttonVariants } from "@/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

type CButtonBaseProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    icon?: string | React.ReactNode;
    className?: string;
    onClick?: () => void;
    isSecondary?: boolean;
    isHover?: boolean;
  };

type CButtonConditionalProps =
  | { title: string; children?: never }
  | { title?: string; children: React.ReactNode };

type CButtonProps = CButtonBaseProps & CButtonConditionalProps;

export default function CButton({
  title,
  icon,
  variant,
  size,
  className,
  onClick,
  font,
  children,
  isSecondary,
  isHover,
  ...props
}: CButtonProps) {
  return (
    <>
      {isSecondary ? (
        <Button
          {...props}
          font={"secondary"}
          size={"secondary"}
          onClick={onClick}
          variant={"secondary"}
          className={cn(className, "group")}
        >
          {isHover ? (
            <motion.span
              className="absolute inset-0 bg-blue-500/50 blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0 }}
              whileHover={{
                opacity: [0.3, 1, 0.3],
                transition: {
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            />
          ) : (
            <motion.span
              className="absolute inset-0 bg-blue-500/50 blur-sm"
              animate={{ opacity: [0.3, 1, 0.3] }} // loop dari 0 → 1 → 0
              transition={{
                duration: 1, // lamanya 1 cycle
                repeat: Infinity, // biar infinite loop
                ease: "easeInOut",
              }}
            />
          )}
          {icon}
          {title}
          {children}
        </Button>
      ) : (
        <Button
          {...props}
          font={font}
          size={size}
          onClick={onClick}
          variant={variant}
          className={cn(className)}
        >
          {icon}
          {title}
          {children}
        </Button>
      )}
    </>
  );
}
