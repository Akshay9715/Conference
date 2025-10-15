import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const DemoCarousel = () => {
  const slides = [
    { id: 1, title: "Bioinformatics", img: "/General/first.jpg" },
    { id: 2, title: "Genetic Engineering", img: "/General/second.jpg" },
    { id: 3, title: "Tissue Culture", img: "/General/third.jpg" },
    { id: 4, title: "Biomedical Devices", img: "/General/fourth.jpg" },
    { id: 5, title: "Drug Discovery", img: "/General/fifth.jpg" },
  ];

  // Group slides into sets of 4 (to show 4 cards at once)
  const groupedSlides = [];
  for (let i = 0; i < slides.length; i += 4) {
    groupedSlides.push(slides.slice(i, i + 4));
  }

  return (
    <div className="w-full bg-gray-50 py-10">
      <h2 className="text-center text-3xl font-bold text-gray-800 mb-8">
        Research Highlights
      </h2>

      <Carousel
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        autoPlay
        interval={2500}
        swipeable
        emulateTouch
        stopOnHover
      >
        {groupedSlides.map((group, index) => (
          <div key={index} className="flex justify-center gap-6 px-10">
            {group.map((slide) => (
              <div
                key={slide.id}
                className="w-1/4 bg-white rounded-xl shadow-lg overflow-hidden transform transition hover:scale-105"
              >
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="h-48 w-full object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {slide.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default DemoCarousel;
