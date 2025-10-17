import React from "react";

const Accommodation = () => {
  return (
    <section className="bg-background-light dark:bg-background-dark font-display min-h-screen">
      <div className="relative flex flex-col overflow-x-hidden">
        <div className="flex flex-col items-center justify-center px-4 md:px-10 lg:px-30 py-10 ">
          <div className=" w-full">
            {/* Heading */}
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex min-w-72 flex-col gap-3">
                <p className="text-[#0e131b] text-4xl font-black leading-tight tracking-[-0.033em]">
                  Accommodation &amp; Travel Information
                </p>
                <p className="text-[#0f0f0f] text-base font-normal leading-normal">
                  Find all the details you need for your stay and journey to the
                  Bioengineering Conference 2025 at NIT Rourkela.
                </p>
              </div>
            </div>

            {/* Accommodation cards */}
            <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 p-4">
              {[
                {
                  name: "Girls' Hostel",
                  desc: "Comfortable and secure accommodation for female students.",
                  img: "General/ssb.png",
                },
                {
                  name: "Boys' Hostel",
                  desc: "Well-equipped and spacious rooms for male students.",
                  img: "General/dba.png",
                },
                {
                  name: "Faculty Guest House",
                  desc: "Exclusive and serene guest house for esteemed faculty members.",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhjyhTFrXJqgAVJz8X8lMX9p5Vf8NOTvX9-LIvmDruBa3qoAeHNknH9_Y6W_YX-5cVNYktga9_-N1N6GrnaihouNMDMNZEd1WGbg0NRlDbDp7sopn031ywa_nQ9bQblx9AmK4TzUjH47q2YG_dqikSD0y82_myh6SFpkUJOjgIN4vc8MX6VFZhQkZEkGTAtsJTJeC4gHFFDuBrO7eCWdzgTCEAkd94pkl8wXnXaj2720aVd3yMAX6fpNm9fJwvpnKgMK-42vcsFZA",
                },
              ].map((item) => (
                <div key={item.name} className="flex flex-col gap-3 pb-3">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                    style={{ backgroundImage: `url(${item.img})` }}
                  ></div>
                  <div>
                    <p className="text-[#0e131b] text-lg font-medium leading-normal">
                      {item.name}
                    </p>
                    <p className="text-[#101215] text-sm font-normal leading-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Info paragraph */}
            <p className="text-[#0e131b] text-base font-normal leading-relaxed pb-3 pt-1 px-4">
              Accommodation will be provided within the NIT Rourkela campus.
              Students will be accommodated in the respective hostels, and
              faculty members will be provided with rooms in the guest house. We
              strive to ensure a comfortable and pleasant stay for all our
              attendees.
            </p>
            <p className="my-10 font-bold" />
            {/* Travel cards */}
            <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 p-4">
              {[
                {
                  icon: "train",
                  title: "By Train",
                  desc: "The nearest railway station is Rourkela (ROU). The campus is approximately 10 km from the station. Auto-rickshaws are readily available, and the approximate fare is ₹150.",
                },
                {
                  icon: "flight",
                  title: "By Air",
                  desc: "The nearest airport is Veer Surendra Sai Airport, Jharsuguda (JRG), approximately 130 km away. Taxis and buses are available from the airport to Rourkela.",
                },
                {
                  icon: "directions_car",
                  title: "By Road",
                  desc: "NIT Rourkela is well-connected by road. It is located on the Biju Expressway, providing easy access from major cities.",
                },
              ].map((mode) => (
                <div
                  key={mode.title}
                  className="flex flex-1 gap-4 rounded-xl border border-[#d0d9e7] dark:border-gray-900 bg-white dark:bg-background-dark p-6 flex-col shadow-sm"
                >
                  <div className="text-blue-900">
                    <span
                      className="material-symbols-outlined "
                      style={{ fontSize: "32px" }}
                    >
                      {mode.icon}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-[#0e131b] text-lg font-bold leading-tight">
                      {mode.title}
                    </h2>
                    <p className="text-[#121315] text-sm font-normal leading-normal">
                      {mode.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map */}
            <section className="px-10 py-10 flex justify-center">
              <iframe
                title="Route from Rourkela Station to NIT Rourkela"
                className="rounded-lg w-full max-w-[960px] h-96"
                src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d3731.263264396032!2d84.8823949751953!3d22.25503897971059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x3a201e5c8f3f0e6f%3A0x8b3d4b7b9b9b8b8b!2sRourkela%20Railway%20Station%2C%20Rourkela%2C%20Odisha!3m2!1d22.2496!2d84.8828!4m5!1s0x3a201e5b6f3f0e6f%3A0x8b3d4b7b9b9b8b8b!2sNational%20Institute%20of%20Technology%2C%20Rourkela!3m2!1d22.2539!2d84.8841!5e0!3m2!1sen!2sin!4v1689771147573!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accommodation;
