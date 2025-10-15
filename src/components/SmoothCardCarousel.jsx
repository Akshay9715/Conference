import React, { useEffect, useState } from "react";

const cards = [
  {
    id: 1,
    title: "Bioinformatics",
    img: "/General/first.jpg",
  },
  {
    id: 2,
    title: "Genetic Engineering",
    img: "/General/second.jpg",
  },
  {
    id: 3,
    title: "Tissue Culture",
    img: "/General/third.jpg",
  },
  {
    id: 4,
    title: "Biomedical Devices",
    img: "/General/fourth.jpg",
  },
  {
    id: 5,
    title: "Drug Discovery",
    img: "/General/fifth.jpg",
  },
];

export default function SmoothCardCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Move one card every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % cards.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Create a circular list of visible cards
  const getVisibleCards = () => {
    const visible = [];
    for (let i = 0; i < 4; i++) {
      visible.push(cards[(currentIndex + i) % cards.length]);
    }
    return visible;
  };

  const visibleCards = getVisibleCards();

  return (
    <div className="w-full bg-gray-50 py-10 overflow-hidden">
      <h2 className="text-center text-3xl font-bold text-gray-800 mb-8">
        Research Highlights
      </h2>

      <div className="flex justify-center">
        <div className="flex gap-6 transition-transform duration-700 ease-in-out">
          {visibleCards.map((card) => (
            <div
              key={card.id}
              className="w-64 bg-white rounded-xl shadow-md overflow-hidden transform transition hover:scale-105"
            >
              <img
                src={card.img}
                alt={card.title}
                className="h-40 w-full object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-800">
                  {card.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
