import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

export default function CButton({
  title,
  icon,
  variant,
  size,
  className,
  onClick,
  type,
}: {
  title: string;
  icon?: string;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?:
    | "default"
    | "secondary"
    | "destructive"
    | "outline"
    | "ghost"
    | "link";
  size?: "default" | "sm" | "lg" | "icon";
}) {
  return (
    <Button
      type={type}
      size={size}
      onClick={onClick}
      variant={variant}
      className={cn(className)}
    >
      {icon}
      {title}
    </Button>
  );
}
