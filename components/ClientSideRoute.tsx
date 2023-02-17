"use client";
import Link from "next/link";
import React from "react";

const ClientSideRoute = ({ children, route }: { children: React.ReactNode; route: string }) => {
  return (
    <Link href={route}>
      <div>{children}</div>
    </Link>
  );
};

export default ClientSideRoute;
