import { cn } from "@/lib/utils";
import { Label } from "../ui/label";
import Image from "next/image";
import { Input } from "../ui/input";

export default function FieldInput({
  className,
  classNameParent,
  label,
  iconSvg,
  iconImg,
  iconSize,
  isError,
  field,
  ...props
}: IFieldInput) {
  return (
    <div className={cn("w-full", classNameParent)}>
      {label && <Label>{label}</Label>}
      <div className="relative">
        <div className="absolute top-1/2 left-3 -translate-y-1/2">
          {iconSvg && iconSvg}
          {iconImg && (
            <Image
              src={iconImg}
              alt="icon"
              width={iconSize || 20}
              height={iconSize || 20}
              className="flex-shrink-0"
            />
          )}
        </div>
        <Input
          placeholder={props.placeholder}
          className={cn(className, {
            "pl-7": iconSvg,
            "pl-10": iconImg,
          })}
          onWheel={(event) => event.currentTarget.blur()}
          checked={props.checked}
          isError={isError}
        />
      </div>
    </div>
  );
}
