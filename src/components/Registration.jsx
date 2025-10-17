import React from "react";

const Registration = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="flex flex-1 justify-center">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            {/* Main content */}
            <main className="px-4 md:px-10 py-8">
              <div className="flex flex-wrap justify-between gap-3 p-4">
                <div className="flex min-w-72 flex-col gap-3">
                  <p className="text-[#0e131b]  text-4xl font-black leading-tight tracking-[-0.033em]">
                    Registration
                  </p>
                  <p className="text-primary dark:text-blue-900 text-base font-bold leading-normal">
                    LAST DATE OF REGISTRATION: 07 Dec, 2025
                  </p>
                </div>
              </div>

              {/* Registration cards */}
              <div class="px-4 py-3">
                <div class="overflow-x-auto rounded-lg border border-solid border-[#d0d9e7] dark:border-gray-700">
                  <table class="w-full text-left text-sm text-[#0e131b] dark:text-slate-300">
                    <thead class="bg-[#e7ecf3] dark:bg-slate-700 text-xs uppercase text-[#0e131b] dark:text-slate-50">
                      <tr>
                        <th class="px-6 py-3 font-bold" scope="col">
                          Participants
                        </th>
                        <th class="px-6 py-3 font-bold" scope="col">
                          Offline Fee
                        </th>
                        <th class="px-6 py-3 font-bold" scope="col">
                          Online Fee
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="border-b border-solid border-[#d0d9e7] dark:border-gray-700 bg-background-light dark:bg-background-dark">
                        <td class="whitespace-nowrap px-6 py-4 font-medium text-[#0e131b]">
                          Students
                        </td>
                        <td class="px-6 py-4 text-black">₹ 4000</td>
                        <td class="px-6 py-4 text-black">₹ 1500</td>
                      </tr>
                      <tr class="border-b border-solid border-[#d0d9e7] dark:border-gray-700 bg-background-light dark:bg-background-dark">
                        <td class="whitespace-nowrap px-6 py-4 font-medium text-[#0e131b]">
                          Faculty
                        </td>
                        <td class="px-6 py-4 text-black">₹ 6000</td>
                        <td class="px-6 py-4 text-black">₹ 3000</td>
                      </tr>
                      <tr class="bg-background-light dark:bg-background-dark">
                        <td class="whitespace-nowrap px-6 py-4 font-medium text-[#0e131b]">
                          Industry
                        </td>
                        <td class="px-6 py-4 text-black">₹ 8000</td>
                        <td class="px-6 py-4 text-black">₹ 4000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p class="text-[#0e131b] text-base font-normal leading-normal pb-3 pt-4">
                  Registration for student/ staff of NIT Rourkela is free.
                </p>
              </div>
              <div class="my-8 text-center px-4">
                <a
                  class="inline-flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-blue-800 text-slate-50 text-lg font-bold leading-normal tracking-[0.015em] transition-transform duration-200 hover:scale-105 hover:bg-blue-900"
                  href="https://forms.gle/hdDimrHsTPwYZbeH8"
                >
                  Register Now
                </a>
              </div>
              <div class="mt-8 px-4">
                <h2 class="text-[#0e131b] text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3 pt-5">
                  Registration Includes
                </h2>
                <div class="grid md:grid-cols-2 gap-8">
                  <div class="p-6 rounded-lg border border-solid border-primary/50 dark:border-primary/70 bg-primary/10 dark:bg-primary/20">
                    <h3 class="text-primary text-[#0e131b] text-lg font-bold mb-4">
                      Offline Participants
                    </h3>
                    <ul class="space-y-3 text-[#0e131b] dark:text-slate-300 text-sm">
                      <li class="flex items-start gap-2">
                        <span class="material-symbols-outlined text-base text-primary dark:text-teal-400 mt-0.5">
                          check_circle
                        </span>
                        <span className="text-black">
                          Food and accommodation for 3 days including 1 day
                          special dinner.
                        </span>
                      </li>
                      <li class="flex items-start gap-2">
                        <span class="material-symbols-outlined text-base text-primary dark:text-teal-400 mt-0.5">
                          check_circle
                        </span>
                        <span className="text-black">
                          Kit for the conference.
                        </span>
                      </li>
                      <li class="flex items-start gap-2">
                        <span class="material-symbols-outlined text-base text-primary dark:text-teal-400 mt-0.5">
                          check_circle
                        </span>
                        <span className="text-black">
                          Chance to participate in competitions like oral
                          presentation, poster presentations, business plan
                          competition and photography competition.
                        </span>
                      </li>
                      <li class="flex items-start gap-2">
                        <span class="material-symbols-outlined text-base text-primary dark:text-teal-400 mt-0.5">
                          check_circle
                        </span>
                        <span className="text-black">
                          Opportunity to Network and meet Industry and academic
                          leaders.
                        </span>
                      </li>
                      <li class="flex items-start gap-2">
                        <span class="material-symbols-outlined text-base text-primary dark:text-teal-400 mt-0.5">
                          check_circle
                        </span>
                        <span className="text-black">
                          Hard copy certificates.
                        </span>
                      </li>
                      <li class="flex items-start gap-2">
                        <span class="material-symbols-outlined text-base text-primary dark:text-teal-400 mt-0.5">
                          check_circle
                        </span>
                        <span className="text-black">
                          Abstract published in abstract book.
                        </span>
                      </li>
                      <li class="flex items-start gap-2">
                        <span class="material-symbols-outlined text-base text-primary dark:text-teal-400 mt-0.5">
                          check_circle
                        </span>
                        <span className="text-black">Attend live talks.</span>
                      </li>
                    </ul>
                  </div>
                  <div class="p-6 rounded-lg border border-solid border-[#d0d9e7] dark:border-gray-700 bg-background-light dark:bg-background-dark">
                    <h3 class="text-[#0e131b]text-lg font-bold mb-4">
                      Online Participants
                    </h3>
                    <ul class="space-y-3 text-[#0e131b] dark:text-slate-300 text-sm">
                      <li class="flex items-start gap-2">
                        <span class="material-symbols-outlined text-base text-primary dark:text-teal-400 mt-0.5">
                          check_circle
                        </span>
                        <span className="text-black">
                          Link to attend lecture.
                        </span>
                      </li>
                      <li class="flex items-start gap-2">
                        <span class="material-symbols-outlined text-base text-primary dark:text-teal-400 mt-0.5">
                          check_circle
                        </span>
                        <span className="text-black">E-certificate.</span>
                      </li>
                      <li class="flex items-start gap-2">
                        <span class="material-symbols-outlined text-base text-primary dark:text-teal-400 mt-0.5">
                          check_circle
                        </span>
                        <span className="text-black">
                          Abstract published in abstract book.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* QR Code & Bank Info */}
              <div className="mt-8 px-4">
                <h2 className="text-[#0e131b] dark:text-slate-50 text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3 pt-5">
                  Register Now
                </h2>
                <div className="grid md:grid-cols-2 gap-8 p-4 rounded-lg border border-solid border-[#d0d9e7] bg-background-light dark:bg-background-dark">
                  <div className="flex flex-col items-center justify-center text-center">
                    <img
                      className="rounded-lg"
                      alt="QR code for registration"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIwD5zrlfT5Kzs-83FujkpNvguyvdty8Mkas3xu_IwvKP7er1n5BxcDVhLqDZTmgdZaYTy16Omgl0gQIvUk0iMn1A90zILyUyl9NakXcdNDNzneKwX7w8oKEoUq3d8MKq8qyUPeiQ-zFdH9-8K1rL6wxbrbdwHvgq_XdZ8gAs-mhS90k8EbdcXYUokt7_eUdvv_ek2XtOHV9YzGjfKfNoXoHAaA5zIHM8ecgPFbQmwQiIR9sg-XKcTXtvmwl5KAGbLmKKJd04SMKw"
                    />
                    <p className="mt-4 text-lg font-semibold text-[#3E92CC] dark:text-teal-400">
                      Scan the QR Code to register and join us
                    </p>
                  </div>
                  <div>
                    <h3 className="text-[#0e131b]  text-lg font-bold mb-2">
                      Payment via Bank Transfer
                    </h3>
                    <div className="space-y-2 text-[#0e131b]text-sm">
                      <p>
                        <strong>Account Name:</strong> Conference, NIT Rourkela
                      </p>
                      <p>
                        <strong>Bank Name:</strong> State Bank of India (SBI)
                      </p>
                      <p>
                        <strong>Account Number:</strong> 36734418111
                      </p>
                      <p>
                        <strong>IFSC Code:</strong> SBIN0002109
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Important Information */}
              <div className="mt-8 px-4">
                <h2 className="text-[#0e131b]  text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3 pt-5">
                  Important Information
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="p-4 rounded-lg border border-solid border-[#d0d9e7] dark:border-gray-700 bg-background-light dark:bg-background-dark">
                    <h3 className="text-[#0e131b]  text-lg font-bold mb-2">
                      Important Dates &amp; Links
                    </h3>
                    <ul className="space-y-2 text-[#0e131b] text-sm">
                      <li>
                        <strong>Abstract submission:</strong>{" "}
                        <span className="text-red-700">15 Nov 2025</span>
                      </li>
                      <li>
                        <strong>Acceptance of abstract:</strong>{" "}
                        <span className="text-red-700">30 Nov 2025</span>
                      </li>
                      <li>
                        <strong>Registration Link:</strong>{" "}
                        <a
                          className="text-green-600 hover:underline"
                          href="https://docs.google.com/forms/d/e/1FAIpQLSdu5ZMFUL7gFsIKpZc6GgvL9ZDKT5pKTwZ7nKDPNaaJRA-Q4A/viewform"
                        >
                          Click here
                        </a>
                      </li>
                      <li>
                        <strong>Abstract submission link:</strong>{" "}
                        <a className="text-green-600 hover:underline" href="#">
                          Click here
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* <div className="p-4 rounded-lg border border-solid border-[#d0d9e7] dark:border-gray-700 bg-background-light dark:bg-background-dark">
                    <h3 className="text-[#0e131b]  text-lg font-bold mb-2">
                      Accommodation &amp; Competition
                    </h3>
                    <p className="text-[#0e131b]  text-sm mb-2">
                      Details regarding accommodation will be provided to
                      registered participants upon request. Limited rooms are
                      available on campus.
                    </p>
                    <p className="text-[#0e131b] text-sm">
                      Participate in our student competition! More details to
                      follow on the main conference page.
                    </p>
                  </div> */}
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
