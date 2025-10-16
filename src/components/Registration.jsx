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
                  <p className="text-primary dark:text-primary/80 text-base font-bold leading-normal">
                    LAST DATE OF REGISTRATION: 30 Nov, 2025
                  </p>
                </div>
              </div>

              {/* Registration cards */}
              <div className="grid grid-cols-[repeat(auto-fit,minmax(228px,1fr))] gap-4 px-4 py-3">
                {/* Students */}
                <div
                  className="flex flex-1 flex-col gap-4 rounded-lg border border-solid border-[#d0d9e7] dark:border-gray-700 bg-background-light dark:bg-background-dark p-6  transition-transform duration-300 hover:scale-105"
                  onClick={() =>
                    window.open(
                      "https://docs.google.com/forms/d/e/1FAIpQLSdu5ZMFUL7gFsIKpZc6GgvL9ZDKT5pKTwZ7nKDPNaaJRA-Q4A/viewform",
                      "_blank"
                    )
                  }
                >
                  <div className="flex flex-col gap-1">
                    <h1 className="text-[#0e131b] text-base font-bold leading-tight">
                      Students
                    </h1>
                    <p className="flex items-baseline gap-1 text-[#0e131b] ">
                      <span className="text-4xl font-black leading-tight tracking-[-0.033em]">
                        ₹2000
                      </span>
                    </p>
                  </div>
                  <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#e7ecf3] dark:bg-slate-700 text-[#0e131b] dark:text-slate-50 text-sm font-bold leading-normal tracking-[0.015em] hover:bg-green-500 hover:text-black">
                    <span className="truncate">Register</span>
                  </button>
                  <div className="flex items-center gap-2 text-[13px] font-normal leading-normal text-[#0e131b]">
                    {/* <span className="material-symbols-outlined text-base">
                      check_circle
                    </span> */}
                  </div>
                </div>

                {/* Academicians */}
                <div className="flex flex-1 flex-col gap-4 rounded-lg border border-solid border-primary bg-primary/10 dark:bg-primary/20 p-6 transition-transform duration-300 hover:scale-105">
                  <div className="flex flex-col gap-1">
                    <h1 className="text-[#0e131b]  text-base font-bold leading-tight">
                      Academicians
                    </h1>
                    <p className="flex items-baseline gap-1 text-[#0e131b]">
                      <span className="text-4xl font-black leading-tight tracking-[-0.033em]">
                        ₹6000
                      </span>
                      <span className="text-base font-bold leading-tight"></span>
                    </p>
                  </div>
                  <button
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#e7ecf3] dark:bg-slate-700 text-[#0e131b] dark:text-slate-50 text-sm font-bold leading-normal tracking-[0.015em] hover:bg-green-500 hover:text-black"
                    onClick={() =>
                      window.open(
                        "https://docs.google.com/forms/d/e/1FAIpQLSdu5ZMFUL7gFsIKpZc6GgvL9ZDKT5pKTwZ7nKDPNaaJRA-Q4A/viewform",
                        "_blank"
                      )
                    }
                  >
                    <span className="truncate">Register</span>
                  </button>
                  <div className="flex items-center gap-2 text-[13px] font-normal leading-normal text-[#0e131b] ">
                    {/* <span className="material-symbols-outlined text-base">
                      check_circle
                    </span> */}
                  </div>
                </div>

                {/* Industry */}
                <div className="flex flex-1 flex-col gap-4 rounded-lg border border-solid border-[#d0d9e7] dark:border-gray-700 bg-background-light dark:bg-background-dark p-6 transition-transform duration-300 hover:scale-105">
                  <div className="flex flex-col gap-1">
                    <h1 className="text-[#0e131b] text-base font-bold leading-tight">
                      Industry
                    </h1>
                    <p className="flex items-baseline gap-1 text-[#0e131b] ">
                      <span className="text-4xl font-black leading-tight tracking-[-0.033em]">
                        ₹8000
                      </span>
                      <span className="text-base font-bold leading-tight"></span>
                    </p>
                  </div>
                  <button
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#e7ecf3] dark:bg-slate-700 text-[#0e131b] dark:text-slate-50 text-sm font-bold leading-normal tracking-[0.015em] hover:bg-green-500 hover:text-black"
                    onClick={() =>
                      window.open(
                        "https://docs.google.com/forms/d/e/1FAIpQLSdu5ZMFUL7gFsIKpZc6GgvL9ZDKT5pKTwZ7nKDPNaaJRA-Q4A/viewform",
                        "_blank"
                      )
                    }
                  >
                    <span className="truncate">Register</span>
                  </button>
                  <div className="flex items-center gap-2 text-[13px] font-normal leading-normal text-[#0e131b]">
                    {/* <span className="material-symbols-outlined text-base">
                      check_circle
                    </span> */}
                  </div>
                </div>
              </div>
              <p className="text-[#0e131b] text-base leading-normal pb-3 pt-1 px-4 font-bold mt-1 -mb-10">
                Registration for student/ staff of NIT Rourkela is free.
              </p>

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
                        <strong>Abstract submission:</strong> 01 Nov 2025
                      </li>
                      <li>
                        <strong>Acceptance of abstract:</strong> To be announced
                      </li>
                      <li>
                        <strong>Registration Link:</strong>{" "}
                        <a className="text-primary hover:underline" href="#">
                          Click here
                        </a>
                      </li>
                      <li>
                        <strong>Abstract submission link:</strong>{" "}
                        <a className="text-primary hover:underline" href="#">
                          Click here
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="p-4 rounded-lg border border-solid border-[#d0d9e7] dark:border-gray-700 bg-background-light dark:bg-background-dark">
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
                  </div>
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
