import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

export default function CButton({
  title,
  icon,
  variant,
  size,
  className,
  onClick,
  font,
  children,
}: CButton) {
  return (
    <Button
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
  );
}
