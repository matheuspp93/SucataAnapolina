"use client";
import { ThemeProvider, Carousel } from "@material-tailwind/react";

export { ThemeProvider, Carousel };

const CarouselBanner = () => {
  return (
    <Carousel
      className="rounded-xl"
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <img
        src="https://i0.wp.com/cenarecicladora.com.br/wp-content/uploads/2021/12/banner-compravenda.jpg"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="https://i0.wp.com/cenarecicladora.com.br/wp-content/uploads/2021/12/banner-leis-1.jpg"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src="https://i0.wp.com/cenarecicladora.com.br/wp-content/uploads/2021/12/banner-compravenda.jpg"
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
};

export default CarouselBanner;
