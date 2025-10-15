import React from "react";

let speakersList = [
  {
    id: 1,
    name: "Prof. KaushikChatterjee",
    college: "IISC Banglore",
  },
];

const SpeakerSection = () => {
  return (
    <div>
      <section class="py-16 md:py-24 " id="speakers">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl font-bold text-center mb-12">Speakers</h2>
          <h3 class="text-2xl font-bold text-primary text-center mb-8">
            Plenary Speakers
          </h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 max-w-2xl mx-auto mb-16">
            <div class="text-center">
              <img
                alt="Photo of Plenary Speaker 1"
                class="w-40 h-40 rounded-full mx-auto mb-4 object-cover shadow-lg"
                src="public\Proffesors\Kaushik.jpg"
              />
              <h4 class="text-lg font-bold">Prof. Kaushik Chatterjee </h4>

              <p>IISC Banglore</p>
            </div>
            <div class="text-center">
              <img
                alt="Photo of Plenary Speaker 2"
                class="w-40 h-40 rounded-full mx-auto mb-4 object-cover shadow-lg"
                src="public\Proffesors\JKT_2.jpg"
              />
              <h4 class="text-lg font-bold">Prof. Jitendra Thakur</h4>

              <p>ICGEB New Delhi</p>
            </div>
          </div>
          <h3 class="text-2xl font-bold text-primary text-center mb-8">
            Invited Speakers
          </h3>
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            <div class="text-center">
              <img
                alt="Photo of Invited Speaker"
                class="w-32 h-32 rounded-full mx-auto mb-3 object-cover shadow-md"
                src="public\Proffesors\Rodriguez.jpeg"
              />
              <h4 class="font-semibold">Prof Rodriguez Manzano</h4>
              <p>Imperial College, London</p>
            </div>
            <div class="text-center">
              <img
                alt="Photo of Invited Speaker"
                class="w-32 h-32 rounded-full mx-auto mb-3 object-cover shadow-md"
                src="public\Proffesors\Prashant.jpeg"
              />
              <h4 class="font-semibold"> Prof. Prashant Agarwal</h4>
              <p>Northumbria University,UK </p>
            </div>
            <div class="text-center">
              <img
                alt="Photo of Invited Speaker"
                class="w-32 h-32 rounded-full mx-auto mb-3 object-cover shadow-md"
                src="public\Proffesors\simonCork.webp"
              />
              <h4 class="font-semibold">Prof Simon C Cork</h4>
              <p>Anglia Ruskin University,UK</p>
            </div>
            <div class="text-center">
              <img
                alt="Photo of Invited Speaker"
                class="w-32 h-32 rounded-full mx-auto mb-3 object-cover shadow-md"
                src="public\Proffesors\Sriparna.jpeg"
              />
              <h4 class="font-semibold">Prof. Sriparna Chatterjee</h4>
              <p> IMMT, Bhubaneshwar</p>
            </div>
            <div class="text-center">
              <img
                alt="Photo of Invited Speaker"
                class="w-32 h-32 rounded-full mx-auto mb-3 object-cover shadow-md"
                src="public\Proffesors\abhilash.webp"
              />
              <h4 class="font-semibold"> Prof. Abhilash Patel</h4>
              <p>IIT Kanpur</p>
            </div>
            <div class="text-center">
              <img
                alt="Photo of Invited Speaker"
                class="w-32 h-32 rounded-full mx-auto mb-3 object-cover shadow-md"
                src="Proffesors\rizvi.jpg"
              />
              <h4 class="font-semibold"> Prof. Suhail Rizvi</h4>

              <p>IIT Hyderabad</p>
            </div>
            <div class="text-center">
              <img
                alt="Photo of Invited Speaker"
                class="w-32 h-32 rounded-full mx-auto mb-3 object-cover shadow-md"
                src="Proffesors\chainmaya.jpeg"
              />
              <h4 class="font-semibold"> Prof. Chinmay Mahapatra</h4>

              <p>NIT Raiput</p>
            </div>
            <div class="text-center">
              <img
                alt="Photo of Invited Speaker"
                class="w-32 h-32 rounded-full mx-auto mb-3 object-cover shadow-md"
                src="public\Proffesors\AvinashEranki.jpg"
              />
              <h4 class="font-semibold"> Prof. Avinash Eranki</h4>
              <p>IIT Hyderabad</p>
            </div>
            <div className="text-center">
              <img
                alt="Photo of Invited Speaker"
                class="w-32 h-32 rounded-full mx-auto mb-3 object-cover shadow-md"
                src="public\Proffesors\Indresh-Yadav.png"
              />
              <h4 className="font-semibold"> Prof. Indresh Yadav</h4>
              <p>IIT Bhubaneshwar</p>
            </div>
            <div className="text-center">
              <img
                alt="Photo of Invited Speaker"
                class="w-32 h-32 rounded-full mx-auto mb-3 object-cover shadow-md"
                src="public\Proffesors\Kaushik.jpeg"
              />
              <h4 className="font-semibold"> Prof. Kaushik Choudhury</h4>
              <p>AIC-IPR</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SpeakerSection;
