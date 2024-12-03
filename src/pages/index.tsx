import Photo from "@/components/home/photo";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";
import { PiHandshakeFill } from "react-icons/pi";

export default function Home() {
  const router = useRouter();
  const handleRedirect = () => {
    router.push("/about/about-page");
  };

  return (
    <section className="h-full bg-slate-950 -z-[99]">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl"></span>
            <h1 className="h1">
              Hello I&apos;m <br />
              <span className="text-accent">Faza</span>
            </h1>
            <p className="max-2-[500px] mb-9 text-lg text-white/80">
              For these past 3 weeks, I've been learning so many things about
              React with all the seniors here. I've learned about how to do CRUD
              with so many tweaks in React, discipline and frustration while
              doing typescript, and so many more!
            </p>

            {/* btn n socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                onClick={handleRedirect}
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Get to Know!</span>
                <PiHandshakeFill className="text-xl" />
              </Button>
            </div>
          </div>

          {/* photo */}
          <Photo />
        </div>
      </div>
      {/* Something */}
    </section>
  );
}
