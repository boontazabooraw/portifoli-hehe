"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
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

const ProjectCard = () => {
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
    <div className="w-full">
      {" "}
      <div className="mx-auto max-w-xs">
        <Carousel setApi={setApi} className="w-full max-w-xs">
          <CarouselContent>
            {/* {Array.from({ length: 3 }).map((_, index) => (
              <CarouselItem key={index}>
                <Card>
                  <CardContent className="flex aspect-video items-center justify-center p-6">
                    <span className="text-4xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))} */}
            {ProjectData.map((proj) => (
              <CarouselItem key={proj.id}>
                <Card>
                  <CardHeader className="w-full flex flex-col p-5">
                    <div className="">
                      <Image
                        src={proj.imgpath}
                        alt="Project preview"
                        width={300}
                        height={300}
                        quality={100}
                        className=" object-contain opacity-80"
                      />
                    </div>
                    <div className="flex flex-col">
                      <h1 className="font-bold">{proj.name}</h1>
                      <span className="text-xs">{proj.desc}</span>
                    </div>
                  </CardHeader>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <div className="mt-4 flex items-center justify-center gap-2">
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
    </div>
  );
};

export default ProjectCard;
