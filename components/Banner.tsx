import React from "react";

const Banner = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-5 py-5 mb-10 lg:items-center">
      <div>
        <h1 className=" text-6xl">Đorđe's Daily Blog</h1>
        <h2 className=" mt-5 md:mt-0 lg:mt-2">
          Welcome to{" "}
          <span className=" underline decoration-4 decoration-[#F7AB0A]">Every Developers</span>{" "}
          favourite blog in the Devosphere
        </h2>
      </div>
      <p className="mt-2 md:mt-2 text-gray-400 max-w-sm">
        New product features | The latest in technology | The weekly debugging nightmares & more
      </p>
    </div>
  );
};

export default Banner;
