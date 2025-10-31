import React from "react";

const Partners = () => {
  const events = [
    {
      icon: "partner1.png",
      title: "Oral Presentation",
      desc: "Featuring research findings and innovations.",
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
                className="flex flex-col items-center text-center gap-4 rounded-xl border-2 border-slate-200 dark:border-slate-800 bg-white p-5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 w-3xl"
              >
                <div className="flex-col items-center justify-center ">
                  <img
                    src="General/partner1.png"
                    alt=""
                    className="w-50 ml-55"
                  />
                  <div className="text-text-light dark:text-text-dark/90 leading-relaxed max-w-3xl mx-auto text-justify">
                    The Sustainable Biomanufacturers and Research Society (SBRS)
                    is delighted to partner with and endorse the Bioengineering
                    Conference 2025. SBRS is also pleased to announce three
                    poster awards for the upcoming poster competition.
                    Additionally, we invite all aspiring and established
                    biomanufacturers to join the dynamic and growing community.
                    Register for SBRS membership by December 31, 2025, to avail
                    the early-bird discount.
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
