import React from "react";
import Link from "next/link";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

const StudioNavbar = (props: any) => {
  return (
    <div>
      <div className="flex items-center justify-between p-5 ">
        <Link href="/" className="text-[#F7AB0A] gap-2 flex items-center">
          <ArrowUturnLeftIcon className="h-6 w-6 text-[#F7AB0A]" />
          Go to the website
        </Link>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
};

export default StudioNavbar;
