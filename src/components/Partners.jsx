import React from "react";

const Partners = () => {
  const events = [
    {
      icon: "General/partner1.png",
      desc: "The Sustainable Biomanufacturers and Research Society (SBRS) is delighted to partner with and endorse the Bioengineering Conference 2025. SBRS is also pleased to announce three poster awards for the upcoming poster competition. Additionally, we invite all aspiring and established biomanufacturers to join the dynamic and growing community.Register for SBRS membership by December 31, 2025, to avail the early-bird discount.",
    },
    {
      icon: "General/ANRF.jpg",
      desc: "The Anusandhan National Research Foundation (ANRF), India’s apex body for research and innovation under the ANRF Act, 2023, is pleased to partner with and support the Bioengineering Conference 2025. ANRF aims to strengthen research ecosystems and encourage collaboration among academia, industry, and government.",
    },
  ];
  return (
    <div>
      <section id="events" className=" font-display py-20">
        <div className=" mx-auto px-4 text-center">
          <h2 className="text-[#0e131b] text-3xl font-bold leading-tight tracking-tight mb-10">
            Partners
          </h2>

          <div className="flex justify-center">
            {events.map((event, index) => (
              <div
                key={index}
                className="flex flex-col mx-5 items-center text-center gap-4 rounded-xl border-2 border-slate-200 dark:border-slate-800 bg-white p-5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 w-3xl"
              >
                <div className="flex-col items-center justify-center ">
                  <img src={event.icon} alt="" className="w-50 mx-auto" />
                  <div className="text-text-light dark:text-text-dark/90 leading-relaxed max-w-3xl mx-auto text-justify items-center">
                    {event.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;
