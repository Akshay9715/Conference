import React from "react";

export default function About() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display min-h-screen flex flex-col">
      <div className="relative flex flex-col min-h-screen w-full overflow-x-hidden">
        <div className="px-4 md:px-10 lg:px-20 xl:px-40 flex flex-1 justify-center py-10 md:py-16">
          <div className="max-w-[960px] w-full flex flex-col">
            {/* Title */}
            <div className="flex flex-wrap justify-between gap-4 p-4 items-center">
              <p className="text-gray-900 text-4xl md:text-5xl font-black tracking-tighter">
                About the Conference
              </p>
            </div>

            {/* Accordion Sections */}
            <div className="flex flex-col p-4 space-y-4">
              {/* About NIT Rourkela */}
              <details
                className="flex flex-col border-t border-gray-300 dark:border-gray-700 py-3 group"
                open
              >
                <summary className="flex cursor-pointer items-center justify-between gap-6 py-3">
                  <h3 className="text-lg font-bold text-gray-900">
                    About NIT Rourkela
                  </h3>
                  <div className="text-gray-900 group-open:rotate-180 transition-transform">
                    <span
                      className="material-symbols-outlined font-bold text-xl
                    "
                    >
                      ^
                    </span>
                  </div>
                </summary>
                <p
                  className="text-gray-900
                   dark:text-gray-900
                text-base leading-relaxed pb-3"
                >
                  The National Institute of Technology, Rourkela is a premier
                  national institution for technical education in India.
                  Established in 1961, it has a rich history of academic
                  excellence, cutting-edge research, and innovation. The
                  institute is recognized for its world-class faculty,
                  state-of-the-art infrastructure, and a vibrant student
                  community, consistently ranking among the top engineering
                  colleges in the country.
                </p>
              </details>

              {/* About the Department */}
              <details
                className="flex flex-col border-t border-gray-900
               dark:border-gray-700 py-3 group"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-6 py-3">
                  <h3 className="text-lg font-bold text-gray-900 ">
                    About the Department of Bioengineering
                  </h3>
                  <div
                    className="text-gray-900
                  group-open:rotate-180 transition-transform"
                  >
                    <span
                      className="material-symbols-outlined font-bold text-xl
                    "
                    >
                      ^
                    </span>
                  </div>
                </summary>
                <p className="text-gray-900 text-base leading-relaxed pb-3">
                  The Department of Bioengineering at NIT Rourkela is dedicated
                  to advancing knowledge and education in the field of
                  biomedical engineering. Our department focuses on key research
                  areas such as biomaterials, biomechanics, medical imaging, and
                  tissue engineering. With highly qualified faculty and advanced
                  laboratory facilities, we strive to foster an environment of
                  interdisciplinary research and innovation, preparing students
                  to tackle complex challenges in healthcare.
                </p>
              </details>

              {/* About the Conference */}
              <details className="flex flex-col border-t border-b border-gray-300 dark:border-gray-700 py-3 group">
                <summary className="flex cursor-pointer items-center justify-between gap-6 py-3">
                  <h3 className="text-lg font-bold text-gray-900 ">
                    About the Bioengineering Conference 2025
                  </h3>
                  <div className="text-gray-900 group-open:rotate-180 transition-transform">
                    <span
                      className="material-symbols-outlined font-bold text-xl
                    "
                    >
                      ^
                    </span>
                  </div>
                </summary>
                <p
                  className="text-gray-900
                dark:text-gray-900
                text-base leading-relaxed pb-3"
                >
                  The Bioengineering Conference 2025 aims to bring together
                  leading academic scientists, researchers, and scholars to
                  exchange and share their experiences and research results on
                  all aspects of bioengineering. The conference provides a
                  premier interdisciplinary platform for researchers,
                  practitioners, and educators to present and discuss the most
                  recent innovations, trends, and concerns, as well as practical
                  challenges encountered and solutions adopted in the field of
                  bioengineering. We invite you to join us for an inspiring and
                  enriching event.
                </p>
              </details>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
