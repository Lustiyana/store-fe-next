/** @format */

import Header from "@/components/organisme/Header";
import Sidebar from "@/components/organisme/Sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex">
          <Sidebar />
          <div className="py-12 px-8 flex flex-col gap-12 bg-[#F7F9F2] w-3/4">
            <Header />
            <main>{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
