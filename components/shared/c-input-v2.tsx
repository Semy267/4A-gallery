import Image from "next/image";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { cn } from "@/lib/utils";

export default function CInputV2({
  placeholder,
  className,
  classNameParent,
  type = "text",
  checked,
  required = false,
  label,
  name,
  value,
  onChange,
  iconSvg,
  iconImg,
  iconSize,
}: CInput) {
  return (
    <div className={cn("w-full", classNameParent)}>
      {label && <Label>{label}</Label>}
      <div className="relative">
        <div className="absolute top-1/2 left-3 -translate-y-1/2">
          {iconSvg && iconSvg}
          {iconImg && (
            <Image
              src={iconImg}
              alt="profile icon"
              width={iconSize || 20}
              height={iconSize || 20}
              className="flex-shrink-0"
            />
          )}
        </div>
        <Input
          placeholder={`${placeholder} ${required ? "*" : ""}`}
          className={cn(className, {
            "pl-7": iconSvg,
            "pl-10": iconImg,
          })}
          type={type}
          onWheel={(event) => event.currentTarget.blur()}
          checked={checked}
          value={value}
          name={name}
          onChange={onChange}
        />
      </div>
    </div>
  );
}
