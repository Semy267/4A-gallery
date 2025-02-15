import * as React from "react";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/ui/carousel";
import { cn } from "@/lib/utils";

type CCarouselWithDots = ICarousel & {
  showDots: true;
  current: number;
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
};

type CCarouselWithoutDots = ICarousel & {
  showDots?: false;
  current?: never;
  setCurrent?: never;
};

type CCarousel = CCarouselWithDots | CCarouselWithoutDots;

export default function CCarousel({
  arrowPosition = "between",
  showArrow = true,
  showDots = false,
  children,
  current = 0,
  setCurrent = () => {},
}: CCarousel) {
  const isBottomRight = arrowPosition === "bottom-right";
  const isTopRight = arrowPosition === "top-right";
  const isBetween = arrowPosition === "between";

  const [api, setApi] = React.useState<CarouselApi>();
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent && setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent && setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <Carousel
      setApi={setApi}
      opts={{
        align: "start",
      }}
      className={cn("w-full", {
        "pt-10": isTopRight && showArrow,
        "pb-10": isBottomRight && showArrow,
      })}
    >
      <CarouselContent>{children}</CarouselContent>
      {showDots && (
        <div className="py-2 text-center text-sm text-muted-foreground">
          Slide {current} of {count}
        </div>
      )}

      {showArrow && (
        <>
          <CarouselPrevious
            className={cn({
              "bottom-0 right-12": isBottomRight,
              "top-0 right-12": isTopRight,
              "top-1/2 -translate-y-1/2 left-0": isBetween,
            })}
          />
          <CarouselNext
            className={cn({
              "bottom-0 right-0": isBottomRight,
              "top-0 right-0": isTopRight,
              "top-1/2 -translate-y-1/2 right-0": isBetween,
            })}
          />
        </>
      )}
    </Carousel>
  );
}
