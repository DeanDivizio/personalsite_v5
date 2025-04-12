"use client";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";
export default function ImageCarousel() {

    return (
        <Carousel 
            className="hScrollContainer contentFade xl:h-[65%] pt-12 pb-36 w-[100vw]" 
            opts={{ align: "start", loop: "true", duration: 2000 }} 
            plugins={[AutoScroll({ speed: 1 })]}
            >
            <CarouselContent style={{ display: "flex", alignItems: 'center' }}>
                <CarouselItem className="basis-[42%] lg:basis-[26%] 2xl:basis-[18%] pl-2 2xl:pl-12">
                    <img src={'https://newapi.deandivizio.com/wp-content/uploads/2025/04/justinPortrait-cropped.jpg'} width={898} height={1123} alt="" className="rounded-sm shadow-xl" />
                </CarouselItem>
                <CarouselItem className="basis-[42%] lg:basis-[26%] 2xl:basis-[18%] pl-2 2xl:pl-12">
                    <img src={'https://newapi.deandivizio.com/wp-content/uploads/2025/04/IMG_6596-Edit-Large.jpeg'} width={1035} height={1280} alt="" className="rounded-sm shadow-xl" />
                </CarouselItem>
                <CarouselItem className="basis-[35%] lg:basis-[22%] 2xl:basis-[16%] pl-2 2xl:pl-12">
                    <img src={'https://newapi.deandivizio.com/wp-content/uploads/2025/04/IMG_6876-Large.jpeg'} width={853} height={1280} alt="" className="rounded-sm shadow-xl" />
                </CarouselItem >
                <CarouselItem className="basis-[36%] lg:basis-[22%] 2xl:basis-[16%] pl-2 2xl:pl-12">
                    <img src={'https://newapi.deandivizio.com/wp-content/uploads/2025/04/0P7A1871-Large.jpeg'} width={960} height={1280} alt="" className="rounded-sm shadow-xl" />
                </CarouselItem>
                <CarouselItem className="basis-[40%] lg:basis-[25%] 2xl:basis-[18%] pl-2 2xl:pl-12">
                    <img src={'https://newapi.deandivizio.com/wp-content/uploads/2025/04/0P7A1419-Large.jpeg'} width={853} height={1280} alt="" className="rounded-sm shadow-xl" />
                </CarouselItem>
                <CarouselItem className="basis-[72%] lg:basis-[46%] 2xl:basis-[29%] pl-2 2xl:pl-12">
                    <img src={'https://newapi.deandivizio.com/wp-content/uploads/2025/04/DSC05963-scaled-1.jpg'} width={2560} height={1870} alt="" className="rounded-sm shadow-xl" />
                </CarouselItem>
                <CarouselItem className="basis-[85%] lg:basis-[54%] 2xl:basis-[33%] pl-2 2xl:pl-12 w-fit">
                    <img src={'https://newapi.deandivizio.com/wp-content/uploads/2025/04/DSC03877-Large.jpeg'} width={1280} height={791} alt="" className="rounded-sm shadow-xl" />
                </CarouselItem>
                <CarouselItem className="basis-[38%] lg:basis-[23%] 2xl:basis-[16%] pl-2 2xl:pl-12">
                    <img src={'https://newapi.deandivizio.com/wp-content/uploads/2025/04/DSC03521-scaled-1.jpg'} width={1707} height={2560} alt="" className="rounded-sm shadow-xl" />
                </CarouselItem>
                <CarouselItem className="basis-[42%] lg:basis-[26%] 2xl:basis-[18%] pl-2 2xl:pl-12">
                    <img src={'https://newapi.deandivizio.com/wp-content/uploads/2025/04/DSC00163-scaled-1.jpg'} width={1966} height={2560} alt="" className="rounded-sm shadow-xl" />
                </CarouselItem>
                <CarouselItem className="basis-[73%] lg:basis-[46%] 2xl:basis-[30%] pl-2 2xl:pl-12">
                    <img src={'https://newapi.deandivizio.com/wp-content/uploads/2025/04/0A3A8377-scaled-1.jpg'} width={2560} height={1805} alt="" className="rounded-sm shadow-xl" />
                </CarouselItem>
            </CarouselContent>
        </Carousel>
    )
}