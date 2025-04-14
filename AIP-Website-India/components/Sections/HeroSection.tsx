import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import AnimatedHero from "@/components/animated-hero";

export default function Navbar() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Empowering AI & ML Solutions
            </h1>
            <p className="text-lg text-gray-300 max-w-lg">
              Bringing cutting-edge machine learning models to organizations in
              need.
            </p>
            <Button className="bg-[#6A1E55] hover:bg-[#A64D79] transition-all duration-300 text-white px-8 py-6 text-lg shadow-lg hover:shadow-[#A64D79]/20 hover:shadow-xl group">
              Explore Solutions
              <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          <div className="relative h-[300px] md:h-[400px]">
            <AnimatedHero />
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1D] to-transparent z-0"></div>
    </section>
  );
}
