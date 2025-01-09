"use client";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";

function Item({ link, title }) {

    return (
        <CarouselItem className="basis-2/5 sm:basis-[40%] md:basis-[30%] lg:basis-1/4 xl:basis-[35%] 2xl:basis-1/5">
            <div className="flex flex-row w-fit justify-center gap-4 items-center">
                <img src={link} alt={`${title} Logo`} className="w-8 xl:w-16 xl:h-16 h-8" />
                <h4>{title}</h4>
            </div>
        </CarouselItem>
    )
}

export default function SoftwareCarousel() {

    return (
        <Carousel  opts={{align: "start", loop: "true", duration: 2000}} plugins={[AutoScroll({speed: 1})]}>
            <CarouselContent className="pt-8 pb-24 xl:pb-16">
                <Item link="https://api.deandivizio.com/wp-content/uploads/2024/12/threejs_gray.webp" title="Three.js" />
                <Item link="https://api.deandivizio.com/wp-content/uploads/2024/12/python_gray.webp" title="Python" />
                <Item link="https://api.deandivizio.com/wp-content/uploads/2024/12/aws_gray_3.webp" title="AWS" />
                <Item link="https://api.deandivizio.com/wp-content/uploads/2024/12/clerk_gray.webp" title="Clerk" />
                <Item link="https://api.deandivizio.com/wp-content/uploads/2024/12/css_gray.webp" title="CSS" />
                <Item link="https://api.deandivizio.com/wp-content/uploads/2024/12/graphql_gray.webp" title="GraphQL" />
                <Item link="https://api.deandivizio.com/wp-content/uploads/2024/12/html_gray.webp" title="HTML" />
                <Item link="https://api.deandivizio.com/wp-content/uploads/2024/12/hydrogen_gray.webp" title="Hydrogen" />
                <Item link="https://api.deandivizio.com/wp-content/uploads/2024/12/javascript_gray.webp" title="Javascript" />
                <Item link="https://api.deandivizio.com/wp-content/uploads/2024/12/nextjs_gray.webp" title="Next.js" />
                <Item link="https://api.deandivizio.com/wp-content/uploads/2024/12/nodejs_gray.webp" title="Node.js" />
                <Item link="https://api.deandivizio.com/wp-content/uploads/2024/12/react_gray.webp" title="React" />
                <Item link="https://api.deandivizio.com/wp-content/uploads/2024/12/remix_gray.webp" title="Remix" />
                <Item link="https://api.deandivizio.com/wp-content/uploads/2024/12/shopify_dark.webp" title="Shopify" />
                <Item link="https://api.deandivizio.com/wp-content/uploads/2024/12/tailwind_gray.webp" title="Tailwind CSS" />
                <Item link="https://api.deandivizio.com/wp-content/uploads/2024/12/typescript_dark.webp" title="Typescript" />
                <Item link="https://api.deandivizio.com/wp-content/uploads/2024/12/vercel_gray.webp" title="Vercel" />
                <Item link="https://api.deandivizio.com/wp-content/uploads/2024/12/wordpress_gray.webp" title="WordPress" />
                <Item link="https://api.deandivizio.com/wp-content/uploads/2024/12/wpgql_gray.webp" title="WPGraphQL" />
                <Item link="https://api.deandivizio.com/wp-content/uploads/2024/12/swift_gray.webp" title="Swift" />
            </CarouselContent>
        </Carousel>
    )
}