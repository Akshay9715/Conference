import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="md:py-14 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary dark:text-accent">
          About the Event
        </h2>

        <div className="space-y-16">
          {/* About NIT Rourkela */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className=" mr-10">
              <img
                src="General/MainBuilding1.jpg"
                alt="Image of NIT Rourkela campus"
                className="shadow-lg w-full h-auto object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-accent mb-4">
                About NIT Rourkela
              </h3>
              <p className="text-text-light dark:text-text-dark/90 leading-relaxed text-justify">
                NIT Rourkela (the erstwhile Regional Engineering College,
                renamed on 26th June 2002) is one of the institutes of national
                importance under the Ministry of Education, Government of India.
                The government of India has elevated the Regional Engineering
                College, Rourkela to an autonomous institution under the name of
                the National Institute of Technology, Rourkela.
              </p>
            </div>
          </div>

          {/* About the Department */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12">
            <div className="md:w-1/2">
              <img
                src="General/bmbt1.jpg"
                alt="Image of the Bioengineering department at NIT Rourkela"
                className="shadow-lg w-full h-auto object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-accent mb-4">
                About the Department
              </h3>
              <p className="text-text-light dark:text-text-dark/90 leading-relaxed text-justify">
                The conference aims to provide an excellent platform for
                engineers, scientists, researchers, and professionals to share
                knowledge and experiences on the dynamics of the
                interdisciplinary approaches in solving problems of relevance to
                bioengineering covering major domains of Biological Innovation,
                Technology, Engineering and Sciences. The conference will serve
                as the best platform to learn and share new ideas in the area by
                connecting the stakeholders involved, particularly students,
                faculties, engineers, doctors, entrepreneurs, incubators, and
                enthusiasts.
              </p>
            </div>
          </div>

          {/* About the Conference */}
          <div className="text-center bg-white dark:bg-background-dark p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-800">
            <h3 className="text-2xl font-bold text-accent mb-4">
              About the Conference
            </h3>
            <p className="text-text-light dark:text-text-dark/90 leading-relaxed max-w-3xl mx-auto text-justify">
              Bioengineering conference is an annual conference, hosted by the
              department of Biotechnology and Medical Engineering, NIT Rourkela.
              This year the conference is going to held from 11th-13th of
              December, 2025. The theme of the BEC-2025 is
              <strong>
                "Translation of Bioengineering Research for Healthcare and
                Society ".
              </strong>
              This year, our conference aims to mediate a dialogue among
              researchers, scientists, engineers for translating the
              bioengineering research into technologies, products and services
              serving healthcare and society.
              <span className="mt-4 block">
                {" "}
                As Sir Isaac Newton's famous line, "If I have seen further, it
                is by standing upon the shoulders of giants," also speaks to the
                foundational role of knowledge sharing, which scientific
                translation enables. Our speakers from various walks of
                bioengineering research bring forth the knowledge and expertise
                to share with scholars, students, industry personals etc. There
                will be series of plenary and invited talk to apprise the
                audience on the recent progress in bioengineering research and
                innovations. To facilitate the active engagement of students,
                several events like oral presentation, poster presentation,
                business plan competition, scientific photography,
                students-scientists connect sessions will be organised. The
                conference also invites industry professionals and startups to
                showcase their products. It will be cohort where the idea and
                knowledge sharing will happen and enrich the audience with wide
                spectrum of talks to initiate meaningful dialogue for
                multi-disciplinary research and innovation.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
