import React from "react";
import { useNavigate } from "react-router-dom";

const PlacesRourkela = () => {
  const navigate = useNavigate();

  const redirectRegister = () => {
    navigate("/registration");
  };

  return (
    <div className="relative flex flex-col min-h-screen w-full overflow-x-hidden bg-background-light dark:bg-background-dark font-display">
      {/* Hero Section */}
      <section
        className="flex min-h-[480px] flex-col items-center justify-center gap-6 bg-cover bg-center bg-no-repeat p-6 sm:p-10 rounded-2xl mx-4 my-4"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.5)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuAV2y-fAlCGL1pKA7ckzQ1GbGcsgUNfb9fN49pFfL76MJcu8hNk1amDczOkT91trG2XWHKD-WS4qWeKNUNA4kFDZ9nHVvQNROFew9rTG_PJZFtgZO3iQf9LJwe2r86DE_W5dLky6Ky6itUMv3H3BpVVvz5I_jpcLgOAu1LlPE7DRwZlYAuSyYNiGUorq6cMa67TVOm3qW2DbExhtFUG2FljTKj_uGzwbNbvZBWRxwldshImS083mD3nbIcJADinUW13FZeHAmHDdt4')",
        }}
      >
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-white text-3xl sm:text-5xl font-black leading-tight">
            Places to Visit in Rourkela
          </h1>
          <h2 className="text-white text-sm sm:text-base font-normal">
            Discover the Charm of Rourkela, Odisha
          </h2>
        </div>
        <button className="flex items-center justify-center rounded-lg h-12 px-6 bg-blue-900 text-white font-bold hover:bg-blue-800 transition-colors">
          Explore Now
        </button>
      </section>

      {/* Welcome Section */}
      <section className="px-4 sm:px-6 md:px-10 lg:px-20 py-10 flex justify-center">
        <div className="max-w-[960px]">
          <h2 className="text-gray-900 text-2xl font-bold pb-3">
            Welcome to Rourkela
          </h2>
          <p className="text-gray-800 text-base leading-relaxed">
            Welcome, attendees of the Bioengineering Conference 2025! We invite
            you to explore the vibrant city of Rourkela, a place where industry
            and nature coexist in harmony. Discover the rich culture, history,
            and natural beauty that our city has to offer.
          </p>
        </div>
      </section>

      {/* Places Grid */}
      <section className="px-4 sm:px-6 md:px-10 lg:px-20 py-10 sm:mx-40">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              name: "Hanuman Vatika",
              desc: "Known for its towering statue of Lord Hanuman.",
              info: "Distance from NIT: 6–8 km, Open: 6am–8pm, Entry: Free",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDLYMiySUxtrAYXQLUtcSxTCqS_RgyM42sYbM6CvMuXG6LqtTnK1FjsZF0GjSstv2-kFE2RVf7ITnVHlK-D6pIbA8SEVOYw0vbirOMgZ5DypqyLXF20BsxeeciIV8I-4T6I_IrN0G3B4FIHETPEN1G7vufe337dcgT3KdgtBkbZ9ZkOwrXU2BGOv8GYQuTtpIU0EzAmxuIbmJjDhzex4UpquuU3EKXEHWbX1XlscbBXpccEuFB6ViVaGh28JQ03AVA18VwLxBZV-U0",
            },
            {
              name: "Indira Gandhi Park",
              desc: "A large urban park with a zoo and toy train.",
              info: "Distance from NIT: 3 km, Open: 8am–7pm, Entry: ₹20",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAMFPPUnr97ldUdvX9ima8eA1yyCsXpwEW0y-yBvQ5L9jq4jEpEDVMWVRmaFGO4vEua60dsFHP2cgvGQ3h7IJ_jXjHKtG6cVBimTtqN1mLwR7wLk6A9Q7ROnSXzPwJY_n0yM9NE0ZLZPKeJ9jmRcklqKjKqjK18KUmpgTCtNFlrqulAvJa7sGiBZegGcmPRBGBXVJJ-1XWQlhyLyKDdtCVDpzzluO35WLcmKu9Kcmcz9xRG4_iGdC0osbX_XSrRLMQFg6JTJ1pMsa4",
            },
            {
              name: "Mandira Dam",
              desc: "A picturesque dam offering scenic views.",
              info: "Distance from NIT: 25 km, Open: 9am–6pm, Entry: Free",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD8hdqYH7Yjy3PdBMXEoPjXDjyumA9gVTCd8xHUUyPYW27aUUvkQ2Ik3T9jq3ADAkVeD0MiiAyl6Keu88Myk3aU9xe51m1RCm9EkmVw5f5xOyBSh5JJ4LltFKlNfbBpt0-PcKRvQuCRC0qF-WuAlgXzog2yuje1fMCsuDjBO4fwla-HV0vm5jVITFR84EokXdR_QkCVZpq9buM176CpvvTjh2vorjG5pvhRHJh2e6V1GJLEWZDMRpcgQoB_Rxj2bS3sT5dZQoaUk4U",
            },
            {
              name: "Ghodasuni Temple",
              desc: "A historic temple with unique architecture.",
              info: "Distance from NIT: 15 km, Open: 7am–7pm, Entry: Free",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA1-V4o0cNtF8vgReGxno_NEKxMjI2Ud7QH6WFwQ2FQWh11EswUYrNznkmvHw82KF7IyJZ9jycPA1bfGoxRqRtLgTKXLLYT7HDebvcxTwOZlPtLYQUfsCsdIIapurytub5BHvZs0oxpiDyDd1LU3hu_saqOhR8UInRKBYQKCnzjYszIIDwG5pEXu8OS3RR-CS3wcxfHD93QxcfE957Jca8Z9Sqtuy8PxG8Y8pADvW3xl4I36EvEKn170OosecEbjLs1fB8cfhJscl0",
            },
            {
              name: "Rourkela Steel Plant",
              desc: "One of the largest steel plants in India.",
              info: "Tours available on request.",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBNmBd0vOTn7XjNcMZCV6rIht6F_4XH0dzNrhitYG5JAAl81YH8Pb6qF3Nh3mqP1JX10S6SIVG2WDoIvup5GMG9wWki3GSTX0d6lTCFPZdmpyXneGgy5oCYfCNaM9OktEVqsXm-xxy4lFdzW4HFcU_UvTAH2dXsdF1tZOC83DhJPEUz7XUBwZsLGpcZFWE3f3rx8sfRJ5zZhYFz46auVFjaZuqA8qYslIwaYjaKaoNn2ucB02tP8zKxxx51wIFKmDEOiwule1ydiYw",
            },
          ].map((place) => (
            <div
              key={place.name}
              className="flex flex-col bg-white dark:bg-background-dark rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow"
            >
              <div
                className="w-full aspect-video bg-cover bg-center"
                style={{ backgroundImage: `url(${place.img})` }}
              />
              <div className="p-4">
                <p className="text-gray-900 text-lg font-semibold">
                  {place.name}
                </p>
                <p className="text-gray-700 text-sm mb-1">{place.desc}</p>
                <p className="text-gray-600 text-xs">{place.info}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Map */}
      <section className="px-4 sm:px-6 md:px-10 lg:px-20 py-10 flex justify-center">
        <iframe
          title="Rourkela Map"
          className="rounded-lg w-full max-w-[960px] h-80 sm:h-96"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118181.25892556555!2d84.82191599385559!3d22.25477817088921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a201e00665391eb%3A0x9f2913e8e64b7556!2sRourkela%2C%20Odisha!5e0!3m2!1sen!2sin!4v1689771147573!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

      {/* Travel Tips */}
      <section className="px-4 sm:px-6 md:px-10 lg:px-20 py-10">
        <div className="max-w-[960px] mx-auto">
          <h2 className="text-gray-900 text-2xl font-bold pb-5">Travel Tips</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              {
                title: "Transportation",
                content:
                  "Auto-rickshaws and cycle-rickshaws are common for short distances. Ola and Uber are available. For longer trips, consider hiring a taxi.",
              },
              {
                title: "Weather",
                content:
                  "The conference is in winter, expect pleasant days and cool nights. Light woolens or a jacket are recommended, especially for the evenings.",
              },
              {
                title: "Cuisine",
                content:
                  "Don't miss out on local Odiya cuisine — try 'Pakhala Bhata', 'Dalma', and sweets like 'Chhena Poda'. Rourkela also offers multi-cuisine restaurants.",
              },
              {
                title: "Safety",
                content:
                  "Rourkela is generally safe. Still, stay aware of your surroundings, especially at night, and keep valuables secure.",
              },
            ].map((tip) => (
              <div
                key={tip.title}
                className="bg-white dark:bg-background-dark/70 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-bold text-blue-900 mb-2">
                  {tip.title}
                </h3>
                <p className="text-gray-900 text-sm">{tip.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 md:px-10 lg:px-20 py-10 text-center">
        <h2 className="text-gray-900 text-2xl font-bold mb-4">
          Ready to Join Us?
        </h2>
        <p className="text-gray-700 mb-6">
          Register now for the Bioengineering Conference 2025 and be part of
          this exciting event.
        </p>
        <button
          onClick={redirectRegister}
          className="rounded-lg h-12 px-6 bg-blue-800 text-white font-bold hover:bg-blue-900 transition-colors"
        >
          Register for the Conference
        </button>
      </section>
    </div>
  );
};

export default PlacesRourkela;
