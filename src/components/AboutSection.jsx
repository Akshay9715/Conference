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
              <p className="text-text-light dark:text-text-dark/90 leading-relaxed">
                National Institute of Technology, Rourkela is a premier
                institution of higher learning in India. An institute of
                national importance, it is renowned for its excellence in
                engineering, science, and technology, fostering innovation and
                research.
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
              <p className="text-text-light dark:text-text-dark/90 leading-relaxed">
                The Department of Biomedical Engineering is at the forefront of
                bioengineering education and research. It is committed to
                developing solutions for healthcare challenges through
                cutting-edge research and interdisciplinary collaboration.
              </p>
            </div>
          </div>

          {/* About the Conference */}
          <div className="text-center bg-white dark:bg-background-dark p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-800">
            <h3 className="text-2xl font-bold text-accent mb-4">
              About the Conference
            </h3>
            <p className="text-text-light dark:text-text-dark/90 leading-relaxed max-w-3xl mx-auto">
              This conference aims to bring together leading academic
              scientists, researchers, and industry experts to exchange and
              share their experiences and research results on all aspects of
              Bioengineering for healthcare and society.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
