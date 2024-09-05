import React from "react";

const Mission = () => {
  return (
    <div className="flex mx-20 my-16">
      <div className="mx-3 my-4 py-3 px-6 w-2/6 rounded-md shadow-lg bg-green-50 shadow-green-400">
        <h2 className="text-center text-gray-800 tracking-wider font-semibold text-2xl underline px-9 py-5">
          Our Mission
        </h2>
        <p className="text-center text-gray-500 tracking-wide text-md">
          Harvest Connect is a community-driven platform that connects farmers,
          consumers, and businesses to exchange fresh, locally sourced produced
          resources.
        </p>
        <button className="m-6 px-3 py-1 rounded-md border border-green-800 hover:border-2 hover:border-green-500">
          Our Services
        </button>
      </div>

      <div className="mx-3 my-4 py-3 px-6 w-2/6 rounded-md shadow-lg bg-green-50 shadow-green-400">
        <a href="#">
          <h5 className="mb-2 text-2xl font-semibold text-gray-900 dark:text-white">
            Need a help ?
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
          Go to this step by step guideline process on how to certify for your
          weekly benefits:
        </p>
        <a
          href="#"
          className="mt-5 inline-flex font-medium items-center text-blue-600 hover:underline"
        >
          See our guideline
          <svg
            className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 18"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
            />
          </svg>
        </a>
      </div>
      <div className="mx-3 my-4 py-3 px-6 w-2/6 rounded-md shadow-lg bg-green-50 shadow-green-400">
        <a href="#">
          <h5 className="mb-2 text-2xl font-semibold text-gray-900 dark:text-white">
            Need a help in Registering?
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-500 dark:text-gray-100">
          Go to this step by step guideline process on how to certify for your
          weekly benefits:
        </p>
      </div>
    </div>
  );
};

export default Mission;
