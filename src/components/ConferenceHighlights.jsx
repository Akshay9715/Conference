import React from "react";

const ConferenceHighlights = () => {
  const events = [
    {
      icon: "mic",
      title: "Oral Presentation",
      desc: "Featuring research findings and innovations.",
    },
    {
      icon: "image",
      title: "Poster Presentation",
      desc: "A visual showcase of scientific work.",
    },
    {
      icon: "lightbulb",
      title: "Business Plan",
      desc: "Pitch your bio-tech startup idea.",
    },
    {
      icon: "photo_camera",
      title: "Scientific Photography Contest",
      desc: "Capturing the beauty of science.",
    },
    {
      icon: "groups",
      title: "Alumni Meet",
      desc: "Connect with past and present members.",
    },
  ];

  return (
    <section id="events" className="bg-gray-50 font-display py-20">
      <div className=" mx-auto px-4 text-center">
        <h2 className="text-[#0e131b] text-3xl font-bold leading-tight tracking-tight mb-10">
          Events
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 p-4">
          {events.map((event, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center gap-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white p-5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-primary text-[32px]">
                <span className="material-symbols-outlined text-blue-900">
                  {event.icon}
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-[#0e131b text-base font-bold leading-tight">
                  {event.title}
                </h3>
                <p className="text-slate-800 text-sm font-normal leading-normal">
                  {event.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConferenceHighlights;
