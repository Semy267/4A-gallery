import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

export default function CButton({
  title,
  icon,
  variant,
  size,
  className,
  onClick,
}: {
  title: string;
  icon?: string;
  className?: string;
  onClick?: () => void;
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
