import React from "react";
import Banner from "../../components/Banner";
import Header from "../../components/Header";
import "../../styles/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body className="max-w-7xl mx-auto">
        {/* Header */}
        <Header />
        {/* Banner */}
        <Banner />
        {children}
      </body>
    </html>
  );
}
