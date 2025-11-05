'use client'
import * as React from "react"
import Image from 'next/image'

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

export default function Sponsors() {
  const images = [
    "/sponsors/giif.png",
    "/sponsors/workpay.png",
    "/sponsors/mikono.png",
    "/sponsors/star.png",
    "/sponsors/ceo.png",
    "/sponsors/tim.png",
    "/sponsors/tanzanite.png",
  ]

  return (
    <div>
      <div className="max-w-6xl mx-auto my-6 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-8 text-center">2025 Exhibitors and Sponsors</h1>
        <div className="w-full max-w-4xl my-16"> {/* Increased max-width for bigger carousel */}
          <Carousel
            opts={{
              align: "start",
            }}
            plugins={[Autoplay({ delay: 1500 })]} // Auto-play every 3 seconds
            className="w-full"
          >
            <CarouselContent>
              {images.map((src, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="h-full"> {/* Added h-full for consistent card heights */}
                      <CardContent className="flex aspect-square items-center justify-center p-4"> {/* Reduced padding from p-6 to p-4 for larger image area */}
                        <div className="relative w-full h-full">
                          <Image
                            src={src}
                            alt=""
                            fill
                            className="object-contain"
                          />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  )
}