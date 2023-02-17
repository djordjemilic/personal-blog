import React from "react";
import Banner from "../../components/Banner";
import Header from "../../components/Header";
import "../../styles/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body className="lg:max-w-screen-xl lg:m-auto">
        {/* Header */}
        <Header />
        {/* Banner */}
        <Banner />
        {children}
      </body>
    </html>
  );
}
