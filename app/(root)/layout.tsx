import Image from "next/image";

import LeftSidebar from "@/components/LeftSidebar";
import MobileNav from "@/components/MobileNav";
import PodcastPlayer from "@/components/PodcastPlayer";
import RightSidebar from "@/components/RightSidebar";
import Searchbar from "@/components/Searchbar";
import { Toaster } from "@/components/ui/toaster";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main className="flex bg-black-3">
        <LeftSidebar />
        <section className="flex min-h-screen flex-1 flex-col   px-4 sm:px-14">
          <div className="mx-auto flex w-full max-w-5xl flex-col max-sm:px-4">
            <div className="flex h-16 items-center justify-between md:hidden">
              <Image
                src="/icons/logo.svg"
                width={30}
                height={30}
                alt="menu icon"
              />
              <div>
                <MobileNav />
              </div>
            </div>
            <div className="flex flex-col py-8 max-md:pb-14">
              <Toaster />
              <Searchbar />
              {children}
            </div>
          </div>
        </section>
        <RightSidebar />
        {/* */}
      </main>
      <PodcastPlayer />
    </>
  );
}