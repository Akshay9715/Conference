import React from "react";

const cards = [
  {
    id: 1,
    title: "Bio-fabrication & Tissue Engineering",
    img: "/General/biofabrication.png",
  },
  {
    id: 2,
    title: "Biomechanics & Biofluid Mechanics",
    img: "/General/biomechanics.png",
  },
  {
    id: 3,
    title: "Nanomaterials & Biosensors",
    img: "/General/nanamaterials.png",
  },
  {
    id: 4,
    title: " Molecular & Systems Biology for Healthcare",
    img: "/General/molecular.png",
  },
  {
    id: 5,
    title: "Instrumentation and Healthcare Technology",
    img: "/General/instrumentaion.png",
  },
];

export default function SmoothContinuousCarousel() {
  // Duplicate cards for infinite loop effect
  const loopCards = [...cards, ...cards];

  return (
    <div className="w-full bg-gray-50 py-10 overflow-hidden">
      <h2 className="text-center text-3xl font-bold text-gray-800 mb-8">
        Themes of the Conference
      </h2>

      {/* Outer container */}
      <div className="relative w-full overflow-hidden">
        {/* Inner scrolling track */}
        <div className="flex animate-scroll gap-6">
          {loopCards.map((card, i) => (
            <div
              key={i}
              className="w-64 flex-shrink-0 bg-white rounded-xl shadow-md overflow-hidden transform transition hover:scale-105"
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

      {/* Custom animation */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            width: calc(256px * ${loopCards.length}); /* total card width including gap */
            animation: scroll 25s linear infinite;
          }
        `}
      </style>
    </div>
  );
}
