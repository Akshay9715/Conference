import React from "react";

const Events = () => {
  const events = [
    {
      icon: "mic",
      title: "Oral Presentation",
      description: "Present your research to an audience of peers and experts.",
      tag: "Online Registration",
      tagColor:
        "bg-primary/20 text-primary dark:bg-primary/30 dark:text-primary/90",
      note: "Competitions require offline presence.",
    },
    {
      icon: "fullscreen",
      title: "Poster Presentation",
      description:
        "Showcase your work in a dynamic and interactive poster session.",
      tag: "Online Registration",
      tagColor:
        "bg-primary/20 text-primary dark:bg-primary/30 dark:text-primary/90",
      note: "Competitions require offline presence.",
    },
    {
      icon: "work",
      title: "Business Plan",
      description:
        "Pitch your innovative bioengineering business idea to a panel of judges.",
      tag: "Offline Registration",
      tagColor:
        "bg-green-200 text-green-800 dark:bg-green-900 dark:text-green-300",
      note: "Competitions require offline presence.",
    },
    {
      icon: "photo_camera",
      title: "Scientific Photography Contest",
      description:
        "Capture the beauty of science in our annual photography contest.",
      tag: "Offline Registration",
      tagColor:
        "bg-green-200 text-green-800 dark:bg-green-900 dark:text-green-300",
      note: "Competitions require offline presence.",
    },
    {
      icon: "groups",
      title: "Alumni Meet",
      description:
        "Connect with fellow alumni and expand your professional network.",
      tag: "Online Registration",
      tagColor:
        "bg-primary/20 text-primary dark:bg-primary/30 dark:text-primary/90",
    },
  ];

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden font-display bg-background-light dark:bg-background-dark">
      <div className="px-4 md:px-10 lg:px-20 xl:px-40 flex flex-1 justify-center py-10 md:py-20">
        <div className="max-w-[960px] w-full flex flex-col">
          <h2 className="text-primary dark:text-white text-3xl md:text-4xl font-bold text-center pb-8 md:pb-12">
            Conference Events
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event, index) => (
              <div
                key={index}
                className="flex flex-col gap-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-background-dark p-6 transition-all hover:shadow-lg hover:-translate-y-1"
              >
                <div className="text-primary dark:text-primary/80">
                  <span className="material-symbols-outlined text-4xl">
                    {event.icon}
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-gray-900 dark:text-white text-lg font-bold leading-tight">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {event.description}
                  </p>
                  <div className="mt-2 flex flex-col gap-2">
                    <span
                      className={`inline-block ${event.tagColor} text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full`}
                    >
                      {event.tag}
                    </span>
                    {event.note && (
                      <p className="text-gray-500 dark:text-gray-500 text-xs italic">
                        {event.note}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
