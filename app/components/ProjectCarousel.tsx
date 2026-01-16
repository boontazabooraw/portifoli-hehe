"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import React from "react";
import Image from "next/image";

import { ProjectData } from "./data/Projects";

const ProjectCarousel = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="mx-auto max-w-100">
      <Carousel setApi={setApi} className="w-full max-w-xs">
        <h1>A</h1>
        <CarouselContent>
          {ProjectData.map((proj) => (
            <CarouselItem key={proj.id}>
              <Card className="">
                <CardContent className="flex aspect-video items-center justify-center p-6">
                  <div className="flex flex-col gap-2  overflow-hidden">
                    <a
                      href={proj.url}
                      target="_blank"
                      className="cursor-default"
                    >
                      <Image
                        src={proj.imgpath}
                        alt="Project preview"
                        width={300}
                        height={300}
                        style={{
                          width: "100%",
                          maxWidth: "290px",
                          height: "auto",
                        }}
                        quality={100}
                        className="hover:brightness-110 opacity-80 rounded-2xl duration-300 transition-all"
                      />
                      {/* <img
                        src={proj.imgpath}
                        alt="Project Preview"
                        className="w-70 rounded-xl object-cover"
                      /> */}
                    </a>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious />
        <CarouselNext /> */}
      </Carousel>
      <div className="flex flex-row items-center justify-center gap-2 mt-2">
        {Array.from({ length: 4 }).map((_, id) => (
          <button
            key={id}
            onClick={() => api?.scrollTo(id)}
            className={cn("h-3.5 w-3.5 rounded-full border-1", {
              "border-white/20 ": current === id + 1,
            })}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectCarousel;
