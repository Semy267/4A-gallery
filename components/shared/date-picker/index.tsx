"use client";

import * as React from "react";
import { CalendarIcon } from "lucide-react";
import { startOfDay } from "date-fns";
import { toDate, formatInTimeZone } from "date-fns-tz";
import { cva, VariantProps } from "class-variance-authority";
import { Label } from "@/components/ui/label";

import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Headers from "./headers";

type CalendarDatePickerProps = WithChildren | WithoutChildren;
const CDatePicker = React.forwardRef<
  HTMLButtonElement,
  CalendarDatePickerProps
>(
  (
    {
      id = "calendar-date-picker",
      className,
      closeOnSelect = false,
      children,
      label,
      value,
      onChange,
      minDate = new Date("1900-01-01"),
      maxDate = new Date(),
      placeholder = "Pick a date",
      showIcon = true,
    },
    ref,
  ) => {
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const [isPopoverOpen, setIsPopoverOpen] = React.useState(false);
    const [month, setMonth] = React.useState<Date>(value ?? new Date());
    const [year, setYear] = React.useState<number>(
      value ? new Date(value).getFullYear() : new Date().getFullYear(),
    );

    const handleDateSelect = (selected: Date | undefined) => {
      if (!selected) return;
      const newDate = startOfDay(toDate(selected, { timeZone }));
      onChange(newDate);
      setMonth(newDate);
      setYear(newDate.getFullYear());
      if (closeOnSelect) setIsPopoverOpen(false);
    };

    const formattedDate = value
      ? formatInTimeZone(value, timeZone, "EEE-dd-MMM")
      : "";

    return (
      <div className={cn("relative w-full", className)}>
        <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
          <PopoverTrigger asChild>
            <div className={cn("relative", !children && "mb-[25px]")}>
              {label && <Label htmlFor={id}>{label}</Label>}
              {children ?? (
                <button
                  type="button"
                  ref={ref}
                  className={cn(
                    "min-w-fit h-10 pl-3 text-sm !text-start font-normal border border-input-border rounded-[8px]",
                    !value && "text-muted-foreground",
                  )}
                  onClick={() => setIsPopoverOpen(!isPopoverOpen)}
                >
                  {formattedDate || (
                    <span className="text-neutral-400">{placeholder}</span>
                  )}
                  {showIcon && (
                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                  )}
                </button>
              )}
            </div>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Headers
              year={year}
              month={month}
              setMonth={setMonth}
              setYear={setYear}
              maxDate={maxDate}
              minDate={minDate}
              onChange={onChange}
            />
            <Calendar
              className="pt-0"
              mode="single"
              selected={value}
              onSelect={handleDateSelect}
              initialFocus
              disabled={(date) => date > maxDate || date < minDate}
              month={month}
              onMonthChange={setMonth}
            />
          </PopoverContent>
        </Popover>
      </div>
    );
  },
);

CDatePicker.displayName = "CDatePicker";

export default CDatePicker;

interface BaseDatePicker extends VariantProps<typeof multiSelectVariants> {
  id?: string;
  className?: string;
  closeOnSelect?: boolean;
  minDate?: Date;
  maxDate?: Date;
  placeholder?: string;
  showIcon?: boolean;
  label?: string;
}

interface WithChildren extends BaseDatePicker {
  children: React.ReactNode;
  value?: Date;
  onChange: (date: Date | undefined) => void;
}

interface WithoutChildren extends BaseDatePicker {
  children?: undefined;
  value: Date;
  onChange: (date: Date | undefined) => void;
}

const multiSelectVariants = cva(
  "flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium text-foreground ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground text-background",
        link: "text-primary underline-offset-4 hover:underline text-background",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);
