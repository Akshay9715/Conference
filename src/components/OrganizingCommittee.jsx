import React from "react";

const OrganizingCommittee = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display min-h-screen flex flex-col overflow-x-hidden">
      <main className="flex flex-col flex-1 items-center px-4 md:px-10 lg:px-40 py-5">
        <div className="max-w-[960px] w-full">
          {/* Title */}
          <div className="flex flex-wrap justify-between gap-3 p-4">
            <p className="text-text-light dark:text-text-dark text-4xl font-black leading-tight tracking-[-0.033em] min-w-72">
              Organizing Committee
            </p>
          </div>

          {/* Patron */}
          <h2 className="text-text-light dark:text-text-dark text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
            Patron
          </h2>
          <div className="flex p-4">
            <div className="flex w-full flex-col gap-4 md:flex-row md:justify-between md:items-center">
              <div className="flex gap-4 items-center">
                <div
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-32 w-32"
                  style={{
                    backgroundImage: "url('Proffesors/director.jpg')",
                  }}
                />
                <div className="flex flex-col justify-center">
                  <p className="text-text-light dark:text-text-dark text-[22px] font-bold leading-tight">
                    Prof. K. Umamaheshwar Rao
                  </p>
                  <p className="text-subtext-light dark:text-subtext-dark text-base">
                    Director, NIT Rourkela
                  </p>
                  <p className="text-subtext-light dark:text-subtext-dark text-base"></p>
                </div>
              </div>
            </div>
          </div>

          {/* Chairman */}
          <h2 className="text-text-light dark:text-text-dark text-[22px] font-bold px-4 pb-3 pt-5 border-t-2">
            Chairman
          </h2>
          <div className="flex p-4">
            <div className="flex w-full flex-col gap-4 md:flex-row md:justify-between md:items-center">
              <div className="flex gap-4 items-center">
                <div
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-32 w-32"
                  style={{
                    backgroundImage: "url('Proffesors/devendra.jpeg')",
                  }}
                />
                <div className="flex flex-col justify-center">
                  <p className="text-text-light dark:text-text-dark text-[22px] font-bold">
                    Prof. Devendra Verma
                  </p>
                  <p className="text-subtext-light dark:text-subtext-dark text-base">
                    HoD, BM
                  </p>
                  <p className="text-subtext-light dark:text-subtext-dark text-base"></p>
                </div>
              </div>
            </div>
          </div>

          {/* Convenors */}
          <h2 className="text-text-light dark:text-text-dark text-[22px] font-bold px-4 pb-3 pt-5 border-t-2">
            Convenors
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
            {[
              {
                name: "Prof. Prasoon Kumar",
                email: "kumarprasoon@nitrkl.ac.in",
                img: "Proffesors/prasoon.jpeg",
              },
              {
                name: "Prof. Mirza Khalid Baig",
                email: "baigm@nitrkl.ac.in",
                img: "Proffesors/mirza.jpg",
              },
              {
                name: "Prof. Amrita Singh",
                email: "singhnitrkl.ac.in",
                img: "Proffesors/amrita.png",
              },
              {
                name: "Prof. Anamika Singh Rajput",
                email: "singhanamika@nitrkl.ac.in",
                img: "Proffesors/anamika.jpg",
              },
            ].map((person, i) => (
              <div key={i} className="flex items-center gap-4">
                <div
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-24 w-24"
                  style={{ backgroundImage: `url('${person.img}')` }}
                />
                <div>
                  <p className="text-text-light dark:text-text-dark text-lg font-bold">
                    {person.name}
                  </p>
                  <p className="text-subtext-light dark:text-subtext-dark text-sm">
                    {person.email}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Committee Members */}
          <h2 className="text-text-light dark:text-text-dark text-[22px] font-bold px-4 pb-3 pt-8 border-t-2 mt-10">
            Committee Members
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {[
              ["A Thirugnanam", "Professor"],
              ["Amit Biswas", "Associate Professor"],
              ["Angana Sarkar", "Associate Professor"],
              ["Anju R. Babu", "Assistant Professor Grade-I"],
              ["Bala Chakravarthy Neelapu", "Assistant Professor Grade-I"],
              ["Balasubramanian P", "Associate Professor"],
              ["Bihukalyan Prasad Nayak", "Bikash Chadra Maharaj"],
              ["Devendra Verma", "Associate Professor"],
              ["Earu Banoth", "Assistant Professor Grade-I"],
              ["Kasturi Dutta", "Associate Professor"],
              ["Krishna Pramanik", "Professor"],
              ["Kunal Pal", "Professor"],
              ["Lohit Kumar Srinivas Gujjala", "Assistant Professor Grade-II"],
              ["Mukesh Kumar Gupta", "Professor"],
              ["Nandini Sarkar", "Associate Professor"],
              ["Nivedita Patra", "Associate Professor"],
              ["Ravi Kant Avvari", "Assistant Professor Grade-I"],
              ["Sivaraman J.", "Assistant Professor Grade-I"],
              ["Subhankar Paul", "Professor"],
            ].map(([name, role], i) => (
              <div
                key={i}
                className="bg-white dark:bg-background-dark/50 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <p className="text-text-light dark:text-text-dark font-bold">
                  {name}
                </p>
                <p className="text-subtext-light dark:text-subtext-dark">
                  {role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-white p-4 mt-10">
        <div className="max-w-[960px] mx-auto text-center">
          <p className="font-bold">
            Bioengineering Conference 2025 — NIT Rourkela
          </p>
          <p className="text-sm opacity-80">
            For any inquiries, please contact us at conference@email.com
          </p>
          <div className="flex justify-center gap-4 mt-2">
            <a className="hover:underline" href="#">
              Home
            </a>
            <a className="hover:underline" href="#">
              Speakers
            </a>
            <a className="hover:underline" href="#">
              Schedule
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default OrganizingCommittee;
