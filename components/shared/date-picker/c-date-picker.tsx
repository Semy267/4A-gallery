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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MONTHS } from "@/lib/constants";

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

interface BaseProps extends VariantProps<typeof multiSelectVariants> {
  id?: string;
  className?: string;
  closeOnSelect?: boolean;
  minDate?: Date;
  maxDate?: Date;
  placeholder?: string;
  showIcon?: boolean;
  label?: string;
}

interface WithChildren extends BaseProps {
  children: React.ReactNode;
  value?: Date;
  onChange: (date: Date | undefined) => void;
}

interface WithoutChildren extends BaseProps {
  children?: undefined;
  value: Date;
  onChange: (date: Date | undefined) => void;
}

type CalendarDatePickerProps = WithChildren | WithoutChildren;
const CDatePickerV2 = React.forwardRef<
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

    const years = React.useMemo(() => {
      const startYear = minDate.getFullYear();
      const endYear = maxDate.getFullYear();
      return Array.from(
        { length: endYear - startYear + 1 },
        (_, i) => startYear + i,
      );
    }, [minDate, maxDate]);

    const handleDateSelect = (selected: Date | undefined) => {
      if (!selected) return;
      const newDate = startOfDay(toDate(selected, { timeZone }));
      onChange(newDate);
      setMonth(newDate);
      setYear(newDate.getFullYear());
      if (closeOnSelect) setIsPopoverOpen(false);
    };

    const handleMonthChange = (newMonthIndex: number) => {
      if (newMonthIndex < 0 || newMonthIndex > 11) return;
      const newMonth = new Date(year, newMonthIndex, 1);
      setMonth(newMonth);
      onChange(newMonth);
    };

    const handleYearChange = (newYear: number) => {
      if (newYear < minDate.getFullYear() || newYear > maxDate.getFullYear())
        return;
      const newDate = new Date(newYear, month.getMonth(), 1);
      setYear(newYear);
      setMonth(newDate);
      onChange(newDate);
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
            <div className="flex items-center justify-between px-4 pt-2">
              <Select
                value={String(month.getMonth())}
                onValueChange={(val) => handleMonthChange(parseInt(val))}
              >
                <SelectTrigger
                  id={`month-${id}`}
                  className="h-[34px] w-[120px]"
                >
                  <SelectValue placeholder="Month" />
                </SelectTrigger>
                <SelectContent>
                  {MONTHS.map((label, i) => (
                    <SelectItem key={i} value={String(i)}>
                      {label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select
                value={String(year)}
                onValueChange={(val) => handleYearChange(parseInt(val))}
              >
                <SelectTrigger id={`year-${id}`} className="h-[34px] w-[100px]">
                  <SelectValue placeholder="Year" />
                </SelectTrigger>
                <SelectContent>
                  {years.map((yearOption) => (
                    <SelectItem key={yearOption} value={String(yearOption)}>
                      {yearOption}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
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

CDatePickerV2.displayName = "CDate";

export default CDatePickerV2;
