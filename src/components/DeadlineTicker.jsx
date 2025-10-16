import React from "react";

const DeadlineTicker = () => {
  return (
    <div className="relative w-full overflow-hidden bg-primary py-3">
      <div className="whitespace-nowrap flex animate-scroll text-red-600">
        <span className="mx-8 text-lg font-semibold">
          Submission Deadline – 15th Nov
        </span>
        <span className="mx-8 text-lg font-semibold">
          Registration Deadline – 7th Dec
        </span>
        <span className="mx-8 text-lg font-semibold">
          Submission Deadline – 15th Nov
        </span>
        <span className="mx-8 text-lg font-semibold">
          Registration Deadline – 7th Dec
        </span>
        <span className="mx-8 text-lg font-semibold">
          Submission Deadline – 15th Nov
        </span>
        <span className="mx-8 text-lg font-semibold">
          Registration Deadline – 7th Dec
        </span>
        <span className="mx-8 text-lg font-semibold">
          Submission Deadline – 15th Nov
        </span>
        <span className="mx-8 text-lg font-semibold">
          Registration Deadline – 7th Dec
        </span>
        <span className="mx-8 text-lg font-semibold">
          Submission Deadline – 15th Nov
        </span>
        <span className="mx-8 text-lg font-semibold">
          Registration Deadline – 7th Dec
        </span>
        <span className="mx-8 text-lg font-semibold">
          Submission Deadline – 15th Nov
        </span>
        <span className="mx-8 text-lg font-semibold">
          Registration Deadline – 7th Dec
        </span>
        {/* repeated to make animation continuous */}
      </div>
    </div>
  );
};

export default DeadlineTicker;
